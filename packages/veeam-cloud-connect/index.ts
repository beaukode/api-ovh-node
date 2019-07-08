import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /veeamCloudConnect Models
 */
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
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
export namespace veeamCloudConnect {
    //veeamCloudConnect.Account
    // fullName: veeamCloudConnect.Account.Account
    export interface Account {
        location: veeamCloudConnect.Location;
        productOffer: veeamCloudConnect.Offer;
        serviceName: string;
        vmCount?: number;
    }
    //veeamCloudConnect.BackupRepository
    // fullName: veeamCloudConnect.BackupRepository.BackupRepository
    export interface BackupRepository {
        inventoryName: string;
        quota: complexType.UnitAndValue<number>;
        quotaUsed?: complexType.UnitAndValue<number>;
        replicationZone?: veeamCloudConnect.Location;
        state: veeamCloudConnect.BackupRepositoryStateEnum;
        usage?: number;
    }
    //veeamCloudConnect.BackupRepositoryStateEnum
    export type BackupRepositoryStateEnum = "configuring" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "removing"
    //veeamCloudConnect.Location
    export type Location = "bhs1" | "rbx2" | "sbg1"
    //veeamCloudConnect.Offer
    export type Offer = "advanced" | "demo" | "starter"
    //veeamCloudConnect.Task
    // fullName: veeamCloudConnect.Task.Task
    export interface Task {
        endDate?: string;
        name: string;
        progress: number;
        startDate?: string;
        state: veeamCloudConnect.TaskStateEnum;
        taskId: number;
    }
    //veeamCloudConnect.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "problem" | "toCreate" | "todo" | "unknown" | "waitingTodo"
    //veeamCloudConnect.offerCapabilities
    // fullName: veeamCloudConnect.offerCapabilities.offerCapabilities
    export interface offerCapabilities {
        defaultQuota: number;
        maxQuota: number;
        maxStoragesCount: number;
        minimumUsage: number;
        multiStorages: boolean;
        replication: boolean;
        vmCapacity: number;
        wanAccelerator: boolean;
    }
}

/**
 * END API /veeamCloudConnect Models
 */
export function proxyVeeamCloudConnect(ovhEngine: OvhRequestable): VeeamCloudConnect {
    return buildOvhProxy(ovhEngine, '/veeamCloudConnect');
}
export default proxyVeeamCloudConnect;
/**
 * Api Proxy model
 */// Apis harmony
// path /veeamCloudConnect
export interface VeeamCloudConnect{
    // GET /veeamCloudConnect
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /veeamCloudConnect/{serviceName}
        $get(): Promise<veeamCloudConnect.Account>;
        backupRepository: {
            // GET /veeamCloudConnect/{serviceName}/backupRepository
            $get(): Promise<string[]>;
            // POST /veeamCloudConnect/{serviceName}/backupRepository
            $post(): Promise<veeamCloudConnect.Task[]>;
            $(inventoryName: string): {
                // DELETE /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                $delete(): Promise<veeamCloudConnect.Task[]>;
                // GET /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                $get(): Promise<veeamCloudConnect.BackupRepository>;
                upgradeQuota: {
                    // POST /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota
                    $post(body?: {newQuota: number}): Promise<veeamCloudConnect.Task[]>;
                }
            };
        }
        capabilities: {
            // GET /veeamCloudConnect/{serviceName}/capabilities
            $get(): Promise<veeamCloudConnect.offerCapabilities>;
        }
        orderableUpgrade: {
            // GET /veeamCloudConnect/{serviceName}/orderableUpgrade
            $get(): Promise<veeamCloudConnect.Offer[]>;
        }
        resetPassword: {
            // POST /veeamCloudConnect/{serviceName}/resetPassword
            $post(): Promise<veeamCloudConnect.Task>;
        }
        serviceInfos: {
            // GET /veeamCloudConnect/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /veeamCloudConnect/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        task: {
            // GET /veeamCloudConnect/{serviceName}/task
            $get(param?: {name?: string, state?: veeamCloudConnect.TaskStateEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /veeamCloudConnect/{serviceName}/task/{taskId}
                $get(): Promise<veeamCloudConnect.Task>;
            };
        }
    };
// Api
  /**
   * Operations about the VEEAMCC service
   * List available services
   */
  get(path: '/veeamCloudConnect'): () => Promise<string[]>;
  /**
   * Veeam Cloud Connect account
   * Get this object properties
   */
  get(path: '/veeamCloudConnect/{serviceName}'): (params: {serviceName: string}) => Promise<veeamCloudConnect.Account>;
  /**
   * List the veeamCloudConnect.BackupRepository objects
   * Veeam Backup Repository linked to this Veeam Cloud Connect account
   */
  get(path: '/veeamCloudConnect/{serviceName}/backupRepository'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Veeam Backup Repository
   * Get this object properties
   */
  get(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}'): (params: {inventoryName: string, serviceName: string}) => Promise<veeamCloudConnect.BackupRepository>;
  /**
   * capabilities operations
   * Show capabilities of your current offer
   */
  get(path: '/veeamCloudConnect/{serviceName}/capabilities'): (params: {serviceName: string}) => Promise<veeamCloudConnect.offerCapabilities>;
  /**
   * orderableUpgrade operations
   * List the possible upgrades on your Veeam Cloud Connect account
   */
  get(path: '/veeamCloudConnect/{serviceName}/orderableUpgrade'): (params: {serviceName: string}) => Promise<veeamCloudConnect.Offer[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/veeamCloudConnect/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the veeamCloudConnect.Task objects
   * Tasks associated with Cloud Tenant
   */
  get(path: '/veeamCloudConnect/{serviceName}/task'): (params: {serviceName: string, name?: string, state?: veeamCloudConnect.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation with the Cloud Tenant Account
   * Get this object properties
   */
  get(path: '/veeamCloudConnect/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<veeamCloudConnect.Task>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/veeamCloudConnect/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * List the veeamCloudConnect.BackupRepository objects
   * Add a new Backup Repository to your professional account
   */
  post(path: '/veeamCloudConnect/{serviceName}/backupRepository'): (params: {serviceName: string}) => Promise<veeamCloudConnect.Task[]>;
  /**
   * upgradeQuota operations
   * Change your quota
   */
  post(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota'): (params: {inventoryName: string, serviceName: string, newQuota: number}) => Promise<veeamCloudConnect.Task[]>;
  /**
   * resetPassword operations
   * Reset your Cloud Tenant Password
   */
  post(path: '/veeamCloudConnect/{serviceName}/resetPassword'): (params: {serviceName: string}) => Promise<veeamCloudConnect.Task>;
  /**
   * Veeam Backup Repository
   * Delete this backup Repository. 
   */
  delete(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}'): (params: {inventoryName: string, serviceName: string}) => Promise<veeamCloudConnect.Task[]>;
}
/**
 * classic Model
 */