import { ApiCommon } from '@ovh-api/common';
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
 * ovh Nas HA offer availabilities
 */
export interface DedicatedNasHAAvailabilities {
  /**
   * Name of the offer
   *
   */
  offer?: DedicatedNasHAOfferEnum;
  /**
   * Zone of the DC
   *
   */
  datacenters?: DedicatedNasHAAvailabilityDatacenter[];
}
/**
 * A structure describing the availability of offer for each datacenter
 */
export interface DedicatedNasHAAvailabilityDatacenter {
  /**
   * The code of the datacenter
   *
   */
  datacenter?: DedicatedNasHAZoneEnum;
  /**
   * The availability
   *
   */
  availability?: DedicatedNasHAAvailabilityEnum;
}
/**
 * The availability
 */
export type DedicatedNasHAAvailabilityEnum = '1H' | '240H' | '24H' | '72H' | 'unknown';
/**
 * ovh Nas HA offer
 */
export type DedicatedNasHAOfferEnum = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g';
/**
 * Nas HA localization
 */
export type DedicatedNasHAZoneEnum = 'bhs' | 'rbx' | 'sbg';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Storage task
 */
export interface DedicatedNasTaskTask {
  /**
   * name of the partition
   *
   */
  partitionName?: string;
  /**
   * last modification of task
   *
   */
  lastUpdate?: Date;
  /**
   * Insertion of task in the todo
   *
   */
  todoDate?: Date;
  /**
   * information about operation
   *
   */
  details?: string;
  /**
   * Task type of operation
   *
   */
  operation?: DedicatedStorageTaskFunctionEnum;
  /**
   * the date when the task finished
   *
   */
  doneDate?: Date;
  /**
   * id of the task
   *
   */
  taskId?: Number;
  /**
   * the name of your service
   *
   */
  storageName?: string;
  /**
   * The actual state of the task
   *
   */
  status?: DedicatedTaskStatusEnum;
}
/**
 * Define Acl for partition
 */
export interface DedicatedNashaAccess {
  /**
   * the id of the access
   *
   */
  accessId?: Number;
  /**
   * the ip in root on storage
   *
   */
  ip?: string;
  /**
   * ACL type
   *
   */
  type?: DedicatedStorageAclTypeEnum;
}
/**
 * Storage zpool partition
 */
export interface DedicatedNashaPartition {
  /**
   * percentage of partition space used in %
   *
   */
  partitionCapacity?: Number;
  /**
   * must be nfs cifs or both
   *
   */
  protocol?: DedicatedStorageProtocolEnum;
  /**
   * the given name of partition
   *
   */
  partitionName?: string;
  /**
   * Partition size
   *
   */
  size?: Number;
  /**
   * percentage of partition space used by snapshots, in %
   *
   */
  usedBySnapshots?: Number;
}
/**
 * Partition Quota
 */
export interface DedicatedNashaQuota {
  /**
   * the uid to set quota on
   *
   */
  uid?: Number;
  /**
   * the size to set in MB
   *
   */
  size?: Number;
}
/**
 * Partition Snapshot
 */
export interface DedicatedNashaSnapshot {
  /**
   * the interval of snapshot
   *
   */
  snapshotType?: DedicatedStorageSnapshotEnum;
}
/**
 * Storage nas HA
 */
export interface DedicatedNashaStorage {
  /**
   * the size of the nas
   *
   */
  zpoolSize?: Number;
  /**
   * True, if partition creation is allowed on this nas HA
   *
   */
  canCreatePartition?: boolean;
  /**
   * Access ip of nas
   *
   */
  ip?: string;
  /**
   * percentage of nas space used in %
   *
   */
  zpoolCapacity?: Number;
  /**
   * area of nas
   *
   */
  datacenter?: string;
  /**
   * The name you give to the nas
   *
   */
  customName?: string;
  /**
   * The storage service name
   *
   */
  serviceName?: string;
  /**
   * Send an email to customer if any issue is detected
   *
   */
  monitored?: boolean;
}
/**
 * Partition Vrack
 */
export interface DedicatedNashaVrack {
  /**
   * service ip
   *
   */
  serviceIp?: ipInterface;
  /**
   * ID
   *
   */
  id?: Number;
  /**
   * type of
   *
   */
  type?: string;
  /**
   * vrack name
   *
   */
  vrackName?: string;
}
/**
 * Custom Snapshot
 */
