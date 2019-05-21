import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Access Point type the customer can deploy
 */
export type HorizonViewAccessPointTypeEnum = 'privateAccessPoint' | 'publicAccessPoint';
/**
 * You can reach from your virtual desktops, your customer network 
 */
export interface HorizonViewCustomerNetwork {
  /**
   * Customer Network id
   *
   */
  customerNetworkId?: number;
  /**
   * Name of your network
   *
   */
  name?: string;
  /**
   * Customer network
   *
   */
  network?: string;
}
/**
 * You can reach from your virtual desktops, your customer network 
 */
export interface HorizonViewCustomerNetworkPool {
  /**
   * Customer Network id
   *
   */
  customerNetworkId?: number;
  /**
   * Name of your network
   *
   */
  name?: string;
  /**
   * Customer network
   *
   */
  network?: string;
}
/**
 * Horizon As A Service Customer  User
 */
export interface HorizonViewCustomerUser {
  /**
   * Email of your HaaS User
   *
   */
  email?: string;
  /**
   * Customer id
   *
   */
  id?: number;
  /**
   * Customer username of your HaaS User
   *
   */
  username?: string;
}
/**
 * Cloud Desktop Infrastructure Datacenter
 */
export interface HorizonViewDatacenter {
  /**
   * IP of the VDI Active Directory
   *
   */
  activeDirectoryIP?: string;
  /**
   * Domain of the admin infrastructure
   *
   */
  adminDomain?: string;
  /**
   * Next hop to contact the private admin network
   *
   */
  adminNetworkNextHop?: string;
  /**
   * Private network of the admin infrastructure
   *
   */
  adminPrivateNetwork?: string;
  /**
   * Customer interco IP allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.
   *
   */
  customerIntercoIP?: string;
  /**
   * Customer interco netmask allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.
   *
   */
  customerIntercoMask?: string;
  /**
   * Customer interco vlan allows you to communicate between your private infrastructure and your CDI infrastructure throw the vrack.
   *
   */
  customerIntercoVlanId?: number;
  /**
   * Datacenter ids
   *
   */
  datacenterId?: number;
  /**
   * Name of the datacenter
   *
   */
  name?: string;
  /**
   * Domain of your Horizon
   *
   */
  serviceName?: string;
}
/**
 * Horizon View as a Service
 */
export interface HorizonViewDedicatedHorizon {
  /**
   * The location of your administration servers in our datacenter
   *
   */
  masterZone?: HorizonViewZone;
  /**
   * Your Horizon Private Cloud
   *
   */
  privateCloudName?: string;
  /**
   * The location of your datacenter
   *
   */
  privateCloudZone?: HorizonViewZone;
  /**
   * Url of your Dedicated Horizon
   *
   */
  publicUrl?: string;
  /**
   * Current state of your Dedicated Horizon
   *
   */
  state?: HorizonViewStateEnum;
  /**
   * View Storage Accelerator for Vcenter
   *
   */
  storageAccelerator?: boolean;
  /**
   * Version of your Dedicated Horizon
   *
   */
  version?: string;
}
/**
 * List all Active Directories linked to your CDI Active Directory
 */
export interface HorizonViewDomainTrust {
  /**
   * IP of your Active Directory
   *
   */
  activeDirectoryIP?: string;
  /**
   * IP of your first DNS
   *
   */
  dns1?: string;
  /**
   * IP of your second DNS
   *
   */
  dns2?: string;
  /**
   * Name of your private domain
   *
   */
  domain?: string;
  /**
   * Domain trust id
   *
   */
  domainTrustId?: number;
}
/**
 * All informations about access point
 */
export interface HorizonViewPool {
  /**
   * Pool id
   *
   */
  accessPointId?: number;
  /**
   * DHCP netmask in this port group
   *
   */
  dhcpNetmask?: string;
  /**
   * DHCP network in this port group
   *
   */
  dhcpNetwork?: string;
  /**
   * External url of your access point
   *
   */
  externalUrl?: string;
  /**
   * Next hop IP to reach virtual desktops network for public Access Point
   *
   */
  intercoNextHop?: string;
  /**
   * Next hop IP to reach virtual desktops network for private Access Point
   *
   */
  intercoPrivateNextHop?: string;
  /**
   * Port group id
   *
   */
  portGroupId?: string;
  /**
   * Network state
   *
   */
  state?: HorizonViewStateEnum;
  /**
   * Two factor authentication
   *
   */
  twoFA?: boolean;
  /**
   * Pool type
   *
   */
  type?: HorizonViewPoolType;
}
/**
 * Pool type the customer can deploy
 */
