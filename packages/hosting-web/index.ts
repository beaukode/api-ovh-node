import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A value set tagged with its unit and serie name
 */
export interface ComplexTypeChartSerie<T> {
  /**
   */
  serieName?: string;
  /**
   */
  unit?: string;
  /**
   */
  values?: T[];
}
/**
 * A timestamp associated to a value
 */
export interface ComplexTypeChartTimestampValue {
  /**
   */
  timestamp?: number;
  /**
   */
  value?: number;
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
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
/**
 * Private database orderable versions
 */
export type HostingPrivateDatabaseOrderableVersionEnum = 'mariadb_10.1' | 'mariadb_10.2' | 'mongodb_3.4' | 'mongodb_4.0' | 'mysql_5.5' | 'mysql_5.6' | 'mysql_5.7' | 'postgresql_10' | 'postgresql_11' | 'postgresql_9.4' | 'postgresql_9.5' | 'postgresql_9.6' | 'redis_3.2' | 'redis_4.0';
/**
 * Url and port of a service
 */
export interface HostingWebAddress {
  /**
   * Port to use to access to the service
   *
   */
  port?: number;
  /**
   * Url to contact the service
   *
   */
  url?: string;
}
/**
 * Struct which describs an boost offer from a service
 */
export interface HostingWebAvailableOfferStruct {
  /**
   * Available boost offer
   *
   */
  offer?: HostingWebOfferEnum;
  /**
   * The price in month for this boost offer
   *
   */
  price?: OrderPrice;
}
/**
 * Struct which describs an offer
 */
export interface HostingWebCapabilities {
  /**
   * Number of domains you can attach to your hosting
   *
   */
  attachedDomains?: number;
  /**
   * Does the offer allow crontab
   *
   */
  crontab?: boolean;
  /**
   * Number of database engines allowed for your hosting
   *
   */
  databaseEngines?: number;
  /**
   * Describe all databases type you can have
   *
   */
  databases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  /**
   * Disk capacity and type available for your hosting ( null for unlimited )
   *
   */
  disk?: HostingWebDiskType;
  /**
   * Describe all email offer you can have
   *
   */
  emails?: HostingWebCreationEmailCapabilities;
  /**
   * Number of environment variables allowed for your hosting
   *
   */
  envVars?: number;
  /**
   * Number of ftp user you can create
   *
   */
  extraUsers?: number;
  /**
   * Does the offer allow access to web files browser?
   *
   */
  filesBrowser?: boolean;
  /**
   * Marketing information about the current offer
   *
   */
  highlight?: HostingWebHighLightEnum;
  /**
   * Language available for cron script
   *
   */
  languages?: HostingWebCronLanguageAvailable;
  /**
   * Does the offer allow 1-click modules?
   *
   */
  moduleOneClick?: boolean;
  /**
   * Describe all privateDatabases type you can have
   *
   */
  privateDatabases?: HostingWebDatabaseCreationDatabaseCapabilities[];
  /**
   * Number of runtimes allowed for your hosting
   *
   */
  runtimes?: number;
  /**
   * Number of sites recommended for your hosting ( -1 for unlimited )
   *
   */
  sitesRecommended?: number;
  /**
   * Does the offer allow SSH access
   *
   */
  ssh?: boolean;
  /**
   * Traffic quota size for your hosting ( null for unlimited )
   *
   */
  traffic?: ComplexTypeUnitAndValue<number>;
}
/**
 * Available clusterIp by country
 */
export interface HostingWebCountriesIp {
  /**
   * The whois country of the ip
   *
   */
  country?: HostingWebCountryEnum;
  /**
   * The cluster ip
   *
   */
  ip?: string;
  /**
   * The cluster ipv6
   *
   */
  ipv6?: string;
}
/**
 * Available cluster countries
 */
export type HostingWebCountryEnum = 'BE' | 'CZ' | 'DE' | 'ES' | 'FI' | 'FR' | 'IE' | 'IT' | 'LT' | 'NL' | 'PL' | 'PT' | 'UK';
/**
 * Struct which describes mail offer available and his quota
 */
export interface HostingWebCreationEmailCapabilities {
  /**
   * Number of email available for creation
   *
   */
  available?: number;
  /**
   * Email account capacity
   *
   */
  quota?: ComplexTypeUnitAndValue<number>;
}
/**
 * Language available for cron script
 */
export interface HostingWebCronLanguageAvailable {
  /**
   * NodeJS versions
   *
   */
  nodejs?: HostingWebNodejsVersionAvailableEnum[];
  /**
   * Php versions
   *
   */
  php?: HostingWebPhpVersionAvailableEnum[];
}
/**
 * Available datacenters
 */
export type HostingWebDatacenterEnum = 'gra1' | 'gra2' | 'p19';
/**
 * Disk properties (size and type of disk)
 */
export interface HostingWebDiskType {
  /**
   * Type of the disk
   *
   */
  type?: HostingWebDiskTypeEnum;
  /**
   * Unit for disk size
   *
   */
  unit?: string;
  /**
   * Size of the disk
   *
   */
  value?: number;
}
/**
 * Disk type available
 */
export type HostingWebDiskTypeEnum = 'HDD' | 'SSD';
/**
 * Highlight tips for offer
 */
export type HostingWebHighLightEnum = 'best-seller' | 'new';
/**
 * A module specifically packaged by OVH
 */
export interface HostingWebModuleList {
  /**
   * Is the module available?
   *
   */
  active?: boolean;
  /**
   * The type of the admin name
   *
   */
  adminNameType?: HostingWebModuleAdminNameTypeEnum;
  /**
   * The packager of this module for OVH
   *
   */
  author?: string;
  /**
   * The branch of the module
   *
   */
  branch?: HostingWebModuleBranchEnum;
  /**
   * The ID of the module
   *
   */
  id?: number;
  /**
   * The keywords for this module
   *
   */
  keywords?: string[];
  /**
   * All available languages for this module
   *
   */
  language?: HostingWebModuleLanguageEnum[];
  /**
   * Minimal language version required to run this module
   *
   */
  languageRequirement?: ComplexTypeUnitAndValue<string>;
  /**
   * Is this the latest version available?
   *
   */
  latest?: boolean;
  /**
   * The name of the module
   *
   */
  name?: string;
  /**
   * Size of the module
   *
   */
  size?: ComplexTypeUnitAndValue<number>;
  /**
   * The IDs of the module you can upgrade to
   *
   */
  upgradeFrom?: number[];
  /**
   * The version of the module
   *
   */
  version?: string;
}
/**
 * Different NodeJs versions available
 */
export type HostingWebNodejsVersionAvailableEnum = 'nodejs-10' | 'nodejs-11' | 'nodejs-8' | 'nodejs-9';
/**
 * Hosting's offer
 */
export type HostingWebOfferCapabilitiesEnum = '1000gp' | '20gp' | '240gp' | '240pack' | '240plan' | '300gp' | '60gp' | '720pack' | '720plan' | '90pack' | '90plan' | 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START' | 'business' | 'cloudweb1' | 'cloudweb2' | 'cloudweb3' | 'cloudwebbetax1' | 'depro2012' | 'deprol2012' | 'deproxl2012' | 'deproxxl2012' | 'destart2012' | 'destartl2012' | 'destartxl2012' | 'domainpack' | 'itbusiness2012' | 'itperso2012' | 'itpremium2012' | 'kimsufi2015' | 'mailpack' | 'mailplan' | 'mediapack' | 'mediaplan' | 'ovhpro1To' | 'ovhpro2To' | 'ovhpro5To' | 'paas2014beta' | 'perf2014x1' | 'perf2014x2' | 'perf2014x3' | 'perf2014x4' | 'perso2010' | 'perso2014' | 'premium' | 'pro2010' | 'pro2014' | 'start10g' | 'start10m' | 'start1g' | 'start1ges' | 'start1m' | 'start5g' | 'starter' | 'xxlpack' | 'xxlplan';
/**
 * Hosting's offer
 */
export type HostingWebOfferEnum = 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START';
/**
 * Hosting's OS
 */
export type HostingWebOperatingSystemEnum = 'linux';
/**
 * State of available php versions for this account
 */
export interface HostingWebPhpVersion {
  /**
   * Current support of this php version
   *
   */
  support?: HostingWebPhpVersionStateEnum;
  /**
   * PHP version
   *
   */
  version?: string;
}
/**
 * Different PHP versions available
 */
export type HostingWebPhpVersionAvailableEnum = 'phpfpm-5.6' | 'phpfpm-7.0' | 'phpfpm-7.1' | 'phpfpm-7.2' | 'phpfpm-7.3';
/**
 * Different support of PHP versions
 */
export type HostingWebPhpVersionStateEnum = 'BETA' | 'END_OF_LIFE' | 'SECURITY_FIXES' | 'SUPPORTED';
/**
 * Types of action you can request for your web hosting
 */
export type HostingWebRequestActionEnum = 'CHECK_QUOTA' | 'FLUSH_CACHE' | 'SCAN_ANTIHACK';
/**
 * Hosting's type
 */
export type HostingWebResourceEnum = 'bestEffort' | 'cloud' | 'dedicated' | 'shared';
/**
 * Web Hosting
 */
export interface HostingWebService {
  /**
   * Available offers for boost option
   *
   */
  availableBoostOffer?: HostingWebAvailableOfferStruct[];
  /**
   * Current boost offer
   *
   */
  boostOffer?: HostingWebOfferCapabilitiesEnum;
  /**
   * Cluster name
   *
   */
  cluster?: string;
  /**
   * This direct ip to your cluster ( usefull for application like api )
   *
   */
  clusterIp?: string;
  /**
   * This direct ipv6 to your cluster ( usefull for application like api )
   *
   */
  clusterIpv6?: string;
  /**
   * Available clusterIp by countries
   *
   */
  countriesIp?: HostingWebCountriesIp[];
  /**
   * Datacenter where this account is located
   *
   */
  datacenter?: HostingWebDatacenterEnum;
  /**
   * Set the name displayed in ManagerV6 for your hosting (max 50 chars)
   *
   */
  displayName?: string;
  /**
   * Filer name
   *
   */
  filer?: string;
  /**
   * Has a CDN service linked on the hosting
   *
   */
  hasCdn?: boolean;
  /**
   * Has a HostedSSL service linked on the hosting
   *
   */
  hasHostedSsl?: boolean;
  /**
   * Path of your home
   *
   */
  home?: string;
  /**
   * The recommended ip for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )
   *
   */
  hostingIp?: string;
  /**
   * The recommended ipv6 for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )
   *
   */
  hostingIpv6?: string;
  /**
   * /hosting/web/{serviceName}/ovhConfig is stored in cache. This date is the last refresh of this data
   *
   */
  lastOvhConfigScan?: string;
  /**
   * Hosting offer
   *
   */
  offer?: HostingWebOfferCapabilitiesEnum;
  /**
   * Hosting's OS
   *
   */
  operatingSystem?: HostingWebOperatingSystemEnum;
  /**
   * State of available php versions for this account
   *
   */
  phpVersions?: HostingWebPhpVersion[];
  /**
   * Hosting's main login
   *
   */
  primaryLogin?: string;
  /**
   * Space allowed
   *
   */
  quotaSize?: ComplexTypeUnitAndValue<number>;
  /**
   * Space used
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<number>;
  /**
   * If your offer is old, return a recommended offer to migrate on
   *
   */
  recommendedOffer?: HostingWebOfferEnum;
  /**
   * Hosting resource type
   *
   */
  resourceType?: HostingWebResourceEnum;
  /**
   * URLs to use to manage your webhosting
   *
   */
  serviceManagementAccess?: HostingWebServiceAccess;
  /**
   * Service name
   *
   */
  serviceName?: string;
  /**
   * State of your hosting
   *
   */
  state?: HostingWebStateEnum;
  /**
   * Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
   *
   */
  token?: string;
  /**
   * Traffic quota allowed ( null = unlimited )
   *
   */
  trafficQuotaSize?: ComplexTypeUnitAndValue<number>;
  /**
   * Traffic quota used
   *
   */
  trafficQuotaUsed?: ComplexTypeUnitAndValue<number>;
  /**
   * List of updates on your hosting
   *
   */
  updates?: string[];
}
/**
 * Different url to manage your service
 */
export interface HostingWebServiceAccess {
  /**
   * Address with url and port to manage files by ftp
   *
   */
  ftp?: HostingWebAddress;
  /**
   * Address to see your webhosting without domain
   *
   */
  http?: HostingWebAddress;
  /**
   * Address with url and port to manage webhosting by ssh
   *
   */
  ssh?: HostingWebAddress;
}
/**
 * Hosting's state
 */
export type HostingWebStateEnum = 'active' | 'bloqued' | 'maintenance';
/**
 * Available periods for statistics
 */
export type HostingWebStatisticsPeriodEnum = 'daily' | 'monthly' | 'weekly' | 'yearly';
/**
 * Types of statistics available for the web hosting
 */
export type HostingWebStatisticsTypeEnum = 'in.ftpCommands' | 'in.httpHits' | 'in.httpMeanResponseTime' | 'out.tcpConn' | 'sys.cpuUsage' | 'sys.workerSpawnOverload';
/**
 * Virtual service
 */
export interface HostingWebAttachedDomain {
  /**
   * Is linked to the hosting cdn
   *
   */
  cdn?: HostingWebAttachedDomainCdnEnum;
  /**
   * Domain linked (fqdn)
   *
   */
  domain?: string;
  /**
   * Firewall state for this path
   *
   */
  firewall?: HostingWebAttachedDomainFirewallEnum;
  /**
   * IP location of the domain linked
   *
   */
  ipLocation?: HostingWebCountryEnum;
  /**
   * Put domain for separate the logs
   *
   */
  ownLog?: string;
  /**
   * Domain path, relative to your home directory
   *
   */
  path?: string;
  /**
   * The runtime configuration ID used on this domain
   *
   */
  runtimeId?: number;
  /**
   * Put domain in ssl certificate
   *
   */
  ssl?: boolean;
  /**
   * The domain status
   *
   */
  status?: HostingWebAttachedDomainStatusEnum;
  /**
   * The task ID working on this domain
   *
   */
  taskId?: number;
}
/**
 * Attached domain cdn enum
 */
export type HostingWebAttachedDomainCdnEnum = 'active' | 'none';
/**
 * Attached domain firewall enum
 */
export type HostingWebAttachedDomainFirewallEnum = 'active' | 'none';
/**
 * AttachedDomain status
 */
export type HostingWebAttachedDomainStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * List of backup types
 */
export type HostingWebBackupTypeEnum = 'daily.1' | 'daily.2' | 'daily.3' | 'weekly.1' | 'weekly.2';
/**
 * History of your boost requests
 */
export interface HostingWebBoostHistory {
  /**
   * Account who requested the change
   *
   */
  accountId?: string;
  /**
   * Boost offer used
   *
   */
  boostOffer?: HostingWebOfferCapabilitiesEnum;
  /**
   * The date when the change has been requested
   *
   */
  date?: string;
  /**
   * Offer when the change was made
   *
   */
  offer?: HostingWebOfferCapabilitiesEnum;
}
/**
 * CDN service
 */
export interface HostingWebCdn {
  /**
   * Domain of this CDN
   *
   */
  domain?: string;
  /**
   * Option CDN free with the hosting ?
   *
   */
  free?: boolean;
  /**
   * Status of the CDN option
   *
   */
  status?: HostingWebCdnStatusEnum;
  /**
   * The task ID working on this CDN
   *
   */
  taskId?: number;
  /**
   * Type of the CDN
   *
   */
  type?: string;
  /**
   * Version of the CDN
   *
   */
  version?: string;
}
/**
 * Cdn status
 */
export type HostingWebCdnStatusEnum = 'created' | 'creating' | 'deleting' | 'flushing';
/**
 * Hosting crons
 */
export interface HostingWebCron {
  /**
   * Command to execute
   *
   */
  command?: string;
  /**
   * Description field for you
   *
   */
  description?: string;
  /**
   * Email used to receive error log ( stderr )
   *
   */
  email?: string;
  /**
   * Frequency ( crontab format ) defined for the script ( minutes are ignored )
   *
   */
  frequency?: string;
  /**
   * Cron's id
   *
   */
  id?: number;
  /**
   * Cron language
   *
   */
  language?: HostingWebCronLanguageEnum;
  /**
   * Cron status
   *
   */
  status?: HostingWebCronStatusEnum;
}
/**
 * Cron's language
 */
export type HostingWebCronLanguageEnum = 'node10' | 'node11' | 'node8' | 'node9' | 'other' | 'php4' | 'php5.2' | 'php5.3' | 'php5.4' | 'php5.5' | 'php5.6' | 'php7.0' | 'php7.1' | 'php7.2' | 'php7.3' | 'python2' | 'python3' | 'ruby2.4' | 'ruby2.5' | 'ruby2.6';
/**
 * Cron status
 */
export type HostingWebCronStatusEnum = 'disabled' | 'enabled' | 'suspended';
/**
 * Database
 */
export interface HostingWebDatabase {
  /**
   * The number of available dumps associated to this database
   *
   */
  dumps?: number;
  /**
   * URL for the graphical user interface
   *
   */
  guiURL?: string;
  /**
   * Date of the last check quota
   *
   */
  lastCheck?: string;
  /**
   * Mode of your database
   *
   */
  mode?: HostingWebDatabaseModeEnum;
  /**
   * Database name (like mydb.mysql.db or mydb.postgres.db)
   *
   */
  name?: string;
  /**
   * The port on where to contact this database
   *
   */
  port?: number;
  /**
   * Space allowed
   *
   */
  quotaSize?: ComplexTypeUnitAndValue<number>;
  /**
   * Space used
   *
   */
  quotaUsed?: ComplexTypeUnitAndValue<number>;
  /**
   * Your database server name
   *
   */
  server?: string;
  /**
   * Database state
   *
   */
  state?: HostingWebDatabaseStateEnum;
  /**
   * The database status
   *
   */
  status?: HostingWebDatabaseStatusEnum;
  /**
   * The task ID working on this database
   *
   */
  taskId?: number;
  /**
   * Type of your database
   *
   */
  type?: HostingWebDatabaseDatabaseTypeEnum;
  /**
   * Database user name
   *
   */
  user?: string;
  /**
   * Database version following the database type
   *
   */
  version?: HostingWebDatabaseVersionEnum;
  /**
   * Indicates the current support state of your database version
   *
   */
  versionSupport?: HostingWebDatabaseSupportedVersionEnum;
}
/**
 * Database Available and Default version
 */
export interface HostingWebDatabaseAvailableVersionStruct {
  /**
   * Database default version
   *
   */
  default?: HostingWebDatabaseVersionEnum;
  /**
   * Database available version
   *
   */
  list?: HostingWebDatabaseVersionEnum[];
}
/**
 * Struct which describs quota and available for a specific type of database
 */
export interface HostingWebDatabaseCreationDatabaseCapabilities {
  /**
   * Number of database left for creation
   *
   */
  available?: number;
  /**
   * Database software available on this platform
   *
   */
  engines?: HostingWebDatabaseDatabaseTypeEnum[];
  /**
   * Technology use to isolate differents webhosting accounts
   *
   */
  isolation?: HostingWebDatabaseDatabaseIsolationEnum;
  /**
   * Size of data can be used
   *
   */
  quota?: ComplexTypeUnitAndValue<number>;
  /**
   * Database offer name
   *
   */
  type?: HostingWebDatabaseDatabaseCapabilitiesTypeEnum;
}
/**
 * Struct which describe available features for a database
 */
export interface HostingWebDatabaseDatabaseCapabilities {
  /**
   * Availability of the changePassword function
   *
   */
  changePassword?: boolean;
  /**
   * Availability of the changeRight function
   *
   */
  changeRight?: boolean;
  /**
   * Availability of the delete function
   *
   */
  delete?: boolean;
  /**
   * Availability of the dump function
   *
   */
  dump?: boolean;
  /**
   * Availability of the getQuota function
   *
   */
  getQuota?: boolean;
  /**
   * Availability of the getQuota function
   *
   */
  getRight?: boolean;
  /**
   * URL of the database management tool
   *
   */
  guiURL?: string;
  /**
   * Availability of the optimize function
   *
   */
  optimize?: boolean;
  /**
   * Availability of the restore function
   *
   */
  restore?: boolean;
}
/**
 * Database capabitities type enum
 */
export type HostingWebDatabaseDatabaseCapabilitiesTypeEnum = 'extraSqlPerso' | 'local' | 'privateDatabase' | 'sqlLocal' | 'sqlPerso' | 'sqlPro';
/**
 * Database Isolation enum
 */
export type HostingWebDatabaseDatabaseIsolationEnum = 'dedicated' | 'local' | 'shared';
/**
 * Database Type enum
 */
export type HostingWebDatabaseDatabaseTypeEnum = 'mariadb' | 'mongodb' | 'mysql' | 'postgresql' | 'redis';
/**
 * ExtraSqlPerso quota enum
 */
export type HostingWebDatabaseExtraSqlQuotaEnum = 100 | 200 | 25 | 400 | 800;
/**
 * Database mode
 */
export type HostingWebDatabaseModeEnum = 'besteffort' | 'classic' | 'module';
/**
 * Types of action you can request for your database
 */
export type HostingWebDatabaseRequestActionEnum = 'CHECK_QUOTA';
/**
 * Database state
 */
export type HostingWebDatabaseStateEnum = 'close' | 'ok' | 'readonly';
/**
 * Types of statistics available for the database
 */
export type HostingWebDatabaseStatisticsTypeEnum = 'statement' | 'statementMeanTime';
/**
 * Database status
 */
export type HostingWebDatabaseStatusEnum = 'checking' | 'created' | 'creating' | 'deleting' | 'dumping' | 'importing' | 'locked' | 'optimizing' | 'restoring' | 'updating';
/**
 * Indicates the current support state of your database version
 */
export type HostingWebDatabaseSupportedVersionEnum = 'beta' | 'deprecated' | 'stable';
/**
 * Database Version enum
 */
export type HostingWebDatabaseVersionEnum = '3.4' | '4.0' | '5.1' | '5.5' | '5.6' | '8.4';
/**
 * Dump
 */
export interface HostingWebDatabaseDump {
  /**
   * Creation date of the dump
   *
   */
  creationDate?: string;
  /**
   * Automatic deletion date of the dump
   *
   */
  deletionDate?: string;
  /**
   * Dump id
   *
   */
  id?: number;
  /**
   * The dump status
   *
   */
  status?: HostingWebDatabaseDumpStatusEnum;
  /**
   * The task ID working on this dump
   *
   */
  taskId?: number;
  /**
   * Dump type
   *
   */
  type?: HostingWebDatabaseDumpDateEnum;
  /**
   * Dump url access
   *
   */
  url?: string;
}
/**
 * List of dump types
 */
export type HostingWebDatabaseDumpDateEnum = 'daily.1' | 'now' | 'weekly.1';
/**
 * Database dump status
 */
export type HostingWebDatabaseDumpStatusEnum = 'created' | 'creating' | 'deleting';
/**
 * Dump
 */
export interface HostingWebDump {
  /**
   * Creation date of the dump
   *
   */
  creationDate?: string;
  /**
   * Source database name
   *
   */
  databaseName?: string;
  /**
   * Automatic deletion date of the dump
   *
   */
  deletionDate?: string;
  /**
   * Dump id
   *
   */
  id?: number;
  /**
   * If source database was deleted
   *
   */
  orphan?: boolean;
  /**
   * The dump status
   *
   */
  status?: HostingWebDatabaseDumpStatusEnum;
  /**
   * The task ID working on this dump
   *
   */
  taskId?: number;
  /**
   * Dump type
   *
   */
  type?: HostingWebDatabaseDumpDateEnum;
  /**
   * Dump url access
   *
   */
  url?: string;
}
/**
 * Hosting automated emails
 */
export interface HostingWebEmail {
  /**
   * Bounce
   *
   */
  bounce?: number;
  /**
   * Email used to receive errors
   *
   */
  email?: string;
  /**
   * Max email to sent per day
   *
   */
  maxPerDay?: number;
  /**
   * Email sent since hosting creation
   *
   */
  sent?: number;
  /**
   * Email sent today
   *
   */
  sentToday?: number;
  /**
   * Email state
   *
   */
  state?: HostingWebMailStateEnum;
}
/**
 * Environment variables set into your webhosting account
 */
export interface HostingWebEnvVar {
  /**
   * Name of the variable
   *
   */
  key?: string;
  /**
   * The environnement variable status
   *
   */
  status?: HostingWebEnvVarStatusEnum;
  /**
   * The task ID working on this variable
   *
   */
  taskId?: number;
  /**
   * Type of variable set
   *
   */
  type?: HostingWebEnvVarTypeEnum;
  /**
   * Value of the variable
   *
   */
  value?: string;
}
/**
 * EnvVar status
 */
export type HostingWebEnvVarStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * EnvVar type
 */
export type HostingWebEnvVarTypeEnum = 'integer' | 'password' | 'string';
/**
 * Sqlperso service
 */
export interface HostingWebExtrasqlperso {
  /**
   * Number of database allowed by this option
   *
   */
  database?: number;
  /**
   * The extraSqlPerso option name
   *
   */
  name?: string;
  /**
   * Quota size allowed per each database by this option
   *
   */
  size?: ComplexTypeUnitAndValue<number>;
  /**
   * The extraSqlPerso option status
   *
   */
  status?: string;
  /**
   * The task ID working on this extraSqlPerso
   *
   */
  taskId?: number;
}
/**
 * Freedoms linked to this hosting account
 */
export interface HostingWebFreedom {
  /**
   * Freedom domain
   *
   */
  domain?: string;
  /**
   * Available status for freedom
   *
   */
  status?: HostingWebFreedomStatusEnum;
  /**
   * Freedom type
   *
   */
  type?: string;
}
/**
 * Available status for freedoms
 */
export type HostingWebFreedomStatusEnum = 'blockedByCustomer' | 'blockedBySystem' | 'ok' | 'preset';
/**
 * Hostedssl report value
 */
export type HostingWebHostedsslReportValueEnum = 'completed' | 'in-progress' | 'non-completed' | 'non-required' | 'not-applicable' | 'not-provided';
/**
 * Hostedssl status
 */
export type HostingWebHostedsslStatusEnum = 'created' | 'creating' | 'deleting' | 'importing' | 'regenerating';
/**
 * Hosting indys
 */
export interface HostingWebIndy {
  /**
   * AttachedDomain IDs linked to this multidomain
   *
   */
  attachedDomains?: string[];
  /**
   * Home directory
   *
   */
  home?: string;
  /**
   * Login of the multidomain independent user
   *
   */
  login?: string;
  /**
   * User status
   *
   */
  state?: HostingWebUserStateEnum;
}
/**
 * Struct describing a list of directories ordered by type
 */
export interface HostingWebLocalSeoDirectoriesList {
  /**
   * Navigation systems
   *
   */
  navigationSystems?: HostingWebLocalSeoDirectory[];
  /**
   * Search engines
   *
   */
  searchEngines?: HostingWebLocalSeoDirectory[];
  /**
   * Social networks
   *
   */
  socialNetworks?: HostingWebLocalSeoDirectory[];
}
/**
 * Struct describing a directory
 */
export interface HostingWebLocalSeoDirectory {
  /**
   * Identifier to use to get the result of a visibility check for the directory
   *
   */
  code?: string;
  /**
   * Human-readable name of the directory
   *
   */
  displayName?: string;
}
/**
 * Struct describing the availability of an email address for a local SEO order
 */
export interface HostingWebLocalSeoEmailAvailability {
  /**
   * Availability of the email address
   *
   */
  availability?: HostingWebLocalSeoAccountEmailAvailabilityEnum;
  /**
   * Hosting on which the email address is used
   *
   */
  serviceName?: string;
}
/**
 * Sync status of a location field
 */
export type HostingWebLocalSeoFieldStatusEnum = 'MATCH' | 'MISMATCH' | 'MISSING' | 'NOT_APPLICABLE' | 'PRESENT';
/**
 * Status of a listing
 */
export type HostingWebLocalSeoFlowStatusEnum = 'ALL_INFORMATION_SUBMITTED' | 'DONT_REMOVE' | 'INACTIVE' | 'MANUALLY_DEACTIVATED' | 'NEEDS_REVIEW' | 'NOT_SUPPORTED' | 'NO_ACTION_NEEDED' | 'REMOVAL_NEEDED' | 'REMOVAL_REVIEW_NEEDED' | 'REMOVAL_SUBMITTED' | 'REMOVED' | 'SUBMISSION_NEEDED' | 'WAITING_DIRECTORY_ACTION' | 'WAITING_USER_ACTION';
/**
 * Sync status of a listing
 */
export type HostingWebLocalSeoListingStatusEnum = 'IN_SYNC' | 'NOT_FOUND' | 'NOT_IN_SYNC' | 'NOT_SUPPORTED' | 'NO_ONLINE_LISTING' | 'TECHNICAL_PROBLEMS';
/**
 * Struct describing a location being checked for visibility
 */
export interface HostingWebLocalSeoSearchData {
  /**
   * City of the location
   *
   */
  city?: string;
  /**
   * Country of the location
   *
   */
  country?: string;
  /**
   * Id of the search
   *
   */
  id?: number;
  /**
   * Name of the location
   *
   */
  name?: string;
  /**
   * Province of the location
   *
   */
  province?: string;
  /**
   * Street of the location
   *
   */
  street?: string;
  /**
   * Street numero of the location
   *
   */
  streetNo?: string;
  /**
   * Token to use to get the results of the search
   *
   */
  token?: string;
  /**
   * Zipcode of the location
   *
   */
  zip?: string;
}
/**
 * Struct describing the response for a visibility check request
 */
export interface HostingWebLocalSeoVisibilityCheckResponse {
  /**
   * Is the searched location already managed ?
   *
   */
  alreadyManaged?: boolean;
  /**
   * Searched location data
   *
   */
  searchData?: HostingWebLocalSeoSearchData;
}
/**
 * Struct describing a visibility check result
 */
export interface HostingWebLocalSeoVisibilityCheckResultResponse {
  /**
   * City of the location
   *
   */
  city?: string;
  /**
   * City of the location (sync status)
   *
   */
  cityStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * Country of the location
   *
   */
  country?: string;
  /**
   * Country of the location (sync status)
   *
   */
  countryStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The date and time the listing was created in database
   *
   */
  dateCreated?: string;
  /**
   * The directory where this listing appears
   *
   */
  directoryType?: string;
  /**
   * A contact email for the location
   *
   */
  email?: string;
  /**
   * A contact email for the location (sync status)
   *
   */
  emailStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The status of the current listing
   *
   */
  flowStatus?: HostingWebLocalSeoFlowStatusEnum;
  /**
   * The listing id in the directory database
   *
   */
  listingId?: string;
  /**
   * The listing url on the directory website
   *
   */
  listingUrl?: string;
  /**
   * The location's name used for this listing
   *
   */
  name?: string;
  /**
   * The location's name used for this listing (sync status)
   *
   */
  nameStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The location's contact phone number
   *
   */
  phone?: string;
  /**
   * The location's contact phone number (sync status)
   *
   */
  phoneStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * Province of the location
   *
   */
  province?: string;
  /**
   * Province of the location (sync status)
   *
   */
  provinceStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The location's street address
   *
   */
  street?: string;
  /**
   * A localized combination of street and streetNo
   *
   */
  streetAndNo?: string;
  /**
   * A localized combination of street and streetNo (sync status)
   *
   */
  streetAndNoStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The location's street number
   *
   */
  streetNo?: string;
  /**
   * The location's street number (sync status)
   *
   */
  streetNoStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The location's street address (sync status)
   *
   */
  streetStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The street type for Spain
   *
   */
  streetType?: string;
  /**
   * The street type for Spain (sync status)
   *
   */
  streetTypeStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * The sync status of the listing
   *
   */
  syncStatus?: HostingWebLocalSeoListingStatusEnum;
  /**
   * A valid url for the location's website
   *
   */
  website?: string;
  /**
   * A valid url for the location's website (sync status)
   *
   */
  websiteStatus?: HostingWebLocalSeoFieldStatusEnum;
  /**
   * Zipcode of the location
   *
   */
  zip?: string;
  /**
   * Zipcode of the location (sync status)
   *
   */
  zipStatus?: HostingWebLocalSeoFieldStatusEnum;
}
/**
 * Local SEO accounts
 */
export interface HostingWebLocalSeoAccount {
  /**
   * Date of creation of the account
   *
   */
  creationDate?: string;
  /**
   * Email address associated to the account
   *
   */
  email?: string;
  /**
   * Account id
   *
   */
  id?: number;
  /**
   * Date of the last account's update
   *
   */
  lastUpdate?: string;
  /**
   * Current status of the account
   *
   */
  status?: HostingWebLocalSeoAccountStatusEnum;
  /**
   * Running task associated to the account
   *
   */
  taskId?: number;
}
/**
 * Availability of an email address for a local SEO order
 */
export type HostingWebLocalSeoAccountEmailAvailabilityEnum = 'available' | 'merge' | 'nic' | 'taken';
/**
 * Account status
 */
export type HostingWebLocalSeoAccountStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Local SEO locations
 */
export interface HostingWebLocalSeoLocation {
  /**
   * Account id
   *
   */
  accountId?: number;
  /**
   * Address of the location
   *
   */
  address?: string;
  /**
   * Country of the location
   *
   */
  country?: HostingWebLocalSeoLocationCountryEnum;
  /**
   * Date of the installation of the location
   *
   */
  creationDate?: string;
  /**
   * Location id
   *
   */
  id?: number;
  /**
   * Date of the last location's update
   *
   */
  lastUpdate?: string;
  /**
   * Name of the location
   *
   */
  name?: string;
  /**
   * Local SEO offer for this location
   *
   */
  offer?: HostingWebLocalSeoLocationOfferEnum;
  /**
   * Current status of the location
   *
   */
  status?: HostingWebLocalSeoLocationStatusEnum;
  /**
   * Running task associated to the location
   *
   */
  taskId?: number;
}
/**
 * Location country
 */
export type HostingWebLocalSeoLocationCountryEnum = 'FR';
/**
 * Location offer
 */
export type HostingWebLocalSeoLocationOfferEnum = 'normal';
/**
 * Location status
 */
export type HostingWebLocalSeoLocationStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Types of action you can request for your mail
 */
export type HostingWebMailActionEnum = 'BLOCK' | 'PURGE' | 'UNBLOCK';
/**
 * The volume history type
 */
export interface HostingWebMailBounce {
  /**
   * The datetime of this bounce
   *
   */
  date?: string;
  /**
   * The return message for this bounce
   *
   */
  message?: string;
  /**
   * The email where you have the bounce
   *
   */
  to?: string;
}
/**
 * Mail state enum
 */
export type HostingWebMailStateEnum = 'bounce' | 'force' | 'ko' | 'ok' | 'purging' | 'spam';
/**
 * The volume history type
 */
export interface HostingWebMailVolumeHistory {
  /**
   * The datetime of this volume history point
   *
   */
  date?: string;
  /**
   * The volume history size
   *
   */
  volume?: number;
}
/**
 * Hosting modules installed
 */
export interface HostingWebModule {
  /**
   * The admin folder, relative to the module's installation path
   *
   */
  adminFolder?: string;
  /**
   * Login for the admin account
   *
   */
  adminName?: string;
  /**
   * Date of the installation of the module
   *
   */
  creationDate?: string;
  /**
   * The dependencies to which the module has access. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
   *
   */
  dependencies?: HostingWebModuleDependencyType[];
  /**
   * Installation ID
   *
   */
  id?: number;
  /**
   * The language of the module
   *
   */
  language?: HostingWebModuleLanguageEnum;
  /**
   * Date of the last module's upgrade
   *
   */
  lastUpdate?: string;
  /**
   * ID of the module associated with this installation
   *
   */
  moduleId?: number;
  /**
   * Where the module is installed, relative to your home directory
   *
   */
  path?: string;
  /**
   * The module status
   *
   */
  status?: HostingWebModuleStatusEnum;
  /**
   * The URL from where your module can be reached
   *
   */
  targetUrl?: string;
  /**
   * The task ID working on this module
   *
   */
  taskId?: number;
}
/**
 * The type of the admin name
 */
export type HostingWebModuleAdminNameTypeEnum = 'email' | 'string';
/**
 * Branch enum
 */
export type HostingWebModuleBranchEnum = 'old' | 'stable' | 'testing';
/**
 * Dependency parameters. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
export interface HostingWebModuleDependencyType {
  /**
   * The name of this dependency
   *
   */
  name?: string;
  /**
   * The password associated with the user
   *
   */
  password?: string;
  /**
   * The port on where to contact this dependency
   *
   */
  port?: number;
  /**
   * The prefix to set to the data to distinguish between the data from the module and the rest
   *
   */
  prefix?: string;
  /**
   * The server on where your dependency is hosted
   *
   */
  server?: string;
  /**
   * Type
   *
   */
  type?: HostingWebModuleDependencyTypeEnum;
  /**
   * The user to use to connect to this dependency
   *
   */
  user?: string;
}
/**
 * The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
export type HostingWebModuleDependencyTypeEnum = 'mysql';
/**
 * Install language
 */
