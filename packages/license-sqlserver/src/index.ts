import { ApiCommon } from '@ovh-api/common';
/**
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * All options available for SQL Server products
 */
export interface LicenseOrderableSqlServerCompatibilityInfos {
  /**
   */
  version?: LicenseSqlServerVersionEnum;
}
/**
 * Allowed SQL Server versions and their compliant options per matching serviceTypes
 */
export interface LicenseSqlServerOrderConfiguration {
  /**
   */
  orderableVersions?: LicenseOrderableSqlServerCompatibilityInfos[];
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
}
/**
 * All versions for SQL Server product
 */
export type LicenseSqlServerVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_STANDARD_EDITION_4_CPU' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION_4_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_10_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2014_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2014_WEB_EDITION_10_CORES' | 'SQL_SERVER_2014_WEB_EDITION_12_CORES' | 'SQL_SERVER_2014_WEB_EDITION_16_CORES' | 'SQL_SERVER_2014_WEB_EDITION_18_CORES' | 'SQL_SERVER_2014_WEB_EDITION_20_CORES' | 'SQL_SERVER_2014_WEB_EDITION_24_CORES' | 'SQL_SERVER_2014_WEB_EDITION_4_CORES' | 'SQL_SERVER_2014_WEB_EDITION_6_CORES' | 'SQL_SERVER_2014_WEB_EDITION_8_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_10_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_14_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2016_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2016_WEB_EDITION_10_CORES' | 'SQL_SERVER_2016_WEB_EDITION_12_CORES' | 'SQL_SERVER_2016_WEB_EDITION_14_CORES' | 'SQL_SERVER_2016_WEB_EDITION_16_CORES' | 'SQL_SERVER_2016_WEB_EDITION_4_CORES' | 'SQL_SERVER_2016_WEB_EDITION_6_CORES' | 'SQL_SERVER_2016_WEB_EDITION_8_CORES' | 'sql-server-2008-license-standard-edition-2-cpu' | 'sql-server-2008-license-standard-edition-4-cpu' | 'sql-server-2008-license-web-edition-2-cpu' | 'sql-server-2008-license-web-edition-4-cpu' | 'sql-server-2012-license-standard-edition-10-cores' | 'sql-server-2012-license-standard-edition-12-cores' | 'sql-server-2012-license-standard-edition-16-cores' | 'sql-server-2012-license-standard-edition-18-cores' | 'sql-server-2012-license-standard-edition-2-cpu' | 'sql-server-2012-license-standard-edition-20-cores' | 'sql-server-2012-license-standard-edition-24-cores' | 'sql-server-2012-license-standard-edition-32-cores' | 'sql-server-2012-license-standard-edition-4-cores' | 'sql-server-2012-license-standard-edition-6-cores' | 'sql-server-2012-license-standard-edition-8-cores' | 'sql-server-2012-license-web-edition-10-cores' | 'sql-server-2012-license-web-edition-12-cores' | 'sql-server-2012-license-web-edition-16-cores' | 'sql-server-2012-license-web-edition-18-cores' | 'sql-server-2012-license-web-edition-20-cores' | 'sql-server-2012-license-web-edition-24-cores' | 'sql-server-2012-license-web-edition-32-cores' | 'sql-server-2012-license-web-edition-4-cores' | 'sql-server-2012-license-web-edition-6-cores' | 'sql-server-2012-license-web-edition-8-cores' | 'sql-server-2014-license-standard-edition-10-cores' | 'sql-server-2014-license-standard-edition-12-cores' | 'sql-server-2014-license-standard-edition-16-cores' | 'sql-server-2014-license-standard-edition-18-cores' | 'sql-server-2014-license-standard-edition-20-cores' | 'sql-server-2014-license-standard-edition-24-cores' | 'sql-server-2014-license-standard-edition-4-cores' | 'sql-server-2014-license-standard-edition-6-cores' | 'sql-server-2014-license-standard-edition-8-cores' | 'sql-server-2014-license-web-edition-10-cores' | 'sql-server-2014-license-web-edition-12-cores' | 'sql-server-2014-license-web-edition-16-cores' | 'sql-server-2014-license-web-edition-18-cores' | 'sql-server-2014-license-web-edition-20-cores' | 'sql-server-2014-license-web-edition-24-cores' | 'sql-server-2014-license-web-edition-4-cores' | 'sql-server-2014-license-web-edition-6-cores' | 'sql-server-2014-license-web-edition-8-cores' | 'sql-server-2016-license-standard-edition-10-cores' | 'sql-server-2016-license-standard-edition-12-cores' | 'sql-server-2016-license-standard-edition-14-cores' | 'sql-server-2016-license-standard-edition-16-cores' | 'sql-server-2016-license-standard-edition-4-cores' | 'sql-server-2016-license-standard-edition-6-cores' | 'sql-server-2016-license-standard-edition-8-cores' | 'sql-server-2016-license-web-edition-10-cores' | 'sql-server-2016-license-web-edition-12-cores' | 'sql-server-2016-license-web-edition-14-cores' | 'sql-server-2016-license-web-edition-16-cores' | 'sql-server-2016-license-web-edition-4-cores' | 'sql-server-2016-license-web-edition-6-cores' | 'sql-server-2016-license-web-edition-8-cores';
/**
 * All states a license can be in
 */