export type HorizonViewPoolType = 'hybridPool' | 'privatePool' | 'publicPool';
/**
 * All states a dedicated horizon  can be in
 */
export type HorizonViewStateEnum = 'available' | 'creating' | 'delivered' | 'disabled' | 'error' | 'reserved';
/**
 * Operation on a Horizon View component
 */
export interface HorizonViewTask {
  /**
   * Current progress description
   *
   */
  description?: string;
  /**
   * Task last modification date
   *
   */
  lastModificationDate?: string;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress
   *
   */
  progress?: number;
  /**
   * Current Task state
   *
   */
  state?: HorizonViewTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: number;
}
/**
 * All states a Horizon View  Task can be in
 */
export type HorizonViewTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'fixing' | 'toCancel' | 'toCreate' | 'todo' | 'unknown' | 'waitingForChilds' | 'waitingTodo';
/**
 * Horizon As A Service User
 */
export interface HorizonViewUser {
  /**
   * Username of your HaaS User
   *
   */
  username?: string;
}
/**
 * All zones a Cloud Desktop Infrastructure can be in
 */
export type HorizonViewZone = 'Beauharnois' | 'Roubaix' | 'Strasbourg';
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
  period?: number;
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
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: number[];
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
  serviceId?: number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsHorizonViewGET = '/horizonView' | 
'/horizonView/{serviceName}' | 
'/horizonView/{serviceName}/accessPoint' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/customerNetwork' | 
'/horizonView/{serviceName}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/dedicatedHorizon' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}' | 
'/horizonView/{serviceName}/dedicatedHorizon/task' | 
'/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}' | 
'/horizonView/{serviceName}/dedicatedHorizon/user' | 
'/horizonView/{serviceName}/domainTrust' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}' | 
'/horizonView/{serviceName}/serviceInfos';

type PathsHorizonViewPUT = '/horizonView/{serviceName}/serviceInfos';

type PathsHorizonViewPOST = '/horizonView/{serviceName}/accessPoint' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption' | 
'/horizonView/{serviceName}/confirmTermination' | 
'/horizonView/{serviceName}/customerNetwork' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword' | 
'/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator' | 
'/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator' | 
'/horizonView/{serviceName}/dedicatedHorizon/user/changePassword' | 
'/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties' | 
'/horizonView/{serviceName}/domainTrust' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer' | 
'/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust' | 
'/horizonView/{serviceName}/terminate';

type PathsHorizonViewDELETE = '/horizonView/{serviceName}/accessPoint/{accessPointId}' | 
'/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/customerNetwork/{customerNetworkId}' | 
'/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}';