export type HostingWebModuleLanguageEnum = 'cz' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'it' | 'lt' | 'nl' | 'pl' | 'pt';
/**
 * Module status
 */
export type HostingWebModuleStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Virtual service
 */
export interface HostingWebOvhConfig {
  /**
   * Container to run this website
   *
   */
  container?: string;
  /**
   * When ovhconfig was created, or found for the first time, on the hosting servers
   *
   */
  creationDate?: string;
  /**
   * Version of engine you want
   *
   */
  engineName?: HostingWebOvhConfigEngineNameEnum;
  /**
   * Name of engine you want
   *
   */
  engineVersion?: HostingWebOvhConfigEngineVersionEnum;
  /**
   * Environment configuration you want
   *
   */
  environment?: HostingWebOvhConfigEnvironmentEnum;
  /**
   * If .ovhConfig exists
   *
   */
  fileExist?: boolean;
  /**
   * If this configuration is an old configuration
   *
   */
  historical?: boolean;
  /**
   * Configuration you want for http firewall
   *
   */
  httpFirewall?: HostingWebOvhConfigHttpFirewallEnum;
  /**
   * Configuration's id
   *
   */
  id?: number;
  /**
   * Config path, relative to your home directory
   *
   */
  path?: string;
  /**
   * The configuration status
   *
   */
  status?: HostingWebOvhConfigStatusEnum;
  /**
   * The task ID working on this configuration
   *
   */
  taskId?: number;
}
/**
 * Hosting available configuration version
 */
