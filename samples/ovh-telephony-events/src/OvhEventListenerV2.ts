import { EventEmitter } from "events";
import { IOvhEventListener, IEvToken, IVoipEvent } from "./model";
import { IHandyRedis } from "handy-redis";
import fetch from "node-fetch";

const headers = { 'Content-Type': 'application/json', 'Accept': 'text/plain' };

interface IEvTokenGroup {
    groups: IEvToken[];
    session: string;
}

/**
 * For API V2
 */
interface EventSession {
    id: string; // "BkfFH11M1cf7",
    creation: string, // "2019-06-07T11:40:16.036197406+02:00",
    lastUpdate: string, //"2019-06-07T11:40:16.03650895+02:00",
    lastConnection: string, //"2019-06-07T11:40:16.036199867+02:00"
}

export class OvhEventListenerV2 extends EventEmitter implements IOvhEventListener {
    private _redis: IHandyRedis | null;
    private tokens: IEvToken[];
    private channel: string;
    constructor(tokens: IEvToken[]) {
        super();
        this._redis = null
        this.tokens = tokens;
        this.channel = '';
    }

    public redis(redis: IHandyRedis, channel: string): OvhEventListenerV2 {
        this._redis = redis;
        this.channel = channel;
        return this;
    }

    public async listen() {
        return new Promise(async (resolve) => {
            let groups2: IEvTokenGroup[] = [];
            groups2.push({ groups: [], session: '' });
            for (let i = 0; i < this.tokens.length; i++) {
                let last = groups2[groups2.length - 1];
                if (last.groups.length >= 5) {
                    last = { groups: [], session: '' };
                    groups2.push(last);
                }
                last.groups.push(this.tokens[i]);
            }
            console.log(`${this.tokens.length} billingGroups grouped as ${groups2.length} groups`)
            for (const group of groups2) {
                const method = 'POST';
                const response = await fetch('https://events.voip.ovh.net/v2/session', { method, headers })
                const session: EventSession = await response.json();
                group.session = session.id;
                for (const g2 of group.groups) {
                    const url = `https://events.voip.ovh.net/v2/session/${group.session}/subscribe/${g2.token}`;
                    const response = await fetch(url, { method, headers })
                    let resp = await response.text();
                    if (resp !== `Successfully subscribed on token ${g2.token}`) {
                        console.error('unexpected response from events.voip.ovh.net/v2/session:' + resp);
                    }
                }
            }
            console.log(`Registred Ok on event Api V2`)
            resolve();
            const listen = groups2.map(async (group: IEvTokenGroup) => {
                const url = `https://events.voip.ovh.net/v2/session/${group.session}/events/poll`;
                while (true) {
                    try {
                        const response = await fetch(url, { method: 'GET', headers })
                        const events: IVoipEvent[] = await response.json();
                        if (events && events.length) {
                            if (this.listenerCount("message") > 0) {
                                for (const m of events) {
                                    delete m['token']; // hide token
                                    this.emit("message", m);
                                }
                            }
                            if (this._redis) {
                                // console.log(`${(new Date()).toISOString()} Send ${events.length} event to ${this.channel}`);
                                for (const m of events) {
                                    delete m['token']; // hide token
                                    await this._redis.publish(this.channel, JSON.stringify(m));
                                }
                            }
                        }
                    } catch { }
                }
            })
            await Promise.all(listen); // useless for now
        }) 
    }
}
