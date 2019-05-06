import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * All states a Desktop As A Service Task can be in
 */
export type DeskaasTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'toCancel' | 'toCreate' | 'todo' | 'unknown' | 'waitingForChilds' | 'waitingTodo';
/**
 * All states a Dedicated Cloud User can be in
 */
export type DeskaasUserStateEnum = 'creating' | 'deleting' | 'delivered' | 'error';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DeskaasPasswordPolicy {
  /**
   * Whether or not an uppercase letter (A-Z) is mandatory in the password
   *
   */
  uppercaseLetterMandatory?: boolean;
  /**
   * Minimum lenght of the password
   *
   */
  minLength?: Number;
  /**
   * Whether or not a letter (a-z or A-Z) is mandatory in the password
   *
   */
  letterMandatory?: boolean;
  /**
   * Whether or not a special character (\W or _) is mandatory in the password
   *
   */
  specialMandatory?: boolean;
  /**
   * Whether or not a digit (0-9) is mandatory in the password
   *
   */
  digitMandatory?: boolean;
  /**
   * Whether or not a lowercase letter (a-z) is mandatory in the password
   *
   */
  lowercaseLetterMandatory?: boolean;
  /**
   * Maximum lenght of the password
   *
   */
  maxLength?: Number;
  /**
   * List of denied characters in the password
   *
   */
  deniedChars?: string[];
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
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
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Operation on a Desktop As A Service component
 */
export interface DeskaasTask {
  /**
   * Task last modification date
   *
   */
  lastModificationDate?: Date;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress description
   *
   */
  description?: string;
  /**
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Current Task state
   *
   */
  state?: DeskaasTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
}
/**
 * Desktop As A Service User
 */
export interface DeskaasUser {
  /**
   */
  name?: string;
  /**
   */
  activationState?: DeskaasUserActivationStateEnum;
  /**
   */
  state?: DeskaasUserStateEnum;
  /**
   */
  userId?: Number;
  /**
   */
  email?: string;
}
/**
 * All activation states a Dedicated Cloud User can have
 */
export type DeskaasUserActivationStateEnum = 'disabled' | 'disabling' | 'enabled' | 'enabling' | 'toDisable' | 'toEnable';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * Desktop As A Service
 */
export interface DeskaasDeskaas {
  /**
   * Reference of Virtual Desktop
   *
   */
  reference?: string;
  /**
   * Operating system of desktop
   *
   */
  os?: string;
  /**
   * Vcpu allocated to desktop
   *
   */
  vcpu?: Number;
  /**
   * Outgoing ip
   *
   */
  ip?: string;
  /**
   * Alias determined by the use
   *
   */
  alias?: string;
  /**
   * Current state of your Virtual Desktop
   *
   */
  state?: DeskaasStateEnum;
  /**
   * Data allocated to desktop
   *
   */
  dataDisk?: ComplexTypeUnitAndValue<Number>;
  /**
   * Service name of your Desktop As A Service
   *
   */
  serviceName?: string;
  /**
   * URL to connect to the virtualDesktop
   *
   */
  url?: string;
  /**
   * Profile of Virtual Desktop
   *
   */
  planCode?: string;
  /**
   * RAM allocated to desktop
   *
   */
  ram?: ComplexTypeUnitAndValue<Number>;
}
/**
 * All states a Desktop As A Service can be in
 */
export type DeskaasStateEnum = 'available' | 'delivered' | 'disabled' | 'error' | 'reserved';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathsdeskaasGET = '/deskaas/{serviceName}/passwordPolicy' | 
'/deskaas/{serviceName}/serviceInfos' | 
'/deskaas/{serviceName}/user/task' | 
'/deskaas/{serviceName}/user/task/{taskId}' | 
'/deskaas/{serviceName}/user' | 
'/deskaas/{serviceName}/task' | 
'/deskaas/{serviceName}/task/{taskId}' | 
'/deskaas/{serviceName}' | 
'/deskaas';

type PathsdeskaasPUT = '/deskaas/{serviceName}/serviceInfos';

type PathsdeskaasPOST = '/deskaas/{serviceName}/confirmTermination' | 
'/deskaas/{serviceName}/changeContact' | 
'/deskaas/{serviceName}/refresh' | 
'/deskaas/{serviceName}/console' | 
'/deskaas/{serviceName}/user/changePassword' | 
'/deskaas/{serviceName}/user/changeProperties' | 
'/deskaas/{serviceName}/changeAlias' | 
'/deskaas/{serviceName}/reboot' | 
'/deskaas/{serviceName}/upgrade' | 
'/deskaas/{serviceName}/terminate';

class Apideskaas extends ApiCommon {
  /**
  passwordPolicy operations
  Get the current password policy for your Desktop As A Service
  **/
  public get(path: '/deskaas/{serviceName}/passwordPolicy', pathParams: {serviceName?: string}, queryParams: null): Promise<DeskaasPasswordPolicy>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the deskaas.Task objects
  Tasks associated with this User
  **/
  public get(path: '/deskaas/{serviceName}/user/task', pathParams: {serviceName?: string}, queryParams: {state?: DeskaasTaskStateEnum}): Promise<Number[]>;
  /**
  Operation on a Desktop As A Service component
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/user/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DeskaasTask>;
  /**
  Desktop As A Service User
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null): Promise<DeskaasUser>;
  /**
  List the deskaas.Task objects
  Tasks associated with this Desktop As A Service
  **/
  public get(path: '/deskaas/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {state?: DeskaasTaskStateEnum}): Promise<Number[]>;
  /**
  Operation on a Desktop As A Service component
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DeskaasTask>;
  /**
  Desktop As A Service
  Get this object properties
  **/
  public get(path: '/deskaas/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DeskaasDeskaas>;
  /**
  Operations about the DESKAAS service
  List available services
  **/
  public get(path: '/deskaas', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsdeskaasGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/deskaas/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsdeskaasPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/deskaas/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/deskaas/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  refresh operations
  Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.
  **/
  public post(path: '/deskaas/{serviceName}/refresh', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  console operations
  New console access
  **/
  public post(path: '/deskaas/{serviceName}/console', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  changePassword operations
  Change Desktop As A Service user password
  **/
  public post(path: '/deskaas/{serviceName}/user/changePassword', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  changeProperties operations
  Change Desktop As A Service user properties
  **/
  public post(path: '/deskaas/{serviceName}/user/changeProperties', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  changeAlias operations
  Change the Virtual Desktop alias
  **/
  public post(path: '/deskaas/{serviceName}/changeAlias', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  reboot operations
  Reboot the Operating system of the Cloud Desktop.
  **/
  public post(path: '/deskaas/{serviceName}/reboot', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  upgrade operations
  Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop
  **/
  public post(path: '/deskaas/{serviceName}/upgrade', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DeskaasTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/deskaas/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public post(path: PathsdeskaasPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}
