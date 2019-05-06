import { ApiCommon } from '@ovh-api/common';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  value?: T;
  /**
   */
  key?: string;
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
 * Description for available order capacities following an offer
 */
export interface HostingPrivateDatabaseAvailableOrderCapacities {
  /**
   * Offer
   *
   */
  offer?: HostingPrivateDatabaseOfferEnum;
  /**
   * A list of datacenter available for this offer
   *
   */
  datacenter?: HostingPrivateDatabaseDatacenterEnum[];
  /**
   * A list of version available for this offer
   *
   */
  version?: HostingPrivateDatabaseAvailableVersionEnum[];
  /**
   * A list of ram size available for this offer
   *
   */
  ram?: HostingPrivateDatabaseAvailableRamSizeEnum[];
}
/**
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
/**
 * Private database available versions
 */
export type HostingPrivateDatabaseAvailableVersionEnum = 'mariadb_10.1' | 'mariadb_10.2' | 'mongodb_3.4' | 'mongodb_4.0' | 'mysql_4.1' | 'mysql_5.0' | 'mysql_5.1' | 'mysql_5.5' | 'mysql_5.6' | 'mysql_5.7' | 'postgresql_10' | 'postgresql_11' | 'postgresql_9.4' | 'postgresql_9.5' | 'postgresql_9.6' | 'redis_3.2' | 'redis_4.0';
/**
 * Private database capability
 */
export interface HostingPrivateDatabaseCapability {
  /**
   * Can the object be created
   *
   */
  create?: boolean;
  /**
   * Can the object be updated
   *
   */
  update?: boolean;
  /**
   * Can the object be deleted
   *
   */
  delete?: boolean;
  /**
   * Object name
   *
   */
  object?: string;
}
/**
 * Configuration detail property
 */
export interface HostingPrivateDatabaseConfigurationDetail {
  /**
   * Configuration unit type
   *
   */
  unit?: string;
  /**
   * Configuration default value
   *
   */
  defaultValue?: string;
  /**
   * Configuration last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Configuration description
   *
   */
  description?: string;
  /**
   * Configuration available values
   *
   */
  availableValues?: string[];
  /**
   * Configuration value type
   *
   */
  type?: HostingPrivateDatabaseConfigurationDetailType;
  /**
   * Configuration current value
   *
   */
  value?: string;
  /**
   * Configuration key name
   *
   */
  key?: string;
}
/**
 * Configuration detail type
 */
export type HostingPrivateDatabaseConfigurationDetailType = 'boolean' | 'number' | 'string';
/**
 * Configuration status
 */
export type HostingPrivateDatabaseConfigurationStatus = 'applied' | 'updating';
/**
 * Extension status
 */
export type HostingPrivateDatabaseDatabaseExtensionStatus = 'disabled' | 'disabling' | 'enabled' | 'enabling';
/**
 * User granted to a database
 */
export interface HostingPrivateDatabaseDatabaseUser {
  /**
   * The grantId associated for this databaseName and this userName
   *
   */
  grantId?: Number;
  /**
   * User's rights on this database
   *
   */
  grantType?: HostingPrivateDatabaseGrantGrantEnum;
  /**
   * User's name granted on this database
   *
   */
  userName?: string;
}
/**
 * Available datacenters
 */
export type HostingPrivateDatabaseDatacenterEnum = 'gra1' | 'gra2' | 'p19';
/**
 * Parameters required to query metrics from OpenTSDB
 */
export interface HostingPrivateDatabaseGraphEndpoint {
  /**
   * A read-only token ID
   *
   */
  readTokenId?: string;
  /**
   * A read-only token
   *
   */
  readToken?: string;
  /**
   * The OpenTSDB host
   *
   */
  host?: string;
}
/**
 * Available offers
 */
export type HostingPrivateDatabaseOfferEnum = 'classic' | 'public';
/**
 * OOM kill informations
 */
export interface HostingPrivateDatabaseOom {
  /**
   * Date of the OOM kill
   *
   */
  date?: Date;
  /**
   * Memory size reached
   *
   */
  sizeReached?: Number;
}
/**
 * Private database state
 */
export type HostingPrivateDatabaseStateEnum = 'detached' | 'restartPending' | 'startPending' | 'started' | 'stopPending' | 'stopped';
/**
 * Temporary url informations
 */