export interface DedicatedNashaCustomSnap {
  /**
   * name of the snapshot
   *
   */
  name?: string;
  /**
   * date and time at which snapshot will be automatically destroyed
   *
   */
  expiration?: string;
}
/**
 * Partition options
 */
export interface DedicatedNashaOptions {
  /**
   * atime setting
   *
   */
  atime?: string;
  /**
   * ZFS recordsize
   *
   */
  recordsize?: string;
  /**
   * ID
   *
   */
  id?: Number;
  /**
   * sync setting
   *
   */
  sync?: string;
}
/**
 * Acl Type
 */
export type DedicatedStorageAclTypeEnum = 'readonly' | 'readwrite';
/**
 * Atime values
 */
export type DedicatedStorageAtimeEnum = 'off' | 'on';
/**
 * Available types for NAS usage
 */
export type DedicatedStorageNasUsageTypeEnum = 'size' | 'used' | 'usedbysnapshots';
/**
 * Available types for NAS partition usage
 */
export type DedicatedStoragePartitionUsageTypeEnum = 'size' | 'used' | 'usedbysnapshots';
/**
 * Partition Protocol
 */
export type DedicatedStorageProtocolEnum = 'CIFS' | 'NFS' | 'NFS_CIFS';
/**
 * Recordsize values
 */
export type DedicatedStorageRecordSizeEnum = '131072' | '16384' | '32768' | '4096' | '65536' | '8192';
/**
 * Partition snapshot allowed 
 */
export type DedicatedStorageSnapshotEnum = 'day-1' | 'day-2' | 'day-3' | 'day-7' | 'hour-1' | 'hour-6';
/**
 * Sync values
 */
export type DedicatedStorageSyncEnum = 'always' | 'disabled' | 'standard';
/**
 * Distincts task
 */
export type DedicatedStorageTaskFunctionEnum = 'backupRecursiveDestroy' | 'clusterLeclercAclUpdate' | 'clusterLeclercChangeServiceIp' | 'clusterLeclercCustomSnapCreate' | 'clusterLeclercCustomSnapDelete' | 'clusterLeclercDeleteSnapshotDirectory' | 'clusterLeclercDestroyNasContainer' | 'clusterLeclercPartitionAdd' | 'clusterLeclercPartitionDelete' | 'clusterLeclercPartitionUpdate' | 'clusterLeclercQuotaUpdate' | 'clusterLeclercSetupNasContainer' | 'clusterLeclercSnapshotUpdate' | 'clusterLeclercZfsOptions' | 'nasAclUpdate' | 'nasDeleteSnapshotDirectory' | 'nasPartitionAdd' | 'nasPartitionDelete' | 'nasPartitionUpdate' | 'nasQuotaUpdate' | 'remoteBackupRecursiveDestroy';
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
type PathsdedicatednashaGET = '/dedicated/nasha/availabilities' | 
'/dedicated/nasha' | 
'/dedicated/nasha/{serviceName}' | 
'/dedicated/nasha/{serviceName}/task' | 
'/dedicated/nasha/{serviceName}/task/{taskId}' | 
'/dedicated/nasha/{serviceName}/use' | 
'/dedicated/nasha/{serviceName}/serviceInfos' | 
'/dedicated/nasha/{serviceName}/partition' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/options' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/use' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/access' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/quota' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks';

type PathsdedicatednashaPUT = '/dedicated/nasha/{serviceName}' | 
'/dedicated/nasha/{serviceName}/serviceInfos' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}';

type PathsdedicatednashaPOST = '/dedicated/nasha/{serviceName}/terminate' | 
'/dedicated/nasha/{serviceName}/changeContact' | 
'/dedicated/nasha/{serviceName}/confirmTermination' | 
'/dedicated/nasha/{serviceName}/partition' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/options' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/access' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/quota';

type PathsdedicatednashaDELETE = '/dedicated/nasha/{serviceName}/vrack' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}' | 
'/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}';