export class ApiHorizonView extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the HORIZONVIEW service
  List available services
  **/
  public get(path: '/horizonView'): Promise<string[]>;
  /**
  Cloud Desktop Infrastructure Datacenter
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}', params: {serviceName: string}): Promise<HorizonViewDatacenter>;
  /**
  List the horizonView.Pool objects
  Pool associated with this Datacenter
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint', params: {serviceName: string}): Promise<number[]>;
  /**
  All informations about access point
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewPool>;
  /**
  List the horizonView.CustomerNetworkPool objects
  You can reach from the Desktops your private network
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', params: {serviceName: string, accessPointId: number}): Promise<number[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', params: {serviceName: string, accessPointId: number, customerNetworkId: number}): Promise<HorizonViewCustomerNetworkPool>;
  /**
  List the horizonView.CustomerNetwork objects
  You can reach from the Desktops your private network
  **/
  public get(path: '/horizonView/{serviceName}/customerNetwork', params: {serviceName: string}): Promise<number[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', params: {serviceName: string, customerNetworkId: number}): Promise<HorizonViewCustomerNetwork>;
  /**
  Horizon View as a Service
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon', params: {serviceName: string}): Promise<HorizonViewDedicatedHorizon>;
  /**
  List the horizonView.CustomerUser objects
  Account to access to your pool
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser', params: {serviceName: string}): Promise<string[]>;
  /**
  Horizon As A Service Customer  User
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}', params: {serviceName: string, username: string}): Promise<HorizonViewCustomerUser>;
  /**
  List the horizonView.Task objects
  Tasks associated with this Dedicated Horizon
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task', params: {serviceName: string, state?: HorizonViewTaskStateEnum}): Promise<number[]>;
  /**
  Operation on a Horizon View component
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<HorizonViewTask>;
  /**
  Horizon As A Service User
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/dedicatedHorizon/user', params: {serviceName: string}): Promise<HorizonViewUser>;
  /**
  List the horizonView.DomainTrust objects
  List all Active Directories linked to your CDI Active Directory
  **/
  public get(path: '/horizonView/{serviceName}/domainTrust', params: {serviceName: string}): Promise<number[]>;
  /**
  List all Active Directories linked to your CDI Active Directory
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}', params: {serviceName: string, domainTrustId: number}): Promise<HorizonViewDomainTrust>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/horizonView/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsHorizonViewGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/horizonView/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsHorizonViewPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  List the horizonView.Pool objects
  Add new access point to create a new network
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint', params: {serviceName: string}): Promise<HorizonViewTask[]>;
  /**
  changeSessionTimeout operations
  Manage your session Timeout on Unified Access Gateway
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask>;
  /**
  List the horizonView.CustomerNetworkPool objects
  Add a new network 
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask[]>;
  /**
  disableTwoFA operations
  Disable two factor authentication on your pool
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask>;
  /**
  disableWindowsUsernameOption operations
  Disable windows Username option on Unified Access Gateway
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask>;
  /**
  enableTwoFA operations
  Enable two factor authentication on your pool
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask>;
  /**
  enableWindowsUsernameOption operations
  Enable windows Username option on Unified Access Gateway
  **/
  public post(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/horizonView/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  List the horizonView.CustomerNetwork objects
  Add a new network 
  **/
  public post(path: '/horizonView/{serviceName}/customerNetwork', params: {serviceName: string}): Promise<HorizonViewTask[]>;
  /**
  List the horizonView.CustomerUser objects
  Create a new customer user 
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser', params: {serviceName: string}): Promise<HorizonViewTask[]>;
  /**
  changePassword operations
  Change Horizon View Customer  user password
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword', params: {serviceName: string, username: string}): Promise<HorizonViewTask>;
  /**
  disableStorageAccelerator operations
  Disable the View Storage Accelerator option on VCenter
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator', params: {serviceName: string}): Promise<HorizonViewTask>;
  /**
  enableStorageAccelerator operations
  Enable the View Storage Accelerator option on VCenter
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator', params: {serviceName: string}): Promise<HorizonViewTask>;
  /**
  changePassword operations
  Change Horizon View user password
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changePassword', params: {serviceName: string}): Promise<HorizonViewTask>;
  /**
  changeProperties operations
  Change horizon view user properties
  **/
  public post(path: '/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties', params: {serviceName: string}): Promise<HorizonViewTask>;
  /**
  List the horizonView.DomainTrust objects
  Link your Active Directory to your CDI Active Directory
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust', params: {serviceName: string}): Promise<HorizonViewTask[]>;
  /**
  addChildDomain operations
  Add a child domain for this domain.
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain', params: {serviceName: string, domainTrustId: number}): Promise<HorizonViewTask>;
  /**
  addDomainController operations
  Add a Domain Controller for this domain.
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController', params: {serviceName: string, domainTrustId: number}): Promise<HorizonViewTask>;
  /**
  addDomainUserOnComposer operations
  Add a domain user to add your desktop in your Active Directory
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer', params: {serviceName: string, domainTrustId: number}): Promise<HorizonViewTask>;
  /**
  createTrust operations
  Change Horizon View user password
  **/
  public post(path: '/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust', params: {serviceName: string, domainTrustId: number}): Promise<HorizonViewTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/horizonView/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsHorizonViewPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  All informations about access point
  Delete this access point 
  **/
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}', params: {serviceName: string, accessPointId: number}): Promise<HorizonViewTask[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Delete this Customer Network
  **/
  public delete(path: '/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}', params: {serviceName: string, accessPointId: number, customerNetworkId: number}): Promise<HorizonViewTask[]>;
  /**
  You can reach from your virtual desktops, your customer network 
  Delete this Customer Network
  **/
  public delete(path: '/horizonView/{serviceName}/customerNetwork/{customerNetworkId}', params: {serviceName: string, customerNetworkId: number}): Promise<HorizonViewTask[]>;
  /**
  Horizon As A Service Customer  User
  Delete this Customer User
  **/
  public delete(path: '/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}', params: {serviceName: string, username: string}): Promise<HorizonViewTask[]>;
  public delete(path: PathsHorizonViewDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}