export interface HostingPrivateDatabaseTemporaryLogsLink {
  /**
   * Temporary url
   *
   */
  url?: string;
  /**
   * Temporary url expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Private database type
 */
export type HostingPrivateDatabaseTypeEnum = 'mariadb' | 'mongodb' | 'mysql' | 'postgresql' | 'redis';
/**
 * Databases linked to an user
 */
export interface HostingPrivateDatabaseUserDatabase {
  /**
   * The grantId associated to this userName for this databaseName
   *
   */
  grantId?: Number;
  /**
   * Database's name linked to this user
   *
   */
  databaseName?: string;
  /**
   * Grant of this user for this database
   *
   */
  grantType?: HostingPrivateDatabaseGrantGrantEnum;
}
/**
 * Whitelist status
 */
export type HostingPrivateDatabaseWhitelistStatus = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Grant on a database for a specific user
 */
export type HostingPrivateDatabaseGrantGrantEnum = 'admin' | 'none' | 'ro' | 'rw';
/**
 * Task's function
 */
export type HostingPrivateDatabaseTaskFunctionEnum = 'boot' | 'changeFtpPassword' | 'changeRam' | 'changeRootPassword' | 'changeVersion' | 'configuration/update' | 'create' | 'database/create' | 'database/delete' | 'database/dump' | 'database/dump/delete' | 'database/extension/create' | 'database/extension/delete' | 'database/import' | 'database/restore' | 'database/wizard' | 'delete' | 'grant/create' | 'grant/delete' | 'grant/update' | 'halt' | 'install' | 'refresh' | 'reopen' | 'restart' | 'restore' | 'start' | 'stop' | 'suspend' | 'user/changePassword' | 'user/create' | 'user/delete' | 'whitelist/create' | 'whitelist/delete' | 'whitelist/update';
/**
 * Task's status
 */
export type HostingPrivateDatabaseTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'init' | 'todo';
/**
 * Configuration
 */
export interface HostingPrivateDatabaseConfiguration {
  /**
   * Last update date
   *
   */
  lastUpdate?: Date;
  /**
   * Configuration full details
   *
   */
  details?: HostingPrivateDatabaseConfigurationDetail[];
  /**
   * Configuration linked task id
   *
   */
  taskId?: string;
  /**
   * Configuration status
   *
   */
  status?: HostingPrivateDatabaseConfigurationStatus;
}
/**
 * Private database
 */
export interface HostingPrivateDatabaseService {
  /**
   * Private database server name
   *
   */
  server?: string;
  /**
   * Private database ftp port
   *
   */
  portFtp?: Number;
  /**
   * Date of the last data synchronization
   *
   */
  lastCheck?: Date;
  /**
   * Private database capabilities
   *
   */
  capabilities?: HostingPrivateDatabaseCapability[];
  /**
   * Set the name displayed in customer panel for your private database (max 50 chars)
   *
   */
  displayName?: string;
  /**
   * Private database ftp hostname
   *
   */
  hostnameFtp?: string;
  /**
   * Private database ip
   *
   */
  ip?: string;
  /**
   * Parameters required to query metrics from OpenTSDB
   *
   */
  graphEndpoint?: HostingPrivateDatabaseGraphEndpoint;
  /**
   * Number of cpu on your private database
   *
   */
  cpu?: Number;
  /**
   * Datacenter where this private database is located
   *
   */
  datacenter?: HostingPrivateDatabaseDatacenterEnum;
  /**
   * Private database type
   *
   */
  type?: HostingPrivateDatabaseTypeEnum;
  /**
   * Return the TLS certificate authority used by the private database
   *
   */
  tlsCa?: string;
  /**
   * Service name
   *
   */
  serviceName?: string;
  /**
   * Private database version
   *
   */
  version?: HostingPrivateDatabaseAvailableVersionEnum;
  /**
   * Private database version number
   *
   */
  versionNumber?: Number;
  /**
   * Type of the private database offer
   *
   */
  offer?: HostingPrivateDatabaseOfferEnum;
  /**
   * URL for the graphical user interface
   *
   */
  guiURL?: string;
  /**
   * Private database hostname
   *
   */
  hostname?: string;
  /**
   * Private database service port
   *
   */
  port?: Number;
  /**
   * Infrastructure where service was stored
   *
   */
  infrastructure?: string;
  /**
   * Total space used on your private database
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Private database state
   *
   */
  state?: HostingPrivateDatabaseStateEnum;
  /**
   * Space allowed on your private database
   *
   */
  quotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Amount of ram on your private database
   *
   */
  ram?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Databases
 */
export interface HostingPrivateDatabaseDatabase {
  /**
   * Database name
   *
   */
  databaseName?: string;
  /**
   * Space used by the database
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Creation date of the database
   *
   */
  creationDate?: Date;
  /**
   * Time of the next backup ( every day )
   *
   */
  backupTime?: Date;
  /**
   * Users granted to this database
   *
   */
  users?: HostingPrivateDatabaseDatabaseUser[];
}
/**
 * Dump
 */
export interface HostingPrivateDatabaseDatabaseDump {
  /**
   * Dump of this database name
   *
   */
  databaseName?: string;
  /**
   * Automatic deletion date of the dump
   *
   */
  deletionDate?: Date;
  /**
   * Dump id
   *
   */
  id?: Number;
  /**
   * Creation date of the dump
   *
   */
  creationDate?: Date;
  /**
   * Dump url access
   *
   */
  url?: string;
}
/**
 * Databases extension
 */
export interface HostingPrivateDatabaseDatabaseExtension {
  /**
   * Extension name
   *
   */
  extensionName?: string;
  /**
   * Name of required extensions to enable this one
   *
   */
  requiredExtensions?: string[];
  /**
   * Extension description
   *
   */
  description?: string;
  /**
   * Extension status
   *
   */
  status?: HostingPrivateDatabaseDatabaseExtensionStatus;
}
/**
 * Dump
 */
export interface HostingPrivateDatabaseDump {
  /**
   * Dump of this database name
   *
   */
  databaseName?: string;
  /**
   * Automatic deletion date of the dump
   *
   */
  deletionDate?: Date;
  /**
   * Dump id
   *
   */
  dumpId?: Number;
  /**
   * Creation date of the dump
   *
   */
  creationDate?: Date;
  /**
   * Dump orphan flag ( true if database does not exists )
   *
   */
  orphan?: boolean;
  /**
   * Dump url access
   *
   */
  url?: string;
}
/**
 * Grants
 */
export interface HostingPrivateDatabaseGrant {
  /**
   * Database name where grant is set
   *
   */
  databaseName?: string;
  /**
   * Grant set
   *
   */
  grant?: HostingPrivateDatabaseGrantGrantEnum;
  /**
   * Creation date of the grant
   *
   */
  creationDate?: Date;
}
/**
 * Tasks
 */
export interface HostingPrivateDatabaseTask {
  /**
   * Database name on which the task is working
   *
   */
  databaseName?: string;
  /**
   * Function name
   *
   */
  function?: HostingPrivateDatabaseTaskFunctionEnum;
  /**
   * DumpId on which the task is working
   *
   */
  dumpId?: Number;
  /**
   * Last update
   *
   */
  lastUpdate?: Date;
  /**
   * The id of the task
   *
   */
  id?: Number;
  /**
   * User name on which the task is working
   *
   */
  userName?: string;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * Task status
   *
   */
  status?: HostingPrivateDatabaseTaskStatusEnum;
}
/**
 * Users
 */
export interface HostingPrivateDatabaseUser {
  /**
   * Databases granted for this user
   *
   */
  databases?: HostingPrivateDatabaseUserDatabase[];
  /**
   * Creation date of the user
   *
   */
  creationDate?: Date;
  /**
   * User name used to connect to your databases
   *
   */
  userName?: string;
}
/**
 * IP whitelisting for your instance
 */
export interface HostingPrivateDatabaseWhitelist {
  /**
   * Authorize this IP to access service port
   *
   */
  service?: boolean;
  /**
   * The whitelisted IP in your instance
   *
   */
  ip?: string;
  /**
   * The last update date of this whitelist
   *
   */
  lastUpdate?: Date;
  /**
   * Custom name for your Whitelisted IP
   *
   */
  name?: string;
  /**
   * Authorize this IP to access sftp port
   *
   */
  sftp?: boolean;
  /**
   * Creation date of this whitelist
   *
   */
  creationDate?: Date;
  /**
   * The id of the task working on this object
   *
   */
  taskId?: string;
  /**
   * Whitelist status
   *
   */
  status?: HostingPrivateDatabaseWhitelistStatus;
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
type PathshostingprivateDatabaseGET = '/hosting/privateDatabase/{serviceName}/availableVersions' | 
'/hosting/privateDatabase/{serviceName}/webs' | 
'/hosting/privateDatabase/{serviceName}/config' | 
'/hosting/privateDatabase/{serviceName}' | 
'/hosting/privateDatabase/{serviceName}/oom' | 
'/hosting/privateDatabase/{serviceName}/dump' | 
'/hosting/privateDatabase/{serviceName}/dump/{dumpId}' | 
'/hosting/privateDatabase/{serviceName}/tasks' | 
'/hosting/privateDatabase/{serviceName}/tasks/{id}' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}/grant' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}' | 
'/hosting/privateDatabase/{serviceName}/user' | 
'/hosting/privateDatabase/{serviceName}/whitelist' | 
'/hosting/privateDatabase/{serviceName}/whitelist/{ip}' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension' | 
'/hosting/privateDatabase/{serviceName}/database' | 
'/hosting/privateDatabase/{serviceName}/serviceInfos' | 
'/hosting/privateDatabase' | 
'/hosting/privateDatabase/availableOrderCapacities';

type PathshostingprivateDatabasePUT = '/hosting/privateDatabase/{serviceName}' | 
'/hosting/privateDatabase/{serviceName}/whitelist/{ip}' | 
'/hosting/privateDatabase/{serviceName}/serviceInfos';

type PathshostingprivateDatabasePOST = '/hosting/privateDatabase/{serviceName}/refresh' | 
'/hosting/privateDatabase/{serviceName}/restart' | 
'/hosting/privateDatabase/{serviceName}/confirmTermination' | 
'/hosting/privateDatabase/{serviceName}/changeVersion' | 
'/hosting/privateDatabase/{serviceName}/stop' | 
'/hosting/privateDatabase/{serviceName}/config/update' | 
'/hosting/privateDatabase/{serviceName}/databaseWizard' | 
'/hosting/privateDatabase/{serviceName}/changeFtpPassword' | 
'/hosting/privateDatabase/{serviceName}/start' | 
'/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore' | 
'/hosting/privateDatabase/{serviceName}/terminate' | 
'/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}/grant' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword' | 
'/hosting/privateDatabase/{serviceName}/user' | 
'/hosting/privateDatabase/{serviceName}/whitelist' | 
'/hosting/privateDatabase/{serviceName}/changeContact' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/import' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable' | 
'/hosting/privateDatabase/{serviceName}/database';

type PathshostingprivateDatabaseDELETE = '/hosting/privateDatabase/{serviceName}/dump/{dumpId}' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}' | 
'/hosting/privateDatabase/{serviceName}/user/{userName}' | 
'/hosting/privateDatabase/{serviceName}/whitelist/{ip}' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}' | 
'/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}';

