import { ApiCommon } from '@ovh-api/common';
/**
 * Chart
 */
export interface ComplexTypeChartReturn {
  /**
   */
  unit?: string;
  /**
   */
  values?: ComplexTypeChartTimestampValue[];
}
/**
 * A timestamp associated to a value
 */
export interface ComplexTypeChartTimestampValue {
  /**
   */
  value?: Number;
  /**
   */
  timestamp?: Number;
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
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilities {
  /**
   * The hardware availability for each datacenter which composed a region
   *
   */
  datacenters?: DedicatedAvailabilityDatacenter[];
  /**
   * Region where is located the hardware
   *
   */
  region?: DedicatedAvailabilityRegionEnum;
  /**
   * Name of the hardware
   *
   */
  hardware?: string;
}
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilitiesRaw {
  /**
   * Last availability rule applied
   *
   */
  lastRule?: string;
  /**
   * Product reference
   *
   */
  reference?: string;
  /**
   * Ordered count
   *
   */
  ordered?: Number;
  /**
   * 4H count
   *
   */
  trueAvailable4H?: Number;
  /**
   * Validating order count
   *
   */
  orderedCheck?: Number;
  /**
   * 24H count
   *
   */
  trueAvailable24H?: Number;
  /**
   * Region where is located the product
   *
   */
  zone?: DedicatedAvailabilityRegionEnum;
  /**
   * Real stock (considering order in validating)
   *
   */
  trueAvailable?: Number;
  /**
   * Real stock in database
   *
   */
  available?: Number;
  /**
   * Stock in datacenter
   *
   */
  incomingDatacenter?: Number;
  /**
   * Blockbuster stock count
   *
   */
  parentAvailable?: Number;
  /**
   * The availability
   *
   */
  availability?: DedicatedAvailabilityEnum;
}
/**
 * A structure describing the hardware availability for each datacenter
 */
export interface DedicatedAvailabilityDatacenter {
  /**
   * Datacenter code
   *
   */
  datacenter?: DedicatedAvailabilityDatacenterEnum;
  /**
   * Availability status
   *
   */
  availability?: DedicatedAvailabilityEnum;
}
/**
 * The datacenter
 */
export type DedicatedAvailabilityDatacenterEnum = 'bhs' | 'default' | 'fra' | 'gra' | 'hil' | 'lon' | 'rbx' | 'rbx-hz' | 'sbg' | 'sgp' | 'syd' | 'vin' | 'waw';
/**
 * The availability
 */
export type DedicatedAvailabilityEnum = '1H-high' | '1H-low' | '240H' | '24H' | '72H' | 'unavailable' | 'unknown';
/**
 * The region
 */
export type DedicatedAvailabilityRegionEnum = 'europe' | 'northAmerica';
/**
 * Get list of compatible firewall binaries
 */
export interface DedicatedBinaryFirewall {
  /**
   * List of compatible asdm binaries names
   *
   */
  asdm?: string[];
  /**
   */
  type?: DedicatedProfileFirewallEnum;
  /**
   * List of compatible asa binaries names
   *
   */
  asa?: string[];
}
/**
 * Get temporary URL link to download binary
 */
export interface DedicatedBinaryFirewallLink {
  /**
   * Temporary URL to download binary
   *
   */
  url?: string;
}
/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedDatacenterAvailability {
  /**
   * The hardware availability for each datacenter
   *
   */
  datacenters?: DedicatedAvailabilityDatacenter[];
  /**
   * Name of the base hardware
   *
   */
  server?: string;
  /**
   * Fully qualified and unique name of the hardware
   *
   */
  fqn?: string;
  /**
   * Name of the memory hardware part
   *
   */
  memory?: string;
  /**
   * Name of the storage hardware part
   *
   */
  storage?: string;
  /**
   * Plan code in which the hardware is involved
   *
   */
  planCode?: string;
}
/**
 * ovh datacenter
 */
export type DedicatedDatacenterEnum = 'bhs1' | 'bhs2' | 'bhs3' | 'bhs4' | 'bhs5' | 'bhs6' | 'bhs7' | 'dc1' | 'eri1' | 'gra1' | 'gra2' | 'gsw' | 'hil1' | 'lim1' | 'p19' | 'rbx-hz' | 'rbx1' | 'rbx2' | 'rbx3' | 'rbx4' | 'rbx5' | 'rbx6' | 'rbx7' | 'sbg1' | 'sbg2' | 'sbg3' | 'sbg4' | 'sgp1' | 'syd1' | 'vin1' | 'waw1';
/**
 * Operating system name
 */
export type DedicatedOsAvailabilitiesEnum = 'archlinux-installer_64' | 'centos5_64' | 'centos6-cpanel-latest_64' | 'centos6-ovh_64' | 'centos6-plesk12_64' | 'centos6_64' | 'centos7-cpanel-latest_64' | 'centos7-directadmin_64' | 'centos7-fpga-accelize_64' | 'centos7-fpga-intel-opencl_64' | 'centos7-plesk125_64' | 'centos7-plesk12_64' | 'centos7-plesk17_64' | 'centos7_64' | 'cloudlinux6_64' | 'cloudlinux7_64' | 'coreos-alpha_64' | 'coreos_64' | 'debian7-ispconfig3_64' | 'debian7-minecraft_64' | 'debian7-plesk12_64' | 'debian7_64' | 'debian8-ispconfig3_64' | 'debian8-plesk125_64' | 'debian8_64' | 'debian8_armhf_32' | 'debian9-ispconfig3_64' | 'debian9_64' | 'debian9_armhf_32' | 'dgx1-os-3_64' | 'esxi51_64' | 'esxi55_64' | 'esxi5_64' | 'esxi60_64' | 'esxi65_64' | 'fedora26_64' | 'fedora27_64' | 'freebsd10-zfs_64' | 'freebsd10_64' | 'freebsd11-zfs_64' | 'gentoo11_64' | 'openmediavault3_armhf_32' | 'openmediavault_armhf_32' | 'opensuse42_64' | 'proxmox4-zfs_64' | 'proxmox4_64' | 'proxmox5-zfs_64' | 'proxmox5_64' | 'slackware14_64' | 'smartos_64' | 'solusvm-master-vz_64' | 'solusvm-slave-vz_64' | 'ubuntu1404-plesk125_64' | 'ubuntu1404-server_64' | 'ubuntu1510-server_arm64_64' | 'ubuntu1510-server_ppc64el_64' | 'ubuntu1604-desktop_64' | 'ubuntu1604-server_64' | 'ubuntu1604-server_armhf_32' | 'ubuntu1604-server_ppc64el_64' | 'ubuntu1710-server_64' | 'win2008r2-dc-virtuozzo46_64' | 'win2008r2-dc_64' | 'win2008r2-ent-plesk10_64' | 'win2008r2-ent-plesk11_64' | 'win2008r2-ent-plesk12_64' | 'win2008r2-ent-sp2010found_64' | 'win2008r2-ent-virtuozzo46_64' | 'win2008r2-ent_64' | 'win2008r2-std-plesk11_64' | 'win2008r2-std-plesk12_64' | 'win2008r2-std-sp2010found_64' | 'win2008r2-std_64' | 'win2008r2-web-plesk11_64' | 'win2008r2-web-plesk12_64' | 'win2008r2-web-sp2010found_64' | 'win2008r2-web_64' | 'win2008r2core-dc_64' | 'win2008r2core-ent_64' | 'win2008r2core-hyperv_64' | 'win2008r2core-std_64' | 'win2008r2core-web_64' | 'win2012-dc_64' | 'win2012-hyperv3_64' | 'win2012-std-plesk11_64' | 'win2012-std-plesk12_64' | 'win2012-std_64' | 'win2012r2-dc_64' | 'win2012r2-hyperv3_64' | 'win2012r2-std-plesk12_64' | 'win2012r2-std_64' | 'win2016-dc_64' | 'win2016-std_64' | 'win81-pro-sysprep_64' | 'xenserver6_64';
/**
 * profile firewall asa
 */
export type DedicatedProfileFirewallEnum = 'cisco.asa5505' | 'cisco.asa5510' | 'cisco.asa5520';
/**
 * enable or disable
 */
export type DedicatedStatusEnum = 'disable' | 'enable';
/**
 * different task operation
 */
export type DedicatedTaskFunctionEnum = 'addVirtualMac' | 'addWindowSplaFromExistingSerial' | 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'bypassAntiDDosGame' | 'changePasswordBackupFTP' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'createBackupFTP' | 'createOrUpdateRipeOrg' | 'createPrivateNetwork' | 'disableFirewall' | 'enableFirewall' | 'genericMoveFloatingIp' | 'hardReboot' | 'migrateBackupFTP' | 'moveFloatingIp' | 'moveVirtualMac' | 'rebootPower8To' | 'reinstallServer' | 'releaseIp' | 'removeBackupFTP' | 'removeVirtualMac' | 'requestAccessIPMI' | 'resetIPMI' | 'resetIPMISession' | 'testIPMIhttp' | 'testIPMIpassword' | 'testIPMIping' | 'virtualMacAdd' | 'virtualMacDelete';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Your networkInterfaceController
 */
export interface DedicatedNetworkInterfaceControllerNetworkInterfaceController {
  /**
   * NetworkInterfaceController linkType
   *
   */
  linkType?: DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum;
  /**
   * NetworkInterfaceController mac
   *
   */
  mac?: string;
}
/**
 * List NetworkInterfaceController linktype
 */
export type DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum = 'private' | 'public';
/**
 * A structure describing the server's access
 */
export interface DedicatedServerAccess {
  /**
   * Password
   *
   */
  password?: string;
  /**
   * Application access type
   *
   */
  type?: DedicatedServerAccessTypeEnum;
  /**
   * Login
   *
   */
  user?: string;
  /**
   * Url
   *
   */
  url?: string;
}
/**
 * Application access type
 */
export type DedicatedServerAccessTypeEnum = 'DIRECTADMIN_PANEL' | 'PLESK_PANEL' | 'PROXMOX_PANEL' | 'RDP' | 'SQL_SERVER' | 'SSH' | 'WEB_PANEL';
/**
 * Monitoring alert language
 */
export type DedicatedServerAlertLanguageEnum = 'cz' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'it' | 'lt' | 'nl' | 'pl' | 'pt';
/**
 * Backup Cloud assigned to this server
 */
export interface DedicatedServerBackupCloud {
  /**
   * Agreement ids waiting for validation
   *
   */
  agreements?: Number[];
  /**
   * Archive space info.
   *
   */
  archive?: DedicatedServerBackupBackupContainer;
  /**
   * Storage space info.
   *
   */
  storage?: DedicatedServerBackupBackupContainer;
  /**
   * Status of the container.
   *
   */
  status?: DedicatedServerBackupBackupStatus;
}
/**
 * Backup Ftp assigned to this server
 */
export interface DedicatedServerBackupFtp {
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: Date;
  /**
   * The disk space available in gigabytes
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * The disk space currently used on your backup FTP in percent
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
  /**
   * The backup FTP server name
   *
   */
  ftpBackupName?: string;
  /**
   * The backup FTP type
   *
   */
  type?: DedicatedServerBackupStorageTypeEnum;
}
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the FTP protocol for this ACL
   *
   */
  ftp?: boolean;
  /**
   * The IP Block specific to this ACL
   *
   */
  ipBlock?: string;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate?: Date;
  /**
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied?: boolean;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs?: boolean;
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs?: boolean;
}
/**
 * Different backup storage capacity in gigabytes
 */
export type DedicatedServerBackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000;
/**
 * A structure describing informations storage backup orderable for this dedicated server
 */
export interface DedicatedServerBackupStorageOrderable {
  /**
   * Is a backup storage is orderable for this server
   *
   */
  orderable?: boolean;
  /**
   * Backup storage orderable capacities in gigabytes
   *
   */
  capacities?: DedicatedServerBackupStorageCapacityEnum[];
}
/**
 * Different backup storage type
 */
export type DedicatedServerBackupStorageTypeEnum = 'included' | 'storage';
/**
 * A structure describing bandwidth informations about this dedicated server
 */
export interface DedicatedServerBandwidthDetails {
  /**
   * bandwidth limitation OVH to OVH
   *
   */
  OvhToOvh?: ComplexTypeUnitAndValue<Number>;
  /**
   * bandwidth limitation OVH to Internet
   *
   */
  OvhToInternet?: ComplexTypeUnitAndValue<Number>;
  /**
   * bandwidth limitation Internet to OVH
   *
   */
  InternetToOvh?: ComplexTypeUnitAndValue<Number>;
  /**
   * bandwidth offer type
   *
   */
  type?: DedicatedServerBandwidthTypeEnum;
}
/**
 *  Different Bandwidth orderable in Mbps
 */
export type DedicatedServerBandwidthOrderEnum = 1000 | 2000 | 3000;
/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedServerBandwidthOrderable {
  /**
   * Bandwidth "platinum" orderable in mbps
   *
   */
  platinum?: DedicatedServerBandwidthOrderEnum[];
  /**
   * Bandwidth "premium" orderable in mbps
   *
   */
  premium?: DedicatedServerBandwidthOrderEnum[];
  /**
   * Bandwidth "ultimate" orderable in mbps
   *
   */
  ultimate?: DedicatedServerBandwidthOrderEnum[];
  /**
   * Is bandwidth orderable for this server
   *
   */
  orderable?: boolean;
}
/**
 *  Different Bandwidth type
 */
export type DedicatedServerBandwidthTypeEnum = 'included' | 'platinum' | 'premium' | 'standard' | 'ultimate';
/**
 * A structure describing vRack bandwidth informations about this dedicated server
 */
export interface DedicatedServerBandwidthvRackDetails {
  /**
   * vrack bandwidth limitation
   *
   */
  bandwidth?: ComplexTypeUnitAndValue<Number>;
  /**
   * bandwidth offer type
   *
   */
  type?: DedicatedServerBandwidthvRackTypeEnum;
}
/**
 *  Different vRack Bandwidth orderable in Mbps
 */
export type DedicatedServerBandwidthvRackOrderEnum = 1000 | 3000;
/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedServerBandwidthvRackOrderable {
  /**
   * Is bandwidth orderable for this server
   *
   */
  orderable?: boolean;
  /**
   * vRack Bandwidth orderable in mbps
   *
   */
  vrack?: DedicatedServerBandwidthvRackOrderEnum[];
}
/**
 *  Different Bandwidth type
 */
export type DedicatedServerBandwidthvRackTypeEnum = 'included' | 'standard';
/**
 * Server boot mode
 */
export type DedicatedServerBootModeEnum = 'legacy' | 'uefi' | 'uefi-legacy';
/**
 * Different option activated on netboot 
 */
export type DedicatedServerBootOptionEnum = 'cpufamily' | 'grsec' | 'ipv6' | 'smp';
/**
 *  Different netboot boot
 */
export type DedicatedServerBootTypeEnum = 'harddisk' | 'internal' | 'ipxeCustomerScript' | 'network' | 'rescue';
/**
 * Dedicated server bandwidth burst
 */
export type DedicatedServerBurstStatusEnum = 'active' | 'inactive' | 'inactiveLocked';
/**
 * Time to live in minutes for cache
 */
export type DedicatedServerCacheTTLEnum = 1 | 10 | 15 | 3 | 5;
/**
 * cpu family 
 */
export type DedicatedServerCpuFamilyEnum = 'arm64' | 'armhf32' | 'ppc64' | 'x86' | 'x86-ht' | 'x86_64';
/**
 * Server informations
 */
export interface DedicatedServerDedicated {
  /**
   */
  rack?: string;
  /**
   * Operating system
   *
   */
  os?: string;
  /**
   */
  bootId?: Number;
  /**
   * dedicated server ip
   *
   */
  ip?: string;
  /**
   */
  linkSpeed?: Number;
  /**
   * dedicated datacenter localisation
   *
   */
  datacenter?: DedicatedDatacenterEnum;
  /**
   * Dedicated server support level
   *
   */
  supportLevel?: DedicatedServerSupportLevelEnum;
  /**
   * Icmp monitoring state
   *
   */
  monitoring?: boolean;
  /**
   * dedicated server reverse
   *
   */
  reverse?: string;
  /**
   * your server id
   *
   */
  serverId?: Number;
  /**
   */
  rescueMail?: string;
  /**
   * dedicated server name
   *
   */
  name?: string;
  /**
   */
  state?: DedicatedServerStateEnum;
  /**
   * Does this server have professional use option
   *
   */
  professionalUse?: boolean;
  /**
   */
  rootDevice?: string;
  /**
   * dedicater server commercial range
   *
   */
  commercialRange?: string;
}
/**
 * Disk interface type enum
 */
export type DedicatedServerDiskTypeEnum = 'NVMe' | 'SAS' | 'SATA' | 'SSD' | 'Unknown';
/**
 * Firewall attached to this server
 */
export interface DedicatedServerFirewall {
  /**
   * transparent mode : device is invisible on the network; routed mode : the security appliance is considered to be a router hop in the network
   *
   */
  mode?: DedicatedServerFirewallModeEnum;
  /**
   */
  firewall?: string;
  /**
   * Firewall management IP
   *
   */
  ip?: string;
  /**
   * Firewall model
   *
   */
  model?: DedicatedServerFirewallModelEnum;
  /**
   */
  enabled?: boolean;
}
/**
 * Dedicated server firewall mode
 */
export type DedicatedServerFirewallModeEnum = 'routed' | 'transparent';
/**
 * Firewall model name
 */
export type DedicatedServerFirewallModelEnum = 'asa5505' | 'asa5510' | 'asa5520';
/**
 * Server form factor
 */
export type DedicatedServerFormFactorEnum = '0.25u' | '0.5u' | '1u' | '2u' | '3u' | '4u';
/**
 * Simulated result of how the hardware RAID template will be configured on this server
 */
export interface DedicatedServerHardwareRaidConfiguration {
  /**
   * RAID mode
   *
   */
  mode?: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * Disk capacity
   *
   */
  diskSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * RAID configuration name
   *
   */
  name?: string;
  /**
   * Size of disk spans on RAID
   *
   */
  diskSpanSize?: Number;
  /**
   * RAID controller type
   *
   */
  type?: string;
  /**
   * Disk count
   *
   */
  diskCount?: Number;
  /**
   * RAID total capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * RAID controller configuration
 */
export interface DedicatedServerHardwareRaidController {
  /**
   * Connected disk type
   *
   */
  disks?: DedicatedServerHardwareRaidDiskGroup[];
  /**
   * Raid controler model
   *
   */
  model?: string;
  /**
   * Raid controler type
   *
   */
  type?: string;
}
/**
 * Disk attached to a RAID controller
 */
export interface DedicatedServerHardwareRaidDiskGroup {
  /**
   * Disk names
   *
   */
  names?: string[];
  /**
   * Disk type
   *
   */
  type?: DedicatedServerDiskTypeEnum;
  /**
   * Disk insterface speed
   *
   */
  speed?: ComplexTypeUnitAndValue<string>;
  /**
   * Disk capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing the server's hardware RAID configuration
 */
export interface DedicatedServerHardwareRaidProfile {
  /**
   * Hardware RAID controller list
   *
   */
  controllers?: DedicatedServerHardwareRaidController[];
}
/**
 * A structure describing the server's resulting layout after RAID configuration
 */
export interface DedicatedServerHardwareRaidSize {
  /**
   * Hardware RAID configuration list
   *
   */
  configurations?: DedicatedServerHardwareRaidConfiguration[];
}
/**
 * A structure describing informations about this dedicated server
 */
export interface DedicatedServerHardwareSpecifications {
  /**
   * Server form factor
   *
   */
  formFactor?: DedicatedServerFormFactorEnum;
  /**
   * Capacity of the USB keys installed on your server, if any
   *
   */
  usbKeys?: ComplexTypeUnitAndValue<Number>[];
  /**
   * server motherboard
   *
   */
  motherboard?: string;
  /**
   * commercial name of this server
   *
   */
  description?: string;
  /**
   * Default hardware raid type configured on this server
   *
   */
  defaultHardwareRaidType?: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * number of cores per processor
   *
   */
  coresPerProcessor?: Number;
  /**
   * Server boot mode
   *
   */
  bootMode?: DedicatedServerBootModeEnum;
  /**
   * number of threads per processor
   *
   */
  threadsPerProcessor?: Number;
  /**
   * ram capacity
   *
   */
  memorySize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Default hardware raid size for this server
   *
   */
  defaultHardwareRaidSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * number of processors in this dedicated server
   *
   */
  numberOfProcessors?: Number;
  /**
   * details about the groups of disks in the server
   *
   */
  diskGroups?: DedicatedServerHardwareSpecificationsDisk[];
  /**
   * processor name
   *
   */
  processorName?: string;
  /**
   * processor architecture bit
   *
   */
  processorArchitecture?: DedicatedServerCpuFamilyEnum;
  /**
   * details about the server's expansion cards
   *
   */
  expansionCards?: DedicatedServerHardwareSpecificationsExpansionCard[];
}
/**
 * A structure describing informations about server disks
 */
export interface DedicatedServerHardwareSpecificationsDisk {
  /**
   * disk capacity
   *
   */
  diskSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * default hardware raid size for this disk group
   *
   */
  defaultHardwareRaidSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * human readable description of this disk group
   *
   */
  description?: string;
  /**
   * raid controller, if any, managing this group of disks
   *
   */
  raidController?: string;
  /**
   * default hardware raid type for this disk group
   *
   */
  defaultHardwareRaidType?: DedicatedServerHardwareSpecificationsRaidHardEnum;
  /**
   * identifier of this disk group
   *
   */
  diskGroupId?: Number;
  /**
   * type of the disk (SSD, SATA, SAS, ...)
   *
   */
  diskType?: string;
  /**
   * number of disks in this group
   *
   */
  numberOfDisks?: Number;
}
/**
 * A structure describing informations about server expansion cards
 */
export interface DedicatedServerHardwareSpecificationsExpansionCard {
  /**
   * expansion card description
   *
   */
  description?: string;
  /**
   * expansion card type
   *
   */
  type?: DedicatedServerHardwareSpecificationsExpansionCardTypeEnum;
}
/**
 * Expansion card type enum
 */
export type DedicatedServerHardwareSpecificationsExpansionCardTypeEnum = 'fpga' | 'gpu';
/**
 * Raid hard configuration
 */
export type DedicatedServerHardwareSpecificationsRaidHardEnum = 'raid0' | 'raid1' | 'raid10' | 'raid1E' | 'raid5' | 'raid50' | 'raid6' | 'raid60';
/**
 * A structure describing informations about installation custom
 */
export interface DedicatedServerInstallCustom {
  /**
   * Specify if we should attempt to reset hw raid on install.
   *
   */
  resetHwRaid?: boolean;
  /**
   * The name of ssh key to install
   *
   */
  sshKeyName?: string;
  /**
   * true if you want to install only on the first disk
   *
   */
  noRaid?: boolean;
  /**
   * the url to your custom install script
   *
   */
  postInstallationScriptLink?: string;
  /**
   * true if you want to install windows with your spla license
   *
   */
  useSpla?: boolean;
  /**
   * Number of devices to use for system's software RAID
   *
   */
  softRaidDevices?: Number;
  /**
   * the return of your script if everythings ok. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu
   *
   */
  postInstallationScriptReturn?: string;
  /**
   * Personnal hostname to use in server reinstallation
   *
   */
  customHostname?: string;
  /**
   * true if you want to install windows with sql feature
   *
   */
  installSqlServer?: boolean;
  /**
   * true if you want to install with distrib kernel
   *
   */
  useDistribKernel?: boolean;
  /**
   * install language for ovh install choice
   *
   */
  language?: string;
  /**
   * Disk group id to process install on (only available for some templates)
   *
   */
  diskGroupId?: Number;
}
/**
 * A structure describing informations about an Installation templates
 */
export interface DedicatedServerInstallTemplate {
  /**
   * Names list of ovh installationtemplates compatibles with this server
   *
   */
  ovh?: string[];
  /**
   * Names list of yours installation templates compatibles with this server
   *
   */
  personal?: string[];
}
/**
 * A structure describing informations about this dedicated server installation status
 */
export interface DedicatedServerInstallationProgressStatus {
  /**
   * Installation steps
   *
   */
  progress?: DedicatedServerInstallationProgressSteps[];
  /**
   * Elapsed time in seconds since installation beggining
   *
   */
  elapsedTime?: Number;
}
/**
 * Distinct Installation status
 */
export type DedicatedServerInstallationProgressStatusEnum = 'doing' | 'done' | 'error' | 'expired' | 'idle' | 'pending' | 'stopping' | 'todo';
/**
 * A structure describing informations about this dedicated server installation steps
 */
export interface DedicatedServerInstallationProgressSteps {
  /**
   * Informations about this installation step
   *
   */
  comment?: string;
  /**
   * Error details if state is error
   *
   */
  error?: string;
  /**
   * Status of this installation step
   *
   */
  status?: DedicatedServerInstallationProgressStatusEnum;
}
/**
 * Intervention made on this server
 */
export interface DedicatedServerIntervention {
  /**
   * the intervention start date
   *
   */
  date?: Date;
  /**
   * the intervention type
   *
   */
  type?: string;
  /**
   * The intervention id
   *
   */
  interventionId?: Number;
}
/**
 * IP block size
 */
export type DedicatedServerIpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8;
/**
 * Available localization for this static IP
 */
export type DedicatedServerIpCountryEnum = 'au' | 'be' | 'ca' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'sg' | 'uk' | 'us';
/**
 * A structure describing informations about orderable IP address
 */
export interface DedicatedServerIpOrderable {
  /**
   * Orderable IP v4 details
   *
   */
  ipv4?: DedicatedServerIpOrderableDetails[];
  /**
   * Orderable IP v6 details
   *
   */
  ipv6?: DedicatedServerIpOrderableDetails[];
}
/**
 * A structure describing informations about orderable IP address
 */
export interface DedicatedServerIpOrderableDetails {
  /**
   * Which option is required to order this type of IP
   *
   */
  optionRequired?: DedicatedServerOptionRequiredEnum;
  /**
   * Total number of prefixes that can be routed to this server
   *
   */
  number?: Number;
  /**
   * Total number of IP that can be routed to this server
   *
   */
  ipNumber?: Number;
  /**
   * Orderable IP blocks sizes
   *
   */
  blockSizes?: DedicatedServerIpBlockSizeEnum[];
  /**
   * this IP type
   *
   */
  type?: DedicatedServerIpTypeOrderableEnum;
  /**
   * Are those IP included with your offer
   *
   */
  included?: boolean;
}
/**
 * Orderable IP type
 */
export type DedicatedServerIpTypeOrderableEnum = 'failover' | 'static' | 'unshielded';
/**
 * Server IPMI interface
 */
export interface DedicatedServerIpmi {
  /**
   * A structure describing the IPMI supported features
   *
   */
  supportedFeatures?: DedicatedServerIpmiSupportedFeatures;
  /**
   * true, if IPMI is available on this server
   *
   */
  activated?: boolean;
}
/**
 * Distinct way to acces a KVM IPMI session
 */
export type DedicatedServerIpmiAccessTypeEnum = 'kvmipHtml5URL' | 'kvmipJnlp' | 'serialOverLanSshKey' | 'serialOverLanURL';
/**
 * A structure describing ipmi access value
 */
export interface DedicatedServerIpmiAccessValue {
  /**
   * Session expiration date
   *
   */
  expiration?: Date;
  /**
   * value
   *
   */
  value?: string;
}
/**
 * A structure describing the IPMI supported features
 */
export interface DedicatedServerIpmiSupportedFeatures {
  /**
   * Access to the virtual serial port of your server through an SSH client
   *
   */
  serialOverLanSshKey?: boolean;
  /**
   * Access to the KVM through a Java web launch application
   *
   */
  kvmipJnlp?: boolean;
  /**
   * Access to the KVM through an HTML web interface
   *
   */
  kvmipHtml5URL?: boolean;
  /**
   * Access to the virtual serial port of your server through an HTML command line interface
   *
   */
  serialOverLanURL?: boolean;
}
/**
 * A structure describing IPMI test result
 */
export interface DedicatedServerIpmiTestResult {
  /**
   * Test running date
   *
   */
  date?: Date;
  /**
   * Test result
   *
   */
  status?: string;
}
/**
 * Different test can be made on IPMI interface
 */
export type DedicatedServerIpmiTestTypeEnum = 'http' | 'password' | 'ping';
/**
 * Monitoring interval in seconds
 */
export type DedicatedServerMonitoringIntervalEnum = '1800' | '21600' | '300' | '3600';
/**
 * Monitoring protocol
 */
export type DedicatedServerMonitoringProtocolEnum = 'DNS' | 'FTP' | 'HTTP' | 'IMAP' | 'POP' | 'SMTP' | 'SSH' | 'openTCP';
/**
 * distincts MRTG period
 */
export type DedicatedServerMrtgPeriodEnum = 'daily' | 'hourly' | 'monthly' | 'weekly' | 'yearly';
/**
 * A timestamp associated to a value
 */
export interface DedicatedServerMrtgTimestampValue {
  /**
   */
  value?: ComplexTypeUnitAndValue<Number>;
  /**
   */
  timestamp?: Number;
}
/**
 * distincts MRTG type
 */
export type DedicatedServerMrtgTypeEnum = 'errors:download' | 'errors:upload' | 'packets:download' | 'packets:upload' | 'traffic:download' | 'traffic:upload';
/**
 * Available boots
 */
export interface DedicatedServerNetboot {
  /**
   * boot id
   *
   */
  bootId?: Number;
  /**
   * The boot kernel
   *
   */
  kernel?: string;
  /**
   * the boot system
   *
   */
  bootType?: DedicatedServerBootTypeEnum;
  /**
   * the boot description
   *
   */
  description?: string;
}
/**
 * A structure describing network informations about this dedicated server
 */
export interface DedicatedServerNetworkSpecifications {
  /**
   * Routing details
   *
   */
  routing?: DedicatedServerRoutingDetails;
  /**
   * Bandwidth details
   *
   */
  bandwidth?: DedicatedServerBandwidthDetails;
  /**
   * vRack details
   *
   */
  vrack?: DedicatedServerBandwidthvRackDetails;
  /**
   * Network connection flow rate
   *
   */
  connection?: ComplexTypeUnitAndValue<Number>;
  /**
   * Traffic details
   *
   */
  traffic?: DedicatedServerTrafficDetails;
}
/**
 * Information about the options of a dedicated server
 */
export interface DedicatedServerOption {
  /**
   * The state of the option
   *
   */
  state?: DedicatedServerOptionStateEnum;
  /**
   * The option name
   *
   */
  option?: DedicatedServerOptionEnum;
}
/**
 * All options a dedicated server can have and release
 */
export type DedicatedServerOptionEnum = 'BACKUPPROTOCOL' | 'BANDWIDTH' | 'BANDWIDTH_VRACK' | 'TRAFFIC' | 'TRAFFIC_DISCOVER' | 'TUNING' | 'TUNING_FIREWALL' | 'TUNING_KVM' | 'USB_KVM_IP';
/**
 * Required option
 */
export type DedicatedServerOptionRequiredEnum = 'professionalUse';
/**
 * All states a dedicated server option can be in
 */
export type DedicatedServerOptionStateEnum = 'released' | 'subscribed';
/**
 * Dedicated server orderable features
 */
export type DedicatedServerOrderableSysFeatureEnum = 'backupProtocol' | 'monitoring';
/**
 * A structure describing routing informations about this dedicated server
 */
export interface DedicatedServerRoutingDetails {
  /**
   * Ipv4 routing details
   *
   */
  ipv4?: DedicatedServerRoutingDetailsIpv4;
  /**
   * Ipv6 routing details
   *
   */
  ipv6?: DedicatedServerRoutingDetailsIpv6;
}
/**
 * A structure describing IPv4 routing informations about this dedicated server
 */
export interface DedicatedServerRoutingDetailsIpv4 {
  /**
   * Server main IP
   *
   */
  ip?: string;
  /**
   * Server gateway
   *
   */
  gateway?: string;
  /**
   * Server network
   *
   */
  network?: string;
}
/**
 * A structure describing IPv6 routing informations about this dedicated server
 */
export interface DedicatedServerRoutingDetailsIpv6 {
  /**
   * Server main IP
   *
   */
  ip?: string;
  /**
   * Server gateway
   *
   */
  gateway?: string;
  /**
   * Server network
   *
   */
  network?: string;
}
/**
 * Servers statistics sent by RTM (Real Time Monitoring)
 */
export interface DedicatedServerRtm {
  /**
   * You need to update RTM script on your server
   *
   */
  needsUpdate?: boolean;
  /**
   * RTM currently installed version
   *
   */
  installedVersion?: string;
  /**
   * RTM current version
   *
   */
  currentVersion?: string;
}
/**
 * distincts RTM charts period
 */
export type DedicatedServerRtmChartPeriodEnum = 'daily' | 'monthly' | 'weekly' | 'yearly';
/**
 * distincts probes type
 */
export type DedicatedServerRtmChartTypeEnum = 'cpu' | 'loadavg1' | 'loadavg15' | 'loadavg5' | 'memory' | 'processCount' | 'processRunning' | 'swap';
/**
 * A structure describing informations about RTM
 */
export interface DedicatedServerRtmCommandSize {
  /**
   * Memory used by this process
   *
   */
  memory?: ComplexTypeUnitAndValue<Number>;
  /**
   * Complete command line used for starting this process
   *
   */
  command?: string;
}
/**
 * A structure describing informations about opened sockets on the server
 */
export interface DedicatedServerRtmConnection {
  /**
   * System user ID
   *
   */
  uid?: Number;
  /**
   * Path to the program
   *
   */
  exe?: string;
  /**
   * Complete command line used for starting this process
   *
   */
  cmdline?: string;
  /**
   * Port opened
   *
   */
  port?: Number;
  /**
   * The IP address connected
   *
   */
  ip?: string;
  /**
   * Domain used by the process
   *
   */
  domain?: string;
  /**
   * Process ID
   *
   */
  pid?: Number;
  /**
   * Name of the process
   *
   */
  procname?: string;
  /**
   * Username used to start the process
   *
   */
  username?: string;
}
/**
 * A structure describing informations about server cpu
 */
export interface DedicatedServerRtmCpu {
  /**
   * CPU core number
   *
   */
  core?: Number;
  /**
   * CPU cache size
   *
   */
  cache?: ComplexTypeUnitAndValue<Number>;
  /**
   * CPU frequency
   *
   */
  freq?: ComplexTypeUnitAndValue<Number>;
  /**
   * CPU  name
   *
   */
  name?: string;
}
/**
 * Server disks informations
 */
export interface DedicatedServerRtmDisk {
  /**
   * Disk
   *
   */
  disk?: string;
  /**
   * Disk temperature
   *
   */
  temperature?: ComplexTypeUnitAndValue<Number>;
  /**
   * Disk model
   *
   */
  model?: string;
  /**
   * Disk capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing SMART health disk status
 */
export interface DedicatedServerRtmDiskSmart {
  /**
   * temperature
   *
   */
  temperature_celsius?: Number;
  /**
   * Multizone error rate
   *
   */
  multizone_error_rate?: Number;
  /**
   * Other errors
   *
   */
  other_errors?: Number;
  /**
   * Current pending sectors
   *
   */
  current_pending_sector?: Number;
  /**
   * Offline uncorrectable
   *
   */
  offline_uncorrectable?: Number;
  /**
   * Realocated event count
   *
   */
  realocated_event_count?: Number;
  /**
   * Uncorrected read errors
   *
   */
  uncorrected_read_errors?: Number;
  /**
   * Offline seek rate
   *
   */
  offline_seek_performance?: Number;
  /**
   * Uncorrected write errors
   *
   */
  uncorrected_write_errors?: Number;
  /**
   * UDMA crc error
   *
   */
  udma_crc_error?: Number;
}
/**
 * A structure describing informations about server load
 */
export interface DedicatedServerRtmLoad {
  /**
   * Load average in the last 15 minutes
   *
   */
  loadavg15?: Number;
  /**
   * Load average in the last 1 minute
   *
   */
  loadavg1?: Number;
  /**
   * Memory usage
   *
   */
  memory?: ComplexTypeUnitAndValue<Number>;
  /**
   * Number of processes using or waiting for CPU time
   *
   */
  processCount?: Number;
  /**
   * Swap usage
   *
   */
  swap?: ComplexTypeUnitAndValue<Number>;
  /**
   * CPU usage
   *
   */
  cpu?: ComplexTypeUnitAndValue<Number>;
  /**
   * Load average in the last 5 minutes
   *
   */
  loadavg5?: Number;
  /**
   * Server uptime
   *
   */
  uptime?: Number;
  /**
   * Number of process running
   *
   */
  processRunning?: Number;
}
/**
 * A structure describing informations about server memory
 */
export interface DedicatedServerRtmMemory {
  /**
   * Memory slot
   *
   */
  slot?: string;
  /**
   * Memory capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing informations about motherboard
 */
export interface DedicatedServerRtmMotherboardHw {
  /**
   * Motherboard name
   *
   */
  name?: string;
  /**
   * Motherboard manufacturer
   *
   */
  manufacturer?: string;
}
/**
 * A structure describing informations about Rtm os
 */
export interface DedicatedServerRtmOs {
  /**
   * OS kernel release
   *
   */
  kernelRelease?: string;
  /**
   * OS release
   *
   */
  release?: string;
  /**
   * OS kernel version
   *
   */
  kernelVersion?: string;
}
/**
 * Server partitions informations
 */
export interface DedicatedServerRtmPartition {
  /**
   * Partition mount point
   *
   */
  mountPoint?: string;
  /**
   * Partition
   *
   */
  partition?: string;
  /**
   * Partition inode
   *
   */
  inodeUsage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Partition usage
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing informations about server PCI devices
 */
export interface DedicatedServerRtmPci {
  /**
   * PCI bus device
   *
   */
  bus?: string;
  /**
   * PCI device information
   *
   */
  device?: string;
}
/**
 * Server raid informations
 */
export interface DedicatedServerRtmRaid {
  /**
   * Raid unit
   *
   */
  unit?: string;
}
/**
 *  Different RAID status
 */
export type DedicatedServerRtmRaidStatusEnum = 'KO' | 'OK' | 'REBUILDING' | 'UNKNOWN';
/**
 * Server raid volume information
 */
export interface DedicatedServerRtmRaidVolume {
  /**
   * Raid volume name
   *
   */
  volume?: string;
  /**
   * Raid volume phys
   *
   */
  phys?: string;
  /**
   * Raid volume chunks
   *
   */
  chunks?: string;
  /**
   * Raid volume letter
   *
   */
  letter?: string;
  /**
   * Raid volume stripe
   *
   */
  stripe?: string;
  /**
   * Raid volume synchronization progress
   *
   */
  syncprogress?: string;
  /**
   * Raid volume label
   *
   */
  label?: string;
  /**
   * Raid volume type
   *
   */
  type?: string;
  /**
   * Raid volume status
   *
   */
  status?: DedicatedServerRtmRaidStatusEnum;
  /**
   * Raid volume capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Server raid volume port informations
 */
export interface DedicatedServerRtmRaidVolumePort {
  /**
   * Port disk
   *
   */
  disk?: string;
  /**
   * Raid volume port
   *
   */
  port?: string;
  /**
   * Serial of this port
   *
   */
  serial?: string;
  /**
   * Raid port synchronization progress
   *
   */
  syncprogress?: string;
  /**
   * Port model name
   *
   */
  model?: string;
  /**
   * Status of this port
   *
   */
  status?: DedicatedServerRtmRaidStatusEnum;
  /**
   * Port capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Server bandwidth burst details
 */
export interface DedicatedServerServerBurst {
  /**
   * indicates wether burstable bandwidth is currently active, allowing it to temporarily exceed the normally included bandwidth.OvhToInternet amount, within the limits indicated by the burst.capacity item. It can also be inactiveLocked when temporarily disabled due to overuse, capping it to the included non-burstable bandwidth capacity of bandwidth.OvhToInternet
   *
   */
  status?: DedicatedServerBurstStatusEnum;
  /**
   * Bandwidth busrt capacity
   *
   */
  capacity?: ComplexTypeUnitAndValue<Number>;
}
/**
 * SPLA license status
 */
export type DedicatedServerSplaStatusEnum = 'terminated' | 'used' | 'waitingToCheck';
/**
 * SPLA license type
 */
export type DedicatedServerSplaTypeEnum = 'os' | 'sqlstd' | 'sqlweb';
/**
 * All states a Dedicated can in
 */
export type DedicatedServerStateEnum = 'error' | 'hacked' | 'hackedBlocked' | 'ok';
/**
 * distincts support level
 */
export type DedicatedServerSupportLevelEnum = 'critical' | 'fastpath' | 'gs' | 'pro';
/**
 * A structure describing informations support level orderable for this dedicated server
 */
export interface DedicatedServerSupportLevelOrderable {
  /**
   * Is a support level is orderable for this server
   *
   */
  orderable?: boolean;
  /**
   * Support level  orderable
   *
   */
  levels?: DedicatedServerSupportLevelOrderableEnum[];
}
/**
 * distincts support level
 */
export type DedicatedServerSupportLevelOrderableEnum = 'critical' | 'fastpath' | 'gs';
/**
 * Hdd replace support request details. 
 */
export interface DedicatedServerSupportReplaceHddInfo {
  /**
   * Disk serial number
   *
   */
  disk_serial?: string;
  /**
   * Disk slotId (if any)
   *
   */
  slot_id?: Number;
}
/**
 * Server tasks
 */
export interface DedicatedServerTask {
  /**
   * Function name
   *
   */
  function?: DedicatedTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
}
/**
 * Miscellaneous template capabilities regarding the server.
 */
export interface DedicatedServerTemplateCaps {
  /**
   * This boolean tells if the template supports hybrid install for the considered server.
   *
   */
  hybridSupport?: boolean;
}
/**
 * A structure describing traffic informations about this dedicated server
 */
export interface DedicatedServerTrafficDetails {
  /**
   * Monthly input traffic quota allowed
   *
   */
  inputQuotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Monthly output traffic quota allowed
   *
   */
  outputQuotaSize?: ComplexTypeUnitAndValue<Number>;
  /**
   * Is bandwidth throttleted for being over quota
   *
   */
  isThrottled?: boolean;
  /**
   * Monthly input traffic consumed this month
   *
   */
  inputQuotaUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Next reset quota date for traffic counter
   *
   */
  resetQuotaDate?: string;
  /**
   * Monthly output traffic consumed this month
   *
   */
  outputQuotaUsed?: ComplexTypeUnitAndValue<Number>;
}
/**
 *  traffic orderable 
 */
export type DedicatedServerTrafficOrderEnum = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited';
/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedServerTrafficOrderable {
  /**
   * Is traffic orderable for this server
   *
   */
  orderable?: boolean;
  /**
   * traffic orderable
   *
   */
  traffic?: DedicatedServerTrafficOrderEnum[];
}
/**
 *  Different USB key capacity in gigabytes
 */
export type DedicatedServerUsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64;
/**
 * A structure describing informations about orderable USB keys
 */
export interface DedicatedServerUsbKeyOrderableDetails {
  /**
   * Which option is required to order an USB key
   *
   */
  optionRequired?: DedicatedServerOptionRequiredEnum;
  /**
   * Number of USB keys that can be ordered for this server
   *
   */
  number?: Number;
  /**
   * Is USB keys orderable for this server
   *
   */
  orderable?: boolean;
  /**
   * Orderable USB keys capacity in gigabytes
   *
   */
  capacity?: DedicatedServerUsbKeyCapacityEnum[];
}
/**
 * A virtual MAC address associated to one or more IPs
 */
export interface DedicatedServerVirtualMac {
  /**
   * Virtual MAC address in 00:00:00:00:00:00 format
   *
   */
  macAddress?: string;
  /**
   * Virtual MAC address type
   *
   */
  type?: DedicatedServerVmacTypeEnum;
}
/**
 *  ip address linked with this virtual mac address
 */
export interface DedicatedServerVirtualMacManagement {
  /**
   * Friendly name of your Virtual Machine behind this IP/MAC
   *
   */
  virtualMachineName?: string;
  /**
   * IP address
   *
   */
  ipAddress?: string;
}
/**
 * Distinct type of virtual mac
 */
export type DedicatedServerVmacTypeEnum = 'ovh' | 'vmware';
/**
 * A structure describing informations about the backup cloud feature
 */
export interface DedicatedServerBackupBackupContainer {
  /**
   * Quota on the current container
   *
   */
  quota?: DedicatedServerBackupBackupQuota;
  /**
   * Container name.
   *
   */
  name?: string;
  /**
   * Sftp connection info
   *
   */
  sftp?: DedicatedServerBackupBackupSftp;
  /**
   * Container id (can also be used to retrieve the resource in the /cloud api).
   *
   */
  id?: string;
  /**
   * The cloud region which the container belongs to.
   *
   */
  region?: string;
  /**
   * /cloud project which the container belongs to.
   *
   */
  cloudProject?: DedicatedServerBackupBackupProject;
  /**
   * Swift related information to reach the container
   *
   */
  swift?: DedicatedServerBackupBackupSwift;
}
/**
 * Backup cloud offer description for a dedicated server
 */
export interface DedicatedServerBackupBackupOffer {
  /**
   * Storage volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidthStorage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Archive volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidthArchive?: ComplexTypeUnitAndValue<Number>;
  /**
   * Storage container max size.
   *
   */
  maxStorage?: ComplexTypeUnitAndValue<Number>;
  /**
   * Archive container max size.
   *
   */
  maxArchive?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing regenerated passwords
 */
export interface DedicatedServerBackupBackupPassword {
  /**
   * Password to reach the storage container through the sftp gw.
   *
   */
  sftpStorage?: string;
  /**
   * Password to reach the archive container through the sftp gw.
   *
   */
  sftpArchive?: string;
  /**
   * Password to reach the archive container through swift.
   *
   */
  swiftArchive?: string;
  /**
   * Password to reach the storage container through swift.
   *
   */
  swiftStorage?: string;
}
/**
 * Cloud project struct.
 */
export interface DedicatedServerBackupBackupProject {
  /**
   * Project description.
   *
   */
  description?: string;
  /**
   * Project id.
   *
   */
  projectId?: string;
}
/**
 * A structure describing quota associated to the current container
 */
export interface DedicatedServerBackupBackupQuota {
  /**
   * Volume r/w bandwidth limit: read/write volume offered per month on the container.
   *
   */
  maxBandwidth?: ComplexTypeUnitAndValue<Number>;
  /**
   * Volume usage.
   *
   */
  storageUsed?: ComplexTypeUnitAndValue<Number>;
  /**
   * Volume usage in percent
   *
   */
  usagePercent?: Number;
  /**
   * Container max size.
   *
   */
  maxStorage?: ComplexTypeUnitAndValue<Number>;
}
/**
 * A structure describing the SFTP access to a container
 */
export interface DedicatedServerBackupBackupSftp {
  /**
   * Sftp password.
   *
   */
  password?: string;
  /**
   * Url
   *
   */
  url?: string;
  /**
   * Username
   *
   */
  username?: string;
}
/**
 * A structure describing the status of your backup
 */
export interface DedicatedServerBackupBackupStatus {
  /**
   * Status code reason (when not ok)
   *
   */
  reason?: string;
  /**
   * Status code
   *
   */
  code?: DedicatedServerBackupBackupStatusCodeEnum;
}
/**
 * Possible values for backup status code
 */
export type DedicatedServerBackupBackupStatusCodeEnum = 'DELETING' | 'ERROR' | 'OK' | 'SUSPENDED' | 'SUSPENDING' | 'UNKNOWN' | 'WAITING_AGREEMENTS_VALIDATION';
/**
 * A structure describing the information related to Openstack to reach the container.
 */
export interface DedicatedServerBackupBackupSwift {
  /**
   * Auth url.
   *
   */
  authUrl?: string;
  /**
   * Openstack password.
   *
   */
  password?: string;
  /**
   * Openstack username to use swift.
   *
   */
  username?: string;
}
/**
 * Service monitoring Email alert
 */
export interface DedicatedServerEmailAlert {
  /**
   * Alert language
   *
   */
  language?: DedicatedServerAlertLanguageEnum;
  /**
   * This monitoring id
   *
   */
  alertId?: Number;
  /**
   * Is this monitor enabled
   *
   */
  enabled?: boolean;
  /**
   * Alert destination
   *
   */
  email?: string;
}
/**
 * Physical KVM
 */
export interface DedicatedServerKvm {
  /**
   * KVM access ip
   *
   */
  ip?: string;
  /**
   * KVM hostname
   *
   */
  name?: string;
  /**
   * KVM expiration date
   *
   */
  expiration?: Date;
}
/**
 * Available boot options
 */
export interface DedicatedServerNetbootOption {
  /**
   * the value of this option
   *
   */
  value?: string;
  /**
   * The option of this boot
   *
   */
  option?: DedicatedServerBootOptionEnum;
}
/**
 * Service monitoring details
 */
export interface DedicatedServerServiceMonitoring {
  /**
   * The protocol to use
   *
   */
  protocol?: DedicatedServerMonitoringProtocolEnum;
  /**
   * The service port to monitor
   *
   */
  port?: Number;
  /**
   * The ip to monitor
   *
   */
  ip?: string;
  /**
   * The expected return
   *
   */
  challengeText?: string;
  /**
   * The test interval in seconds
   *
   */
  interval?: DedicatedServerMonitoringIntervalEnum;
  /**
   * The URL to test
   *
   */
  url?: string;
  /**
   * Is this service monitoring is enabled
   *
   */
  enabled?: boolean;
  /**
   * This monitoring id
   *
   */
  monitoringId?: Number;
}
/**
 * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
 */
export interface DedicatedServerSmsAlert {
  /**
   * Your SMS account
   *
   */
  smsAccount?: string;
  /**
   * Daily hour end time for SMS notification
   *
   */
  fromHour?: Number;
  /**
   * Alert language
   *
   */
  language?: DedicatedServerAlertLanguageEnum;
  /**
   * Id of this alert
   *
   */
  alertId?: Number;
  /**
   * Alert destination
   *
   */
  phoneNumberTo?: string;
  /**
   * Is this alert enabled
   *
   */
  enabled?: boolean;
  /**
   * Daily hour start time for SMS notification
   *
   */
  toHour?: Number;
}
/**
 * SPLA licenses management
 */
export interface DedicatedServerSpla {
  /**
   * License serial number
   *
   */
  serialNumber?: string;
  /**
   * Last update timestamp
   *
   */
  lastUpdate?: Date;
  /**
   * License id
   *
   */
  id?: Number;
  /**
   * License type
   *
   */
  type?: DedicatedServerSplaTypeEnum;
  /**
   * Status of license
   *
   */
  status?: DedicatedServerSplaStatusEnum;
}
/**
 * Your VirtualNetworkInterface
 */
export interface DedicatedVirtualNetworkInterfaceVirtualNetworkInterface {
  /**
   * VirtualNetworkInterface mode
   *
   */
  mode?: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum;
  /**
   * User defined VirtualNetworkInterface name
   *
   */
  name?: string;
  /**
   * vRack name
   *
   */
  vrack?: string;
  /**
   * Server bound to this VirtualNetworkInterface
   *
   */
  serverName?: string;
  /**
   * VirtualNetworkInterface unique id
   *
   */
  uuid?: string;
}
/**
 * Available VirtualNetworkInterface modes
 */
export type DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum = 'public' | 'vrack';
/**
 * All versions for Windows products
 */
export type LicenseWindowsOsVersionEnum = 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION' | 'WINDOWS_SERVER_2003_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION' | 'WINDOWS_SERVER_2008_WEB_EDITION_2_CPU' | 'WINDOWS_SERVER_2008_WEB_EDITION_4_CPU' | 'WINDOWS_SERVER_2008_WEB_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION' | 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU' | 'WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU' | 'WINDOWS_SERVER_2012_WEB_EDITION' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES' | 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES' | 'WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES' | 'windows-server-2008-license-datacenter-edition-1-cpu' | 'windows-server-2008-license-datacenter-edition-2-cpu' | 'windows-server-2008-license-datacenter-edition-4-cpu' | 'windows-server-2008-license-enterprise-edition-1-cpu' | 'windows-server-2008-license-enterprise-edition-2-cpu' | 'windows-server-2008-license-enterprise-edition-4-cpu' | 'windows-server-2008-license-standard-edition-1-cpu' | 'windows-server-2008-license-standard-edition-2-cpu' | 'windows-server-2008-license-standard-edition-4-cpu' | 'windows-server-2008-license-web-edition-1-cpu' | 'windows-server-2008-license-web-edition-2-cpu' | 'windows-server-2008-license-web-edition-4-cpu' | 'windows-server-2012-license-datacenter-edition-1-cpu' | 'windows-server-2012-license-datacenter-edition-2-cpu' | 'windows-server-2012-license-datacenter-edition-4-cpu' | 'windows-server-2012-license-standard-edition-1-cpu' | 'windows-server-2012-license-standard-edition-2-cpu' | 'windows-server-2012-license-standard-edition-4-cpu' | 'windows-server-2016-license-datacenter-edition-1-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-1-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-2-cpu-8-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-10-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-12-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-14-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-16-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-18-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-20-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-22-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-24-cores' | 'windows-server-2016-license-datacenter-edition-4-cpu-8-cores' | 'windows-server-2016-license-standard-edition-1-cpu-10-cores' | 'windows-server-2016-license-standard-edition-1-cpu-12-cores' | 'windows-server-2016-license-standard-edition-1-cpu-14-cores' | 'windows-server-2016-license-standard-edition-1-cpu-16-cores' | 'windows-server-2016-license-standard-edition-1-cpu-18-cores' | 'windows-server-2016-license-standard-edition-1-cpu-20-cores' | 'windows-server-2016-license-standard-edition-1-cpu-22-cores' | 'windows-server-2016-license-standard-edition-1-cpu-24-cores' | 'windows-server-2016-license-standard-edition-1-cpu-8-cores' | 'windows-server-2016-license-standard-edition-2-cpu-10-cores' | 'windows-server-2016-license-standard-edition-2-cpu-12-cores' | 'windows-server-2016-license-standard-edition-2-cpu-14-cores' | 'windows-server-2016-license-standard-edition-2-cpu-16-cores' | 'windows-server-2016-license-standard-edition-2-cpu-18-cores' | 'windows-server-2016-license-standard-edition-2-cpu-20-cores' | 'windows-server-2016-license-standard-edition-2-cpu-22-cores' | 'windows-server-2016-license-standard-edition-2-cpu-24-cores' | 'windows-server-2016-license-standard-edition-2-cpu-8-cores' | 'windows-server-2016-license-standard-edition-4-cpu-10-cores' | 'windows-server-2016-license-standard-edition-4-cpu-12-cores' | 'windows-server-2016-license-standard-edition-4-cpu-14-cores' | 'windows-server-2016-license-standard-edition-4-cpu-16-cores' | 'windows-server-2016-license-standard-edition-4-cpu-18-cores' | 'windows-server-2016-license-standard-edition-4-cpu-20-cores' | 'windows-server-2016-license-standard-edition-4-cpu-22-cores' | 'windows-server-2016-license-standard-edition-4-cpu-24-cores' | 'windows-server-2016-license-standard-edition-4-cpu-8-cores' | 'windows-server-2019-license-datacenter-edition-10-cores' | 'windows-server-2019-license-datacenter-edition-12-cores' | 'windows-server-2019-license-datacenter-edition-14-cores' | 'windows-server-2019-license-datacenter-edition-16-cores' | 'windows-server-2019-license-datacenter-edition-18-cores' | 'windows-server-2019-license-datacenter-edition-20-cores' | 'windows-server-2019-license-datacenter-edition-22-cores' | 'windows-server-2019-license-datacenter-edition-24-cores' | 'windows-server-2019-license-datacenter-edition-26-cores' | 'windows-server-2019-license-datacenter-edition-28-cores' | 'windows-server-2019-license-datacenter-edition-30-cores' | 'windows-server-2019-license-datacenter-edition-32-cores' | 'windows-server-2019-license-datacenter-edition-34-cores' | 'windows-server-2019-license-datacenter-edition-36-cores' | 'windows-server-2019-license-datacenter-edition-38-cores' | 'windows-server-2019-license-datacenter-edition-40-cores' | 'windows-server-2019-license-datacenter-edition-42-cores' | 'windows-server-2019-license-datacenter-edition-44-cores' | 'windows-server-2019-license-datacenter-edition-46-cores' | 'windows-server-2019-license-datacenter-edition-48-cores' | 'windows-server-2019-license-datacenter-edition-50-cores' | 'windows-server-2019-license-datacenter-edition-52-cores' | 'windows-server-2019-license-datacenter-edition-54-cores' | 'windows-server-2019-license-datacenter-edition-56-cores' | 'windows-server-2019-license-datacenter-edition-58-cores' | 'windows-server-2019-license-datacenter-edition-60-cores' | 'windows-server-2019-license-datacenter-edition-62-cores' | 'windows-server-2019-license-datacenter-edition-64-cores' | 'windows-server-2019-license-datacenter-edition-8-cores' | 'windows-server-2019-license-standard-edition-10-cores' | 'windows-server-2019-license-standard-edition-12-cores' | 'windows-server-2019-license-standard-edition-14-cores' | 'windows-server-2019-license-standard-edition-16-cores' | 'windows-server-2019-license-standard-edition-18-cores' | 'windows-server-2019-license-standard-edition-20-cores' | 'windows-server-2019-license-standard-edition-22-cores' | 'windows-server-2019-license-standard-edition-24-cores' | 'windows-server-2019-license-standard-edition-26-cores' | 'windows-server-2019-license-standard-edition-28-cores' | 'windows-server-2019-license-standard-edition-30-cores' | 'windows-server-2019-license-standard-edition-32-cores' | 'windows-server-2019-license-standard-edition-34-cores' | 'windows-server-2019-license-standard-edition-36-cores' | 'windows-server-2019-license-standard-edition-38-cores' | 'windows-server-2019-license-standard-edition-40-cores' | 'windows-server-2019-license-standard-edition-42-cores' | 'windows-server-2019-license-standard-edition-44-cores' | 'windows-server-2019-license-standard-edition-46-cores' | 'windows-server-2019-license-standard-edition-48-cores' | 'windows-server-2019-license-standard-edition-50-cores' | 'windows-server-2019-license-standard-edition-52-cores' | 'windows-server-2019-license-standard-edition-54-cores' | 'windows-server-2019-license-standard-edition-56-cores' | 'windows-server-2019-license-standard-edition-58-cores' | 'windows-server-2019-license-standard-edition-60-cores' | 'windows-server-2019-license-standard-edition-62-cores' | 'windows-server-2019-license-standard-edition-64-cores' | 'windows-server-2019-license-standard-edition-8-cores';
/**
 * All SQL Server versions for Windows products
 */
export type LicenseWindowsSqlVersionEnum = 'SQL_SERVER_2008_STANDARD_EDITION' | 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2008_WEB_EDITION' | 'SQL_SERVER_2008_WEB_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION' | 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU' | 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES' | 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES' | 'SQL_SERVER_2012_WEB_EDITION_12_CORES' | 'SQL_SERVER_2012_WEB_EDITION_16_CORES' | 'SQL_SERVER_2012_WEB_EDITION_18_CORES' | 'SQL_SERVER_2012_WEB_EDITION_20_CORES' | 'SQL_SERVER_2012_WEB_EDITION_24_CORES' | 'SQL_SERVER_2012_WEB_EDITION_32_CORES' | 'SQL_SERVER_2012_WEB_EDITION_4_CORES' | 'SQL_SERVER_2012_WEB_EDITION_6_CORES' | 'SQL_SERVER_2012_WEB_EDITION_8_CORES';
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * Secondary dns infos
 */
export interface SecondaryDnsSecondaryDNS {
  /**
   * domain on slave server
   *
   */
  domain?: string;
  /**
   * secondary dns server
   *
   */
  dns?: string;
  /**
   */
  creationDate?: Date;
  /**
   * master ip
   *
   */
  ipMaster?: string;
}
/**
 * A structure describing informations about secondary dns check field
 */
export interface SecondaryDnsSecondaryDNSCheckField {
  /**
   * The subdomain to add on your DNS zone for the domain
   *
   */
  subDomain?: string;
  /**
   * The field type to add on your DNS zone for this subDomain
   *
   */
  fieldType?: ZoneNamedResolutionFieldTypeEnum;
  /**
   * The field value to add on your DNS zone for this subDomain
   *
   */
  fieldValue?: string;
}
/**
 * A structure describing informations about available nameserver for secondary dns 
 */
export interface SecondaryDnsSecondaryDNSNameServer {
  /**
   * the name server
   *
   */
  hostname?: string;
  /**
   */
  ipv6?: string;
  /**
   */
  ip?: string;
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
/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  /**
   * Ticket external number
   *
   */
  ticketNumber?: Number;
  /**
   * Message identifier
   *
   */
  messageId?: Number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
}
/**
 * vrack tasks
 */
export interface VrackTask {
  /**
   */
  targetDomain?: string;
  /**
   */
  orderId?: Number;
  /**
   */
  function?: string;
  /**
   */
  lastUpdate?: Date;
  /**
   */
  todoDate?: Date;
  /**
   */
  id?: Number;
  /**
   */
  serviceName?: string;
  /**
   * Task status
   *
   */
  status?: VrackTaskStatusEnum;
}
/**
 * All states a vRack Task can be in
 */
export type VrackTaskStatusEnum = 'cancelled' | 'doing' | 'done' | 'init' | 'todo';
/**
 * vrack dedicated server interfaces
 */
export interface VrackDedicatedServer {
  /**
   * Dedicated Server
   *
   */
  dedicatedServer?: string;
  /**
   * vrack name
   *
   */
  vrack?: string;
}
/**
 * Resource record fieldType
 */
export type ZoneNamedResolutionFieldTypeEnum = 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'DKIM' | 'DMARC' | 'LOC' | 'MX' | 'NAPTR' | 'NS' | 'PTR' | 'SPF' | 'SRV' | 'SSHFP' | 'TLSA' | 'TXT';
type PathsdedicatedserverGET = '/dedicated/server/datacenter/availabilities' | 
'/dedicated/server/availabilities' | 
'/dedicated/server/availabilities/raw' | 
'/dedicated/server' | 
'/dedicated/server/osAvailabilities' | 
'/dedicated/server/virtualNetworkInterface/{uuid}' | 
'/dedicated/server/{serviceName}/virtualNetworkInterface' | 
'/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}' | 
'/dedicated/server/{serviceName}/mrtg' | 
'/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable' | 
'/dedicated/server/{serviceName}/secondaryDnsNameDomainToken' | 
'/dedicated/server/{serviceName}/ipCanBeMovedTo' | 
'/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg' | 
'/dedicated/server/{serviceName}/networkInterfaceController/{mac}' | 
'/dedicated/server/{serviceName}/networkInterfaceController' | 
'/dedicated/server/{serviceName}/serviceMonitoring' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/spla/{id}' | 
'/dedicated/server/{serviceName}/spla' | 
'/dedicated/server/{serviceName}/task' | 
'/dedicated/server/{serviceName}/task/{taskId}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}/mrtg' | 
'/dedicated/server/{serviceName}/vrack' | 
'/dedicated/server/{serviceName}/orderable/backupStorage' | 
'/dedicated/server/{serviceName}/orderable/usbKey' | 
'/dedicated/server/{serviceName}/orderable/bandwidthvRack' | 
'/dedicated/server/{serviceName}/orderable/traffic' | 
'/dedicated/server/{serviceName}/orderable/kvm' | 
'/dedicated/server/{serviceName}/orderable/bandwidth' | 
'/dedicated/server/{serviceName}/orderable/kvmExpress' | 
'/dedicated/server/{serviceName}/orderable/feature' | 
'/dedicated/server/{serviceName}/orderable/ip' | 
'/dedicated/server/{serviceName}/orderable/professionalUse' | 
'/dedicated/server/{serviceName}' | 
'/dedicated/server/{serviceName}/virtualMac' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}' | 
'/dedicated/server/{serviceName}/features/backupFTP/access' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/features/ipmi' | 
'/dedicated/server/{serviceName}/features/ipmi/test' | 
'/dedicated/server/{serviceName}/features/ipmi/access' | 
'/dedicated/server/{serviceName}/features/kvm' | 
'/dedicated/server/{serviceName}/features/firewall' | 
'/dedicated/server/{serviceName}/license/compliantWindowsSqlServer' | 
'/dedicated/server/{serviceName}/license/compliantWindows' | 
'/dedicated/server/{serviceName}/serviceInfos' | 
'/dedicated/server/{serviceName}/specifications/ip' | 
'/dedicated/server/{serviceName}/specifications/network' | 
'/dedicated/server/{serviceName}/specifications/hardware' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer' | 
'/dedicated/server/{serviceName}/firewall/binary/compatible' | 
'/dedicated/server/{serviceName}/firewall/binary/link' | 
'/dedicated/server/{serviceName}/boot/{bootId}/option/{option}' | 
'/dedicated/server/{serviceName}/boot/{bootId}/option' | 
'/dedicated/server/{serviceName}/boot/{bootId}' | 
'/dedicated/server/{serviceName}/boot' | 
'/dedicated/server/{serviceName}/option' | 
'/dedicated/server/{serviceName}/option/{option}' | 
'/dedicated/server/{serviceName}/install/compatibleTemplates' | 
'/dedicated/server/{serviceName}/install/templateCapabilities' | 
'/dedicated/server/{serviceName}/install/status' | 
'/dedicated/server/{serviceName}/install/hardwareRaidSize' | 
'/dedicated/server/{serviceName}/install/hardwareRaidProfile' | 
'/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes' | 
'/dedicated/server/{serviceName}/burst' | 
'/dedicated/server/{serviceName}/statistics/process' | 
'/dedicated/server/{serviceName}/statistics/pci' | 
'/dedicated/server/{serviceName}/statistics/os' | 
'/dedicated/server/{serviceName}/statistics/chart' | 
'/dedicated/server/{serviceName}/statistics/cpu' | 
'/dedicated/server/{serviceName}/statistics/disk/{disk}/smart' | 
'/dedicated/server/{serviceName}/statistics/disk/{disk}' | 
'/dedicated/server/{serviceName}/statistics/disk' | 
'/dedicated/server/{serviceName}/statistics/motherboard' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}' | 
'/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}' | 
'/dedicated/server/{serviceName}/statistics/raid' | 
'/dedicated/server/{serviceName}/statistics/partition' | 
'/dedicated/server/{serviceName}/statistics/partition/{partition}/chart' | 
'/dedicated/server/{serviceName}/statistics/partition/{partition}' | 
'/dedicated/server/{serviceName}/statistics/load' | 
'/dedicated/server/{serviceName}/statistics/memory' | 
'/dedicated/server/{serviceName}/statistics' | 
'/dedicated/server/{serviceName}/statistics/connection' | 
'/dedicated/server/{serviceName}/backupCloudOfferDetails' | 
'/dedicated/server/{serviceName}/intervention/{interventionId}' | 
'/dedicated/server/{serviceName}/intervention' | 
'/dedicated/server/{serviceName}/ips' | 
'/dedicated/server/{serviceName}/ipCountryAvailable';

type PathsdedicatedserverPUT = '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/spla/{id}' | 
'/dedicated/server/{serviceName}' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/firewall' | 
'/dedicated/server/{serviceName}/serviceInfos' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/burst';

type PathsdedicatedserverPOST = '/dedicated/server/{serviceName}/serviceMonitoring' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms' | 
'/dedicated/server/{serviceName}/spla/{id}/revoke' | 
'/dedicated/server/{serviceName}/spla' | 
'/dedicated/server/{serviceName}/task/{taskId}/cancel' | 
'/dedicated/server/{serviceName}/terminate' | 
'/dedicated/server/{serviceName}/virtualMac' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress' | 
'/dedicated/server/{serviceName}/features/backupFTP/access' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupFTP/password' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/features/backupCloud/password' | 
'/dedicated/server/{serviceName}/features/ipmi/resetInterface' | 
'/dedicated/server/{serviceName}/features/ipmi/test' | 
'/dedicated/server/{serviceName}/features/ipmi/access' | 
'/dedicated/server/{serviceName}/features/ipmi/resetSessions' | 
'/dedicated/server/{serviceName}/license/windows' | 
'/dedicated/server/{serviceName}/support/replace/hardDiskDrive' | 
'/dedicated/server/{serviceName}/authenticationSecret' | 
'/dedicated/server/{serviceName}/reboot' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains' | 
'/dedicated/server/{serviceName}/confirmTermination' | 
'/dedicated/server/{serviceName}/ipBlockMerge' | 
'/dedicated/server/{serviceName}/install/start' | 
'/dedicated/server/{serviceName}/ipMove' | 
'/dedicated/server/{serviceName}/changeContact';

type PathsdedicatedserverDELETE = '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}' | 
'/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}' | 
'/dedicated/server/{serviceName}/vrack/{vrack}' | 
'/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}' | 
'/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/server/{serviceName}/features/backupFTP' | 
'/dedicated/server/{serviceName}/features/backupCloud' | 
'/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}' | 
'/dedicated/server/{serviceName}/option/{option}';

class Apidedicatedserver extends ApiCommon {
  /**
  List the availability of dedicated server
  List the availability of dedicated server
  **/
  public get(path: '/dedicated/server/datacenter/availabilities', pathParams: null, queryParams: {planCode?: string, server?: string, memory?: string, storage?: string, datacenters?: string, excludeDatacenters?: boolean}): Promise<DedicatedDatacenterAvailability[]>;
  /**
  List the availability of dedicated server
  List the availability of dedicated server
  **/
  public get(path: '/dedicated/server/availabilities', pathParams: null, queryParams: {country?: NichandleOvhSubsidiaryEnum, hardware?: string}): Promise<DedicatedAvailabilities[]>;
  /**
  List the availability of dedicated server (RAW)
  List the availability of dedicated server
  **/
  public get(path: '/dedicated/server/availabilities/raw', pathParams: null, queryParams: null): Promise<DedicatedAvailabilitiesRaw[]>;
  /**
  Operations about the DEDICATED service
  List available services
  **/
  public get(path: '/dedicated/server', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the operating systems available for a specified hardware reference
  List the os available for a specified hardware reference
  **/
  public get(path: '/dedicated/server/osAvailabilities', pathParams: null, queryParams: {hardware?: string}): Promise<DedicatedOsAvailabilitiesEnum[]>;
  /**
  Get a VirtualNetworkInterface details
  Get VirtualNetworkInterface details
  **/
  public get(path: '/dedicated/server/virtualNetworkInterface/{uuid}', pathParams: {uuid?: string}, queryParams: null): Promise<DedicatedVirtualNetworkInterfaceVirtualNetworkInterface>;
  /**
  List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects
  List server VirtualNetworkInterfaces
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface', pathParams: {serviceName?: string}, queryParams: {vrack?: string, name?: string, mode?: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum}): Promise<string[]>;
  /**
  Your VirtualNetworkInterface
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}', pathParams: {serviceName?: string, uuid?: string}, queryParams: null): Promise<DedicatedVirtualNetworkInterfaceVirtualNetworkInterface>;
  /**
  mrtg operations
  Retrieve traffic graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/mrtg', pathParams: {serviceName?: string}, queryParams: {type?: DedicatedServerMrtgTypeEnum, period?: DedicatedServerMrtgPeriodEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  secondaryDnsNameServerAvailable operations
  Secondary nameServer available for your Server
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable', pathParams: {serviceName?: string}, queryParams: null): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  secondaryDnsNameDomainToken operations
  DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsNameDomainToken', pathParams: {serviceName?: string}, queryParams: {domain?: string}): Promise<SecondaryDnsSecondaryDNSCheckField>;
  /**
  ipCanBeMovedTo operations
  Check if given IP can be moved to this server
  **/
  public get(path: '/dedicated/server/{serviceName}/ipCanBeMovedTo', pathParams: {serviceName?: string}, queryParams: {ip?: string}): Promise<void>;
  /**
  mrtg operations
  Retrieve traffic graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg', pathParams: {serviceName?: string, mac?: string}, queryParams: {period?: DedicatedServerMrtgPeriodEnum, type?: DedicatedServerMrtgTypeEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  Your networkInterfaceController
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}', pathParams: {serviceName?: string, mac?: string}, queryParams: null): Promise<DedicatedNetworkInterfaceControllerNetworkInterfaceController>;
  /**
  List the dedicated.networkInterfaceController.NetworkInterfaceController objects
  List server networkInterfaceController
  **/
  public get(path: '/dedicated/server/{serviceName}/networkInterfaceController', pathParams: {serviceName?: string}, queryParams: {linkType?: DedicatedNetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum}): Promise<string[]>;
  /**
  List the dedicated.server.serviceMonitoring objects
  Service monitoring details
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  Service monitoring details
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', pathParams: {serviceName?: string, monitoringId?: Number}, queryParams: null): Promise<DedicatedServerServiceMonitoring>;
  /**
  Service monitoring Email alert
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', pathParams: {serviceName?: string, monitoringId?: Number, alertId?: Number}, queryParams: null): Promise<DedicatedServerEmailAlert>;
  /**
  List the dedicated.server.emailAlert objects
  Service monitoring alert by email
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email', pathParams: {serviceName?: string, monitoringId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  List the dedicated.server.smsAlert objects
  Service monitoring alert by SMS
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms', pathParams: {serviceName?: string, monitoringId?: Number}, queryParams: null): Promise<Number[]>;
  /**
  Monitoring SMS alert details, This service is currently not supported for servers at BHS 
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', pathParams: {serviceName?: string, monitoringId?: Number, alertId?: Number}, queryParams: null): Promise<DedicatedServerSmsAlert>;
  /**
  SPLA licenses management
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/spla/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<DedicatedServerSpla>;
  /**
  List the dedicated.server.spla objects
  Your own SPLA licenses attached to this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/spla', pathParams: {serviceName?: string}, queryParams: {type?: DedicatedServerSplaTypeEnum, status?: DedicatedServerSplaStatusEnum}): Promise<Number[]>;
  /**
  List the dedicated.server.Task objects
  Dedicated server todos
  **/
  public get(path: '/dedicated/server/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {function?: DedicatedTaskFunctionEnum, status?: DedicatedTaskStatusEnum}): Promise<Number[]>;
  /**
  Server tasks
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DedicatedServerTask>;
  /**
  vrack dedicated server interfaces
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/vrack/{vrack}', pathParams: {serviceName?: string, vrack?: string}, queryParams: null): Promise<VrackDedicatedServer>;
  /**
  mrtg operations
  Retrieve vrack traffic graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/vrack/{vrack}/mrtg', pathParams: {serviceName?: string, vrack?: string}, queryParams: {type?: DedicatedServerMrtgTypeEnum, period?: DedicatedServerMrtgPeriodEnum}): Promise<DedicatedServerMrtgTimestampValue[]>;
  /**
  List the vrack.dedicatedServer objects
  Server Vracks
  **/
  public get(path: '/dedicated/server/{serviceName}/vrack', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  backupStorage operations
  Get the backup storage orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/backupStorage', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBackupStorageOrderable>;
  /**
  usbKey operations
  Get USB keys orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/usbKey', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerUsbKeyOrderableDetails>;
  /**
  bandwidthvRack operations
  Get vRack bandwidth orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/bandwidthvRack', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBandwidthvRackOrderable>;
  /**
  traffic operations
  Get orderable traffic with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/traffic', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerTrafficOrderable>;
  /**
  kvm operations
  Is a KVM orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/kvm', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  bandwidth operations
  Get bandwidth orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/bandwidth', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBandwidthOrderable>;
  /**
  kvmExpress operations
  Is a KVM express orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/kvmExpress', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  feature operations
  Is this feature orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/feature', pathParams: {serviceName?: string}, queryParams: {feature?: DedicatedServerOrderableSysFeatureEnum}): Promise<boolean>;
  /**
  ip operations
  Get IP orderable with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/ip', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerIpOrderable>;
  /**
  professionalUse operations
  Is professional use orderable with your server
  **/
  public get(path: '/dedicated/server/{serviceName}/orderable/professionalUse', pathParams: {serviceName?: string}, queryParams: null): Promise<boolean>;
  /**
  Server informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerDedicated>;
  /**
  List the dedicated.server.VirtualMac objects
  Virtual MAC addresses of the server
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
   ip address linked with this virtual mac address
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}', pathParams: {serviceName?: string, macAddress?: string, ipAddress?: string}, queryParams: null): Promise<DedicatedServerVirtualMacManagement>;
  /**
  List the dedicated.server.VirtualMacManagement objects
  List of IPs associated to this Virtual MAC
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress', pathParams: {serviceName?: string, macAddress?: string}, queryParams: null): Promise<string[]>;
  /**
  A virtual MAC address associated to one or more IPs
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}', pathParams: {serviceName?: string, macAddress?: string}, queryParams: null): Promise<DedicatedServerVirtualMac>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/access', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null): Promise<DedicatedServerBackupFtpAcl>;
  /**
  Backup Ftp assigned to this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBackupFtp>;
  /**
  authorizableBlocks operations
  Get all IP blocks that can be used in the ACL
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backup Cloud assigned to this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/backupCloud', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBackupCloud>;
  /**
  Server IPMI interface
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/ipmi', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerIpmi>;
  /**
  test operations
  Result of http, ping and identification tests on IPMI interface
  **/
  public get(path: '/dedicated/server/{serviceName}/features/ipmi/test', pathParams: {serviceName?: string}, queryParams: {type?: DedicatedServerIpmiTestTypeEnum}): Promise<DedicatedServerIpmiTestResult>;
  /**
  access operations
  IPMI access method
  **/
  public get(path: '/dedicated/server/{serviceName}/features/ipmi/access', pathParams: {serviceName?: string}, queryParams: {type?: DedicatedServerIpmiAccessTypeEnum}): Promise<DedicatedServerIpmiAccessValue>;
  /**
  Physical KVM
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/kvm', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerKvm>;
  /**
  Firewall attached to this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/features/firewall', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerFirewall>;
  /**
  compliantWindowsSqlServer operations
  Get the windows SQL server license compliant with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/license/compliantWindowsSqlServer', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseWindowsSqlVersionEnum[]>;
  /**
  compliantWindows operations
  Get the windows license compliant with your server.
  **/
  public get(path: '/dedicated/server/{serviceName}/license/compliantWindows', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseWindowsOsVersionEnum[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  ip operations
  Retrieve IP capabilities about this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/specifications/ip', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerIpOrderable>;
  /**
  network operations
  Retrieve network informations about this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/specifications/network', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerNetworkSpecifications>;
  /**
  hardware operations
  Retrieve hardware informations about this dedicated server
  **/
  public get(path: '/dedicated/server/{serviceName}/specifications/hardware', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerHardwareSpecifications>;
  /**
  List the secondaryDns.SecondaryDNS objects
  List of secondary dns domain name
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Secondary dns infos
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<SecondaryDnsSecondaryDNS>;
  /**
  dnsServer operations
  domain name server informations
  **/
  public get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  compatible operations
  Get name binary for asa
  **/
  public get(path: '/dedicated/server/{serviceName}/firewall/binary/compatible', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedBinaryFirewall>;
  /**
  link operations
  Get url of binary to update firewall asa
  **/
  public get(path: '/dedicated/server/{serviceName}/firewall/binary/link', pathParams: {serviceName?: string}, queryParams: {binaryName?: string}): Promise<DedicatedBinaryFirewallLink>;
  /**
  Available boot options
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option/{option}', pathParams: {serviceName?: string, bootId?: Number, option?: DedicatedServerBootOptionEnum}, queryParams: null): Promise<DedicatedServerNetbootOption>;
  /**
  List the dedicated.server.netbootOption objects
  Option used on this netboot
  **/
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option', pathParams: {serviceName?: string, bootId?: Number}, queryParams: null): Promise<DedicatedServerBootOptionEnum[]>;
  /**
  Available boots
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/boot/{bootId}', pathParams: {serviceName?: string, bootId?: Number}, queryParams: null): Promise<DedicatedServerNetboot>;
  /**
  List the dedicated.server.Netboot objects
  Server compatibles netboots
  **/
  public get(path: '/dedicated/server/{serviceName}/boot', pathParams: {serviceName?: string}, queryParams: {bootType?: DedicatedServerBootTypeEnum}): Promise<Number[]>;
  /**
  List the dedicated.server.Option objects
  List of dedicated server options
  **/
  public get(path: '/dedicated/server/{serviceName}/option', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerOptionEnum[]>;
  /**
  Information about the options of a dedicated server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/option/{option}', pathParams: {serviceName?: string, option?: DedicatedServerOptionEnum}, queryParams: null): Promise<DedicatedServerOption>;
  /**
  compatibleTemplates operations
  Retrieve compatible  install templates names
  **/
  public get(path: '/dedicated/server/{serviceName}/install/compatibleTemplates', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerInstallTemplate>;
  /**
  templateCapabilities operations
  Gives some capabilities regarding the template for the current dedicated server.
  **/
  public get(path: '/dedicated/server/{serviceName}/install/templateCapabilities', pathParams: {serviceName?: string}, queryParams: {templateName?: string}): Promise<DedicatedServerTemplateCaps>;
  /**
  status operations
  Get installation status
  **/
  public get(path: '/dedicated/server/{serviceName}/install/status', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerInstallationProgressStatus>;
  /**
  hardwareRaidSize operations
  Get hardware RAID size for a given configuration
  **/
  public get(path: '/dedicated/server/{serviceName}/install/hardwareRaidSize', pathParams: {serviceName?: string}, queryParams: {templateName?: string, partitionSchemeName?: string}): Promise<DedicatedServerHardwareRaidSize>;
  /**
  hardwareRaidProfile operations
  Retrieve hardware RAID profile
  **/
  public get(path: '/dedicated/server/{serviceName}/install/hardwareRaidProfile', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerHardwareRaidProfile>;
  /**
  compatibleTemplatePartitionSchemes operations
  Retrieve compatible  install template partitions scheme
  **/
  public get(path: '/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes', pathParams: {serviceName?: string}, queryParams: {templateName?: string}): Promise<string[]>;
  /**
  Server bandwidth burst details
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/burst', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerServerBurst>;
  /**
  process operations
  Get server process
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/process', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmCommandSize[]>;
  /**
  pci operations
  Get server PCI devices informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/pci', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmPci[]>;
  /**
  os operations
  Get server os informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/os', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmOs>;
  /**
  chart operations
  Retrieve RTM graph values
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/chart', pathParams: {serviceName?: string}, queryParams: {type?: DedicatedServerRtmChartTypeEnum, period?: DedicatedServerRtmChartPeriodEnum}): Promise<ComplexTypeChartReturn>;
  /**
  cpu operations
  Get server cpu informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/cpu', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmCpu>;
  /**
  smart operations
  Get disk smart informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}/smart', pathParams: {serviceName?: string, disk?: string}, queryParams: null): Promise<DedicatedServerRtmDiskSmart>;
  /**
  Server disks informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}', pathParams: {serviceName?: string, disk?: string}, queryParams: null): Promise<DedicatedServerRtmDisk>;
  /**
  List the dedicated.server.RtmDisk objects
  Server disks
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/disk', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  motherboard operations
  Get server motherboard hardware informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/motherboard', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmMotherboardHw>;
  /**
  Server raid informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}', pathParams: {serviceName?: string, unit?: string}, queryParams: null): Promise<DedicatedServerRtmRaid>;
  /**
  List the dedicated.server.RtmRaidVolume objects
  Raid unit volumes
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume', pathParams: {serviceName?: string, unit?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.server.RtmRaidVolumePort objects
  Raid unit volume ports
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port', pathParams: {serviceName?: string, unit?: string, volume?: string}, queryParams: null): Promise<string[]>;
  /**
  Server raid volume port informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}', pathParams: {serviceName?: string, unit?: string, volume?: string, port?: string}, queryParams: null): Promise<DedicatedServerRtmRaidVolumePort>;
  /**
  Server raid volume information
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}', pathParams: {serviceName?: string, unit?: string, volume?: string}, queryParams: null): Promise<DedicatedServerRtmRaidVolume>;
  /**
  List the dedicated.server.RtmRaid objects
  Server raid informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/raid', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.server.RtmPartition objects
  Server partitions
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/partition', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  chart operations
  Retrieve partition charts
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}/chart', pathParams: {serviceName?: string, partition?: string}, queryParams: {period?: DedicatedServerRtmChartPeriodEnum}): Promise<ComplexTypeChartReturn>;
  /**
  Server partitions informations
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}', pathParams: {serviceName?: string, partition?: string}, queryParams: null): Promise<DedicatedServerRtmPartition>;
  /**
  load operations
  Get server load
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/load', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmLoad>;
  /**
  memory operations
  Get server memory informations
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/memory', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmMemory[]>;
  /**
  Servers statistics sent by RTM (Real Time Monitoring)
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtm>;
  /**
  connection operations
  Get server opened connections
  **/
  public get(path: '/dedicated/server/{serviceName}/statistics/connection', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerRtmConnection[]>;
  /**
  backupCloudOfferDetails operations
  Get details on offered backup cloud if available for the current server
  **/
  public get(path: '/dedicated/server/{serviceName}/backupCloudOfferDetails', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBackupBackupOffer>;
  /**
  Intervention made on this server
  Get this object properties
  **/
  public get(path: '/dedicated/server/{serviceName}/intervention/{interventionId}', pathParams: {serviceName?: string, interventionId?: Number}, queryParams: null): Promise<DedicatedServerIntervention>;
  /**
  List the dedicated.server.Intervention objects
  technical intervention history
  **/
  public get(path: '/dedicated/server/{serviceName}/intervention', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  ips operations
  List all ip from server
  **/
  public get(path: '/dedicated/server/{serviceName}/ips', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  ipCountryAvailable operations
  Retrieve available country for IP order
  **/
  public get(path: '/dedicated/server/{serviceName}/ipCountryAvailable', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerIpCountryEnum[]>;
  public get(path: PathsdedicatedserverGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Service monitoring details
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', pathParams: {serviceName?: string, monitoringId?: Number}, bodyParams: null): Promise<void>;
  /**
  Service monitoring Email alert
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', pathParams: {serviceName?: string, monitoringId?: Number, alertId?: Number}, bodyParams: null): Promise<void>;
  /**
  Monitoring SMS alert details, This service is currently not supported for servers at BHS 
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', pathParams: {serviceName?: string, monitoringId?: Number, alertId?: Number}, bodyParams: null): Promise<void>;
  /**
  SPLA licenses management
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/spla/{id}', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  Server informations
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, bodyParams: null): Promise<void>;
  /**
  Firewall attached to this server
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/features/firewall', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Secondary dns infos
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName?: string, domain?: string}, bodyParams: null): Promise<void>;
  /**
  Server bandwidth burst details
  Alter this object properties
  **/
  public put(path: '/dedicated/server/{serviceName}/burst', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsdedicatedserverPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the dedicated.server.serviceMonitoring objects
  Add a new service monitoring
  **/
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerServiceMonitoring>;
  /**
  List the dedicated.server.emailAlert objects
  Add a new email alert
  **/
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email', pathParams: {serviceName?: string, monitoringId?: Number}, bodyParams: null): Promise<DedicatedServerEmailAlert>;
  /**
  List the dedicated.server.smsAlert objects
  Create a SMS alert
  **/
  public post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms', pathParams: {serviceName?: string, monitoringId?: Number}, bodyParams: null): Promise<DedicatedServerSmsAlert>;
  /**
  revoke operations
  Revoke an SPLA license
  **/
  public post(path: '/dedicated/server/{serviceName}/spla/{id}/revoke', pathParams: {serviceName?: string, id?: Number}, bodyParams: null): Promise<void>;
  /**
  List the dedicated.server.spla objects
  Add a new SPLA license
  **/
  public post(path: '/dedicated/server/{serviceName}/spla', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number>;
  /**
  cancel operations
  this action stop the task progression if it's possible
  **/
  public post(path: '/dedicated/server/{serviceName}/task/{taskId}/cancel', pathParams: {serviceName?: string, taskId?: Number}, bodyParams: null): Promise<void>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/dedicated/server/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the dedicated.server.VirtualMac objects
  Add a virtual mac to an IP address
  **/
  public post(path: '/dedicated/server/{serviceName}/virtualMac', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.VirtualMacManagement objects
  Add an IP to this Virtual MAC
  **/
  public post(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress', pathParams: {serviceName?: string, macAddress?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  Create a new Backup FTP ACL
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP/access', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Backup Ftp assigned to this server
  Create a new Backup FTP space
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  password operations
  Change your Backup FTP password
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupFTP/password', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Backup Cloud assigned to this server
  Create a new storage backup space associated to server
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupCloud', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerBackupCloud>;
  /**
  password operations
  Change your cloud account password
  **/
  public post(path: '/dedicated/server/{serviceName}/features/backupCloud/password', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerBackupBackupPassword>;
  /**
  resetInterface operations
  Reset KVM IPMI interface
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/resetInterface', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  test operations
  Launch test on KVM IPMI interface
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/test', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  access operations
  Request an acces on KVM IPMI interface
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/access', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  resetSessions operations
  Reset KVM IPMI sessions
  **/
  public post(path: '/dedicated/server/{serviceName}/features/ipmi/resetSessions', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  windows operations
  Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.
  **/
  public post(path: '/dedicated/server/{serviceName}/license/windows', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  hardDiskDrive operations
  Ask for a broken HDD replacement
  **/
  public post(path: '/dedicated/server/{serviceName}/support/replace/hardDiskDrive', pathParams: {serviceName?: string}, bodyParams: null): Promise<SupportNewMessageInfo>;
  /**
  authenticationSecret operations
  Retrieve secret to connect to the server / application
  **/
  public post(path: '/dedicated/server/{serviceName}/authenticationSecret', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerAccess[]>;
  /**
  reboot operations
  Hard reboot this server
  **/
  public post(path: '/dedicated/server/{serviceName}/reboot', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  List the secondaryDns.SecondaryDNS objects
  add a domain on secondary dns
  **/
  public post(path: '/dedicated/server/{serviceName}/secondaryDnsDomains', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/dedicated/server/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  ipBlockMerge operations
  Merge a splitted block and route it to the choosen server. You cannot undo this operation
  **/
  public post(path: '/dedicated/server/{serviceName}/ipBlockMerge', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  start operations
  Start an install
  **/
  public post(path: '/dedicated/server/{serviceName}/install/start', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  ipMove operations
  Move an Ip failover to this server
  **/
  public post(path: '/dedicated/server/{serviceName}/ipMove', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dedicated/server/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  public post(path: PathsdedicatedserverPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Service monitoring details
  Remove this service monitoring
  **/
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}', pathParams: {serviceName?: string, monitoringId?: Number}, bodyParams: null): Promise<void>;
  /**
  Service monitoring Email alert
  Remove this Email alert monitoring
  **/
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}', pathParams: {serviceName?: string, monitoringId?: Number, alertId?: Number}, bodyParams: null): Promise<void>;
  /**
  Monitoring SMS alert details, This service is currently not supported for servers at BHS 
  Remove this SMS alert
  **/
  public delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}', pathParams: {serviceName?: string, monitoringId?: Number, alertId?: Number}, bodyParams: null): Promise<void>;
  /**
  vrack dedicated server interfaces
  remove this server from this vrack
  **/
  public delete(path: '/dedicated/server/{serviceName}/vrack/{vrack}', pathParams: {serviceName?: string, vrack?: string}, bodyParams: null): Promise<VrackTask>;
  /**
   ip address linked with this virtual mac address
  Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted
  **/
  public delete(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}', pathParams: {serviceName?: string, macAddress?: string, ipAddress?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Revoke this ACL
  **/
  public delete(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Backup Ftp assigned to this server
  Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
  **/
  public delete(path: '/dedicated/server/{serviceName}/features/backupFTP', pathParams: {serviceName?: string}, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Backup Cloud assigned to this server
  Deactivate the cloud backup associated to the server. This does not delete container data.
  **/
  public delete(path: '/dedicated/server/{serviceName}/features/backupCloud', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Secondary dns infos
  remove this domain
  **/
  public delete(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName?: string, domain?: string}, bodyParams: null): Promise<void>;
  /**
  Information about the options of a dedicated server
  Release a given option
  **/
  public delete(path: '/dedicated/server/{serviceName}/option/{option}', pathParams: {serviceName?: string, option?: DedicatedServerOptionEnum}, bodyParams: null): Promise<void>;
  public delete(path: PathsdedicatedserverDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