class Apidedicatednasha extends ApiCommon {
  /**
  Get availabilities of nasha offer
  Get availabilities of nasha offer
  **/
  public get(path: '/dedicated/nasha/availabilities', pathParams: null, queryParams: null): Promise<DedicatedNasHAAvailabilities[]>;
  /**
  Operations about the STORAGE service
  List available services
  **/
  public get(path: '/dedicated/nasha', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Storage nas HA
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedNashaStorage>;
  /**
  List the dedicated.nasTask.Task objects
  View task list
  **/
  public get(path: '/dedicated/nasha/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {status?: DedicatedTaskStatusEnum, operation?: DedicatedStorageTaskFunctionEnum}): Promise<Number[]>;
  /**
  Storage task
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DedicatedNasTaskTask>;
  /**
  use operations
  Return statistics about the nas
  **/
  public get(path: '/dedicated/nasha/{serviceName}/use', pathParams: {serviceName?: string}, queryParams: {type?: DedicatedStorageNasUsageTypeEnum}): Promise<ComplexTypeUnitAndValue<Number>>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the dedicated.nasha.Partition objects
  Get partition list
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Partition options
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/options', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<DedicatedNashaOptions>;
  /**
  Storage zpool partition
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<DedicatedNashaPartition>;
  /**
  authorizableIps operations
  Get all IPs that can be used in the ACL
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<string[]>;
  /**
  Custom Snapshot
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}', pathParams: {serviceName?: string, partitionName?: string, name?: string}, queryParams: null): Promise<DedicatedNashaCustomSnap>;
  /**
  List the dedicated.nasha.customSnap objects
  Get custom snapshots for this partition
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<string[]>;
  /**
  Partition Snapshot
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}', pathParams: {serviceName?: string, partitionName?: string, snapshotType?: DedicatedStorageSnapshotEnum}, queryParams: null): Promise<DedicatedNashaSnapshot>;
  /**
  List the dedicated.nasha.Snapshot objects
  Get scheduled snapshot types for this partition
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<DedicatedStorageSnapshotEnum[]>;
  /**
  use operations
  Return statistics about the partition
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/use', pathParams: {serviceName?: string, partitionName?: string}, queryParams: {type?: DedicatedStoragePartitionUsageTypeEnum}): Promise<ComplexTypeUnitAndValue<Number>>;
  /**
  Define Acl for partition
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}', pathParams: {serviceName?: string, partitionName?: string, ip?: string}, queryParams: null): Promise<DedicatedNashaAccess>;
  /**
  List the dedicated.nasha.Access objects
  get ACL for this partition
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.nasha.Quota objects
  Get quota for this partition
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Partition Quota
  Get this object properties
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}', pathParams: {serviceName?: string, partitionName?: string, uid?: Number}, queryParams: null): Promise<DedicatedNashaQuota>;
  /**
  authorizableBlocks operations
  Get all RIPE/ARIN blocks that can be used in the ACL
  **/
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks', pathParams: {serviceName?: string, partitionName?: string}, queryParams: null): Promise<string[]>;
  public get(path: PathsdedicatednashaGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Storage nas HA
  Alter this object properties
  **/
  public put(path: '/dedicated/nasha/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/nasha/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Storage zpool partition
  Alter this object properties
  **/
  public put(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsdedicatednashaPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicated/nasha/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicated/nasha/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicated/nasha/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the dedicated.nasha.Partition objects
  Create a new partition
  **/
  public post(path: '/dedicated/nasha/{serviceName}/partition', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Partition options
  Setup options
  **/
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/options', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nasha.customSnap objects
  Create a new snapshot
  **/
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nasha.Snapshot objects
  Schedule a new snapshot type
  **/
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nasha.Access objects
  Add a new ACL entry
  **/
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  List the dedicated.nasha.Quota objects
  Set a new quota
  **/
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  public post(path: PathsdedicatednashaPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Partition Vrack
  Delete the vrack container
  **/
  public delete(path: '/dedicated/nasha/{serviceName}/vrack', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Storage zpool partition
  Delete this partition
  **/
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}', pathParams: {serviceName?: string, partitionName?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Custom Snapshot
  Delete a given snapshot
  **/
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}', pathParams: {serviceName?: string, partitionName?: string, name?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Partition Snapshot
  Delete a given snapshot
  **/
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}', pathParams: {serviceName?: string, partitionName?: string, snapshotType?: DedicatedStorageSnapshotEnum}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Define Acl for partition
  Delete an ACL entry
  **/
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}', pathParams: {serviceName?: string, partitionName?: string, ip?: string}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  /**
  Partition Quota
  Delete a given quota
  **/
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}', pathParams: {serviceName?: string, partitionName?: string, uid?: Number}, bodyParams: null): Promise<DedicatedNasTaskTask>;
  public delete(path: PathsdedicatednashaDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
