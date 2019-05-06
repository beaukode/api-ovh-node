import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * A structure describing type of a stats hash
 */
export interface CdnWebstorageStatsDataType {
  /**
   */
  date?: Date;
  /**
   */
  value?: Number;
}
/**
 * Type of statistics related to cache
 */
export type CdnWebstorageStatsTypeEnum = 'backend' | 'cdn' | 'quota';
/**
 * A structure with credentials for using openstack account
 */
export interface CdnWebstorageAccountCredentials {
  /**
   */
  endpoint?: string;
  /**
   */
  password?: string;
  /**
   */
  login?: string;
  /**
   */
  tenant?: string;
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
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Period of the statistics
 */
export type CdnWebstorageStatsPeriodEnum = 'day' | 'month' | 'week';
/**
 * Static CDN
 */
export interface CdnWebstorageAccount {
  /**
   */
  server?: string;
  /**
   * value in Bytes
   *
   */
  storageUsage?: Number;
  /**
   */
  domain?: string;
  /**
   * value in Bytes
   *
   */
  storageLimit?: Number;
}
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathscdnwebstorageGET = '/cdn/webstorage' | 
'/cdn/webstorage/{serviceName}' | 
'/cdn/webstorage/{serviceName}/serviceInfos' | 
'/cdn/webstorage/{serviceName}/credentials' | 
'/cdn/webstorage/{serviceName}/statistics';

type PathscdnwebstoragePUT = '/cdn/webstorage/{serviceName}/serviceInfos';

class Apicdnwebstorage extends ApiCommon {
  /**
  Operations about the CDNSTATIC service
  List available services
  **/
  public get(path: '/cdn/webstorage', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Static CDN
  Get this object properties
  **/
  public get(path: '/cdn/webstorage/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<CdnWebstorageAccount>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/webstorage/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  credentials operations
  Gives for customer credentials to accesss swift account
  **/
  public get(path: '/cdn/webstorage/{serviceName}/credentials', pathParams: {serviceName?: string}, queryParams: null): Promise<CdnWebstorageAccountCredentials>;
  /**
  statistics operations
  Return stats about bandwidth consumption
  **/
  public get(path: '/cdn/webstorage/{serviceName}/statistics', pathParams: {serviceName?: string}, queryParams: {period?: CdnWebstorageStatsPeriodEnum, type?: CdnWebstorageStatsTypeEnum}): Promise<CdnWebstorageStatsDataType[]>;
  public get(path: PathscdnwebstorageGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/webstorage/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathscdnwebstoragePUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
}
