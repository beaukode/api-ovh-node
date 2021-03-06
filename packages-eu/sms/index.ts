import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /sms Models
 * Source: https://eu.api.ovh.com/1.0/sms.json
 */
export namespace reference {
    // type fullname: reference.CountryEnum
    export type CountryEnum = "all" | "ca" | "cz" | "de" | "en" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "ma" | "nl" | "pl" | "pp" | "pt" | "qc" | "ru" | "sk" | "sn" | "tn" | "we"
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
export namespace sms {
    // interface fullName: sms.Account.Account
    export interface Account {
        automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum;
        callBack?: string;
        creditThresholdForAutomaticRecredit: number;
        creditsHoldByQuota: number;
        creditsLeft: number;
        description: string;
        name: string;
        smsResponse: sms.Response;
        status: sms.StatusAccountEnum;
        stopCallBack?: string;
        templates: sms.Templates;
        userQuantityWithQuota: number;
    }
    // interface fullName: sms.AlertThreshold.AlertThreshold
    export interface AlertThreshold {
        alertEmail: string;
        alertNumber: string;
        alertThreshold: number;
        support: sms.SupportEnum;
    }
    // interface fullName: sms.Blacklist.Blacklist
    export interface Blacklist {
        dateCreation: string;
        number: string;
    }
    // type fullname: sms.CharsetEnum
    export type CharsetEnum = "UTF-8"
    // interface fullName: sms.ChatAccess.ChatAccess
    export interface ChatAccess {
        creationDate: string;
        id: number;
        url: string;
    }
    // type fullname: sms.ClassEnum
    export type ClassEnum = "flash" | "phoneDisplay" | "sim" | "toolkit"
    // type fullname: sms.CodingEnum
    export type CodingEnum = "7bit" | "8bit"
    // type fullname: sms.CountryEnum
    export type CountryEnum = "ag" | "ai" | "all" | "an" | "ar" | "at" | "au" | "aw" | "ba" | "bb" | "be" | "bg" | "bh" | "bm" | "bo" | "br" | "bz" | "ch" | "cl" | "cn" | "co" | "cr" | "cu" | "cy" | "cz" | "de" | "dk" | "dm" | "dz" | "ec" | "ee" | "eg" | "es" | "fi" | "fr" | "gb" | "gd" | "gp" | "gr" | "gy" | "hk" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "in" | "is" | "it" | "jm" | "jo" | "jp" | "kr" | "kw" | "ky" | "lb" | "lc" | "lt" | "lu" | "lv" | "ma" | "me" | "mq" | "ms" | "mt" | "my" | "nc" | "ng" | "nl" | "no" | "nz" | "pa" | "pe" | "pf" | "ph" | "pk" | "pl" | "pt" | "py" | "re" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "sr" | "tc" | "th" | "tn" | "tr" | "tt" | "tw" | "ua" | "uy" | "vc" | "ve" | "vg" | "vn" | "za"
    // type fullname: sms.DocumentWayTypeEnum
    export type DocumentWayTypeEnum = "incoming" | "outgoing"
    // type fullname: sms.EncodingEnum
    export type EncodingEnum = "7bits" | "unicode"
    // interface fullName: sms.Exception.Exception
    export interface Exception {
        countrySuffixe: string;
        messages: string[];
        operators: string;
        restrictionCode: sms.RestrictionCodeEnum;
        substitution?: string;
    }
    // interface fullName: sms.Hlr.Hlr
    export interface Hlr {
        country: string;
        countryCode: string;
        network: string;
        operator: string;
        region: string;
    }
    // interface fullName: sms.HlrLookupNumber.HlrLookupNumber
    export interface HlrLookupNumber {
        datetime: string;
        id: number;
        msisdn: string;
        operatorCode: string;
        ported: boolean;
        reachable: boolean;
        roaming: boolean;
        status: sms.HlrStatuses;
        valid: boolean;
    }
    // type fullname: sms.HlrStatuses
    export type HlrStatuses = "doing" | "done" | "error" | "todo"
    // interface fullName: sms.Incoming.Incoming
    export interface Incoming {
        creationDatetime: string;
        credits: number;
        id: number;
        message: string;
        sender: string;
        tag: string;
    }
    // interface fullName: sms.Job.Job
    export interface Job {
        creationDatetime: string;
        credits: number;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
        sender: string;
    }
    // interface fullName: sms.JobEstimate.JobEstimate
    export interface JobEstimate {
        characters: number;
        charactersClass: sms.EncodingEnum;
        maxCharactersPerPart: number;
        parts: number;
    }
    // interface fullName: sms.Outgoing.Outgoing
    export interface Outgoing {
        creationDatetime: string;
        credits: number;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
        sender: string;
        tag: string;
        tariffCode: string;
    }
    // interface fullName: sms.PackOffer.PackOffer
    export interface PackOffer {
        countryDestination: string;
        giftPrice?: number;
        giftQuantity?: number;
        language: string;
        price: number;
        quantity: number;
        smsQuantity: number;
        totalPrice?: number;
    }
    // type fullname: sms.PackQuantityAutomaticRecreditEnum
    export type PackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000
    // type fullname: sms.PackQuantityEnum
    export type PackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000
    // interface fullName: sms.Phonebook.Phonebook
    export interface Phonebook {
        bookKey: string;
        name: string;
        phoneKey: string;
    }
    // interface fullName: sms.PhonebookContact.PhonebookContact
    export interface PhonebookContact {
        group: string;
        homeMobile?: string;
        homePhone?: string;
        id: number;
        name: string;
        surname: string;
        workMobile?: string;
        workPhone?: string;
    }
    // type fullname: sms.PriorityEnum
    export type PriorityEnum = "high" | "low" | "medium" | "veryLow"
    // interface fullName: sms.PttDetails.PttDetails
    export interface PttDetails {
        comment: string;
        description: string;
        duration: sms.PttDurationTypeEnum;
    }
    // type fullname: sms.PttDurationTypeEnum
    export type PttDurationTypeEnum = "indeterminated" | "permanent" | "temporary"
    // interface fullName: sms.Quota.Quota
    export interface Quota {
        quotaLeft: number;
        quotaStatus: sms.QuotaStatusUserEnum;
    }
    // type fullname: sms.QuotaStatusUserEnum
    export type QuotaStatusUserEnum = "active" | "inactive"
    // interface fullName: sms.Receiver.Receiver
    export interface Receiver {
        autoUpdate: boolean;
        canAutoUpdate: boolean;
        datetime: string;
        description: string;
        records: number;
        slotId: number;
    }
    // interface fullName: sms.ReceiversAsynchronousCleanReport.ReceiversAsynchronousCleanReport
    export interface ReceiversAsynchronousCleanReport {
        taskId: number;
        totalCreditsRemoved: number;
    }
    // type fullname: sms.RefererSenderEnum
    export type RefererSenderEnum = "custom" | "domain" | "line" | "nic" | "owner" | "virtual"
    // interface fullName: sms.Response.Response
    export interface Response {
        cgiUrl?: string;
        responseType: sms.ResponseTypeEnum;
        text?: string;
        trackingDefaultSmsSender?: string;
        trackingOptions?: sms.ResponseTrackingOptions[];
    }
    // type fullname: sms.ResponseTrackingMediaEnum
    export type ResponseTrackingMediaEnum = "email" | "sms" | "voice"
    // interface fullName: sms.ResponseTrackingOptions.ResponseTrackingOptions
    export interface ResponseTrackingOptions {
        media: sms.ResponseTrackingMediaEnum;
        sender: string;
        target: string;
    }
    // type fullname: sms.ResponseTypeEnum
    export type ResponseTypeEnum = "cgi" | "none" | "text"
    // type fullname: sms.RestrictionCodeEnum
    export type RestrictionCodeEnum = "ALPHA" | "BAD_DLR" | "BLOCKED" | "CODING" | "DLR" | "FLASHONLY" | "MSISDN"
    // interface fullName: sms.Sender.Sender
    export interface Sender {
        comment?: string;
        description: string;
        referer: sms.RefererSenderEnum;
        sender: string;
        status: sms.StatusSenderEnum;
        type?: sms.TypeSenderEnum;
        validationMedia?: string;
    }
    // interface fullName: sms.SenderAvailable.SenderAvailable
    export interface SenderAvailable {
        referer: sms.SenderRefererEnum;
        sender: string;
    }
    // type fullname: sms.SenderRefererEnum
    export type SenderRefererEnum = "domain" | "nichandle"
    // interface fullName: sms.SmsSendingReport.SmsSendingReport
    export interface SmsSendingReport {
        ids: number[];
        invalidReceivers: string[];
        totalCreditsRemoved: number;
        validReceivers: string[];
    }
    // type fullname: sms.StatusAccountEnum
    export type StatusAccountEnum = "disable" | "enable"
    // type fullname: sms.StatusSenderEnum
    export type StatusSenderEnum = "disable" | "enable" | "refused" | "waitingValidation"
    // type fullname: sms.SupportEnum
    export type SupportEnum = "both" | "mail" | "sms"
    // interface fullName: sms.Task.Task
    export interface Task {
        function: sms.TodoGeneralPublicFunctionsEnum;
        status: telephony.TaskStatusEnum;
        step: sms.TodoGeneralPublicStepsEnum;
        taskId: number;
    }
    // interface fullName: sms.TemplateControl.TemplateControl
    export interface TemplateControl {
        activity: sms.TypeTemplateEnum;
        comment: string;
        datetime: string;
        description: string;
        message: string;
        name: string;
        status: sms.StatusSenderEnum;
    }
    // interface fullName: sms.Templates.Templates
    export interface Templates {
        customizedEmailMode: boolean;
        customizedSmsMode: boolean;
        emailBody?: string;
        emailFrom?: string;
        emailSubject?: string;
        smsBody?: string;
    }
    // type fullname: sms.TodoGeneralPublicFunctionsEnum
    export type TodoGeneralPublicFunctionsEnum = "cleanSmsReceivers"
    // type fullname: sms.TodoGeneralPublicStepsEnum
    export type TodoGeneralPublicStepsEnum = "checkOrder" | "createHlrs" | "finishing" | "sendMailReport" | "starting" | "waitForHlrs"
    // type fullname: sms.TypeSenderEnum
    export type TypeSenderEnum = "alpha" | "numeric" | "shortcode" | "virtual"
    // type fullname: sms.TypeTemplateEnum
    export type TypeTemplateEnum = "alerting" | "authentification" | "transactional"
    // interface fullName: sms.User.User
    export interface User {
        alertThresholdInformations: sms.AlertThreshold;
        callBack?: string;
        ipRestrictions: string[];
        login: string;
        password: string;
        quotaInformations: sms.Quota;
        stopCallBack?: string;
    }
    // interface fullName: sms.VirtualNumber.VirtualNumber
    export interface VirtualNumber {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    // interface fullName: sms.VirtualNumberGenericService.VirtualNumberGenericService
    export interface VirtualNumberGenericService {
        countryCode: sms.VirtualNumberIsoCountryCodeEnum;
        number: string;
    }
    // type fullname: sms.VirtualNumberIsoCountryCodeEnum
    export type VirtualNumberIsoCountryCodeEnum = "be" | "ch" | "de" | "es" | "fr" | "uk"
    // interface fullName: sms.VirtualNumberJob.VirtualNumberJob
    export interface VirtualNumberJob {
        creationDatetime: string;
        credits: number;
        deliveryReceipt: number;
        differedDelivery: number;
        id: number;
        message: string;
        messageLength: number;
        numberOfSms: number;
        ptt: number;
        receiver: string;
    }
}
export namespace telephony {
    // type fullname: telephony.ContactsExportFormatsEnum
    export type ContactsExportFormatsEnum = "csv"
    // interface fullName: telephony.PcsFile.PcsFile
    export interface PcsFile {
        filename: string;
        status: telephony.PcsFileStatusEnum;
        url: string;
        urlExpirationDatetime: string;
    }
    // type fullname: telephony.PcsFileStatusEnum
    export type PcsFileStatusEnum = "doing" | "done" | "error" | "todo"
    // interface fullName: telephony.Task.Task
    export interface Task {
        action: string;
        message?: string;
        objectCreated?: string;
        serviceType: string;
        status: telephony.TaskStatusEnum;
        taskId: number;
    }
    // type fullname: telephony.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "pause" | "todo"
}

/**
 * END API /sms Models
 */
export function proxySms(ovhEngine: OvhRequestable): Sms {
    return buildOvhProxy(ovhEngine, '/sms');
}
export default proxySms;
/**
 * Api Proxy model
 */// Apis harmony
// path /sms
export interface Sms{
    // GET /sms
    $get(): Promise<string[]>;
    estimate: {
        // POST /sms/estimate
        $post(params: {message: string, noStopClause: boolean, senderType: sms.TypeSenderEnum}): Promise<sms.JobEstimate>;
    }
    ptts: {
        // GET /sms/ptts
        $get(params: {ptt: number}): Promise<sms.PttDetails>;
    }
    virtualNumbers: {
        // GET /sms/virtualNumbers
        $get(): Promise<string[]>;
        $(number: string): {
            // GET /sms/virtualNumbers/{number}
            $get(): Promise<sms.VirtualNumberGenericService>;
            serviceInfos: {
                // GET /sms/virtualNumbers/{number}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /sms/virtualNumbers/{number}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
    $(serviceName: string): {
        // GET /sms/{serviceName}
        $get(): Promise<sms.Account>;
        // PUT /sms/{serviceName}
        $put(params?: {automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum, callBack?: string, creditThresholdForAutomaticRecredit?: number, creditsHoldByQuota?: number, creditsLeft?: number, description?: string, name?: string, smsResponse?: sms.Response, status?: sms.StatusAccountEnum, stopCallBack?: string, templates?: sms.Templates, userQuantityWithQuota?: number}): Promise<void>;
        blacklists: {
            // GET /sms/{serviceName}/blacklists
            $get(): Promise<string[]>;
            $(number: string): {
                // DELETE /sms/{serviceName}/blacklists/{number}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/blacklists/{number}
                $get(): Promise<sms.Blacklist>;
            };
        }
        document: {
            // GET /sms/{serviceName}/document
            $get(params: {creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}): Promise<string>;
        }
        exceptions: {
            // GET /sms/{serviceName}/exceptions
            $get(params: {receiver: string}): Promise<sms.Exception[]>;
        }
        hlr: {
            // GET /sms/{serviceName}/hlr
            $get(): Promise<number[]>;
            // POST /sms/{serviceName}/hlr
            $post(params?: {receivers?: string[], receiversDocumentUrl?: string}): Promise<sms.SmsSendingReport>;
            $(id: number): {
                // GET /sms/{serviceName}/hlr/{id}
                $get(): Promise<sms.HlrLookupNumber>;
                operator: {
                    // GET /sms/{serviceName}/hlr/{id}/operator
                    $get(): Promise<sms.Hlr>;
                }
            };
        }
        incoming: {
            // GET /sms/{serviceName}/incoming
            $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
            $(id: number): {
                // DELETE /sms/{serviceName}/incoming/{id}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/incoming/{id}
                $get(): Promise<sms.Incoming>;
            };
        }
        jobs: {
            // GET /sms/{serviceName}/jobs
            $get(): Promise<number[]>;
            // POST /sms/{serviceName}/jobs
            $post(params: {charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
            $(id: number): {
                // DELETE /sms/{serviceName}/jobs/{id}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/jobs/{id}
                $get(): Promise<sms.Job>;
            };
        }
        outgoing: {
            // GET /sms/{serviceName}/outgoing
            $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
            $(id: number): {
                // DELETE /sms/{serviceName}/outgoing/{id}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/outgoing/{id}
                $get(): Promise<sms.Outgoing>;
                hlr: {
                    // GET /sms/{serviceName}/outgoing/{id}/hlr
                    $get(): Promise<sms.Hlr>;
                }
            };
        }
        phonebooks: {
            // GET /sms/{serviceName}/phonebooks
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/phonebooks
            $post(params: {name: string}): Promise<string>;
            $(bookKey: string): {
                // DELETE /sms/{serviceName}/phonebooks/{bookKey}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/phonebooks/{bookKey}
                $get(): Promise<sms.Phonebook>;
                // PUT /sms/{serviceName}/phonebooks/{bookKey}
                $put(params?: {bookKey?: string, name?: string, phoneKey?: string}): Promise<void>;
                export: {
                    // GET /sms/{serviceName}/phonebooks/{bookKey}/export
                    $get(params: {format: telephony.ContactsExportFormatsEnum}): Promise<telephony.PcsFile>;
                }
                import: {
                    // POST /sms/{serviceName}/phonebooks/{bookKey}/import
                    $post(params: {documentId: string}): Promise<telephony.Task>;
                }
                phonebookContact: {
                    // GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
                    $post(params: {group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}): Promise<number>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        $get(): Promise<sms.PhonebookContact>;
                        // PUT /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
                        $put(params?: {group?: string, homeMobile?: string, homePhone?: string, id?: number, name?: string, surname?: string, workMobile?: string, workPhone?: string}): Promise<void>;
                    };
                }
            };
        }
        receivers: {
            // GET /sms/{serviceName}/receivers
            $get(): Promise<number[]>;
            // POST /sms/{serviceName}/receivers
            $post(params: {autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
            $(slotId: number): {
                // DELETE /sms/{serviceName}/receivers/{slotId}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/receivers/{slotId}
                $get(): Promise<sms.Receiver>;
                // PUT /sms/{serviceName}/receivers/{slotId}
                $put(params?: {autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number, slotId?: number}): Promise<void>;
                clean: {
                    // POST /sms/{serviceName}/receivers/{slotId}/clean
                    $post(params: {freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
                }
                csv: {
                    // GET /sms/{serviceName}/receivers/{slotId}/csv
                    $get(): Promise<string>;
                }
            };
        }
        seeOffers: {
            // GET /sms/{serviceName}/seeOffers
            $get(params: {countryCurrencyPrice: reference.CountryEnum, countryDestination: sms.CountryEnum, quantity: sms.PackQuantityEnum}): Promise<sms.PackOffer[]>;
        }
        senders: {
            // GET /sms/{serviceName}/senders
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/senders
            $post(params: {description?: string, reason?: string, sender: string}): Promise<string>;
            $(sender: string): {
                // DELETE /sms/{serviceName}/senders/{sender}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/senders/{sender}
                $get(): Promise<sms.Sender>;
                // PUT /sms/{serviceName}/senders/{sender}
                $put(params?: {comment?: string, description?: string, referer?: sms.RefererSenderEnum, sender?: string, status?: sms.StatusSenderEnum, type?: sms.TypeSenderEnum, validationMedia?: string}): Promise<void>;
                validate: {
                    // POST /sms/{serviceName}/senders/{sender}/validate
                    $post(params: {code: string}): Promise<void>;
                }
            };
        }
        sendersAvailableForValidation: {
            // GET /sms/{serviceName}/sendersAvailableForValidation
            $get(params?: {referer?: sms.SenderRefererEnum}): Promise<sms.SenderAvailable[]>;
        }
        serviceInfos: {
            // GET /sms/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /sms/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /sms/{serviceName}/task
            $get(params?: {status?: telephony.TaskStatusEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /sms/{serviceName}/task/{taskId}
                $get(): Promise<sms.Task>;
            };
        }
        templatesControl: {
            // GET /sms/{serviceName}/templatesControl
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/templatesControl
            $post(params: {activity: sms.TypeTemplateEnum, description?: string, message: string, name: string, reason?: string}): Promise<void>;
            $(name: string): {
                // DELETE /sms/{serviceName}/templatesControl/{name}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/templatesControl/{name}
                $get(): Promise<sms.TemplateControl>;
                // PUT /sms/{serviceName}/templatesControl/{name}
                $put(params?: {activity?: sms.TypeTemplateEnum, comment?: string, datetime?: string, description?: string, message?: string, name?: string, status?: sms.StatusSenderEnum}): Promise<void>;
                relaunchValidation: {
                    // POST /sms/{serviceName}/templatesControl/{name}/relaunchValidation
                    $post(params: {description: string, message: string}): Promise<void>;
                }
            };
        }
        transferCredits: {
            // POST /sms/{serviceName}/transferCredits
            $post(params: {credits: number, smsAccountTarget: string}): Promise<void>;
        }
        users: {
            // GET /sms/{serviceName}/users
            $get(): Promise<string[]>;
            // POST /sms/{serviceName}/users
            $post(params: {login: string, password: string}): Promise<void>;
            $(login: string): {
                // DELETE /sms/{serviceName}/users/{login}
                $delete(): Promise<void>;
                // GET /sms/{serviceName}/users/{login}
                $get(): Promise<sms.User>;
                // PUT /sms/{serviceName}/users/{login}
                $put(params?: {alertThresholdInformations?: sms.AlertThreshold, callBack?: string, ipRestrictions?: string[], login?: string, password?: string, quotaInformations?: sms.Quota, stopCallBack?: string}): Promise<void>;
                document: {
                    // GET /sms/{serviceName}/users/{login}/document
                    $get(params: {creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}): Promise<string>;
                }
                incoming: {
                    // GET /sms/{serviceName}/users/{login}/incoming
                    $get(params?: {sender?: string, tag?: string}): Promise<number[]>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/users/{login}/incoming/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/incoming/{id}
                        $get(): Promise<sms.Incoming>;
                    };
                }
                jobs: {
                    // GET /sms/{serviceName}/users/{login}/jobs
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/users/{login}/jobs
                    $post(params: {charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/users/{login}/jobs/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/jobs/{id}
                        $get(): Promise<sms.Job>;
                    };
                }
                outgoing: {
                    // GET /sms/{serviceName}/users/{login}/outgoing
                    $get(params?: {deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/users/{login}/outgoing/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/outgoing/{id}
                        $get(): Promise<sms.Outgoing>;
                        hlr: {
                            // GET /sms/{serviceName}/users/{login}/outgoing/{id}/hlr
                            $get(): Promise<sms.Hlr>;
                        }
                    };
                }
                receivers: {
                    // GET /sms/{serviceName}/users/{login}/receivers
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/users/{login}/receivers
                    $post(params: {autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}): Promise<sms.Receiver>;
                    $(slotId: number): {
                        // DELETE /sms/{serviceName}/users/{login}/receivers/{slotId}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/users/{login}/receivers/{slotId}
                        $get(): Promise<sms.Receiver>;
                        // PUT /sms/{serviceName}/users/{login}/receivers/{slotId}
                        $put(params?: {autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number, slotId?: number}): Promise<void>;
                        clean: {
                            // POST /sms/{serviceName}/users/{login}/receivers/{slotId}/clean
                            $post(params: {freemium: boolean, priceOnly: boolean}): Promise<sms.ReceiversAsynchronousCleanReport>;
                        }
                        csv: {
                            // GET /sms/{serviceName}/users/{login}/receivers/{slotId}/csv
                            $get(): Promise<string>;
                        }
                    };
                }
            };
        }
        virtualNumbers: {
            // GET /sms/{serviceName}/virtualNumbers
            $get(): Promise<string[]>;
            $(number: string): {
                // GET /sms/{serviceName}/virtualNumbers/{number}
                $get(): Promise<sms.VirtualNumber>;
                chatAccess: {
                    // DELETE /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    $delete(): Promise<void>;
                    // GET /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    $get(): Promise<sms.ChatAccess>;
                    // POST /sms/{serviceName}/virtualNumbers/{number}/chatAccess
                    $post(): Promise<sms.ChatAccess>;
                }
                incoming: {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/incoming
                    $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}): Promise<number[]>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}
                        $get(): Promise<sms.Incoming>;
                    };
                }
                jobs: {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/jobs
                    $get(): Promise<number[]>;
                    // POST /sms/{serviceName}/virtualNumbers/{number}/jobs
                    $post(params: {charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number}): Promise<sms.SmsSendingReport>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}
                        $get(): Promise<sms.VirtualNumberJob>;
                    };
                }
                outgoing: {
                    // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing
                    $get(params?: {creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}): Promise<number[]>;
                    $(id: number): {
                        // DELETE /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                        $delete(): Promise<void>;
                        // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}
                        $get(): Promise<sms.Outgoing>;
                        hlr: {
                            // GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr
                            $get(): Promise<sms.Hlr>;
                        }
                    };
                }
            };
        }
    };
// Api
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/sms'): () => Promise<string[]>;
  /**
   * SMS details
   * Get this object properties
   */
  get(path: '/sms/{serviceName}'): (params: {serviceName: string}) => Promise<sms.Account>;
  /**
   * List the sms.Blacklist objects
   * Numbers blacklisted associated to the sms account
   */
  get(path: '/sms/{serviceName}/blacklists'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * SMS blacklist
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/blacklists/{number}'): (params: {number: string, serviceName: string}) => Promise<sms.Blacklist>;
  /**
   * document operations
   * Get the /me/document id generated
   */
  get(path: '/sms/{serviceName}/document'): (params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}) => Promise<string>;
  /**
   * exceptions operations
   * Describe filter exceptions in sms sending from a specific receiver.
   */
  get(path: '/sms/{serviceName}/exceptions'): (params: {serviceName: string, receiver: string}) => Promise<sms.Exception[]>;
  /**
   * List the sms.HlrLookupNumber objects
   * Home Location Register informations. Give informations about a given cellular phone.
   */
  get(path: '/sms/{serviceName}/hlr'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Home Location Register informations. Give informations about a given cellular phone.
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/hlr/{id}'): (params: {id: number, serviceName: string}) => Promise<sms.HlrLookupNumber>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/hlr/{id}/operator'): (params: {id: number, serviceName: string}) => Promise<sms.Hlr>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms account
   */
  get(path: '/sms/{serviceName}/incoming'): (params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}) => Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/incoming/{id}'): (params: {id: number, serviceName: string}) => Promise<sms.Incoming>;
  /**
   * List the sms.Job objects
   * Sms in pending associated to the sms account
   */
  get(path: '/sms/{serviceName}/jobs'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/jobs/{id}'): (params: {id: number, serviceName: string}) => Promise<sms.Job>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms account
   */
  get(path: '/sms/{serviceName}/outgoing'): (params: {serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}) => Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/outgoing/{id}'): (params: {id: number, serviceName: string}) => Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/outgoing/{id}/hlr'): (params: {id: number, serviceName: string}) => Promise<sms.Hlr>;
  /**
   * List the sms.Phonebook objects
   * Return phonebooks associated to this account
   */
  get(path: '/sms/{serviceName}/phonebooks'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Phone book
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/phonebooks/{bookKey}'): (params: {bookKey: string, serviceName: string}) => Promise<sms.Phonebook>;
  /**
   * export operations
   * Export the phonebook's contacts
   */
  get(path: '/sms/{serviceName}/phonebooks/{bookKey}/export'): (params: {bookKey: string, serviceName: string, format: telephony.ContactsExportFormatsEnum}) => Promise<telephony.PcsFile>;
  /**
   * List the sms.PhonebookContact objects
   * Phonebook contacts
   */
  get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact'): (params: {bookKey: string, serviceName: string}) => Promise<number[]>;
  /**
   * Phone book contact
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}'): (params: {bookKey: string, id: number, serviceName: string}) => Promise<sms.PhonebookContact>;
  /**
   * List the sms.Receiver objects
   * Receivers preloaded from text or csv document file
   */
  get(path: '/sms/{serviceName}/receivers'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Sms receivers preloaded
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/receivers/{slotId}'): (params: {serviceName: string, slotId: number}) => Promise<sms.Receiver>;
  /**
   * csv operations
   * Get the document data container
   */
  get(path: '/sms/{serviceName}/receivers/{slotId}/csv'): (params: {serviceName: string, slotId: number}) => Promise<string>;
  /**
   * seeOffers operations
   * Describe SMS offers available.
   */
  get(path: '/sms/{serviceName}/seeOffers'): (params: {serviceName: string, countryCurrencyPrice: reference.CountryEnum, countryDestination: sms.CountryEnum, quantity: sms.PackQuantityEnum}) => Promise<sms.PackOffer[]>;
  /**
   * List the sms.Sender objects
   * Senders allowed associated to the sms account
   */
  get(path: '/sms/{serviceName}/senders'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * SMS senders
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/senders/{sender}'): (params: {sender: string, serviceName: string}) => Promise<sms.Sender>;
  /**
   * sendersAvailableForValidation operations
   * The senders that are attached to your personal informations or OVH services and that can be automatically validated
   */
  get(path: '/sms/{serviceName}/sendersAvailableForValidation'): (params: {serviceName: string, referer?: sms.SenderRefererEnum}) => Promise<sms.SenderAvailable[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the sms.Task objects
   * Operations on a SMS service
   */
  get(path: '/sms/{serviceName}/task'): (params: {serviceName: string, status?: telephony.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Operation on a SMS service
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<sms.Task>;
  /**
   * List the sms.TemplateControl objects
   * Template pattern filled up for moderation (Needed to send in US country)
   */
  get(path: '/sms/{serviceName}/templatesControl'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/templatesControl/{name}'): (params: {name: string, serviceName: string}) => Promise<sms.TemplateControl>;
  /**
   * List the sms.User objects
   * Users associated to the sms account
   */
  get(path: '/sms/{serviceName}/users'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * SMS users
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/users/{login}'): (params: {login: string, serviceName: string}) => Promise<sms.User>;
  /**
   * document operations
   * Get the /me/document id generated
   */
  get(path: '/sms/{serviceName}/users/{login}/document'): (params: {login: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, tag?: string, wayType: sms.DocumentWayTypeEnum}) => Promise<string>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms user
   */
  get(path: '/sms/{serviceName}/users/{login}/incoming'): (params: {login: string, serviceName: string, sender?: string, tag?: string}) => Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/users/{login}/incoming/{id}'): (params: {id: number, login: string, serviceName: string}) => Promise<sms.Incoming>;
  /**
   * List the sms.Job objects
   * Sms in pending associated to the sms user
   */
  get(path: '/sms/{serviceName}/users/{login}/jobs'): (params: {login: string, serviceName: string}) => Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/users/{login}/jobs/{id}'): (params: {id: number, login: string, serviceName: string}) => Promise<sms.Job>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms user
   */
  get(path: '/sms/{serviceName}/users/{login}/outgoing'): (params: {login: string, serviceName: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}) => Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}'): (params: {id: number, login: string, serviceName: string}) => Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr'): (params: {id: number, login: string, serviceName: string}) => Promise<sms.Hlr>;
  /**
   * List the sms.Receiver objects
   * Receivers preloaded from text or csv document file
   */
  get(path: '/sms/{serviceName}/users/{login}/receivers'): (params: {login: string, serviceName: string}) => Promise<number[]>;
  /**
   * Sms receivers preloaded
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}'): (params: {login: string, serviceName: string, slotId: number}) => Promise<sms.Receiver>;
  /**
   * csv operations
   * Get the document data container
   */
  get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv'): (params: {login: string, serviceName: string, slotId: number}) => Promise<string>;
  /**
   * List the sms.VirtualNumber objects
   * Virtual numbers associated to the sms account
   */
  get(path: '/sms/{serviceName}/virtualNumbers'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Virtual numbers
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}'): (params: {number: string, serviceName: string}) => Promise<sms.VirtualNumber>;
  /**
   * The web access for your virtual number chat application
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess'): (params: {number: string, serviceName: string}) => Promise<sms.ChatAccess>;
  /**
   * List the sms.Incoming objects
   * Sms received associated to the sms account
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming'): (params: {number: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, sender?: string, tag?: string}) => Promise<number[]>;
  /**
   * Sms history of sms incoming received
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}'): (params: {id: number, number: string, serviceName: string}) => Promise<sms.Incoming>;
  /**
   * List the sms.VirtualNumberJob objects
   * Sms in pending associated to the sms account
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs'): (params: {number: string, serviceName: string}) => Promise<number[]>;
  /**
   * Sms job
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}'): (params: {id: number, number: string, serviceName: string}) => Promise<sms.VirtualNumberJob>;
  /**
   * List the sms.Outgoing objects
   * Sms sent associated to the sms account
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing'): (params: {number: string, serviceName: string, creationDatetime_from?: string, creationDatetime_to?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string}) => Promise<number[]>;
  /**
   * Sms history of sms outgoing sent
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}'): (params: {id: number, number: string, serviceName: string}) => Promise<sms.Outgoing>;
  /**
   * Sms operator informations
   * Get this object properties
   */
  get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr'): (params: {id: number, number: string, serviceName: string}) => Promise<sms.Hlr>;
  /**
   * Get informations about the given ptt code
   * Get informations about the given ptt code
   */
  get(path: '/sms/ptts'): (params: {ptt: number}) => Promise<sms.PttDetails>;
  /**
   * Operations about the VOIP service
   * List available services
   */
  get(path: '/sms/virtualNumbers'): () => Promise<string[]>;
  /**
   * Virtual numbers
   * Get this object properties
   */
  get(path: '/sms/virtualNumbers/{number}'): (params: {number: string}) => Promise<sms.VirtualNumberGenericService>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/sms/virtualNumbers/{number}/serviceInfos'): (params: {number: string}) => Promise<services.Service>;
  /**
   * SMS details
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}'): (params: {serviceName: string, automaticRecreditAmount?: sms.PackQuantityAutomaticRecreditEnum, callBack?: string, creditThresholdForAutomaticRecredit?: number, creditsHoldByQuota?: number, creditsLeft?: number, description?: string, name?: string, smsResponse?: sms.Response, status?: sms.StatusAccountEnum, stopCallBack?: string, templates?: sms.Templates, userQuantityWithQuota?: number}) => Promise<void>;
  /**
   * Phone book
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/phonebooks/{bookKey}'): (params: {bookKey: string, serviceName: string, name?: string, phoneKey?: string}) => Promise<void>;
  /**
   * Phone book contact
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}'): (params: {bookKey: string, id: number, serviceName: string, group?: string, homeMobile?: string, homePhone?: string, name?: string, surname?: string, workMobile?: string, workPhone?: string}) => Promise<void>;
  /**
   * Sms receivers preloaded
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/receivers/{slotId}'): (params: {serviceName: string, slotId: number, autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number}) => Promise<void>;
  /**
   * SMS senders
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/senders/{sender}'): (params: {sender: string, serviceName: string, comment?: string, description?: string, referer?: sms.RefererSenderEnum, status?: sms.StatusSenderEnum, type?: sms.TypeSenderEnum, validationMedia?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/templatesControl/{name}'): (params: {name: string, serviceName: string, activity?: sms.TypeTemplateEnum, comment?: string, datetime?: string, description?: string, message?: string, status?: sms.StatusSenderEnum}) => Promise<void>;
  /**
   * SMS users
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/users/{login}'): (params: {login: string, serviceName: string, alertThresholdInformations?: sms.AlertThreshold, callBack?: string, ipRestrictions?: string[], password?: string, quotaInformations?: sms.Quota, stopCallBack?: string}) => Promise<void>;
  /**
   * Sms receivers preloaded
   * Alter this object properties
   */
  put(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}'): (params: {login: string, serviceName: string, slotId: number, autoUpdate?: boolean, canAutoUpdate?: boolean, datetime?: string, description?: string, records?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/sms/virtualNumbers/{number}/serviceInfos'): (params: {number: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * List the sms.HlrLookupNumber objects
   * Add one or several sending hlr lookup request
   */
  post(path: '/sms/{serviceName}/hlr'): (params: {serviceName: string, receivers?: string[], receiversDocumentUrl?: string}) => Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Job objects
   * Add one or several sending jobs
   */
  post(path: '/sms/{serviceName}/jobs'): (params: {serviceName: string, charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}) => Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Phonebook objects
   * Add a phonebook. Return the bookKey.
   */
  post(path: '/sms/{serviceName}/phonebooks'): (params: {serviceName: string, name: string}) => Promise<string>;
  /**
   * import operations
   * Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
   */
  post(path: '/sms/{serviceName}/phonebooks/{bookKey}/import'): (params: {bookKey: string, serviceName: string, documentId: string}) => Promise<telephony.Task>;
  /**
   * List the sms.PhonebookContact objects
   * Create a phonebook contact. Return identifier of the phonebook contact.
   */
  post(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact'): (params: {bookKey: string, serviceName: string, group: string, homeMobile?: string, homePhone?: string, name: string, surname: string, workMobile?: string, workPhone?: string}) => Promise<number>;
  /**
   * List the sms.Receiver objects
   * Add a new document of csv receivers
   */
  post(path: '/sms/{serviceName}/receivers'): (params: {serviceName: string, autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}) => Promise<sms.Receiver>;
  /**
   * clean operations
   * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
   */
  post(path: '/sms/{serviceName}/receivers/{slotId}/clean'): (params: {serviceName: string, slotId: number, freemium: boolean, priceOnly: boolean}) => Promise<sms.ReceiversAsynchronousCleanReport>;
  /**
   * List the sms.Sender objects
   * Create the sms sender given
   */
  post(path: '/sms/{serviceName}/senders'): (params: {serviceName: string, description?: string, reason?: string, sender: string}) => Promise<string>;
  /**
   * validate operations
   * Validate a given sender with an activation code.
   */
  post(path: '/sms/{serviceName}/senders/{sender}/validate'): (params: {sender: string, serviceName: string, code: string}) => Promise<void>;
  /**
   * List the sms.TemplateControl objects
   * Create the sms template control given
   */
  post(path: '/sms/{serviceName}/templatesControl'): (params: {serviceName: string, activity: sms.TypeTemplateEnum, description?: string, message: string, name: string, reason?: string}) => Promise<void>;
  /**
   * relaunchValidation operations
   * Attempt a new validation after moderation refusal
   */
  post(path: '/sms/{serviceName}/templatesControl/{name}/relaunchValidation'): (params: {name: string, serviceName: string, description: string, message: string}) => Promise<void>;
  /**
   * transferCredits operations
   * Credit transfer between two sms accounts.
   */
  post(path: '/sms/{serviceName}/transferCredits'): (params: {serviceName: string, credits: number, smsAccountTarget: string}) => Promise<void>;
  /**
   * List the sms.User objects
   * Create a new user for an sms account
   */
  post(path: '/sms/{serviceName}/users'): (params: {serviceName: string, login: string, password: string}) => Promise<void>;
  /**
   * List the sms.Job objects
   * Add one or several sending jobs
   */
  post(path: '/sms/{serviceName}/users/{login}/jobs'): (params: {login: string, serviceName: string, charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, noStopClause?: boolean, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number}) => Promise<sms.SmsSendingReport>;
  /**
   * List the sms.Receiver objects
   * Add a new document of csv receivers
   */
  post(path: '/sms/{serviceName}/users/{login}/receivers'): (params: {login: string, serviceName: string, autoUpdate: boolean, csvUrl?: string, description: string, documentId?: string, slotId: number}) => Promise<sms.Receiver>;
  /**
   * clean operations
   * Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
   */
  post(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean'): (params: {login: string, serviceName: string, slotId: number, freemium: boolean, priceOnly: boolean}) => Promise<sms.ReceiversAsynchronousCleanReport>;
  /**
   * The web access for your virtual number chat application
   * Create a new web access for this ressource
   */
  post(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess'): (params: {number: string, serviceName: string}) => Promise<sms.ChatAccess>;
  /**
   * List the sms.VirtualNumberJob objects
   * Add one or several sending jobs
   */
  post(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs'): (params: {number: string, serviceName: string, charset?: sms.CharsetEnum, class?: sms.ClassEnum, coding?: sms.CodingEnum, differedPeriod?: number, message: string, priority?: sms.PriorityEnum, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number}) => Promise<sms.SmsSendingReport>;
  /**
   * Get the encoding, length and number of SMS parts of a text message
   * Get the encoding, length and number of SMS parts of a text message
   */
  post(path: '/sms/estimate'): (params: {message: string, noStopClause: boolean, senderType: sms.TypeSenderEnum}) => Promise<sms.JobEstimate>;
  /**
   * SMS blacklist
   * Delete the blacklisted sms number given
   */
  delete(path: '/sms/{serviceName}/blacklists/{number}'): (params: {number: string, serviceName: string}) => Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  delete(path: '/sms/{serviceName}/incoming/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  delete(path: '/sms/{serviceName}/jobs/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  delete(path: '/sms/{serviceName}/outgoing/{id}'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * Phone book
   * Delete a phonebook
   */
  delete(path: '/sms/{serviceName}/phonebooks/{bookKey}'): (params: {bookKey: string, serviceName: string}) => Promise<void>;
  /**
   * Phone book contact
   * Delete a phonebook contact
   */
  delete(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}'): (params: {bookKey: string, id: number, serviceName: string}) => Promise<void>;
  /**
   * Sms receivers preloaded
   * Delete the document from the slot
   */
  delete(path: '/sms/{serviceName}/receivers/{slotId}'): (params: {serviceName: string, slotId: number}) => Promise<void>;
  /**
   * SMS senders
   * Delete the sms sender given
   */
  delete(path: '/sms/{serviceName}/senders/{sender}'): (params: {sender: string, serviceName: string}) => Promise<void>;
  /**
   * Sms template for moderation (Needed to send in US country)
   * Delete the sms template control
   */
  delete(path: '/sms/{serviceName}/templatesControl/{name}'): (params: {name: string, serviceName: string}) => Promise<void>;
  /**
   * SMS users
   * Delete the sms user given
   */
  delete(path: '/sms/{serviceName}/users/{login}'): (params: {login: string, serviceName: string}) => Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  delete(path: '/sms/{serviceName}/users/{login}/incoming/{id}'): (params: {id: number, login: string, serviceName: string}) => Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  delete(path: '/sms/{serviceName}/users/{login}/jobs/{id}'): (params: {id: number, login: string, serviceName: string}) => Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  delete(path: '/sms/{serviceName}/users/{login}/outgoing/{id}'): (params: {id: number, login: string, serviceName: string}) => Promise<void>;
  /**
   * Sms receivers preloaded
   * Delete the document from the slot
   */
  delete(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}'): (params: {login: string, serviceName: string, slotId: number}) => Promise<void>;
  /**
   * The web access for your virtual number chat application
   * Delete the given web access
   */
  delete(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess'): (params: {number: string, serviceName: string}) => Promise<void>;
  /**
   * Sms history of sms incoming received
   * Delete the sms incoming history given
   */
  delete(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}'): (params: {id: number, number: string, serviceName: string}) => Promise<void>;
  /**
   * Sms job
   * Delete the sms job given (stop sending)
   */
  delete(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}'): (params: {id: number, number: string, serviceName: string}) => Promise<void>;
  /**
   * Sms history of sms outgoing sent
   * Delete the sms outgoing history given
   */
  delete(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}'): (params: {id: number, number: string, serviceName: string}) => Promise<void>;
}
