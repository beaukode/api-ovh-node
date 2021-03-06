import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cdn/webstorage Models
 * Source: https://eu.api.ovh.com/1.0/cdn/webstorage.json
 */
export namespace cdn {
    export namespace webstorage {
        // interface fullName: cdn.webstorage.Account.Account
        export interface Account {
            domain: string;
            server: string;
            storageLimit: number;
            storageUsage: number;
        }
        // interface fullName: cdn.webstorage.AccountCredentials.AccountCredentials
        export interface AccountCredentials {
            endpoint: string;
            login: string;
            password: string;
            tenant: string;
        }
        // interface fullName: cdn.webstorage.StatsDataType.StatsDataType
        export interface StatsDataType {
            date: string;
            value: number;
        }
        // type fullname: cdn.webstorage.StatsPeriodEnum
        export type StatsPeriodEnum = "day" | "month" | "week"
        // type fullname: cdn.webstorage.StatsTypeEnum
        export type StatsTypeEnum = "backend" | "cdn" | "quota"
    }
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

/**
 * END API /cdn/webstorage Models
 */
export function proxyCdnWebstorage(ovhEngine: OvhRequestable): Cdn {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnWebstorage;
/**
 * Api Proxy model
 */// Apis harmony
// path /cdn
export interface Cdn{
    webstorage: {
        // GET /cdn/webstorage
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /cdn/webstorage/{serviceName}
            $get(): Promise<cdn.webstorage.Account>;
            credentials: {
                // GET /cdn/webstorage/{serviceName}/credentials
                $get(): Promise<cdn.webstorage.AccountCredentials>;
            }
            serviceInfos: {
                // GET /cdn/webstorage/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cdn/webstorage/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            statistics: {
                // GET /cdn/webstorage/{serviceName}/statistics
                $get(params: {period: cdn.webstorage.StatsPeriodEnum, type: cdn.webstorage.StatsTypeEnum}): Promise<cdn.webstorage.StatsDataType[]>;
            }
        };
    }
// Api
  /**
   * Operations about the CDNSTATIC service
   * List available services
   */
  get(path: '/cdn/webstorage'): () => Promise<string[]>;
  /**
   * Static CDN
   * Get this object properties
   */
  get(path: '/cdn/webstorage/{serviceName}'): (params: {serviceName: string}) => Promise<cdn.webstorage.Account>;
  /**
   * credentials operations
   * Gives for customer credentials to accesss swift account
   */
  get(path: '/cdn/webstorage/{serviceName}/credentials'): (params: {serviceName: string}) => Promise<cdn.webstorage.AccountCredentials>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/cdn/webstorage/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * statistics operations
   * Return stats about bandwidth consumption
   */
  get(path: '/cdn/webstorage/{serviceName}/statistics'): (params: {serviceName: string, period: cdn.webstorage.StatsPeriodEnum, type: cdn.webstorage.StatsTypeEnum}) => Promise<cdn.webstorage.StatsDataType[]>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/cdn/webstorage/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}
