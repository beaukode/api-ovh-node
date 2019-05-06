import { ApiCommon } from '@ovh-api/common';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Veeeam Enterprise offer
 */
export interface VeeamVeeamEnterpriseAccount {
  /**
   * This Backup Server IP
   *
   */
  ip?: string;
  /**
   * This Backup Server port
   *
   */
  port?: Number;
  /**
   * Your Veeam Enterprise Service name
   *
   */
  serviceName?: string;
  /**
   * OVH Enterprise Manager IP
   *
   */
  sourceIp?: string;
}
/**
 * Operation with the Enterprise Account
 */
export interface VeeamVeeamEnterpriseTask {
  /**
   * Task completion date
   *
   */
  endDate?: Date;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Task creation date
   *
   */
  startDate?: Date;
  /**
   * Current Task state
   *
   */
  state?: VeeamEnterpriseTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
}
/**
 * All possible states for a Veeam Enterprise Task
 */
export type VeeamEnterpriseTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'toCreate' | 'todo' | 'unfixed' | 'waiting' | 'waitingForChilds';
type PathsVeeamveeamEnterpriseGET = '/veeam/veeamEnterprise/{serviceName}/serviceInfos' | 
'/veeam/veeamEnterprise/{serviceName}' | 
'/veeam/veeamEnterprise/{serviceName}/task/{taskId}' | 
'/veeam/veeamEnterprise/{serviceName}/task' | 
'/veeam/veeamEnterprise';

type PathsVeeamveeamEnterprisePUT = '/veeam/veeamEnterprise/{serviceName}/serviceInfos';

type PathsVeeamveeamEnterprisePOST = '/veeam/veeamEnterprise/{serviceName}/update' | 
'/veeam/veeamEnterprise/{serviceName}/terminate' | 
'/veeam/veeamEnterprise/{serviceName}/confirmTermination' | 
'/veeam/veeamEnterprise/{serviceName}/register';

export class ApiVeeamveeamEnterprise extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Veeeam Enterprise offer
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}', pathParams: {serviceName: string}): Promise<VeeamVeeamEnterpriseAccount>;
  /**
  Operation with the Enterprise Account
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<VeeamVeeamEnterpriseTask>;
  /**
  List the veeam.veeamEnterprise.Task objects
  Tasks associated with Veeam Enterprise
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {name?: string, state?: VeeamEnterpriseTaskStateEnum}): Promise<Number[]>;
  /**
  Operations about the VEEAMENTERPRISE service
  List available services
  **/
  public get(path: '/veeam/veeamEnterprise'): Promise<string[]>;
  public get(path: PathsVeeamveeamEnterpriseGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsVeeamveeamEnterprisePUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  update operations
  Update Veeam enterprise configuration
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/update', pathParams: {serviceName: string}): Promise<VeeamVeeamEnterpriseTask[]>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  register operations
  Register Veeam Backup Server to Veeam Enterprise
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/register', pathParams: {serviceName: string}): Promise<VeeamVeeamEnterpriseTask[]>;
  public post(path: PathsVeeamveeamEnterprisePOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
