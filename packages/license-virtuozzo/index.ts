import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';

export namespace license {
    //license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    //license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    //license.ChangeIpStatus
    // fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.Option
    // fullName: license.Option.Option
    export interface Option {
        amount?: string;
        canBeDeleted: boolean;
        expirationDate: string;
        label: license.OptionLabel;
        version?: string;
    }
    //license.OptionLabel
    export type OptionLabel = "ANTISPAM_SPAMASSASSIN" | "ANTIVIRUS_DRWEB" | "ANTIVIRUS_KASPERSKY" | "DOMAINS" | "LANGUAGE_PACK" | "POWERPACK" | "SQL_SERVER" | "VIRTUOZZO_CONTAINERS"
    //license.OrderableVirtuozzoCompatibilityInfos
    // fullName: license.OrderableVirtuozzoCompatibilityInfos.OrderableVirtuozzoCompatibilityInfos
    export interface OrderableVirtuozzoCompatibilityInfos {
        compliantContainers: license.OrderableVirtuozzoContainerNumberEnum[];
        potentialProblems: license.PotentialProblemVirtuozzoEnum[];
        version: license.OrderableVirtuozzoVersionEnum;
    }
    //license.OrderableVirtuozzoContainerNumberEnum
    export type OrderableVirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    //license.OrderableVirtuozzoVersionEnum
    export type OrderableVirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS" | "virtuozzo-4" | "virtuozzo-4-for-windows"
    //license.PotentialProblemVirtuozzoEnum
    export type PotentialProblemVirtuozzoEnum = "isLinuxOs" | "isOsVirtuozzo4Like" | "isWindowsOs"
    //license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    //license.Task
    // fullName: license.Task.Task
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    //license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    //license.VirtuozzoContainerNumberEnum
    export type VirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    //license.VirtuozzoOrderConfiguration
    // fullName: license.VirtuozzoOrderConfiguration.VirtuozzoOrderConfiguration
    export interface VirtuozzoOrderConfiguration {
        orderableVersions: license.OrderableVirtuozzoCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    //license.VirtuozzoVersionEnum
    export type VirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"
    export namespace virtuozzo {
        //license.virtuozzo.Virtuozzo
        // fullName: license.virtuozzo.Virtuozzo.Virtuozzo
        export interface Virtuozzo {
            containerNumber: license.VirtuozzoContainerNumberEnum;
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            informationKey?: string;
            ip: string;
            licenseId: string;
            productKey?: string;
            status: license.StateEnum;
            version: license.VirtuozzoVersionEnum;
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
export function proxyLicenseVirtuozzo(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license/virtuozzo');
}
// Apis harmony
// path /license
export interface License{
    virtuozzo: {
        // GET /license/virtuozzo
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/virtuozzo/orderableVersions
            $get(param?: {ip: string}): Promise<license.VirtuozzoOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/virtuozzo/{serviceName}
            $get(): Promise<license.virtuozzo.Virtuozzo>;
            // PUT /license/virtuozzo/{serviceName}
            $put(body?: {body: license.virtuozzo.Virtuozzo}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/virtuozzo/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/virtuozzo/{serviceName}/canLicenseBeMovedTo
                $get(param?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/virtuozzo/{serviceName}/changeIp
                $post(body?: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/virtuozzo/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            option: {
                // GET /license/virtuozzo/{serviceName}/option
                $get(param?: {label?: license.OptionLabel}): Promise<license.OptionLabel[]>;
                $(label: license.OptionLabel): {
                    // DELETE /license/virtuozzo/{serviceName}/option/{label}
                    $delete(): Promise<license.Task>;
                    // GET /license/virtuozzo/{serviceName}/option/{label}
                    $get(): Promise<license.Option>;
                };
            }
            serviceInfos: {
                // GET /license/virtuozzo/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/virtuozzo/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            tasks: {
                // GET /license/virtuozzo/{serviceName}/tasks
                $get(param?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/virtuozzo/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/virtuozzo/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
}
// Api
type PathsLicenseVirtuozzoGET = '/license/virtuozzo' |
  '/license/virtuozzo/orderableVersions' |
  '/license/virtuozzo/{serviceName}' |
  '/license/virtuozzo/{serviceName}/allowedDestinationIp' |
  '/license/virtuozzo/{serviceName}/canLicenseBeMovedTo' |
  '/license/virtuozzo/{serviceName}/option' |
  '/license/virtuozzo/{serviceName}/option/{label}' |
  '/license/virtuozzo/{serviceName}/serviceInfos' |
  '/license/virtuozzo/{serviceName}/tasks' |
  '/license/virtuozzo/{serviceName}/tasks/{taskId}';

type PathsLicenseVirtuozzoPUT = '/license/virtuozzo/{serviceName}' |
  '/license/virtuozzo/{serviceName}/serviceInfos';

type PathsLicenseVirtuozzoPOST = '/license/virtuozzo/{serviceName}/changeIp' |
  '/license/virtuozzo/{serviceName}/confirmTermination' |
  '/license/virtuozzo/{serviceName}/terminate';

type PathsLicenseVirtuozzoDELETE = '/license/virtuozzo/{serviceName}/option/{label}';

export class ApiLicenseVirtuozzo extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/license/virtuozzo'): Promise<string[]>;
  /**
   * Your Virtuozzo license
   * Get this object properties
   */
  public get(path: '/license/virtuozzo/{serviceName}', params: {serviceName: string}): Promise<license.virtuozzo.Virtuozzo>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  public get(path: '/license/virtuozzo/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  public get(path: '/license/virtuozzo/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<license.ChangeIpStatus>;
  /**
   * List the license.Option objects
   * Options linked to this license
   */
  public get(path: '/license/virtuozzo/{serviceName}/option', params: {serviceName: string, label?: license.OptionLabel}): Promise<license.OptionLabel[]>;
  /**
   * Your License options
   * Get this object properties
   */
  public get(path: '/license/virtuozzo/{serviceName}/option/{label}', params: {label: license.OptionLabel, serviceName: string}): Promise<license.Option>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/virtuozzo/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  public get(path: '/license/virtuozzo/{serviceName}/tasks', params: {serviceName: string, action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  public get(path: '/license/virtuozzo/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<license.Task>;
  /**
   * Get the orderable Virtuozzo versions
   * Get the orderable Virtuozzo versions
   */
  public get(path: '/license/virtuozzo/orderableVersions', params: {ip: string}): Promise<license.VirtuozzoOrderConfiguration[]>;
  public get(path: PathsLicenseVirtuozzoGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your Virtuozzo license
   * Alter this object properties
   */
  public put(path: '/license/virtuozzo/{serviceName}', params: {serviceName: string, containerNumber?: license.VirtuozzoContainerNumberEnum, creation?: string, deleteAtExpiration?: boolean, domain?: string, informationKey?: string, ip?: string, licenseId?: string, productKey?: string, status?: license.StateEnum, version?: license.VirtuozzoVersionEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/virtuozzo/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsLicenseVirtuozzoPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  public post(path: '/license/virtuozzo/{serviceName}/changeIp', params: {serviceName: string, destinationIp: string}): Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/license/virtuozzo/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/license/virtuozzo/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseVirtuozzoPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Your License options
   * release this Option
   */
  public delete(path: '/license/virtuozzo/{serviceName}/option/{label}', params: {label: license.OptionLabel, serviceName: string}): Promise<license.Task>;
  public delete(path: PathsLicenseVirtuozzoDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiLicenseVirtuozzo;
