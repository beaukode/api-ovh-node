import { ApiCommon } from '@ovh-api/common';
/**
 * Plesk instance meta details
 */
export interface HostingResellerMetaType {
  /**
   * Customer email
   *
   */
  email?: string;
  /**
   * Region hosting the cloud instance
   *
   */
  region?: string;
}
/**
 * Reseller
 */
export interface HostingResellerProduct {
  /**
   * Current action done on the instance
   *
   */
  action?: string;
  /**
   * Ip address of the Plesk instance
   *
   */
  ip?: string;
  /**
   * Additional information about the plesk
   *
   */
  meta?: HostingResellerMetaType;
  /**
   * Progression of an action on the instance if any
   *
   */
  progress?: Number;
  /**
   * Status of the instance
   *
   */
  status?: string;
  /**
   * Reseller flavor
   *
   */
  type?: HostingResellerResellerTypeEnum;
  /**
   * Details about the plesk type
   *
   */
  typeDetail?: HostingResellerProductType;
  /**
   * Plesk server address
   *
   */
  url?: string;
}
/**
 * Plesk instance type details
 */
export interface HostingResellerProductType {
  /**
   * Number of allowed customers
   *
   */
  consumers?: Number;
  /**
   * Instance's cpu
   *
   */
  cpu?: string;
  /**
   * Number of allowed databases
   *
   */
  databases?: Number;
  /**
   * Disk size of the instance (in GB)
   *
   */
  diskSize?: Number;
  /**
   * Number of allowed email accounts
   *
   */
  emailAccounts?: Number;
  /**
   * Instance's ram (in GB)
   *
   */
  ram?: Number;
  /**
   * Type name
   *
   */
  type?: string;
  /**
   * Number of vCore
   *
   */
  vCores?: Number;
  /**
   * Number of allowed websites
   *
   */
  websites?: Number;
}
/**
 * Reseller type
 */
export type HostingResellerResellerTypeEnum = 'TYPE1' | 'TYPE2' | 'TYPE3' | 'TYPE4' | 'TYPE5';
/**
 * Possible values for language type
 */
export type ResellerPleskLanguageTypeEnum = 'ar' | 'zh-CN' | 'zh-TW' | 'cs-CZ' | 'da-DK' | 'nl-NL' | 'en-US' | 'fi-FI' | 'fr-FR' | 'de-DE' | 'el-GR' | 'he-IL' | 'hu-HU' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'ms-MY' | 'nb-NO' | 'pl-PL' | 'pt-BR' | 'pt-PT' | 'ro-RO' | 'ru-RU' | 'es-ES' | 'sv-SE' | 'tl-PH' | 'th-TH' | 'tr-TR' | 'uk-UA' | 'vi-VN';
/**
 * Reseller snapshot
 */
export interface ResellerSnapshot {
  /**
   * Snapshot creation date
   *
   */
  creationDate?: Date;
  /**
   * Snapshot id
   *
   */
  id?: string;
  /**
   * Snapshot name
   *
   */
  snashotName?: string;
  /**
   * Snapshot type
   *
   */
  type?: ResellerSnapshotTypeEnum;
}
/**
 * Possible values for snapshot type
 */
export type ResellerSnapshotTypeEnum = 'automatic' | 'manual';
/**
 * Reseller task
 */
export interface ResellerTask {
  /**
   * Task current step
   *
   */
  currentStep?: string;
  /**
   * Task expected done date
   *
   */
  expectedDoneDate?: Date;
  /**
   * Task id
   *
   */
  id?: string;
  /**
   * Task last update date
   *
   */
  lastUpdateDate?: Date;
  /**
   * Linked product
   *
   */
  productDomain?: string;
  /**
   * Task percentage progression
   *
   */
  progress?: Number;
  /**
   * Task name
   *
   */
  taskName?: string;
  /**
   * Task status
   *
   */
  taskStatus?: ResellerTaskTypeEnum;
}
/**
 * Possible values for task status
 */
