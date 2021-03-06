import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/cpanel Models
 * Source: https://api.us.ovhcloud.com/1.0/license/cpanel.json
 */
export namespace license {
    // type fullname: license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    // type fullname: license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    // interface fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    // interface fullName: license.CpanelOrderConfiguration.CpanelOrderConfiguration
    export interface CpanelOrderConfiguration {
        orderableVersions: license.OrderableCpanelCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    // type fullname: license.CpanelVersionEnum
    export type CpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps" | "version-premier-cloud-100" | "version-premier-cloud-1000" | "version-premier-cloud-10000" | "version-premier-cloud-1100" | "version-premier-cloud-1200" | "version-premier-cloud-1300" | "version-premier-cloud-1400" | "version-premier-cloud-1500" | "version-premier-cloud-1600" | "version-premier-cloud-1700" | "version-premier-cloud-1800" | "version-premier-cloud-1900" | "version-premier-cloud-200" | "version-premier-cloud-2000" | "version-premier-cloud-2100" | "version-premier-cloud-2200" | "version-premier-cloud-2300" | "version-premier-cloud-2400" | "version-premier-cloud-2500" | "version-premier-cloud-2600" | "version-premier-cloud-2700" | "version-premier-cloud-2800" | "version-premier-cloud-2900" | "version-premier-cloud-300" | "version-premier-cloud-3000" | "version-premier-cloud-3100" | "version-premier-cloud-3200" | "version-premier-cloud-3300" | "version-premier-cloud-3400" | "version-premier-cloud-3500" | "version-premier-cloud-3600" | "version-premier-cloud-3700" | "version-premier-cloud-3800" | "version-premier-cloud-3900" | "version-premier-cloud-400" | "version-premier-cloud-4000" | "version-premier-cloud-4100" | "version-premier-cloud-4200" | "version-premier-cloud-4300" | "version-premier-cloud-4400" | "version-premier-cloud-4500" | "version-premier-cloud-4600" | "version-premier-cloud-4700" | "version-premier-cloud-4800" | "version-premier-cloud-4900" | "version-premier-cloud-500" | "version-premier-cloud-5000" | "version-premier-cloud-5100" | "version-premier-cloud-5200" | "version-premier-cloud-5300" | "version-premier-cloud-5400" | "version-premier-cloud-5500" | "version-premier-cloud-5600" | "version-premier-cloud-5700" | "version-premier-cloud-5800" | "version-premier-cloud-5900" | "version-premier-cloud-600" | "version-premier-cloud-6000" | "version-premier-cloud-6100" | "version-premier-cloud-6200" | "version-premier-cloud-6300" | "version-premier-cloud-6400" | "version-premier-cloud-6500" | "version-premier-cloud-6600" | "version-premier-cloud-6700" | "version-premier-cloud-6800" | "version-premier-cloud-6900" | "version-premier-cloud-700" | "version-premier-cloud-7000" | "version-premier-cloud-7100" | "version-premier-cloud-7200" | "version-premier-cloud-7300" | "version-premier-cloud-7400" | "version-premier-cloud-7500" | "version-premier-cloud-7600" | "version-premier-cloud-7700" | "version-premier-cloud-7800" | "version-premier-cloud-7900" | "version-premier-cloud-800" | "version-premier-cloud-8000" | "version-premier-cloud-8100" | "version-premier-cloud-8200" | "version-premier-cloud-8300" | "version-premier-cloud-8400" | "version-premier-cloud-8500" | "version-premier-cloud-8600" | "version-premier-cloud-8700" | "version-premier-cloud-8800" | "version-premier-cloud-8900" | "version-premier-cloud-900" | "version-premier-cloud-9000" | "version-premier-cloud-9100" | "version-premier-cloud-9200" | "version-premier-cloud-9300" | "version-premier-cloud-9400" | "version-premier-cloud-9500" | "version-premier-cloud-9600" | "version-premier-cloud-9700" | "version-premier-cloud-9800" | "version-premier-cloud-9900" | "version-premier-metal-1000" | "version-premier-metal-10000" | "version-premier-metal-1100" | "version-premier-metal-1200" | "version-premier-metal-1300" | "version-premier-metal-1400" | "version-premier-metal-1500" | "version-premier-metal-1600" | "version-premier-metal-1700" | "version-premier-metal-1800" | "version-premier-metal-1900" | "version-premier-metal-2000" | "version-premier-metal-2100" | "version-premier-metal-2200" | "version-premier-metal-2300" | "version-premier-metal-2400" | "version-premier-metal-2500" | "version-premier-metal-2600" | "version-premier-metal-2700" | "version-premier-metal-2800" | "version-premier-metal-2900" | "version-premier-metal-300" | "version-premier-metal-3000" | "version-premier-metal-3100" | "version-premier-metal-3200" | "version-premier-metal-3300" | "version-premier-metal-3400" | "version-premier-metal-3500" | "version-premier-metal-3600" | "version-premier-metal-3700" | "version-premier-metal-3800" | "version-premier-metal-3900" | "version-premier-metal-400" | "version-premier-metal-4000" | "version-premier-metal-4100" | "version-premier-metal-4200" | "version-premier-metal-4300" | "version-premier-metal-4400" | "version-premier-metal-4500" | "version-premier-metal-4600" | "version-premier-metal-4700" | "version-premier-metal-4800" | "version-premier-metal-4900" | "version-premier-metal-500" | "version-premier-metal-5000" | "version-premier-metal-5100" | "version-premier-metal-5200" | "version-premier-metal-5300" | "version-premier-metal-5400" | "version-premier-metal-5500" | "version-premier-metal-5600" | "version-premier-metal-5700" | "version-premier-metal-5800" | "version-premier-metal-5900" | "version-premier-metal-600" | "version-premier-metal-6000" | "version-premier-metal-6100" | "version-premier-metal-6200" | "version-premier-metal-6300" | "version-premier-metal-6400" | "version-premier-metal-6500" | "version-premier-metal-6600" | "version-premier-metal-6700" | "version-premier-metal-6800" | "version-premier-metal-6900" | "version-premier-metal-700" | "version-premier-metal-7000" | "version-premier-metal-7100" | "version-premier-metal-7200" | "version-premier-metal-7300" | "version-premier-metal-7400" | "version-premier-metal-7500" | "version-premier-metal-7600" | "version-premier-metal-7700" | "version-premier-metal-7800" | "version-premier-metal-7900" | "version-premier-metal-800" | "version-premier-metal-8000" | "version-premier-metal-8100" | "version-premier-metal-8200" | "version-premier-metal-8300" | "version-premier-metal-8400" | "version-premier-metal-8500" | "version-premier-metal-8600" | "version-premier-metal-8700" | "version-premier-metal-8800" | "version-premier-metal-8900" | "version-premier-metal-900" | "version-premier-metal-9000" | "version-premier-metal-9100" | "version-premier-metal-9200" | "version-premier-metal-9300" | "version-premier-metal-9400" | "version-premier-metal-9500" | "version-premier-metal-9600" | "version-premier-metal-9700" | "version-premier-metal-9800" | "version-premier-metal-9900"
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // interface fullName: license.OrderableCpanelCompatibilityInfos.OrderableCpanelCompatibilityInfos
    export interface OrderableCpanelCompatibilityInfos {
        version: license.OrderableCpanelVersionEnum;
    }
    // type fullname: license.OrderableCpanelVersionEnum
    export type OrderableCpanelVersionEnum = "cpanel-license-admin-cloud-accounts" | "cpanel-license-premier-cloud-100-accounts" | "cpanel-license-premier-cloud-1000-accounts" | "cpanel-license-premier-cloud-10000-accounts" | "cpanel-license-premier-cloud-1100-accounts" | "cpanel-license-premier-cloud-1200-accounts" | "cpanel-license-premier-cloud-1300-accounts" | "cpanel-license-premier-cloud-1400-accounts" | "cpanel-license-premier-cloud-1500-accounts" | "cpanel-license-premier-cloud-1600-accounts" | "cpanel-license-premier-cloud-1700-accounts" | "cpanel-license-premier-cloud-1800-accounts" | "cpanel-license-premier-cloud-1900-accounts" | "cpanel-license-premier-cloud-200-accounts" | "cpanel-license-premier-cloud-2000-accounts" | "cpanel-license-premier-cloud-2100-accounts" | "cpanel-license-premier-cloud-2200-accounts" | "cpanel-license-premier-cloud-2300-accounts" | "cpanel-license-premier-cloud-2400-accounts" | "cpanel-license-premier-cloud-2500-accounts" | "cpanel-license-premier-cloud-2600-accounts" | "cpanel-license-premier-cloud-2700-accounts" | "cpanel-license-premier-cloud-2800-accounts" | "cpanel-license-premier-cloud-2900-accounts" | "cpanel-license-premier-cloud-300-accounts" | "cpanel-license-premier-cloud-3000-accounts" | "cpanel-license-premier-cloud-3100-accounts" | "cpanel-license-premier-cloud-3200-accounts" | "cpanel-license-premier-cloud-3300-accounts" | "cpanel-license-premier-cloud-3400-accounts" | "cpanel-license-premier-cloud-3500-accounts" | "cpanel-license-premier-cloud-3600-accounts" | "cpanel-license-premier-cloud-3700-accounts" | "cpanel-license-premier-cloud-3800-accounts" | "cpanel-license-premier-cloud-3900-accounts" | "cpanel-license-premier-cloud-400-accounts" | "cpanel-license-premier-cloud-4000-accounts" | "cpanel-license-premier-cloud-4100-accounts" | "cpanel-license-premier-cloud-4200-accounts" | "cpanel-license-premier-cloud-4300-accounts" | "cpanel-license-premier-cloud-4400-accounts" | "cpanel-license-premier-cloud-4500-accounts" | "cpanel-license-premier-cloud-4600-accounts" | "cpanel-license-premier-cloud-4700-accounts" | "cpanel-license-premier-cloud-4800-accounts" | "cpanel-license-premier-cloud-4900-accounts" | "cpanel-license-premier-cloud-500-accounts" | "cpanel-license-premier-cloud-5000-accounts" | "cpanel-license-premier-cloud-5100-accounts" | "cpanel-license-premier-cloud-5200-accounts" | "cpanel-license-premier-cloud-5300-accounts" | "cpanel-license-premier-cloud-5400-accounts" | "cpanel-license-premier-cloud-5500-accounts" | "cpanel-license-premier-cloud-5600-accounts" | "cpanel-license-premier-cloud-5700-accounts" | "cpanel-license-premier-cloud-5800-accounts" | "cpanel-license-premier-cloud-5900-accounts" | "cpanel-license-premier-cloud-600-accounts" | "cpanel-license-premier-cloud-6000-accounts" | "cpanel-license-premier-cloud-6100-accounts" | "cpanel-license-premier-cloud-6200-accounts" | "cpanel-license-premier-cloud-6300-accounts" | "cpanel-license-premier-cloud-6400-accounts" | "cpanel-license-premier-cloud-6500-accounts" | "cpanel-license-premier-cloud-6600-accounts" | "cpanel-license-premier-cloud-6700-accounts" | "cpanel-license-premier-cloud-6800-accounts" | "cpanel-license-premier-cloud-6900-accounts" | "cpanel-license-premier-cloud-700-accounts" | "cpanel-license-premier-cloud-7000-accounts" | "cpanel-license-premier-cloud-7100-accounts" | "cpanel-license-premier-cloud-7200-accounts" | "cpanel-license-premier-cloud-7300-accounts" | "cpanel-license-premier-cloud-7400-accounts" | "cpanel-license-premier-cloud-7500-accounts" | "cpanel-license-premier-cloud-7600-accounts" | "cpanel-license-premier-cloud-7700-accounts" | "cpanel-license-premier-cloud-7800-accounts" | "cpanel-license-premier-cloud-7900-accounts" | "cpanel-license-premier-cloud-800-accounts" | "cpanel-license-premier-cloud-8000-accounts" | "cpanel-license-premier-cloud-8100-accounts" | "cpanel-license-premier-cloud-8200-accounts" | "cpanel-license-premier-cloud-8300-accounts" | "cpanel-license-premier-cloud-8400-accounts" | "cpanel-license-premier-cloud-8500-accounts" | "cpanel-license-premier-cloud-8600-accounts" | "cpanel-license-premier-cloud-8700-accounts" | "cpanel-license-premier-cloud-8800-accounts" | "cpanel-license-premier-cloud-8900-accounts" | "cpanel-license-premier-cloud-900-accounts" | "cpanel-license-premier-cloud-9000-accounts" | "cpanel-license-premier-cloud-9100-accounts" | "cpanel-license-premier-cloud-9200-accounts" | "cpanel-license-premier-cloud-9300-accounts" | "cpanel-license-premier-cloud-9400-accounts" | "cpanel-license-premier-cloud-9500-accounts" | "cpanel-license-premier-cloud-9600-accounts" | "cpanel-license-premier-cloud-9700-accounts" | "cpanel-license-premier-cloud-9800-accounts" | "cpanel-license-premier-cloud-9900-accounts" | "cpanel-license-premier-cloud-solo-accounts" | "cpanel-license-premier-metal-1000-accounts" | "cpanel-license-premier-metal-10000-accounts" | "cpanel-license-premier-metal-1100-accounts" | "cpanel-license-premier-metal-1200-accounts" | "cpanel-license-premier-metal-1300-accounts" | "cpanel-license-premier-metal-1400-accounts" | "cpanel-license-premier-metal-1500-accounts" | "cpanel-license-premier-metal-1600-accounts" | "cpanel-license-premier-metal-1700-accounts" | "cpanel-license-premier-metal-1800-accounts" | "cpanel-license-premier-metal-1900-accounts" | "cpanel-license-premier-metal-2000-accounts" | "cpanel-license-premier-metal-2100-accounts" | "cpanel-license-premier-metal-2200-accounts" | "cpanel-license-premier-metal-2300-accounts" | "cpanel-license-premier-metal-2400-accounts" | "cpanel-license-premier-metal-2500-accounts" | "cpanel-license-premier-metal-2600-accounts" | "cpanel-license-premier-metal-2700-accounts" | "cpanel-license-premier-metal-2800-accounts" | "cpanel-license-premier-metal-2900-accounts" | "cpanel-license-premier-metal-300-accounts" | "cpanel-license-premier-metal-3000-accounts" | "cpanel-license-premier-metal-3100-accounts" | "cpanel-license-premier-metal-3200-accounts" | "cpanel-license-premier-metal-3300-accounts" | "cpanel-license-premier-metal-3400-accounts" | "cpanel-license-premier-metal-3500-accounts" | "cpanel-license-premier-metal-3600-accounts" | "cpanel-license-premier-metal-3700-accounts" | "cpanel-license-premier-metal-3800-accounts" | "cpanel-license-premier-metal-3900-accounts" | "cpanel-license-premier-metal-400-accounts" | "cpanel-license-premier-metal-4000-accounts" | "cpanel-license-premier-metal-4100-accounts" | "cpanel-license-premier-metal-4200-accounts" | "cpanel-license-premier-metal-4300-accounts" | "cpanel-license-premier-metal-4400-accounts" | "cpanel-license-premier-metal-4500-accounts" | "cpanel-license-premier-metal-4600-accounts" | "cpanel-license-premier-metal-4700-accounts" | "cpanel-license-premier-metal-4800-accounts" | "cpanel-license-premier-metal-4900-accounts" | "cpanel-license-premier-metal-500-accounts" | "cpanel-license-premier-metal-5000-accounts" | "cpanel-license-premier-metal-5100-accounts" | "cpanel-license-premier-metal-5200-accounts" | "cpanel-license-premier-metal-5300-accounts" | "cpanel-license-premier-metal-5400-accounts" | "cpanel-license-premier-metal-5500-accounts" | "cpanel-license-premier-metal-5600-accounts" | "cpanel-license-premier-metal-5700-accounts" | "cpanel-license-premier-metal-5800-accounts" | "cpanel-license-premier-metal-5900-accounts" | "cpanel-license-premier-metal-600-accounts" | "cpanel-license-premier-metal-6000-accounts" | "cpanel-license-premier-metal-6100-accounts" | "cpanel-license-premier-metal-6200-accounts" | "cpanel-license-premier-metal-6300-accounts" | "cpanel-license-premier-metal-6400-accounts" | "cpanel-license-premier-metal-6500-accounts" | "cpanel-license-premier-metal-6600-accounts" | "cpanel-license-premier-metal-6700-accounts" | "cpanel-license-premier-metal-6800-accounts" | "cpanel-license-premier-metal-6900-accounts" | "cpanel-license-premier-metal-700-accounts" | "cpanel-license-premier-metal-7000-accounts" | "cpanel-license-premier-metal-7100-accounts" | "cpanel-license-premier-metal-7200-accounts" | "cpanel-license-premier-metal-7300-accounts" | "cpanel-license-premier-metal-7400-accounts" | "cpanel-license-premier-metal-7500-accounts" | "cpanel-license-premier-metal-7600-accounts" | "cpanel-license-premier-metal-7700-accounts" | "cpanel-license-premier-metal-7800-accounts" | "cpanel-license-premier-metal-7900-accounts" | "cpanel-license-premier-metal-800-accounts" | "cpanel-license-premier-metal-8000-accounts" | "cpanel-license-premier-metal-8100-accounts" | "cpanel-license-premier-metal-8200-accounts" | "cpanel-license-premier-metal-8300-accounts" | "cpanel-license-premier-metal-8400-accounts" | "cpanel-license-premier-metal-8500-accounts" | "cpanel-license-premier-metal-8600-accounts" | "cpanel-license-premier-metal-8700-accounts" | "cpanel-license-premier-metal-8800-accounts" | "cpanel-license-premier-metal-8900-accounts" | "cpanel-license-premier-metal-900-accounts" | "cpanel-license-premier-metal-9000-accounts" | "cpanel-license-premier-metal-9100-accounts" | "cpanel-license-premier-metal-9200-accounts" | "cpanel-license-premier-metal-9300-accounts" | "cpanel-license-premier-metal-9400-accounts" | "cpanel-license-premier-metal-9500-accounts" | "cpanel-license-premier-metal-9600-accounts" | "cpanel-license-premier-metal-9700-accounts" | "cpanel-license-premier-metal-9800-accounts" | "cpanel-license-premier-metal-9900-accounts" | "cpanel-license-premier-metal-solo-accounts" | "cpanel-license-pro-cloud-accounts" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps"
    // type fullname: license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    // interface fullName: license.Task.Task
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    // type fullname: license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace cpanel {
        // interface fullName: license.cpanel.Cpanel.Cpanel
        export interface Cpanel {
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.CpanelVersionEnum;
        }
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
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /license/cpanel Models
 */
export function proxyLicenseCpanel(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseCpanel;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License{
    cpanel: {
        // GET /license/cpanel
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/cpanel/orderableVersions
            $get(params: {ip: string}): Promise<license.CpanelOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/cpanel/{serviceName}
            $get(): Promise<license.cpanel.Cpanel>;
            // PUT /license/cpanel/{serviceName}
            $put(params?: {creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.CpanelVersionEnum}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/cpanel/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/cpanel/{serviceName}/canLicenseBeMovedTo
                $get(params: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/cpanel/{serviceName}/changeIp
                $post(params: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/cpanel/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/cpanel/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/cpanel/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            tasks: {
                // GET /license/cpanel/{serviceName}/tasks
                $get(params?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/cpanel/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/cpanel/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
// Api
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/license/cpanel'): () => Promise<string[]>;
  /**
   * Your Cpanel license
   * Get this object properties
   */
  get(path: '/license/cpanel/{serviceName}'): (params: {serviceName: string}) => Promise<license.cpanel.Cpanel>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  get(path: '/license/cpanel/{serviceName}/allowedDestinationIp'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  get(path: '/license/cpanel/{serviceName}/canLicenseBeMovedTo'): (params: {serviceName: string, destinationIp: string}) => Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/license/cpanel/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  get(path: '/license/cpanel/{serviceName}/tasks'): (params: {serviceName: string, action?: license.ActionType, status?: license.TaskStateEnum}) => Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  get(path: '/license/cpanel/{serviceName}/tasks/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<license.Task>;
  /**
   * Get the orderable CPanel versions
   * Get the orderable CPanel versions
   */
  get(path: '/license/cpanel/orderableVersions'): (params: {ip: string}) => Promise<license.CpanelOrderConfiguration[]>;
  /**
   * Your Cpanel license
   * Alter this object properties
   */
  put(path: '/license/cpanel/{serviceName}'): (params: {serviceName: string, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.CpanelVersionEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/license/cpanel/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  post(path: '/license/cpanel/{serviceName}/changeIp'): (params: {serviceName: string, destinationIp: string}) => Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/license/cpanel/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/license/cpanel/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
}