export type HostingWebOvhConfigAvailableEngineVersionEnum = '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3';
/**
 * Hosting configuration engine
 */
export type HostingWebOvhConfigEngineNameEnum = 'php' | 'phpcgi';
/**
 * Hosting configuration version
 */
export type HostingWebOvhConfigEngineVersionEnum = '4.4' | '5.0' | '5.1' | '5.2' | '5.3' | '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3' | 'AUTO';
/**
 * Hosting configuration environment
 */
export type HostingWebOvhConfigEnvironmentEnum = 'development' | 'production';
/**
 * Hosting configuration firewall
 */
export type HostingWebOvhConfigHttpFirewallEnum = 'none' | 'security';
/**
 * Ovhconfig status
 */
export type HostingWebOvhConfigStatusEnum = 'created' | 'rollbacking' | 'updating';
/**
 * Hosting configuration image to run website
 */
export type HostingWebOvhconfigContainerEnum = 'jessie.i386' | 'legacy' | 'stable' | 'testing';
/**
 * Hosting own logs
 */
export interface HostingWebOwnLogs {
  /**
   * The ownlogs fqdn available on logs.clusterXX.hosting.ovh.net
   *
   */
  fqdn?: string;
  /**
   * Identifier of this ownLogs
   *
   */
  id?: number;
  /**
   * Status of this ownLogs
   *
   */
  status?: HostingWebOwnLogsStatusEnum;
  /**
   * The task ID working on this ownLogs
   *
   */
  taskId?: number;
}
/**
 * OwnLogs status
 */