export type ResellerTaskTypeEnum = 'done' | 'error' | 'doing' | 'todo' | 'unknown';
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
type PathsHostingresellerGET = '/hosting/reseller/{serviceName}/serviceInfos' | 
'/hosting/reseller/{serviceName}' | 
'/hosting/reseller/{serviceName}/task' | 
'/hosting/reseller/{serviceName}/task/{taskId}' | 
'/hosting/reseller/{serviceName}/resetPasswordUrl' | 
'/hosting/reseller/{serviceName}/snapshot/{snapshotId}' | 
'/hosting/reseller/{serviceName}/snapshot' | 
'/hosting/reseller';

type PathsHostingresellerPUT = '/hosting/reseller/{serviceName}/serviceInfos';

type PathsHostingresellerPOST = '/hosting/reseller/{serviceName}/reboot' | 
'/hosting/reseller/{serviceName}/reverse' | 
'/hosting/reseller/{serviceName}/changeContact' | 
'/hosting/reseller/{serviceName}/email' | 
'/hosting/reseller/{serviceName}/language' | 
'/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore' | 
'/hosting/reseller/{serviceName}/snapshot' | 
'/hosting/reseller/{serviceName}/reinstall';

export class ApiHostingreseller extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/hosting/reseller/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Reseller
  Get this object properties
  **/
  public get(path: '/hosting/reseller/{serviceName}', pathParams: {serviceName: string}): Promise<HostingResellerProduct>;
  /**
  Reseller.list_task
  Get list of tasks
  **/
  public get(path: '/hosting/reseller/{serviceName}/task', pathParams: {serviceName: string}): Promise<ResellerTask[]>;
  /**
  Reseller.get_task
  Get task information given its id
  **/
  public get(path: '/hosting/reseller/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: string}): Promise<ResellerTask>;
  /**
  Reseller.resetPassword
  Get reset instance password url
  **/
  public get(path: '/hosting/reseller/{serviceName}/resetPasswordUrl', pathParams: {serviceName: string}): Promise<string>;
  /**
  Reseller.get_snapshot
  Detail of a snapshot
  **/
  public get(path: '/hosting/reseller/{serviceName}/snapshot/{snapshotId}', pathParams: {serviceName: string, snapshotId: string}): Promise<ResellerSnapshot>;
  /**
  Reseller.list_snapshot
  List instance's current snapshots
  **/
  public get(path: '/hosting/reseller/{serviceName}/snapshot', pathParams: {serviceName: string}): Promise<ResellerSnapshot[]>;
  /**
  Operations about the HOSTING_RESELLER service
  List available services
  **/
  public get(path: '/hosting/reseller'): Promise<string[]>;
  public get(path: PathsHostingresellerGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/hosting/reseller/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsHostingresellerPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Reseller.reboot
  Restart instance
  **/
  public post(path: '/hosting/reseller/{serviceName}/reboot', pathParams: {serviceName: string}, bodyParams: {hard?: boolean}): Promise<string>;
  /**
  Reseller.set_reverse
  Set new reverse to ip
  **/
  public post(path: '/hosting/reseller/{serviceName}/reverse', pathParams: {serviceName: string}): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/hosting/reseller/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Reseller.change_email
  Change user email
  **/
  public post(path: '/hosting/reseller/{serviceName}/email', pathParams: {serviceName: string}): Promise<string>;
  /**
  Reseller.change_language
  Change language of the Plesk instance
  **/
  public post(path: '/hosting/reseller/{serviceName}/language', pathParams: {serviceName: string}): Promise<string>;
  /**
  Reseller.restore_snapshot
  Restore a snapshot
  **/
  public post(path: '/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore', pathParams: {serviceName: string, snapshotId: string}): Promise<string>;
  /**
  Reseller.list_snapshot
  Make manual snapshot
  **/
  public post(path: '/hosting/reseller/{serviceName}/snapshot', pathParams: {serviceName: string}): Promise<string>;
  /**
  Reseller.reinstall
  Reinstall instance
  **/
  public post(path: '/hosting/reseller/{serviceName}/reinstall', pathParams: {serviceName: string}): Promise<string>;
  public post(path: PathsHostingresellerPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
