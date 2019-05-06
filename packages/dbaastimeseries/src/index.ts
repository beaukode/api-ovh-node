import { ApiCommon } from '@ovh-api/common';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Project quotas
 */
export type PaasTimeseriesQuotaTypeEnum = 'ddp' | 'mads';
/**
 * Tokens permissions
 */
export type PaasTimeseriesPermissionEnum = 'READ' | 'WRITE';
/**
 * Consumption
 */
export interface PaasTimeseriesConsumption {
  /**
   * Total
   *
   */
  total?: OrderPrice;
  /**
   * Timestamp of consumption generation
   *
   */
  generated?: Date;
  /**
   * Consumption start date
   *
   */
  from?: Date;
  /**
   * Consumption end date
   *
   */
  to?: Date;
  /**
   * List of consumption items
   *
   */
  items?: PaasTimeseriesConsumptionItem[];
}
/**
 * Tag
 */
export interface PaasTimeseriesTag {
  /**
   * Value
   *
   */
  value?: string;
  /**
   * Key
   *
   */
  key?: string;
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
 * Timeseries project
 */
export interface TimeseriesProject {
  /**
   * region where your data are located
   *
   */
  regionId?: string;
  /**
   * name of your project
   *
   */
  displayName?: string;
  /**
   * description of your project
   *
   */
  description?: string;
  /**
   * subscribed offer
   *
   */
  offerId?: string;
  /**
   * timeseries Project id
   *
   */
  serviceName?: string;
  /**
   * project status
   *
   */
  status?: TimeseriesStatusTypeEnum;
}
/**
 * Region
 */
export interface PaasTimeseriesRegion {
  /**
   * Name
   *
   */
  displayName?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * URL
   *
   */
  url?: string;
}
/**
 * Project
 */
export interface PaasTimeseriesProject {
  /**
   * Name
   *
   */
  displayName?: string;
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Id
   *
   */
  serviceName?: string;
  /**
   * Region
   *
   */
  region?: PaasTimeseriesRegion;
}
/**
 * Key
 */
export interface PaasTimeseriesKey {
  /**
   * List of permissions
   *
   */
  permissions?: PaasTimeseriesPermissionEnum[];
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Secret part
   *
   */
  secret?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * List of tags
   *
   */
  tags?: PaasTimeseriesTag[];
}
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
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Quota
 */
export interface PaasTimeseriesQuota {
  /**
   * Current value
   *
   */
  current?: Number;
  /**
   * Max allowed
   *
   */
  max?: Number;
  /**
   * Type (ie: mads, ddp, ...)
   *
   */
  type?: PaasTimeseriesQuotaTypeEnum;
}
/**
 * The current status for the project
 */
export type TimeseriesStatusTypeEnum = 'ACTIVE' | 'CREATION' | 'DELETED' | 'UNCONFIGURED';
/**
 * Description not available
 */
export interface PaasTimeseriesOpenTSDBToken {
  /**
   * protocol
   *
   */
  protocol?: string;
  /**
   * Description
   *
   */
  description?: string;
  /**
   */
  permission?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * Secret part
   *
   */
  secret?: string;
  /**
   * List of tags
   *
   */
  tags?: PaasTimeseriesTag[];
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * ConsumptionItem
 */
export interface PaasTimeseriesConsumptionItem {
  /**
   * Unit price
   *
   */
  unitPrice?: OrderPrice;
  /**
   * Metric name
   *
   */
  metricName?: PaasTimeseriesConsumptionItemMetricNameEnum;
  /**
   * Quantity consumed in unit
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Price
   *
   */
  price?: OrderPrice;
}
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
}
/**
 * Token to use Warp10 functions
 */
export interface PaasTimeseriesWarp10Token {
  /**
   * maximum number of operations allowed
   *
   */
  maxOps?: Number;
  /**
   * protocol
   *
   */
  protocol?: string;
  /**
   * Timestamp of expiration of the token
   *
   */
  expiryTimestamp?: Date;
  /**
   * permission
   *
   */
  permissions?: string;
  /**
   * Description
   *
   */
  description?: string;
  /**
   * Maximum depth of the stack allowed
   *
   */
  maxFetch?: Number;
  /**
   * Secret part
   *
   */
  secret?: string;
  /**
   * Id
   *
   */
  id?: string;
  /**
   * Maximum number of GTS retrieved allowed
   *
   */
  maxGts?: Number;
  /**
   * Query token used to authentificate queries
   *
   */
  queryToken?: string;
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
 * Metric name
 */
export type PaasTimeseriesConsumptionItemMetricNameEnum = 'storage' | 'input' | 'output';
type PathsdbaastimeseriesGET = '/dbaas/timeseries/region' | 
'/dbaas/timeseries' | 
'/dbaas/timeseries/{serviceName}/quota' | 
'/dbaas/timeseries/{serviceName}/token/opentsdb' | 
'/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}' | 
'/dbaas/timeseries/{serviceName}' | 
'/dbaas/timeseries/{serviceName}/serviceInfos' | 
'/dbaas/timeseries/{serviceName}/consumption' | 
'/dbaas/timeseries/{serviceName}/key' | 
'/dbaas/timeseries/{serviceName}/key/{keyId}';

type PathsdbaastimeseriesPUT = '/dbaas/timeseries/{serviceName}' | 
'/dbaas/timeseries/{serviceName}/serviceInfos' | 
'/dbaas/timeseries/{serviceName}/key/{keyId}';

type PathsdbaastimeseriesPOST = '/dbaas/timeseries/{serviceName}/token/opentsdb' | 
'/dbaas/timeseries/{serviceName}/setup' | 
'/dbaas/timeseries/{serviceName}/key' | 
'/dbaas/timeseries/{serviceName}/changeContact';

type PathsdbaastimeseriesDELETE = '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}' | 
'/dbaas/timeseries/{serviceName}/key/{keyId}';

class Apidbaastimeseries extends ApiCommon {
  /**
  Regions
  Get available regions
  **/
  public get(path: '/dbaas/timeseries/region', pathParams: null, queryParams: null): Promise<PaasTimeseriesRegion[]>;
  /**
  Operations about the PAAS_TIMESERIES service
  List available services
  **/
  public get(path: '/dbaas/timeseries', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Quotas
  Get quotas
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/quota', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesQuota[]>;
  /**
  OpenTSDBTokens
  Get OpenTSDB tokens
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesOpenTSDBToken[]>;
  /**
  Key
  Get a OpenTSDB token
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null): Promise<PaasTimeseriesOpenTSDBToken>;
  /**
  Timeseries project
  Get this object properties
  **/
  public get(path: '/dbaas/timeseries/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<TimeseriesProject>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Consumption
  Get consumption
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/consumption', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesConsumption[]>;
  /**
  Keys
  Get keys for a project
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/key', pathParams: {serviceName?: string}, queryParams: null): Promise<PaasTimeseriesKey[]>;
  /**
  Key
  Get a key
  **/
  public get(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null): Promise<PaasTimeseriesKey>;
  public get(path: PathsdbaastimeseriesGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Timeseries project
  Alter this object properties
  **/
  public put(path: '/dbaas/timeseries/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dbaas/timeseries/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Key
  Create a key
  **/
  public put(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesKey>;
  public put(path: PathsdbaastimeseriesPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  OpenTSDBTokens
  Create a OpenTSDB token
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/token/opentsdb', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesOpenTSDBToken>;
  /**
  Setup your project on our platform
  Setup a project
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/setup', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesProject>;
  /**
  Keys
  Create a key for a project
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/key', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<PaasTimeseriesKey>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dbaas/timeseries/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  public post(path: PathsdbaastimeseriesPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Key
  Delete an OpenTSDB token
  **/
  public delete(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null, bodyParams: null): Promise<boolean>;
  /**
  Key
  Delete a OpenTSDB token
  **/
  public delete(path: '/dbaas/timeseries/{serviceName}/key/{keyId}', pathParams: {serviceName?: string, keyId?: string}, queryParams: null, bodyParams: null): Promise<boolean>;
  public delete(path: PathsdbaastimeseriesDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