export type HostingWebOwnLogsStatusEnum = 'created' | 'creating' | 'deleting';
/**
 * The runtime configuration of an attached domain for cloud web offer
 */
export interface HostingWebRuntime {
  /**
   * The client application bootstrap script
   *
   */
  appBootstrap?: string;
  /**
   * The client application environment
   *
   */
  appEnv?: HostingWebRuntimeEnvEnum;
  /**
   * The creation date of the runtime configuration
   *
   */
  creationDate?: string;
  /**
   * The runtime configuration ID
   *
   */
  id?: number;
  /**
   * Is the runtime configuration is the one by default for the hosting
   *
   */
  isDefault?: boolean;
  /**
   * Return if the runtime configuration can be deleted
   *
   */
  isDeletable?: boolean;
  /**
   * The last update date of the runtime configuration
   *
   */
  lastUpdate?: string;
  /**
   * The custom display name of the runtime configuration
   *
   */
  name?: string;
  /**
   * The client application public directory
   *
   */
  publicDir?: string;
  /**
   * The status of the runtime
   *
   */
  status?: HostingWebRuntimeStateEnum;
  /**
   * The link current task for the runtime configuration
   *
   */
  taskId?: number;
  /**
   * The backend type of the runtime
   *
   */
  type?: HostingWebRuntimeTypeEnum;
}
/**
 * Runtime env enum
 */