export type LicenseStateEnum = 'ok' | 'released' | 'terminated' | 'toDeliver';
/**
 * licenses Todos
 */
export interface LicenseTask {
  /**
   * This Task description
   *
   */
  action?: LicenseActionType;
  /**
   * When was this Task done
   *
   */
  doneDate?: string;
  /**
   * The last time this Task was updated
   *
   */
  lastUpdate?: string;
  /**
   * This Task name
   *
   */
  name?: string;
  /**
   * Current Taks status
   *
   */
  status?: LicenseTaskStateEnum;
  /**
   * This Task id
   *
   */
  taskId?: Number;
  /**
   * When was this Task created
   *
   */
  todoDate?: string;
}
/**
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Your SQL Server license
 */
export interface LicenseSqlserverSqlServer {
  /**
   * This license creation date
   *
   */
  creation?: string;
  /**
   * The internal name of your license
   *
   */
  domain?: string;
  /**
   * The ip on which this license is attached
   *
   */
  ip?: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId?: string;
  /**
   * This license state
   *
   */
  status?: LicenseStateEnum;
  /**
   * This license version
   *
   */
  version?: LicenseSqlServerVersionEnum;
}
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
type PathsLicenseSqlserverGET = '/license/sqlserver' | 
'/license/sqlserver/orderableVersions' | 
'/license/sqlserver/{serviceName}' | 
'/license/sqlserver/{serviceName}/serviceInfos' | 
'/license/sqlserver/{serviceName}/tasks' | 
'/license/sqlserver/{serviceName}/tasks/{taskId}';

type PathsLicenseSqlserverPUT = '/license/sqlserver/{serviceName}/serviceInfos';

type PathsLicenseSqlserverPOST = '/license/sqlserver/{serviceName}/confirmTermination' | 
'/license/sqlserver/{serviceName}/terminate';

export class ApiLicenseSqlserver extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/sqlserver'): Promise<string[]>;
  /**
  Get the orderable Sql Server versions
  Get the orderable Sql Server versions
  **/
  public get(path: '/license/sqlserver/orderableVersions', pathParams: undefined, queryParams: {ip?: string}): Promise<LicenseSqlServerOrderConfiguration[]>;
  /**
  Your SQL Server license
  Get this object properties
  **/
  public get(path: '/license/sqlserver/{serviceName}', pathParams: {serviceName: string}): Promise<LicenseSqlserverSqlServer>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/sqlserver/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/sqlserver/{serviceName}/tasks', pathParams: {serviceName: string}, queryParams: {action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/sqlserver/{serviceName}/tasks/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<LicenseTask>;
  public get(path: PathsLicenseSqlserverGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/sqlserver/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseSqlserverPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/sqlserver/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/sqlserver/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseSqlserverPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
