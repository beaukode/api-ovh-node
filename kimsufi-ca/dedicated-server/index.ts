import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/server Models
 * Source: https://ca.api.kimsufi.com/1.0/dedicated/server.json
 */
export namespace complexType {
    // interface fullName: complexType.ChartReturn.ChartReturn
    export interface ChartReturn {
        unit?: string;
        values?: complexType.ChartTimestampValue[];
    }
    // interface fullName: complexType.ChartTimestampValue.ChartTimestampValue
    export interface ChartTimestampValue {
        timestamp: number;
        value?: number;
    }
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    // type fullname: dedicated.DatacenterEnum
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "dc1" | "eri1" | "gra1" | "gra2" | "gsw" | "hil1" | "lim1" | "p19" | "rbx-hz" | "rbx1" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sgp1" | "syd1" | "vin1" | "waw1"
    // type fullname: dedicated.TaskFunctionEnum
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    // type fullname: dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace biosSettings {
        // interface fullName: dedicated.biosSettings.BiosSettings.BiosSettings
        export interface BiosSettings {
            supportedSettings: dedicated.server.BiosSettingsSupport;
        }
    }
    export namespace biosSettingsSgx {
        // interface fullName: dedicated.biosSettingsSgx.BiosSettingsSgx.BiosSettingsSgx
        export interface BiosSettingsSgx {
            prmrr: dedicated.server.BiosSettingsSgxPrmrrEnum;
            status: dedicated.server.BiosSettingsSgxStatusEnum;
        }
    }
    export namespace networkInterfaceController {
        // interface fullName: dedicated.networkInterfaceController.NetworkInterfaceController.NetworkInterfaceController
        export interface NetworkInterfaceController {
            linkType: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum;
            mac: string;
            virtualNetworkInterface?: string;
        }
        // type fullname: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum
        export type NetworkInterfaceControllerLinkTypeEnum = "isolated" | "private" | "private_lag" | "provisioning" | "public"
    }
    export namespace server {
        // interface fullName: dedicated.server.Access.Access
        export interface Access {
            password: string;
            type: dedicated.server.AccessTypeEnum;
            url?: string;
            user?: string;
        }
        // type fullname: dedicated.server.AccessTypeEnum
        export type AccessTypeEnum = "DIRECTADMIN_PANEL" | "PLESK_PANEL" | "PROXMOX_PANEL" | "RDP" | "SQL_SERVER" | "SSH" | "WEB_PANEL"
        // interface fullName: dedicated.server.BandwidthDetails.BandwidthDetails
        export interface BandwidthDetails {
            InternetToOvh?: complexType.UnitAndValue<number>;
            OvhToInternet?: complexType.UnitAndValue<number>;
            OvhToOvh?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthTypeEnum;
        }
        // type fullname: dedicated.server.BandwidthTypeEnum
        export type BandwidthTypeEnum = "included" | "platinum" | "premium" | "standard" | "ultimate"
        // interface fullName: dedicated.server.BandwidthvRackDetails.BandwidthvRackDetails
        export interface BandwidthvRackDetails {
            bandwidth?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthvRackTypeEnum;
        }
        // type fullname: dedicated.server.BandwidthvRackTypeEnum
        export type BandwidthvRackTypeEnum = "included" | "standard"
        // type fullname: dedicated.server.BiosSettingsSgxPrmrrEnum
        export type BiosSettingsSgxPrmrrEnum = "128MB" | "256MB" | "32MB" | "64MB"
        // type fullname: dedicated.server.BiosSettingsSgxStatusEnum
        export type BiosSettingsSgxStatusEnum = "disabled" | "enabled" | "software controlled"
        // interface fullName: dedicated.server.BiosSettingsSupport.BiosSettingsSupport
        export interface BiosSettingsSupport {
            sgx: boolean;
        }
        // type fullname: dedicated.server.BootModeEnum
        export type BootModeEnum = "legacy" | "uefi" | "uefi-legacy"
        // type fullname: dedicated.server.BootOptionEnum
        export type BootOptionEnum = "cpufamily" | "grsec" | "ipv6" | "smp"
        // type fullname: dedicated.server.BootTypeEnum
        export type BootTypeEnum = "harddisk" | "internal" | "ipxeCustomerScript" | "network" | "rescue"
        // type fullname: dedicated.server.CpuFamilyEnum
        export type CpuFamilyEnum = "arm64" | "armhf32" | "ppc64" | "x86" | "x86-ht" | "x86_64"
        // interface fullName: dedicated.server.Dedicated.Dedicated
        export interface Dedicated {
            bootId?: number;
            commercialRange?: string;
            datacenter: dedicated.DatacenterEnum;
            ip: string;
            linkSpeed?: number;
            monitoring: boolean;
            name: string;
            os: string;
            professionalUse: boolean;
            rack: string;
            rescueMail?: string;
            reverse?: string;
            rootDevice?: string;
            serverId: number;
            state: dedicated.server.StateEnum;
            supportLevel: dedicated.server.SupportLevelEnum;
        }
        // type fullname: dedicated.server.DiskTypeEnum
        export type DiskTypeEnum = "NVMe" | "SAS" | "SATA" | "SSD" | "Unknown"
        // type fullname: dedicated.server.FormFactorEnum
        export type FormFactorEnum = "0.25u" | "0.5u" | "1u" | "2u" | "3u" | "4u"
        // interface fullName: dedicated.server.HardwareRaidConfiguration.HardwareRaidConfiguration
        export interface HardwareRaidConfiguration {
            capacity: complexType.UnitAndValue<number>;
            diskCount: number;
            diskSize: complexType.UnitAndValue<number>;
            diskSpanSize: number;
            mode: dedicated.server.HardwareSpecificationsRaidHardEnum;
            name: string;
            type: string;
        }
        // interface fullName: dedicated.server.HardwareRaidController.HardwareRaidController
        export interface HardwareRaidController {
            disks: dedicated.server.HardwareRaidDiskGroup[];
            model: string;
            type: string;
        }
        // interface fullName: dedicated.server.HardwareRaidDiskGroup.HardwareRaidDiskGroup
        export interface HardwareRaidDiskGroup {
            capacity: complexType.UnitAndValue<number>;
            names: string[];
            speed: complexType.UnitAndValue<string>;
            type: dedicated.server.DiskTypeEnum;
        }
        // interface fullName: dedicated.server.HardwareRaidProfile.HardwareRaidProfile
        export interface HardwareRaidProfile {
            controllers: dedicated.server.HardwareRaidController[];
        }
        // interface fullName: dedicated.server.HardwareRaidSize.HardwareRaidSize
        export interface HardwareRaidSize {
            configurations: dedicated.server.HardwareRaidConfiguration[];
        }
        // interface fullName: dedicated.server.HardwareSpecifications.HardwareSpecifications
        export interface HardwareSpecifications {
            bootMode: dedicated.server.BootModeEnum;
            coresPerProcessor?: number;
            defaultHardwareRaidSize?: complexType.UnitAndValue<number>;
            defaultHardwareRaidType?: dedicated.server.HardwareSpecificationsRaidHardEnum;
            description?: string;
            diskGroups?: dedicated.server.HardwareSpecificationsDisk[];
            expansionCards?: dedicated.server.HardwareSpecificationsExpansionCard[];
            formFactor?: dedicated.server.FormFactorEnum;
            memorySize?: complexType.UnitAndValue<number>;
            motherboard?: string;
            numberOfProcessors?: number;
            processorArchitecture?: dedicated.server.CpuFamilyEnum;
            processorName?: string;
            threadsPerProcessor?: number;
            usbKeys?: complexType.UnitAndValue<number>[];
        }
        // interface fullName: dedicated.server.HardwareSpecificationsDisk.HardwareSpecificationsDisk
        export interface HardwareSpecificationsDisk {
            defaultHardwareRaidSize?: complexType.UnitAndValue<number>;
            defaultHardwareRaidType?: dedicated.server.HardwareSpecificationsRaidHardEnum;
            description?: string;
            diskGroupId?: number;
            diskSize?: complexType.UnitAndValue<number>;
            diskType?: string;
            numberOfDisks?: number;
            raidController?: string;
        }
        // interface fullName: dedicated.server.HardwareSpecificationsExpansionCard.HardwareSpecificationsExpansionCard
        export interface HardwareSpecificationsExpansionCard {
            description: string;
            type: dedicated.server.HardwareSpecificationsExpansionCardTypeEnum;
        }
        // type fullname: dedicated.server.HardwareSpecificationsExpansionCardTypeEnum
        export type HardwareSpecificationsExpansionCardTypeEnum = "fpga" | "gpu"
        // type fullname: dedicated.server.HardwareSpecificationsRaidHardEnum
        export type HardwareSpecificationsRaidHardEnum = "raid0" | "raid1" | "raid10" | "raid1E" | "raid5" | "raid50" | "raid6" | "raid60"
        // interface fullName: dedicated.server.InstallCustom.InstallCustom
        export interface InstallCustom {
            customHostname?: string;
            diskGroupId?: number;
            installRTM?: boolean;
            installSqlServer?: boolean;
            language?: string;
            noRaid?: boolean;
            postInstallationScriptLink?: string;
            postInstallationScriptReturn?: string;
            resetHwRaid?: boolean;
            softRaidDevices?: number;
            sshKeyName?: string;
            useDistribKernel?: boolean;
            useSpla?: boolean;
        }
        // interface fullName: dedicated.server.InstallTemplate.InstallTemplate
        export interface InstallTemplate {
            ovh?: string[];
            personal?: string[];
        }
        // interface fullName: dedicated.server.InstallationProgressStatus.InstallationProgressStatus
        export interface InstallationProgressStatus {
            elapsedTime: number;
            progress?: dedicated.server.InstallationProgressSteps[];
        }
        // type fullname: dedicated.server.InstallationProgressStatusEnum
        export type InstallationProgressStatusEnum = "doing" | "done" | "error" | "expired" | "idle" | "pending" | "stopping" | "todo"
        // interface fullName: dedicated.server.InstallationProgressSteps.InstallationProgressSteps
        export interface InstallationProgressSteps {
            comment: string;
            error?: string;
            status: dedicated.server.InstallationProgressStatusEnum;
        }
        // interface fullName: dedicated.server.Intervention.Intervention
        export interface Intervention {
            date?: string;
            interventionId: number;
            type?: string;
        }
        // type fullname: dedicated.server.IpBlockSizeEnum
        export type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8
        // interface fullName: dedicated.server.IpOrderable.IpOrderable
        export interface IpOrderable {
            ipv4?: dedicated.server.IpOrderableDetails[];
            ipv6?: dedicated.server.IpOrderableDetails[];
        }
        // interface fullName: dedicated.server.IpOrderableDetails.IpOrderableDetails
        export interface IpOrderableDetails {
            blockSizes: dedicated.server.IpBlockSizeEnum[];
            included: boolean;
            ipNumber?: number;
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            type: dedicated.server.IpTypeOrderableEnum;
        }
        // type fullname: dedicated.server.IpTypeOrderableEnum
        export type IpTypeOrderableEnum = "failover" | "static" | "unshielded"
        // type fullname: dedicated.server.MrtgPeriodEnum
        export type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
        // interface fullName: dedicated.server.MrtgTimestampValue.MrtgTimestampValue
        export interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        // type fullname: dedicated.server.MrtgTypeEnum
        export type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload"
        // interface fullName: dedicated.server.Netboot.Netboot
        export interface Netboot {
            bootId: number;
            bootType: dedicated.server.BootTypeEnum;
            description: string;
            kernel: string;
        }
        // interface fullName: dedicated.server.NetworkSpecifications.NetworkSpecifications
        export interface NetworkSpecifications {
            bandwidth?: dedicated.server.BandwidthDetails;
            connection?: complexType.UnitAndValue<number>;
            ola?: dedicated.server.OlaDetails;
            routing?: dedicated.server.RoutingDetails;
            switching?: dedicated.server.SwitchingDetails;
            traffic?: dedicated.server.TrafficDetails;
            vrack?: dedicated.server.BandwidthvRackDetails;
        }
        // interface fullName: dedicated.server.OlaDetails.OlaDetails
        export interface OlaDetails {
            available: boolean;
            supportedModes?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[];
        }
        // interface fullName: dedicated.server.Option.Option
        export interface Option {
            option: dedicated.server.OptionEnum;
            state: dedicated.server.OptionStateEnum;
        }
        // type fullname: dedicated.server.OptionEnum
        export type OptionEnum = "BACKUPPROTOCOL" | "BANDWIDTH" | "BANDWIDTH_VRACK" | "OLA" | "SGX" | "TRAFFIC" | "TRAFFIC_DISCOVER" | "TUNING" | "TUNING_FIREWALL" | "TUNING_KVM" | "USB_KVM_IP"
        // type fullname: dedicated.server.OptionRequiredEnum
        export type OptionRequiredEnum = "professionalUse"
        // type fullname: dedicated.server.OptionStateEnum
        export type OptionStateEnum = "released" | "subscribed"
        // interface fullName: dedicated.server.RoutingDetails.RoutingDetails
        export interface RoutingDetails {
            ipv4?: dedicated.server.RoutingDetailsIpv4;
            ipv6?: dedicated.server.RoutingDetailsIpv6;
        }
        // interface fullName: dedicated.server.RoutingDetailsIpv4.RoutingDetailsIpv4
        export interface RoutingDetailsIpv4 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        // interface fullName: dedicated.server.RoutingDetailsIpv6.RoutingDetailsIpv6
        export interface RoutingDetailsIpv6 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        // interface fullName: dedicated.server.Rtm.Rtm
        export interface Rtm {
            currentVersion?: string;
            installedVersion?: string;
            needsUpdate: boolean;
        }
        // type fullname: dedicated.server.RtmChartPeriodEnum
        export type RtmChartPeriodEnum = "daily" | "monthly" | "weekly" | "yearly"
        // type fullname: dedicated.server.RtmChartTypeEnum
        export type RtmChartTypeEnum = "cpu" | "loadavg1" | "loadavg15" | "loadavg5" | "memory" | "processCount" | "processRunning" | "swap"
        // interface fullName: dedicated.server.RtmCommandSize.RtmCommandSize
        export interface RtmCommandSize {
            command?: string;
            memory?: complexType.UnitAndValue<number>;
        }
        // interface fullName: dedicated.server.RtmConnection.RtmConnection
        export interface RtmConnection {
            cmdline?: string;
            domain?: string;
            exe?: string;
            ip?: string;
            pid?: number;
            port?: number;
            procname?: string;
            uid?: number;
            username?: string;
        }
        // interface fullName: dedicated.server.RtmCpu.RtmCpu
        export interface RtmCpu {
            cache?: complexType.UnitAndValue<number>;
            core?: number;
            freq?: complexType.UnitAndValue<number>;
            name?: string;
        }
        // interface fullName: dedicated.server.RtmDisk.RtmDisk
        export interface RtmDisk {
            capacity?: complexType.UnitAndValue<number>;
            disk: string;
            model?: string;
            temperature?: complexType.UnitAndValue<number>;
        }
        // interface fullName: dedicated.server.RtmDiskSmart.RtmDiskSmart
        export interface RtmDiskSmart {
            current_pending_sector?: number;
            multizone_error_rate?: number;
            offline_seek_performance?: number;
            offline_uncorrectable?: number;
            other_errors?: number;
            realocated_event_count?: number;
            temperature_celsius?: number;
            udma_crc_error?: number;
            uncorrected_read_errors?: number;
            uncorrected_write_errors?: number;
        }
        // interface fullName: dedicated.server.RtmLoad.RtmLoad
        export interface RtmLoad {
            cpu?: complexType.UnitAndValue<number>;
            loadavg1?: number;
            loadavg15?: number;
            loadavg5?: number;
            memory?: complexType.UnitAndValue<number>;
            processCount?: number;
            processRunning?: number;
            swap?: complexType.UnitAndValue<number>;
            uptime?: number;
        }
        // interface fullName: dedicated.server.RtmMemory.RtmMemory
        export interface RtmMemory {
            capacity?: complexType.UnitAndValue<number>;
            slot?: string;
        }
        // interface fullName: dedicated.server.RtmMotherboardHw.RtmMotherboardHw
        export interface RtmMotherboardHw {
            manufacturer?: string;
            name?: string;
        }
        // interface fullName: dedicated.server.RtmOs.RtmOs
        export interface RtmOs {
            kernelRelease?: string;
            kernelVersion?: string;
            release?: string;
        }
        // interface fullName: dedicated.server.RtmPartition.RtmPartition
        export interface RtmPartition {
            inodeUsage?: complexType.UnitAndValue<number>;
            mountPoint?: string;
            partition: string;
            usage?: complexType.UnitAndValue<number>;
        }
        // interface fullName: dedicated.server.RtmPci.RtmPci
        export interface RtmPci {
            bus?: string;
            device?: string;
        }
        // interface fullName: dedicated.server.RtmRaid.RtmRaid
        export interface RtmRaid {
            unit: string;
        }
        // type fullname: dedicated.server.RtmRaidStatusEnum
        export type RtmRaidStatusEnum = "KO" | "OK" | "REBUILDING" | "UNKNOWN"
        // interface fullName: dedicated.server.RtmRaidVolume.RtmRaidVolume
        export interface RtmRaidVolume {
            capacity?: complexType.UnitAndValue<number>;
            chunks?: string;
            label?: string;
            letter?: string;
            phys?: string;
            status?: dedicated.server.RtmRaidStatusEnum;
            stripe?: string;
            syncprogress?: string;
            type?: string;
            volume?: string;
        }
        // interface fullName: dedicated.server.RtmRaidVolumePort.RtmRaidVolumePort
        export interface RtmRaidVolumePort {
            capacity?: complexType.UnitAndValue<number>;
            disk?: string;
            model?: string;
            port?: string;
            serial?: string;
            status?: dedicated.server.RtmRaidStatusEnum;
            syncprogress?: string;
        }
        // type fullname: dedicated.server.StateEnum
        export type StateEnum = "error" | "hacked" | "hackedBlocked" | "ok"
        // type fullname: dedicated.server.SupportLevelEnum
        export type SupportLevelEnum = "critical" | "fastpath" | "gs" | "pro"
        // interface fullName: dedicated.server.SupportLevelOrderable.SupportLevelOrderable
        export interface SupportLevelOrderable {
            levels?: dedicated.server.SupportLevelOrderableEnum[];
            orderable: boolean;
        }
        // type fullname: dedicated.server.SupportLevelOrderableEnum
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
        // interface fullName: dedicated.server.SupportReplaceHddInfo.SupportReplaceHddInfo
        export interface SupportReplaceHddInfo {
            disk_serial: string;
            slot_id?: number;
        }
        // interface fullName: dedicated.server.SwitchingDetails.SwitchingDetails
        export interface SwitchingDetails {
            name?: string;
        }
        // interface fullName: dedicated.server.Task.Task
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
        // interface fullName: dedicated.server.TemplateCaps.TemplateCaps
        export interface TemplateCaps {
            hybridSupport: boolean;
        }
        // interface fullName: dedicated.server.TrafficDetails.TrafficDetails
        export interface TrafficDetails {
            inputQuotaSize?: complexType.UnitAndValue<number>;
            inputQuotaUsed?: complexType.UnitAndValue<number>;
            isThrottled?: boolean;
            outputQuotaSize?: complexType.UnitAndValue<number>;
            outputQuotaUsed?: complexType.UnitAndValue<number>;
            resetQuotaDate?: string;
        }
        export namespace backup {
            // interface fullName: dedicated.server.backup.BackupOffer.BackupOffer
            export interface BackupOffer {
                maxArchive?: complexType.UnitAndValue<number>;
                maxBandwidthArchive?: complexType.UnitAndValue<number>;
                maxBandwidthStorage?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
            }
        }
        // interface fullName: dedicated.server.netbootOption.netbootOption
        export interface netbootOption {
            option: dedicated.server.BootOptionEnum;
            value: string;
        }
    }
    export namespace virtualNetworkInterface {
        // interface fullName: dedicated.virtualNetworkInterface.VirtualNetworkInterface.VirtualNetworkInterface
        export interface VirtualNetworkInterface {
            enabled: boolean;
            mode: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
            name: string;
            networkInterfaceController: string[];
            serverName: string;
            uuid: string;
            vrack?: string;
        }
        // type fullname: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum
        export type VirtualNetworkInterfaceModeEnum = "public" | "vrack" | "vrack_aggregation"
    }
}
export namespace secondaryDns {
    // interface fullName: secondaryDns.SecondaryDNS.SecondaryDNS
    export interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    // interface fullName: secondaryDns.SecondaryDNSCheckField.SecondaryDNSCheckField
    export interface SecondaryDNSCheckField {
        fieldType: zone.NamedResolutionFieldTypeEnum;
        fieldValue: string;
        subDomain: string;
    }
    // interface fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
    export interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
    }
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    // interface fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
export namespace support {
    // interface fullName: support.NewMessageInfo.NewMessageInfo
    export interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
}
export namespace zone {
    // type fullname: zone.NamedResolutionFieldTypeEnum
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
}