export type HostingWebRuntimeEnvEnum = 'development' | 'production';
/**
 * Runtime state enum
 */
export type HostingWebRuntimeStateEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Runtime backend type enum
 */
export type HostingWebRuntimeTypeEnum = 'nodejs-10' | 'nodejs-11' | 'nodejs-8' | 'nodejs-9' | 'phpfpm-5.6' | 'phpfpm-7.0' | 'phpfpm-7.1' | 'phpfpm-7.2' | 'phpfpm-7.3' | 'python-2' | 'python-3' | 'ruby-2.4' | 'ruby-2.5' | 'ruby-2.6';
/**
 * Hostedssl
 */
export interface HostingWebSsl {
  /**
   * If the hostedssl is currently bound to a report
   *
   */
  isReportable?: boolean;
  /**
   * Provider of the HostedSsl
   *
   */
  provider?: string;
  /**
   * Regenerable flag
   *
   */
  regenerable?: boolean;
  /**
   * Status of the HostedSsl
   *
   */
  status?: HostingWebHostedsslStatusEnum;
  /**
   * The task ID working on this HostedSsl
   *
   */
  taskId?: number;
  /**
   * Type of the HostedSsl
   *
   */
  type?: string;
}
/**
 * Hostedssl Report
 */
export interface HostingWebSslReport {
  /**
   * "Certificate signing request" test status done by certification authority
   *
   */
  certificateSigningRequestStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * "Domain control validation" test status done by certification authority
   *
   */
  domainControlValidationStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * Applicant's legal status obtained or verified directly with registration agency
   *
   */
  organizationValidationStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * Approval verified through a phone call to the contract signer
   *
   */
  phoneCallApprovalStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * The order ID from given hostedssl provider
   *
   */
  providerOrderId?: string;
  /**
   * Terms and conditions agreements acceptance
   *
   */
  termsAndConditionsAcceptanceStatus?: HostingWebHostedsslReportValueEnum;
  /**
   * Trade name verified directly with registration agency or through a verified third party
   *
   */
  tradeNameVerificationStatus?: HostingWebHostedsslReportValueEnum;
}
/**
 * Tasks
 */
export interface HostingWebTask {
  /**
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Function name
   *
   */
  function?: string;
  /**
   * the id of the task
   *
   */
  id?: number;
  /**
   * last update
   *
   */
  lastUpdate?: string;
  /**
   * Task related object ID
   *
   */
  objectId?: string;
  /**
   * Task object type
   *
   */
  objectType?: HostingWebTaskObjectTypeEnum;
  /**
   * Task Creation date
   *
   */
  startDate?: string;
  /**
   * Task status
   *
   */
  status?: HostingWebTaskStatusEnum;
}
/**
 * Task object type listing
 */
export type HostingWebTaskObjectTypeEnum = 'Abuse' | 'AttachedDomain' | 'BlockedIp' | 'Cdn' | 'Cron' | 'Database' | 'Dump' | 'EnvVar' | 'Filerz' | 'Hostedssl' | 'Hosting' | 'Indy' | 'Infra' | 'Minor' | 'Module' | 'Other' | 'OvhConfig' | 'OvhOrg' | 'OwnLogs' | 'Runtime' | 'Scan' | 'Sqlperso' | 'User' | 'UserLogs' | 'Web' | 'Webd';
/**
 * Task's status
 */
export type HostingWebTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'init' | 'todo';
/**
 * Hosting users
 */
export interface HostingWebUser {
  /**
   * Home directory
   *
   */
  home?: string;
  /**
   * Is this user primary
   *
   */
  isPrimaryAccount?: boolean;
  /**
   * Login used to connect on FTP and SSH
   *
   */
  login?: string;
  /**
   * Credentials to manage your webhosting
   *
   */
  serviceManagementCredentials?: HostingWebUserServiceCredentials;
  /**
   * User ssh status
   *
   */
  sshState?: HostingWebUserSshStateEnum;
  /**
   * User state
   *
   */
  state?: HostingWebUserStateEnum;
  /**
   * The user status
   *
   */
  status?: HostingWebUserStatusEnum;
  /**
   * The task ID working on this user
   *
   */
  taskId?: number;
}
/**
 * User, url and port of a service
 */
export interface HostingWebUserCredentials {
  /**
   * Port to use to access to the service
   *
   */
  port?: number;
  /**
   * Url to contact the service
   *
   */
  url?: string;
  /**
   * Login to authentificate you on the service
   *
   */
  user?: string;
}
/**
 * Different credentials to manage your service
 */
export interface HostingWebUserServiceCredentials {
  /**
   * Credentials to manage files by ftp
   *
   */
  ftp?: HostingWebUserCredentials;
  /**
   * Credentials to manage webhosting by ssh
   *
   */
  ssh?: HostingWebUserCredentials;
}
/**
 * Account's ssh state
 */
export type HostingWebUserSshStateEnum = 'active' | 'none' | 'sftponly';
/**
 * Account's state
 */
export type HostingWebUserStateEnum = 'off' | 'rw';
/**
 * User status
 */
export type HostingWebUserStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * Hosting users logs
 */
export interface HostingWebUserLogs {
  /**
   * Date of the user creation
   *
   */
  creationDate?: string;
  /**
   * Description field for you
   *
   */
  description?: string;
  /**
   * The userLogs login used to connect to logs.ovh.net
   *
   */
  login?: string;
  /**
   * OwnLogs where this userLogs will be enable. Default : main domain ownlogs
   *
   */
  ownLogsId?: number;
  /**
   * Status of this userLogs
   *
   */
  status?: HostingWebUserLogsStatusEnum;
  /**
   * The task ID working on this userLogs
   *
   */
  taskId?: number;
}
/**
 * UserLogs status
 */