class ApihostingprivateDatabase extends ApiCommon {
  /**
  availableVersions operations
  Get the availables versions for this private database
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/availableVersions', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingPrivateDatabaseAvailableVersionEnum[]>;
  /**
  webs operations
  List linked webs
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/webs', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Configuration
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/config', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingPrivateDatabaseConfiguration>;
  /**
  Private database
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingPrivateDatabaseService>;
  /**
  oom operations
  List of privatesql OOM kill
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/oom', pathParams: {serviceName?: string}, queryParams: null): Promise<HostingPrivateDatabaseOom[]>;
  /**
  List the hosting.privateDatabase.dump objects
  Dumps available for your private database service
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/dump', pathParams: {serviceName?: string}, queryParams: {databaseName?: string, orphan?: boolean}): Promise<Number[]>;
  /**
  Dump
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}', pathParams: {serviceName?: string, dumpId?: Number}, queryParams: null): Promise<HostingPrivateDatabaseDump>;
  /**
  List the hosting.privateDatabase.task objects
  Tasks attached to your private database service
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {status?: HostingPrivateDatabaseTaskStatusEnum, function?: HostingPrivateDatabaseTaskFunctionEnum}): Promise<Number[]>;
  /**
  Tasks
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/tasks/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  List the hosting.privateDatabase.grant objects
  User grant's on your databases
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant', pathParams: {serviceName?: string, userName?: string}, queryParams: null): Promise<string[]>;
  /**
  Grants
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}', pathParams: {serviceName?: string, userName?: string, databaseName?: string}, queryParams: null): Promise<HostingPrivateDatabaseGrant>;
  /**
  Users
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}', pathParams: {serviceName?: string, userName?: string}, queryParams: null): Promise<HostingPrivateDatabaseUser>;
  /**
  List the hosting.privateDatabase.user objects
  User allowed to connect on your databases
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/user', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the hosting.privateDatabase.whitelist objects
  Whitelist allowed on your privatesql
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/whitelist', pathParams: {serviceName?: string}, queryParams: {service?: boolean, ip?: string, sftp?: boolean}): Promise<string[]>;
  /**
  IP whitelisting for your instance
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}', pathParams: {serviceName?: string, ip?: string}, queryParams: null): Promise<HostingPrivateDatabaseWhitelist>;
  /**
  Databases
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}', pathParams: {serviceName?: string, databaseName?: string}, queryParams: null): Promise<HostingPrivateDatabaseDatabase>;
  /**
  List the hosting.privateDatabase.database.dump objects
  Dump available for your databases
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump', pathParams: {serviceName?: string, databaseName?: string}, queryParams: {creationDate?: Date, deletionDate?: Date}): Promise<Number[]>;
  /**
  Dump
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}', pathParams: {serviceName?: string, databaseName?: string, id?: Number}, queryParams: null): Promise<HostingPrivateDatabaseDatabaseDump>;
  /**
  Databases extension
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}', pathParams: {serviceName?: string, databaseName?: string, extensionName?: string}, queryParams: null): Promise<HostingPrivateDatabaseDatabaseExtension>;
  /**
  List the hosting.privateDatabase.database.extension objects
  Extensions linked to your database
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension', pathParams: {serviceName?: string, databaseName?: string}, queryParams: {status?: HostingPrivateDatabaseDatabaseExtensionStatus, extensionName?: string}): Promise<string[]>;
  /**
  List the hosting.privateDatabase.database objects
  Databases linked to your private database service
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/database', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/hosting/privateDatabase/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the SQLPRIVE service
  List available services
  **/
  public get(path: '/hosting/privateDatabase', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Get available order capacitie
  Get available order capacitie
  **/
  public get(path: '/hosting/privateDatabase/availableOrderCapacities', pathParams: null, queryParams: {offer?: HostingPrivateDatabaseOfferEnum}): Promise<HostingPrivateDatabaseAvailableOrderCapacities>;
  public get(path: PathshostingprivateDatabaseGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Private database
  Alter this object properties
  **/
  public put(path: '/hosting/privateDatabase/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  IP whitelisting for your instance
  Alter this object properties
  **/
  public put(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}', pathParams: {serviceName?: string, ip?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/hosting/privateDatabase/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathshostingprivateDatabasePUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  refresh operations
  Synchronize your informations from your private database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/refresh', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  restart operations
  Restart the private database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/restart', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  changeVersion operations
  Change the private database engine version
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/changeVersion', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  stop operations
  Stop the private database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/stop', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  update operations
  Update the configuration
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/config/update', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseConfiguration>;
  /**
  databaseWizard operations
  Create a new database/user and grant it
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/databaseWizard', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  changeFtpPassword operations
  Change your ftp admin password
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/changeFtpPassword', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  start operations
  Start the private database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/start', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  restore operations
  Request the restore from this dump
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore', pathParams: {serviceName?: string, dumpId?: Number}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  generateTemporaryLogsLink operations
  Generate a temporary url to retrieve instance logs
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTemporaryLogsLink>;
  /**
  List the hosting.privateDatabase.grant objects
  Add grant on a database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant', pathParams: {serviceName?: string, userName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  update operations
  Update user grant
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update', pathParams: {serviceName?: string, userName?: string, databaseName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  changePassword operations
  Request a change password for a user
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword', pathParams: {serviceName?: string, userName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  List the hosting.privateDatabase.user objects
  Create a new user on your service
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/user', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  List the hosting.privateDatabase.whitelist objects
  Create a new IP whitelist
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/whitelist', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  List the hosting.privateDatabase.database.dump objects
  Request the dump of this database ( an email will be send with a link available 30 days )
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump', pathParams: {serviceName?: string, databaseName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  restore operations
  Request the restore from this dump
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore', pathParams: {serviceName?: string, databaseName?: string, id?: Number}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  import operations
  Request the import in this database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/import', pathParams: {serviceName?: string, databaseName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  disable operations
  Disable an extension from a database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable', pathParams: {serviceName?: string, databaseName?: string, extensionName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  enable operations
  Enable an extension on a database
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable', pathParams: {serviceName?: string, databaseName?: string, extensionName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  List the hosting.privateDatabase.database objects
  Create a new database on your private database service
  **/
  public post(path: '/hosting/privateDatabase/{serviceName}/database', pathParams: {serviceName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  public post(path: PathshostingprivateDatabasePOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Dump
  Delete dump before expiration date
  **/
  public delete(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}', pathParams: {serviceName?: string, dumpId?: Number}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Grants
  Delete a grant on a database
  **/
  public delete(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}', pathParams: {serviceName?: string, userName?: string, databaseName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Users
  Delete a user
  **/
  public delete(path: '/hosting/privateDatabase/{serviceName}/user/{userName}', pathParams: {serviceName?: string, userName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  IP whitelisting for your instance
  Delete ain IP whitelist
  **/
  public delete(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}', pathParams: {serviceName?: string, ip?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Databases
  Delete the database
  **/
  public delete(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}', pathParams: {serviceName?: string, databaseName?: string}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  /**
  Dump
  Delete dump before expiration date
  **/
  public delete(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}', pathParams: {serviceName?: string, databaseName?: string, id?: Number}, bodyParams: null): Promise<HostingPrivateDatabaseTask>;
  public delete(path: PathshostingprivateDatabaseDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