/**
 * END API /dedicated/server Models
 */
export function proxyDedicatedServer(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedServer;
/**
 * Api Proxy model
 */// Apis harmony
// path /dedicated
export interface Dedicated{
    server: {
        // GET /dedicated/server
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /dedicated/server/{serviceName}
            $get(): Promise<dedicated.server.Dedicated>;
            // PUT /dedicated/server/{serviceName}
            $put(params?: {bootId?: number, commercialRange?: string, datacenter?: dedicated.DatacenterEnum, ip?: string, linkSpeed?: number, monitoring?: boolean, name?: string, os?: string, professionalUse?: boolean, rack?: string, rescueMail?: string, reverse?: string, rootDevice?: string, serverId?: number, state?: dedicated.server.StateEnum, supportLevel?: dedicated.server.SupportLevelEnum}): Promise<void>;
            authenticationSecret: {
                // POST /dedicated/server/{serviceName}/authenticationSecret
                $post(): Promise<dedicated.server.Access[]>;
            }
            backupCloudOfferDetails: {
                // GET /dedicated/server/{serviceName}/backupCloudOfferDetails
                $get(): Promise<dedicated.server.backup.BackupOffer>;
            }
            biosSettings: {
                // GET /dedicated/server/{serviceName}/biosSettings
                $get(): Promise<dedicated.biosSettings.BiosSettings>;
                sgx: {
                    // GET /dedicated/server/{serviceName}/biosSettings/sgx
                    $get(): Promise<dedicated.biosSettingsSgx.BiosSettingsSgx>;
                    configure: {
                        // POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
                        $post(params?: {prmrr?: dedicated.server.BiosSettingsSgxPrmrrEnum, status?: dedicated.server.BiosSettingsSgxStatusEnum}): Promise<dedicated.server.Task>;
                    }
                }
            }
            boot: {
                // GET /dedicated/server/{serviceName}/boot
                $get(params?: {bootType?: dedicated.server.BootTypeEnum}): Promise<number[]>;
                $(bootId: number): {
                    // GET /dedicated/server/{serviceName}/boot/{bootId}
                    $get(): Promise<dedicated.server.Netboot>;
                    option: {
                        // GET /dedicated/server/{serviceName}/boot/{bootId}/option
                        $get(): Promise<dedicated.server.BootOptionEnum[]>;
                        $(option: dedicated.server.BootOptionEnum): {
                            // GET /dedicated/server/{serviceName}/boot/{bootId}/option/{option}
                            $get(): Promise<dedicated.server.netbootOption>;
                        };
                    }
                };
            }
            confirmTermination: {
                // POST /dedicated/server/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            install: {
                compatibleTemplatePartitionSchemes: {
                    // GET /dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes
                    $get(params: {templateName: string}): Promise<string[]>;
                }
                compatibleTemplates: {
                    // GET /dedicated/server/{serviceName}/install/compatibleTemplates
                    $get(): Promise<dedicated.server.InstallTemplate>;
                }
                hardwareRaidProfile: {
                    // GET /dedicated/server/{serviceName}/install/hardwareRaidProfile
                    $get(): Promise<dedicated.server.HardwareRaidProfile>;
                }
                hardwareRaidSize: {
                    // GET /dedicated/server/{serviceName}/install/hardwareRaidSize
                    $get(params: {partitionSchemeName: string, templateName: string}): Promise<dedicated.server.HardwareRaidSize>;
                }
                start: {
                    // POST /dedicated/server/{serviceName}/install/start
                    $post(params: {details?: dedicated.server.InstallCustom, partitionSchemeName?: string, templateName: string}): Promise<dedicated.server.Task>;
                }
                status: {
                    // GET /dedicated/server/{serviceName}/install/status
                    $get(): Promise<dedicated.server.InstallationProgressStatus>;
                }
                templateCapabilities: {
                    // GET /dedicated/server/{serviceName}/install/templateCapabilities
                    $get(params: {templateName: string}): Promise<dedicated.server.TemplateCaps>;
                }
            }
            intervention: {
                // GET /dedicated/server/{serviceName}/intervention
                $get(): Promise<number[]>;
                $(interventionId: number): {
                    // GET /dedicated/server/{serviceName}/intervention/{interventionId}
                    $get(): Promise<dedicated.server.Intervention>;
                };
            }
            ips: {
                // GET /dedicated/server/{serviceName}/ips
                $get(): Promise<string[]>;
            }
            mrtg: {
                // GET /dedicated/server/{serviceName}/mrtg
                $get(params: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
            }
            networkInterfaceController: {
                // GET /dedicated/server/{serviceName}/networkInterfaceController
                $get(params?: {linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum}): Promise<string[]>;
                $(mac: string): {
                    // GET /dedicated/server/{serviceName}/networkInterfaceController/{mac}
                    $get(): Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
                    mrtg: {
                        // GET /dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg
                        $get(params: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
                    }
                };
            }
            option: {
                // GET /dedicated/server/{serviceName}/option
                $get(): Promise<dedicated.server.OptionEnum[]>;
                $(option: dedicated.server.OptionEnum): {
                    // DELETE /dedicated/server/{serviceName}/option/{option}
                    $delete(): Promise<void>;
                    // GET /dedicated/server/{serviceName}/option/{option}
                    $get(): Promise<dedicated.server.Option>;
                };
            }
            reboot: {
                // POST /dedicated/server/{serviceName}/reboot
                $post(): Promise<dedicated.server.Task>;
            }
            secondaryDnsDomains: {
                // GET /dedicated/server/{serviceName}/secondaryDnsDomains
                $get(): Promise<string[]>;
                // POST /dedicated/server/{serviceName}/secondaryDnsDomains
                $post(params: {domain: string, ip?: string}): Promise<void>;
                $(domain: string): {
                    // DELETE /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                    $delete(): Promise<void>;
                    // GET /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                    $get(): Promise<secondaryDns.SecondaryDNS>;
                    // PUT /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                    $put(params?: {creationDate?: string, dns?: string, domain?: string, ipMaster?: string}): Promise<void>;
                    dnsServer: {
                        // GET /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                        $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                    }
                };
            }
            secondaryDnsNameDomainToken: {
                // GET /dedicated/server/{serviceName}/secondaryDnsNameDomainToken
                $get(params: {domain: string}): Promise<secondaryDns.SecondaryDNSCheckField>;
            }
            secondaryDnsNameServerAvailable: {
                // GET /dedicated/server/{serviceName}/secondaryDnsNameServerAvailable
                $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
            }
            serviceInfos: {
                // GET /dedicated/server/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/server/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            specifications: {
                hardware: {
                    // GET /dedicated/server/{serviceName}/specifications/hardware
                    $get(): Promise<dedicated.server.HardwareSpecifications>;
                }
                ip: {
                    // GET /dedicated/server/{serviceName}/specifications/ip
                    $get(): Promise<dedicated.server.IpOrderable>;
                }
                network: {
                    // GET /dedicated/server/{serviceName}/specifications/network
                    $get(): Promise<dedicated.server.NetworkSpecifications>;
                }
            }
            statistics: {
                // GET /dedicated/server/{serviceName}/statistics
                $get(): Promise<dedicated.server.Rtm>;
                chart: {
                    // GET /dedicated/server/{serviceName}/statistics/chart
                    $get(params: {period: dedicated.server.RtmChartPeriodEnum, type: dedicated.server.RtmChartTypeEnum}): Promise<complexType.ChartReturn>;
                }
                connection: {
                    // GET /dedicated/server/{serviceName}/statistics/connection
                    $get(): Promise<dedicated.server.RtmConnection[]>;
                }
                cpu: {
                    // GET /dedicated/server/{serviceName}/statistics/cpu
                    $get(): Promise<dedicated.server.RtmCpu>;
                }
                disk: {
                    // GET /dedicated/server/{serviceName}/statistics/disk
                    $get(): Promise<string[]>;
                    $(disk: string): {
                        // GET /dedicated/server/{serviceName}/statistics/disk/{disk}
                        $get(): Promise<dedicated.server.RtmDisk>;
                        smart: {
                            // GET /dedicated/server/{serviceName}/statistics/disk/{disk}/smart
                            $get(): Promise<dedicated.server.RtmDiskSmart>;
                        }
                    };
                }
                load: {
                    // GET /dedicated/server/{serviceName}/statistics/load
                    $get(): Promise<dedicated.server.RtmLoad>;
                }
                memory: {
                    // GET /dedicated/server/{serviceName}/statistics/memory
                    $get(): Promise<dedicated.server.RtmMemory[]>;
                }
                motherboard: {
                    // GET /dedicated/server/{serviceName}/statistics/motherboard
                    $get(): Promise<dedicated.server.RtmMotherboardHw>;
                }
                os: {
                    // GET /dedicated/server/{serviceName}/statistics/os
                    $get(): Promise<dedicated.server.RtmOs>;
                }
                partition: {
                    // GET /dedicated/server/{serviceName}/statistics/partition
                    $get(): Promise<string[]>;
                    $(partition: string): {
                        // GET /dedicated/server/{serviceName}/statistics/partition/{partition}
                        $get(): Promise<dedicated.server.RtmPartition>;
                        chart: {
                            // GET /dedicated/server/{serviceName}/statistics/partition/{partition}/chart
                            $get(params: {period: dedicated.server.RtmChartPeriodEnum}): Promise<complexType.ChartReturn>;
                        }
                    };
                }
                pci: {
                    // GET /dedicated/server/{serviceName}/statistics/pci
                    $get(): Promise<dedicated.server.RtmPci[]>;
                }
                process: {
                    // GET /dedicated/server/{serviceName}/statistics/process
                    $get(): Promise<dedicated.server.RtmCommandSize[]>;
                }
                raid: {
                    // GET /dedicated/server/{serviceName}/statistics/raid
                    $get(): Promise<string[]>;
                    $(unit: string): {
                        // GET /dedicated/server/{serviceName}/statistics/raid/{unit}
                        $get(): Promise<dedicated.server.RtmRaid>;
                        volume: {
                            // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume
                            $get(): Promise<string[]>;
                            $(volume: string): {
                                // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}
                                $get(): Promise<dedicated.server.RtmRaidVolume>;
                                port: {
                                    // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port
                                    $get(): Promise<string[]>;
                                    $(port: string): {
                                        // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}
                                        $get(): Promise<dedicated.server.RtmRaidVolumePort>;
                                    };
                                }
                            };
                        }
                    };
                }
            }
            support: {
                replace: {
                    hardDiskDrive: {
                        // POST /dedicated/server/{serviceName}/support/replace/hardDiskDrive
                        $post(params: {comment: string, disks: dedicated.server.SupportReplaceHddInfo[], inverse: boolean}): Promise<support.NewMessageInfo>;
                    }
                }
            }
            task: {
                // GET /dedicated/server/{serviceName}/task
                $get(params?: {function_?: dedicated.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /dedicated/server/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.server.Task>;
                    cancel: {
                        // POST /dedicated/server/{serviceName}/task/{taskId}/cancel
                        $post(): Promise<void>;
                    }
                };
            }
            terminate: {
                // POST /dedicated/server/{serviceName}/terminate
                $post(): Promise<string>;
            }
            virtualNetworkInterface: {
                // GET /dedicated/server/{serviceName}/virtualNetworkInterface
                $get(params?: {enabled?: boolean, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, vrack?: string}): Promise<string[]>;
                $(uuid: string): {
                    // GET /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}
                    $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
                    // PUT /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}
                    $put(params?: {enabled?: boolean, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, networkInterfaceController?: string[], serverName?: string, uuid?: string, vrack?: string}): Promise<void>;
                    disable: {
                        // POST /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable
                        $post(): Promise<dedicated.server.Task>;
                    }
                    enable: {
                        // POST /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable
                        $post(): Promise<dedicated.server.Task>;
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  get(path: '/dedicated/server'): () => Promise<string[]>;
  /**
   * Server informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}'): (params: {serviceName: string}) => Promise<dedicated.server.Dedicated>;
  /**
   * backupCloudOfferDetails operations
   * Get details on offered backup cloud if available for the current server
   */
  get(path: '/dedicated/server/{serviceName}/backupCloudOfferDetails'): (params: {serviceName: string}) => Promise<dedicated.server.backup.BackupOffer>;
  /**
   * Your BiosSettings
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/biosSettings'): (params: {serviceName: string}) => Promise<dedicated.biosSettings.BiosSettings>;
  /**
   * Your BiosSettings for SGX feature
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/biosSettings/sgx'): (params: {serviceName: string}) => Promise<dedicated.biosSettingsSgx.BiosSettingsSgx>;
  /**
   * List the dedicated.server.Netboot objects
   * Server compatibles netboots
   */
  get(path: '/dedicated/server/{serviceName}/boot'): (params: {serviceName: string, bootType?: dedicated.server.BootTypeEnum}) => Promise<number[]>;
  /**
   * Available boots
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/boot/{bootId}'): (params: {bootId: number, serviceName: string}) => Promise<dedicated.server.Netboot>;
  /**
   * List the dedicated.server.netbootOption objects
   * Option used on this netboot
   */
  get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option'): (params: {bootId: number, serviceName: string}) => Promise<dedicated.server.BootOptionEnum[]>;
  /**
   * Available boot options
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option/{option}'): (params: {bootId: number, option: dedicated.server.BootOptionEnum, serviceName: string}) => Promise<dedicated.server.netbootOption>;
  /**
   * compatibleTemplatePartitionSchemes operations
   * Retrieve compatible  install template partitions scheme
   */
  get(path: '/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes'): (params: {serviceName: string, templateName: string}) => Promise<string[]>;
  /**
   * compatibleTemplates operations
   * Retrieve compatible  install templates names
   */
  get(path: '/dedicated/server/{serviceName}/install/compatibleTemplates'): (params: {serviceName: string}) => Promise<dedicated.server.InstallTemplate>;
  /**
   * hardwareRaidProfile operations
   * Retrieve hardware RAID profile
   */
  get(path: '/dedicated/server/{serviceName}/install/hardwareRaidProfile'): (params: {serviceName: string}) => Promise<dedicated.server.HardwareRaidProfile>;
  /**
   * hardwareRaidSize operations
   * Get hardware RAID size for a given configuration
   */
  get(path: '/dedicated/server/{serviceName}/install/hardwareRaidSize'): (params: {serviceName: string, partitionSchemeName: string, templateName: string}) => Promise<dedicated.server.HardwareRaidSize>;
  /**
   * status operations
   * Get installation status
   */
  get(path: '/dedicated/server/{serviceName}/install/status'): (params: {serviceName: string}) => Promise<dedicated.server.InstallationProgressStatus>;
  /**
   * templateCapabilities operations
   * Gives some capabilities regarding the template for the current dedicated server.
   */
  get(path: '/dedicated/server/{serviceName}/install/templateCapabilities'): (params: {serviceName: string, templateName: string}) => Promise<dedicated.server.TemplateCaps>;
  /**
   * List the dedicated.server.Intervention objects
   * technical intervention history
   */
  get(path: '/dedicated/server/{serviceName}/intervention'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Intervention made on this server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/intervention/{interventionId}'): (params: {interventionId: number, serviceName: string}) => Promise<dedicated.server.Intervention>;
  /**
   * ips operations
   * List all ip from server
   */
  get(path: '/dedicated/server/{serviceName}/ips'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * mrtg operations
   * Retrieve traffic graph values
   */
  get(path: '/dedicated/server/{serviceName}/mrtg'): (params: {serviceName: string, period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}) => Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the dedicated.networkInterfaceController.NetworkInterfaceController objects
   * List server networkInterfaceController
   */
  get(path: '/dedicated/server/{serviceName}/networkInterfaceController'): (params: {serviceName: string, linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum}) => Promise<string[]>;
  /**
   * Your networkInterfaceController
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}'): (params: {mac: string, serviceName: string}) => Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
  /**
   * mrtg operations
   * Retrieve traffic graph values
   */
  get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg'): (params: {mac: string, serviceName: string, period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}) => Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the dedicated.server.Option objects
   * List of dedicated server options
   */
  get(path: '/dedicated/server/{serviceName}/option'): (params: {serviceName: string}) => Promise<dedicated.server.OptionEnum[]>;
  /**
   * Information about the options of a dedicated server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/option/{option}'): (params: {option: dedicated.server.OptionEnum, serviceName: string}) => Promise<dedicated.server.Option>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * List of secondary dns domain name
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Secondary dns infos
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {domain: string, serviceName: string}) => Promise<secondaryDns.SecondaryDNS>;
  /**
   * dnsServer operations
   * domain name server informations
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer'): (params: {domain: string, serviceName: string}) => Promise<secondaryDns.SecondaryDNSNameServer>;
  /**
   * secondaryDnsNameDomainToken operations
   * DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsNameDomainToken'): (params: {serviceName: string, domain: string}) => Promise<secondaryDns.SecondaryDNSCheckField>;
  /**
   * secondaryDnsNameServerAvailable operations
   * Secondary nameServer available for your Server
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable'): (params: {serviceName: string}) => Promise<secondaryDns.SecondaryDNSNameServer>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * hardware operations
   * Retrieve hardware informations about this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/specifications/hardware'): (params: {serviceName: string}) => Promise<dedicated.server.HardwareSpecifications>;
  /**
   * ip operations
   * Retrieve IP capabilities about this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/specifications/ip'): (params: {serviceName: string}) => Promise<dedicated.server.IpOrderable>;
  /**
   * network operations
   * Retrieve network informations about this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/specifications/network'): (params: {serviceName: string}) => Promise<dedicated.server.NetworkSpecifications>;
  /**
   * Servers statistics sent by RTM (Real Time Monitoring)
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics'): (params: {serviceName: string}) => Promise<dedicated.server.Rtm>;
  /**
   * chart operations
   * Retrieve RTM graph values
   */
  get(path: '/dedicated/server/{serviceName}/statistics/chart'): (params: {serviceName: string, period: dedicated.server.RtmChartPeriodEnum, type: dedicated.server.RtmChartTypeEnum}) => Promise<complexType.ChartReturn>;
  /**
   * connection operations
   * Get server opened connections
   */
  get(path: '/dedicated/server/{serviceName}/statistics/connection'): (params: {serviceName: string}) => Promise<dedicated.server.RtmConnection[]>;
  /**
   * cpu operations
   * Get server cpu informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/cpu'): (params: {serviceName: string}) => Promise<dedicated.server.RtmCpu>;
  /**
   * List the dedicated.server.RtmDisk objects
   * Server disks
   */
  get(path: '/dedicated/server/{serviceName}/statistics/disk'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Server disks informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}'): (params: {disk: string, serviceName: string}) => Promise<dedicated.server.RtmDisk>;
  /**
   * smart operations
   * Get disk smart informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}/smart'): (params: {disk: string, serviceName: string}) => Promise<dedicated.server.RtmDiskSmart>;
  /**
   * load operations
   * Get server load
   */
  get(path: '/dedicated/server/{serviceName}/statistics/load'): (params: {serviceName: string}) => Promise<dedicated.server.RtmLoad>;
  /**
   * memory operations
   * Get server memory informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/memory'): (params: {serviceName: string}) => Promise<dedicated.server.RtmMemory[]>;
  /**
   * motherboard operations
   * Get server motherboard hardware informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/motherboard'): (params: {serviceName: string}) => Promise<dedicated.server.RtmMotherboardHw>;
  /**
   * os operations
   * Get server os informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/os'): (params: {serviceName: string}) => Promise<dedicated.server.RtmOs>;
  /**
   * List the dedicated.server.RtmPartition objects
   * Server partitions
   */
  get(path: '/dedicated/server/{serviceName}/statistics/partition'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Server partitions informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}'): (params: {partition: string, serviceName: string}) => Promise<dedicated.server.RtmPartition>;
  /**
   * chart operations
   * Retrieve partition charts
   */
  get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}/chart'): (params: {partition: string, serviceName: string, period: dedicated.server.RtmChartPeriodEnum}) => Promise<complexType.ChartReturn>;
  /**
   * pci operations
   * Get server PCI devices informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/pci'): (params: {serviceName: string}) => Promise<dedicated.server.RtmPci[]>;
  /**
   * process operations
   * Get server process
   */
  get(path: '/dedicated/server/{serviceName}/statistics/process'): (params: {serviceName: string}) => Promise<dedicated.server.RtmCommandSize[]>;
  /**
   * List the dedicated.server.RtmRaid objects
   * Server raid informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Server raid informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}'): (params: {serviceName: string, unit: string}) => Promise<dedicated.server.RtmRaid>;
  /**
   * List the dedicated.server.RtmRaidVolume objects
   * Raid unit volumes
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume'): (params: {serviceName: string, unit: string}) => Promise<string[]>;
  /**
   * Server raid volume information
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}'): (params: {serviceName: string, unit: string, volume: string}) => Promise<dedicated.server.RtmRaidVolume>;
  /**
   * List the dedicated.server.RtmRaidVolumePort objects
   * Raid unit volume ports
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port'): (params: {serviceName: string, unit: string, volume: string}) => Promise<string[]>;
  /**
   * Server raid volume port informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}'): (params: {port: string, serviceName: string, unit: string, volume: string}) => Promise<dedicated.server.RtmRaidVolumePort>;
  /**
   * List the dedicated.server.Task objects
   * Dedicated server todos
   */
  get(path: '/dedicated/server/{serviceName}/task'): (params: {serviceName: string, function_?: dedicated.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Server tasks
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<dedicated.server.Task>;
  /**
   * List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects
   * List server VirtualNetworkInterfaces
   */
  get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface'): (params: {serviceName: string, enabled?: boolean, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, vrack?: string}) => Promise<string[]>;
  /**
   * Your VirtualNetworkInterface
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}'): (params: {serviceName: string, uuid: string}) => Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
  /**
   * Server informations
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}'): (params: {serviceName: string, bootId?: number, commercialRange?: string, datacenter?: dedicated.DatacenterEnum, ip?: string, linkSpeed?: number, monitoring?: boolean, name?: string, os?: string, professionalUse?: boolean, rack?: string, rescueMail?: string, reverse?: string, rootDevice?: string, serverId?: number, state?: dedicated.server.StateEnum, supportLevel?: dedicated.server.SupportLevelEnum}) => Promise<void>;
  /**
   * Secondary dns infos
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {domain: string, serviceName: string, creationDate?: string, dns?: string, ipMaster?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Your VirtualNetworkInterface
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}'): (params: {serviceName: string, uuid: string, enabled?: boolean, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, networkInterfaceController?: string[], serverName?: string, vrack?: string}) => Promise<void>;
  /**
   * authenticationSecret operations
   * Retrieve secret to connect to the server / application
   */
  post(path: '/dedicated/server/{serviceName}/authenticationSecret'): (params: {serviceName: string}) => Promise<dedicated.server.Access[]>;
  /**
   * configure operations
   * Configure SGX feature
   */
  post(path: '/dedicated/server/{serviceName}/biosSettings/sgx/configure'): (params: {serviceName: string, prmrr?: dedicated.server.BiosSettingsSgxPrmrrEnum, status?: dedicated.server.BiosSettingsSgxStatusEnum}) => Promise<dedicated.server.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/dedicated/server/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * start operations
   * Start an install
   */
  post(path: '/dedicated/server/{serviceName}/install/start'): (params: {serviceName: string, details?: dedicated.server.InstallCustom, partitionSchemeName?: string, templateName: string}) => Promise<dedicated.server.Task>;
  /**
   * reboot operations
   * Hard reboot this server
   */
  post(path: '/dedicated/server/{serviceName}/reboot'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * add a domain on secondary dns
   */
  post(path: '/dedicated/server/{serviceName}/secondaryDnsDomains'): (params: {serviceName: string, domain: string, ip?: string}) => Promise<void>;
  /**
   * hardDiskDrive operations
   * Ask for a broken HDD replacement
   */
  post(path: '/dedicated/server/{serviceName}/support/replace/hardDiskDrive'): (params: {serviceName: string, comment: string, disks: dedicated.server.SupportReplaceHddInfo[], inverse: boolean}) => Promise<support.NewMessageInfo>;
  /**
   * cancel operations
   * this action stop the task progression if it's possible
   */
  post(path: '/dedicated/server/{serviceName}/task/{taskId}/cancel'): (params: {serviceName: string, taskId: number}) => Promise<void>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/dedicated/server/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * disable operations
   * Disable this VirtualNetworkInterface
   */
  post(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable'): (params: {serviceName: string, uuid: string}) => Promise<dedicated.server.Task>;
  /**
   * enable operations
   * Enable this VirtualNetworkInterface
   */
  post(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable'): (params: {serviceName: string, uuid: string}) => Promise<dedicated.server.Task>;
  /**
   * Information about the options of a dedicated server
   * Release a given option
   */
  delete(path: '/dedicated/server/{serviceName}/option/{option}'): (params: {option: dedicated.server.OptionEnum, serviceName: string}) => Promise<void>;
  /**
   * Secondary dns infos
   * remove this domain
   */
  delete(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {domain: string, serviceName: string}) => Promise<void>;
}