export type HostingWebUserLogsStatusEnum = 'created' | 'creating' | 'deleting' | 'updating';
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
  /**
   */
  value?: number;
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
type PathsHostingWebGET = '/hosting/web' | 
'/hosting/web/attachedDomain' | 
'/hosting/web/availableOffer' | 
'/hosting/web/incident' | 
'/hosting/web/localSeo/directoriesList' | 
'/hosting/web/localSeo/emailAvailability' | 
'/hosting/web/localSeo/visibilityCheckResult' | 
'/hosting/web/moduleList' | 
'/hosting/web/moduleList/{id}' | 
'/hosting/web/offerCapabilities' | 
'/hosting/web/{serviceName}' | 
'/hosting/web/{serviceName}/attachedDomain' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}' | 
'/hosting/web/{serviceName}/boostHistory' | 
'/hosting/web/{serviceName}/boostHistory/{date}' | 
'/hosting/web/{serviceName}/cdn' | 
'/hosting/web/{serviceName}/cdn/serviceInfos' | 
'/hosting/web/{serviceName}/cron' | 
'/hosting/web/{serviceName}/cron/{id}' | 
'/hosting/web/{serviceName}/cronAvailableLanguage' | 
'/hosting/web/{serviceName}/database' | 
'/hosting/web/{serviceName}/database/{name}' | 
'/hosting/web/{serviceName}/database/{name}/capabilities' | 
'/hosting/web/{serviceName}/database/{name}/dump' | 
'/hosting/web/{serviceName}/database/{name}/dump/{id}' | 
'/hosting/web/{serviceName}/database/{name}/statistics' | 
'/hosting/web/{serviceName}/databaseAvailableType' | 
'/hosting/web/{serviceName}/databaseAvailableVersion' | 
'/hosting/web/{serviceName}/databaseCreationCapabilities' | 
'/hosting/web/{serviceName}/dump' | 
'/hosting/web/{serviceName}/dump/{id}' | 
'/hosting/web/{serviceName}/email' | 
'/hosting/web/{serviceName}/email/bounces' | 
'/hosting/web/{serviceName}/email/volumes' | 
'/hosting/web/{serviceName}/envVar' | 
'/hosting/web/{serviceName}/envVar/{key}' | 
'/hosting/web/{serviceName}/extraSqlPerso' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/databases' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos' | 
'/hosting/web/{serviceName}/freedom' | 
'/hosting/web/{serviceName}/freedom/{domain}' | 
'/hosting/web/{serviceName}/indy' | 
'/hosting/web/{serviceName}/indy/{login}' | 
'/hosting/web/{serviceName}/localSeo/account' | 
'/hosting/web/{serviceName}/localSeo/account/{id}' | 
'/hosting/web/{serviceName}/localSeo/emailAvailability' | 
'/hosting/web/{serviceName}/localSeo/location' | 
'/hosting/web/{serviceName}/localSeo/location/{id}' | 
'/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos' | 
'/hosting/web/{serviceName}/module' | 
'/hosting/web/{serviceName}/module/{id}' | 
'/hosting/web/{serviceName}/ovhConfig' | 
'/hosting/web/{serviceName}/ovhConfig/{id}' | 
'/hosting/web/{serviceName}/ownLogs' | 
'/hosting/web/{serviceName}/ownLogs/{id}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' | 
'/hosting/web/{serviceName}/privateDatabaseCreationCapabilities' | 
'/hosting/web/{serviceName}/privateDatabases' | 
'/hosting/web/{serviceName}/runtime' | 
'/hosting/web/{serviceName}/runtime/{id}' | 
'/hosting/web/{serviceName}/runtime/{id}/attachedDomains' | 
'/hosting/web/{serviceName}/runtimeAvailableTypes' | 
'/hosting/web/{serviceName}/serviceInfos' | 
'/hosting/web/{serviceName}/ssl' | 
'/hosting/web/{serviceName}/ssl/domains' | 
'/hosting/web/{serviceName}/ssl/report' | 
'/hosting/web/{serviceName}/statistics' | 
'/hosting/web/{serviceName}/tasks' | 
'/hosting/web/{serviceName}/tasks/{id}' | 
'/hosting/web/{serviceName}/token' | 
'/hosting/web/{serviceName}/user' | 
'/hosting/web/{serviceName}/user/{login}' | 
'/hosting/web/{serviceName}/userLogs' | 
'/hosting/web/{serviceName}/userLogs/{login}' | 
'/hosting/web/{serviceName}/userLogsToken';

type PathsHostingWebPUT = '/hosting/web/{serviceName}' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}' | 
'/hosting/web/{serviceName}/cron/{id}' | 
'/hosting/web/{serviceName}/email' | 
'/hosting/web/{serviceName}/envVar/{key}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' | 
'/hosting/web/{serviceName}/runtime/{id}' | 
'/hosting/web/{serviceName}/serviceInfos' | 
'/hosting/web/{serviceName}/user/{login}' | 
'/hosting/web/{serviceName}/userLogs/{login}';

type PathsHostingWebPOST = '/hosting/web/localSeo/visibilityCheck' | 
'/hosting/web/{serviceName}/activatePrivateDatabase' | 
'/hosting/web/{serviceName}/attachedDomain' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache' | 
'/hosting/web/{serviceName}/attachedDomain/{domain}/restart' | 
'/hosting/web/{serviceName}/cdn/serviceInfosUpdate' | 
'/hosting/web/{serviceName}/cdn/terminate' | 
'/hosting/web/{serviceName}/changeContact' | 
'/hosting/web/{serviceName}/confirmTermination' | 
'/hosting/web/{serviceName}/cron' | 
'/hosting/web/{serviceName}/database' | 
'/hosting/web/{serviceName}/database/{name}/changePassword' | 
'/hosting/web/{serviceName}/database/{name}/dump' | 
'/hosting/web/{serviceName}/database/{name}/dump/{id}/restore' | 
'/hosting/web/{serviceName}/database/{name}/import' | 
'/hosting/web/{serviceName}/database/{name}/request' | 
'/hosting/web/{serviceName}/database/{name}/restore' | 
'/hosting/web/{serviceName}/email/request' | 
'/hosting/web/{serviceName}/envVar' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate' | 
'/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate' | 
'/hosting/web/{serviceName}/localSeo/account/{id}/login' | 
'/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate' | 
'/hosting/web/{serviceName}/localSeo/location/{id}/terminate' | 
'/hosting/web/{serviceName}/module' | 
'/hosting/web/{serviceName}/module/{id}/changePassword' | 
'/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration' | 
'/hosting/web/{serviceName}/ovhConfig/{id}/rollback' | 
'/hosting/web/{serviceName}/ovhConfigRefresh' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword' | 
'/hosting/web/{serviceName}/request' | 
'/hosting/web/{serviceName}/requestBoost' | 
'/hosting/web/{serviceName}/restoreSnapshot' | 
'/hosting/web/{serviceName}/runtime' | 
'/hosting/web/{serviceName}/ssl' | 
'/hosting/web/{serviceName}/ssl/regenerate' | 
'/hosting/web/{serviceName}/terminate' | 
'/hosting/web/{serviceName}/user' | 
'/hosting/web/{serviceName}/user/{login}/changePassword' | 
'/hosting/web/{serviceName}/userLogs' | 
'/hosting/web/{serviceName}/userLogs/{login}/changePassword';

type PathsHostingWebDELETE = '/hosting/web/{serviceName}/attachedDomain/{domain}' | 
'/hosting/web/{serviceName}/cron/{id}' | 
'/hosting/web/{serviceName}/database/{name}' | 
'/hosting/web/{serviceName}/database/{name}/dump/{id}' | 
'/hosting/web/{serviceName}/dump/{id}' | 
'/hosting/web/{serviceName}/envVar/{key}' | 
'/hosting/web/{serviceName}/freedom/{domain}' | 
'/hosting/web/{serviceName}/module/{id}' | 
'/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}' | 
'/hosting/web/{serviceName}/runtime/{id}' | 
'/hosting/web/{serviceName}/ssl' | 
'/hosting/web/{serviceName}/user/{login}' | 
'/hosting/web/{serviceName}/userLogs/{login}';

export class ApiHostingWeb extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the HOSTING service
  List available services
  **/
  public get(path: '/hosting/web'): Promise<string[]>;
  /**
  Find hosting service linked to a domain
  Find hosting service linked to a domain
  **/
  public get(path: '/hosting/web/attachedDomain'): Promise<string[]>;
  /**
  Get available offer
  Get available offer
  **/
  public get(path: '/hosting/web/availableOffer'): Promise<HostingWebOfferEnum[]>;
  /**
  Get current incident
  Get current incident
  **/
  public get(path: '/hosting/web/incident'): Promise<string[]>;
  /**
  Get list of directories associated to a local SEO offer and a country
  Get list of directories associated to a local SEO offer and a country
  **/
  public get(path: '/hosting/web/localSeo/directoriesList'): Promise<HostingWebLocalSeoDirectoriesList>;
  /**
  Check email availability for a local SEO order
  Check email availability for a local SEO order
  **/
  public get(path: '/hosting/web/localSeo/emailAvailability'): Promise<HostingWebLocalSeoEmailAvailability>;
  /**
  Get the result of a visibility check
  Get the result of a visibility check
  **/
  public get(path: '/hosting/web/localSeo/visibilityCheckResult'): Promise<HostingWebLocalSeoVisibilityCheckResultResponse[]>;
  /**
  List the hosting.web.ModuleList objects
  IDs of all modules available
  **/
  public get(path: '/hosting/web/moduleList'): Promise<number[]>;
  /**
  A module specifically packaged by OVH
  Get this object properties
  **/
  public get(path: '/hosting/web/moduleList/{id}', params: {id: number}): Promise<HostingWebModuleList>;
  /**
  Get offer capabilities
  Get offer capabilities
  **/
  public get(path: '/hosting/web/offerCapabilities'): Promise<HostingWebCapabilities>;
  /**
  Web Hosting
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}', params: {serviceName: string}): Promise<HostingWebService>;
  /**
  List the hosting.web.attachedDomain objects
  Domains or subdomains attached to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/attachedDomain', params: {serviceName: string, domain?: string, path?: string}): Promise<string[]>;
  /**
  Virtual service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', params: {serviceName: string, domain: string}): Promise<HostingWebAttachedDomain>;
  /**
  List the hosting.web.boostHistory objects
  History of your hosting boost
  **/
  public get(path: '/hosting/web/{serviceName}/boostHistory', params: {serviceName: string, date?: string}): Promise<string[]>;
  /**
  History of your boost requests
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/boostHistory/{date}', params: {serviceName: string, date: string}): Promise<HostingWebBoostHistory>;
  /**
  CDN service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/cdn', params: {serviceName: string}): Promise<HostingWebCdn>;
  /**
  serviceInfos operations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/cdn/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the hosting.web.cron objects
  Crons on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/cron', params: {serviceName: string, command?: string, description?: string, email?: string, language?: HostingWebCronLanguageEnum}): Promise<number[]>;
  /**
  Hosting crons
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/cron/{id}', params: {serviceName: string, id: number}): Promise<HostingWebCron>;
  /**
  cronAvailableLanguage operations
  List available cron language
  **/
  public get(path: '/hosting/web/{serviceName}/cronAvailableLanguage', params: {serviceName: string}): Promise<HostingWebCronLanguageEnum[]>;
  /**
  List the hosting.web.database objects
  Databases linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/database', params: {serviceName: string, mode?: HostingWebDatabaseModeEnum, name?: string, server?: string, type?: HostingWebDatabaseDatabaseTypeEnum, user?: string}): Promise<string[]>;
  /**
  Database
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}', params: {serviceName: string, name: string}): Promise<HostingWebDatabase>;
  /**
  capabilities operations
  Get available capabilities for this database
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/capabilities', params: {serviceName: string, name: string}): Promise<HostingWebDatabaseDatabaseCapabilities>;
  /**
  List the hosting.web.database.dump objects
  Dump available for your databases
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/dump', params: {serviceName: string, name: string, creationDate?: string, deletionDate?: string, type?: HostingWebDatabaseDumpDateEnum}): Promise<number[]>;
  /**
  Dump
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}', params: {serviceName: string, name: string, id: number}): Promise<HostingWebDatabaseDump>;
  /**
  statistics operations
  Get statistics about this database
  **/
  public get(path: '/hosting/web/{serviceName}/database/{name}/statistics', params: {serviceName: string, name: string, period: HostingWebStatisticsPeriodEnum, type: HostingWebDatabaseStatisticsTypeEnum}): Promise<ComplexTypeChartSerie<ComplexTypeChartTimestampValue>[]>;
  /**
  databaseAvailableType operations
  List available database type
  **/
  public get(path: '/hosting/web/{serviceName}/databaseAvailableType', params: {serviceName: string}): Promise<HostingWebDatabaseDatabaseTypeEnum[]>;
  /**
  databaseAvailableVersion operations
  List available database version following a type
  **/
  public get(path: '/hosting/web/{serviceName}/databaseAvailableVersion', params: {serviceName: string, type: HostingWebDatabaseDatabaseTypeEnum}): Promise<HostingWebDatabaseAvailableVersionStruct>;
  /**
  databaseCreationCapabilities operations
  List available database you can install
  **/
  public get(path: '/hosting/web/{serviceName}/databaseCreationCapabilities', params: {serviceName: string}): Promise<HostingWebDatabaseCreationDatabaseCapabilities[]>;
  /**
  List the hosting.web.dump objects
  Dumps linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/dump', params: {serviceName: string, creationDate?: string, databaseName?: string, deletionDate?: string, orphan?: boolean}): Promise<number[]>;
  /**
  Dump
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/dump/{id}', params: {serviceName: string, id: number}): Promise<HostingWebDump>;
  /**
  Hosting automated emails
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/email', params: {serviceName: string}): Promise<HostingWebEmail>;
  /**
  bounces operations
  Request the last bounces
  **/
  public get(path: '/hosting/web/{serviceName}/email/bounces', params: {serviceName: string, limit: number}): Promise<HostingWebMailBounce[]>;
  /**
  volumes operations
  Request the history volume of email sent
  **/
  public get(path: '/hosting/web/{serviceName}/email/volumes', params: {serviceName: string}): Promise<HostingWebMailVolumeHistory[]>;
  /**
  List the hosting.web.envVar objects
  Environment variables set on your webhosting
  **/
  public get(path: '/hosting/web/{serviceName}/envVar', params: {serviceName: string, type?: HostingWebEnvVarTypeEnum}): Promise<string[]>;
  /**
  Environment variables set into your webhosting account
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/envVar/{key}', params: {serviceName: string, key: string}): Promise<HostingWebEnvVar>;
  /**
  List the hosting.web.extrasqlperso objects
  Sqlperso linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso', params: {serviceName: string}): Promise<string[]>;
  /**
  Sqlperso service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}', params: {serviceName: string, name: string}): Promise<HostingWebExtrasqlperso>;
  /**
  databases operations
  Get databases linked with this option
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/databases', params: {serviceName: string, name: string}): Promise<string[]>;
  /**
  serviceInfos operations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos', params: {serviceName: string, name: string}): Promise<ServicesService>;
  /**
  List the hosting.web.freedom objects
  Freedom linked to this hosting account
  **/
  public get(path: '/hosting/web/{serviceName}/freedom', params: {serviceName: string, status?: HostingWebFreedomStatusEnum}): Promise<string[]>;
  /**
  Freedoms linked to this hosting account
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/freedom/{domain}', params: {serviceName: string, domain: string}): Promise<HostingWebFreedom>;
  /**
  List the hosting.web.indy objects
  User of multidomain independent allowed on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/indy', params: {serviceName: string, login?: string}): Promise<string[]>;
  /**
  Hosting indys
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/indy/{login}', params: {serviceName: string, login: string}): Promise<HostingWebIndy>;
  /**
  List the hosting.web.localSeo.account objects
  Local SEO accounts associated to the hosting
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/account', params: {serviceName: string, email?: string}): Promise<number[]>;
  /**
  Local SEO accounts
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/account/{id}', params: {serviceName: string, id: number}): Promise<HostingWebLocalSeoAccount>;
  /**
  emailAvailability operations
  Check email availability for a local SEO order
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/emailAvailability', params: {serviceName: string, email: string}): Promise<HostingWebLocalSeoEmailAvailability>;
  /**
  List the hosting.web.localSeo.location objects
  Local SEO locations associated to the hosting
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/location', params: {serviceName: string}): Promise<number[]>;
  /**
  Local SEO locations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/location/{id}', params: {serviceName: string, id: number}): Promise<HostingWebLocalSeoLocation>;
  /**
  serviceInfos operations
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos', params: {serviceName: string, id: number}): Promise<ServicesService>;
  /**
  List the hosting.web.module objects
  Module installed on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/module', params: {serviceName: string}): Promise<number[]>;
  /**
  Hosting modules installed
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/module/{id}', params: {serviceName: string, id: number}): Promise<HostingWebModule>;
  /**
  List the hosting.web.ovhConfig objects
  Configuration used on your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/ovhConfig', params: {serviceName: string, historical?: boolean, path?: string}): Promise<number[]>;
  /**
  Virtual service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ovhConfig/{id}', params: {serviceName: string, id: number}): Promise<HostingWebOvhConfig>;
  /**
  List the hosting.web.ownLogs objects
  Own Logs linked to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs', params: {serviceName: string}): Promise<number[]>;
  /**
  Hosting own logs
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}', params: {serviceName: string, id: number}): Promise<HostingWebOwnLogs>;
  /**
  List the hosting.web.userLogs objects
  User allowed to connect into your logs interface
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs', params: {serviceName: string, id: number, login?: string}): Promise<string[]>;
  /**
  Hosting users logs
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', params: {serviceName: string, id: number, login: string}): Promise<HostingWebUserLogs>;
  /**
  privateDatabaseCreationCapabilities operations
  List available privateDatabase you can install
  **/
  public get(path: '/hosting/web/{serviceName}/privateDatabaseCreationCapabilities', params: {serviceName: string}): Promise<HostingWebDatabaseCreationDatabaseCapabilities[]>;
  /**
  privateDatabases operations
  List linked privateDatabases
  **/
  public get(path: '/hosting/web/{serviceName}/privateDatabases', params: {serviceName: string}): Promise<string[]>;
  /**
  List the hosting.web.runtime objects
  List of runtime configurations to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/runtime', params: {serviceName: string, name?: string, type?: HostingWebRuntimeTypeEnum}): Promise<number[]>;
  /**
  The runtime configuration of an attached domain for cloud web offer
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/runtime/{id}', params: {serviceName: string, id: number}): Promise<HostingWebRuntime>;
  /**
  attachedDomains operations
  Get the attached domains linked to this runtime configuration
  **/
  public get(path: '/hosting/web/{serviceName}/runtime/{id}/attachedDomains', params: {serviceName: string, id: number}): Promise<string[]>;
  /**
  runtimeAvailableTypes operations
  List available runtime configurations available backend types
  **/
  public get(path: '/hosting/web/{serviceName}/runtimeAvailableTypes', params: {serviceName: string, language?: string}): Promise<HostingWebRuntimeTypeEnum[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  Hostedssl
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ssl', params: {serviceName: string}): Promise<HostingWebSsl>;
  /**
  domains operations
  Get domains linked to this HostedSsl
  **/
  public get(path: '/hosting/web/{serviceName}/ssl/domains', params: {serviceName: string}): Promise<string[]>;
  /**
  Hostedssl Report
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/ssl/report', params: {serviceName: string}): Promise<HostingWebSslReport>;
  /**
  statistics operations
  Get statistics about this web hosting
  **/
  public get(path: '/hosting/web/{serviceName}/statistics', params: {serviceName: string, period: HostingWebStatisticsPeriodEnum, type: HostingWebStatisticsTypeEnum}): Promise<ComplexTypeChartSerie<ComplexTypeChartTimestampValue>[]>;
  /**
  List the hosting.web.task objects
  Tasks attached to your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/tasks', params: {serviceName: string, function?: string, status?: HostingWebTaskStatusEnum}): Promise<number[]>;
  /**
  Tasks
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/tasks/{id}', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  token operations
  Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )
  **/
  public get(path: '/hosting/web/{serviceName}/token', params: {serviceName: string}): Promise<string>;
  /**
  List the hosting.web.user objects
  User allowed to connect into your hosting
  **/
  public get(path: '/hosting/web/{serviceName}/user', params: {serviceName: string, home?: string, login?: string}): Promise<string[]>;
  /**
  Hosting users
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/user/{login}', params: {serviceName: string, login: string}): Promise<HostingWebUser>;
  /**
  List the hosting.web.userLogs objects
  User allowed to connect into your logs interface
  **/
  public get(path: '/hosting/web/{serviceName}/userLogs', params: {serviceName: string, login?: string}): Promise<string[]>;
  /**
  Hosting users logs
  Get this object properties
  **/
  public get(path: '/hosting/web/{serviceName}/userLogs/{login}', params: {serviceName: string, login: string}): Promise<HostingWebUserLogs>;
  /**
  userLogsToken operations
  Get a temporary token to access the your web hosting logs interface
  **/
  public get(path: '/hosting/web/{serviceName}/userLogsToken', params: {serviceName: string, attachedDomain?: string, remoteCheck?: boolean, ttl?: number}): Promise<string>;
  public get(path: PathsHostingWebGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Web Hosting
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Virtual service
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', params: {serviceName: string, domain: string}): Promise<void>;
  /**
  Hosting crons
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/cron/{id}', params: {serviceName: string, id: number}): Promise<void>;
  /**
  Hosting automated emails
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/email', params: {serviceName: string}): Promise<void>;
  /**
  Environment variables set into your webhosting account
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/envVar/{key}', params: {serviceName: string, key: string}): Promise<void>;
  /**
  Hosting users logs
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', params: {serviceName: string, id: number, login: string}): Promise<void>;
  /**
  The runtime configuration of an attached domain for cloud web offer
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/runtime/{id}', params: {serviceName: string, id: number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  /**
  Hosting users
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/user/{login}', params: {serviceName: string, login: string}): Promise<void>;
  /**
  Hosting users logs
  Alter this object properties
  **/
  public put(path: '/hosting/web/{serviceName}/userLogs/{login}', params: {serviceName: string, login: string}): Promise<void>;
  public put(path: PathsHostingWebPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Check visibility of a location
  Check visibility of a location
  **/
  public post(path: '/hosting/web/localSeo/visibilityCheck'): Promise<HostingWebLocalSeoVisibilityCheckResponse>;
  /**
  activatePrivateDatabase operations
  Activate an included private database on your hosting offer
  **/
  public post(path: '/hosting/web/{serviceName}/activatePrivateDatabase', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  List the hosting.web.attachedDomain objects
  Link a domain to this hosting
  **/
  public post(path: '/hosting/web/{serviceName}/attachedDomain', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  purgeCache operations
  Purge cache for this attached domain
  **/
  public post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache', params: {serviceName: string, domain: string}): Promise<HostingWebTask>;
  /**
  restart operations
  Restart the virtual host of the attached domain
  **/
  public post(path: '/hosting/web/{serviceName}/attachedDomain/{domain}/restart', params: {serviceName: string, domain: string}): Promise<HostingWebTask>;
  /**
  serviceInfosUpdate operations
  Alter this object properties
  **/
  public post(path: '/hosting/web/{serviceName}/cdn/serviceInfosUpdate', params: {serviceName: string}): Promise<void>;
  /**
  terminate operations
  Terminate your cdn sub service
  **/
  public post(path: '/hosting/web/{serviceName}/cdn/terminate', params: {serviceName: string}): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/hosting/web/{serviceName}/changeContact', params: {serviceName: string}): Promise<number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/hosting/web/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  List the hosting.web.cron objects
  Create new cron
  **/
  public post(path: '/hosting/web/{serviceName}/cron', params: {serviceName: string}): Promise<string>;
  /**
  List the hosting.web.database objects
  Install new database
  **/
  public post(path: '/hosting/web/{serviceName}/database', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/changePassword', params: {serviceName: string, name: string}): Promise<HostingWebTask>;
  /**
  List the hosting.web.database.dump objects
  Request the dump from your database
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/dump', params: {serviceName: string, name: string}): Promise<HostingWebTask>;
  /**
  restore operations
  Request the restore from this dump
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}/restore', params: {serviceName: string, name: string, id: number}): Promise<HostingWebTask>;
  /**
  import operations
  Import a dump from an specific file uploaded with /me/documents
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/import', params: {serviceName: string, name: string}): Promise<HostingWebTask>;
  /**
  request operations
  Request specific operation for your database
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/request', params: {serviceName: string, name: string}): Promise<HostingWebTask>;
  /**
  restore operations
  Request the restore from your database backup
  **/
  public post(path: '/hosting/web/{serviceName}/database/{name}/restore', params: {serviceName: string, name: string}): Promise<HostingWebTask>;
  /**
  request operations
  Request specific operation for your email
  **/
  public post(path: '/hosting/web/{serviceName}/email/request', params: {serviceName: string}): Promise<string>;
  /**
  List the hosting.web.envVar objects
  Set a variable to this hosting
  **/
  public post(path: '/hosting/web/{serviceName}/envVar', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  serviceInfosUpdate operations
  Alter this object properties
  **/
  public post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate', params: {serviceName: string, name: string}): Promise<void>;
  /**
  terminate operations
  Terminate your extraSqlPerso sub service
  **/
  public post(path: '/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate', params: {serviceName: string, name: string}): Promise<string>;
  /**
  login operations
  Login this location for SSO
  **/
  public post(path: '/hosting/web/{serviceName}/localSeo/account/{id}/login', params: {serviceName: string, id: number}): Promise<string>;
  /**
  serviceInfosUpdate operations
  Alter this object properties
  **/
  public post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate', params: {serviceName: string, id: number}): Promise<void>;
  /**
  terminate operations
  Terminate a local SEO sub service
  **/
  public post(path: '/hosting/web/{serviceName}/localSeo/location/{id}/terminate', params: {serviceName: string, id: number}): Promise<string>;
  /**
  List the hosting.web.module objects
  Install a new module
  **/
  public post(path: '/hosting/web/{serviceName}/module', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  changePassword operations
  Generate a new admin password for your module
  **/
  public post(path: '/hosting/web/{serviceName}/module/{id}/changePassword', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  changeConfiguration operations
  Apply a new configuration on this path
  **/
  public post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  rollback operations
  Rollback to an old configuration
  **/
  public post(path: '/hosting/web/{serviceName}/ovhConfig/{id}/rollback', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  ovhConfigRefresh operations
  Synchronize the configuration listing with content on your hosting
  **/
  public post(path: '/hosting/web/{serviceName}/ovhConfigRefresh', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  List the hosting.web.userLogs objects
  Create new userLogs
  **/
  public post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs', params: {serviceName: string, id: number}): Promise<string>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword', params: {serviceName: string, id: number, login: string}): Promise<string>;
  /**
  request operations
  Request specific operation for your hosting
  **/
  public post(path: '/hosting/web/{serviceName}/request', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  requestBoost operations
  Allows you to boost your offer.
  **/
  public post(path: '/hosting/web/{serviceName}/requestBoost', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  restoreSnapshot operations
  Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT
  **/
  public post(path: '/hosting/web/{serviceName}/restoreSnapshot', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  List the hosting.web.runtime objects
  Request the creation of a new runtime configuration
  **/
  public post(path: '/hosting/web/{serviceName}/runtime', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  Hostedssl
  Create the free default HostedSsl OR import your proper SSL on your hosting
  **/
  public post(path: '/hosting/web/{serviceName}/ssl', params: {serviceName: string}): Promise<HostingWebSsl>;
  /**
  regenerate operations
  Request the regeneration of your HostedSsl
  **/
  public post(path: '/hosting/web/{serviceName}/ssl/regenerate', params: {serviceName: string}): Promise<HostingWebSsl>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/hosting/web/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
  List the hosting.web.user objects
  Create new ftp/ssh user
  **/
  public post(path: '/hosting/web/{serviceName}/user', params: {serviceName: string}): Promise<HostingWebTask>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/user/{login}/changePassword', params: {serviceName: string, login: string}): Promise<HostingWebTask>;
  /**
  List the hosting.web.userLogs objects
  Create new userLogs
  **/
  public post(path: '/hosting/web/{serviceName}/userLogs', params: {serviceName: string}): Promise<string>;
  /**
  changePassword operations
  Request a password change
  **/
  public post(path: '/hosting/web/{serviceName}/userLogs/{login}/changePassword', params: {serviceName: string, login: string}): Promise<string>;
  public post(path: PathsHostingWebPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Virtual service
  Unlink domain from hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/attachedDomain/{domain}', params: {serviceName: string, domain: string}): Promise<HostingWebTask>;
  /**
  Hosting crons
  Delete cron
  **/
  public delete(path: '/hosting/web/{serviceName}/cron/{id}', params: {serviceName: string, id: number}): Promise<string>;
  /**
  Database
  Delete database
  **/
  public delete(path: '/hosting/web/{serviceName}/database/{name}', params: {serviceName: string, name: string}): Promise<HostingWebTask>;
  /**
  Dump
  Delete dump before expiration date
  **/
  public delete(path: '/hosting/web/{serviceName}/database/{name}/dump/{id}', params: {serviceName: string, name: string, id: number}): Promise<HostingWebTask>;
  /**
  Dump
  Delete dump before expiration date
  **/
  public delete(path: '/hosting/web/{serviceName}/dump/{id}', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  Environment variables set into your webhosting account
  Remove variable from hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/envVar/{key}', params: {serviceName: string, key: string}): Promise<HostingWebTask>;
  /**
  Freedoms linked to this hosting account
  Delete the freedom
  **/
  public delete(path: '/hosting/web/{serviceName}/freedom/{domain}', params: {serviceName: string, domain: string}): Promise<void>;
  /**
  Hosting modules installed
  Delete a module installed
  **/
  public delete(path: '/hosting/web/{serviceName}/module/{id}', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  Hosting users logs
  Delete the userLogs
  **/
  public delete(path: '/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}', params: {serviceName: string, id: number, login: string}): Promise<string>;
  /**
  The runtime configuration of an attached domain for cloud web offer
  Delete a runtime configuration of an hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/runtime/{id}', params: {serviceName: string, id: number}): Promise<HostingWebTask>;
  /**
  Hostedssl
  Delete the HostedSsl on your hosting
  **/
  public delete(path: '/hosting/web/{serviceName}/ssl', params: {serviceName: string}): Promise<HostingWebSsl>;
  /**
  Hosting users
  Delete ftp/ssh user
  **/
  public delete(path: '/hosting/web/{serviceName}/user/{login}', params: {serviceName: string, login: string}): Promise<HostingWebTask>;
  /**
  Hosting users logs
  Delete the userLogs
  **/
  public delete(path: '/hosting/web/{serviceName}/userLogs/{login}', params: {serviceName: string, login: string}): Promise<string>;
  public delete(path: PathsHostingWebDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}