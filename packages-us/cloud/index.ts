import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cloud Models
 * Source: https://api.us.ovhcloud.com/1.0/cloud.json
 */
export namespace cloud {
    // type fullname: cloud.AccessTypeEnum
    export type AccessTypeEnum = "full" | "restricted"
    // interface fullName: cloud.AvailableRegion.AvailableRegion
    export interface AvailableRegion {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        name: string;
    }
    // interface fullName: cloud.Backup.Backup
    export interface Backup {
        backupName: string;
        createdAt: string;
        cron: string;
        executions?: cloud.Execution[];
        id: string;
        instanceId: string;
        name: string;
    }
    // interface fullName: cloud.Component.Component
    export interface Component {
        name: string;
        status: cloud.ServiceStatus;
    }
    // interface fullName: cloud.Execution.Execution
    export interface Execution {
        executedAt: string;
        state: cloud.ExecutionState;
        stateInfo: string;
    }
    // type fullname: cloud.ExecutionState
    export type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    // type fullname: cloud.IpCountryEnum
    export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    // interface fullName: cloud.Lab.Lab
    export interface Lab {
        id: string;
        name: string;
        status: cloud.LabStatus;
    }
    // interface fullName: cloud.LabAgreements.LabAgreements
    export interface LabAgreements {
        accepted: number[];
        toAccept: number[];
    }
    // type fullname: cloud.LabStatus
    export type LabStatus = "open" | "activating" | "activated" | "closed"
    // interface fullName: cloud.Operation.Operation
    export interface Operation {
        action: string;
        completedAt?: string;
        createdAt: string;
        id: string;
        progress: number;
        regions?: string[];
        startedAt?: string;
        status: cloud.OperationStatus;
    }
    // type fullname: cloud.OperationStatus
    export type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    // interface fullName: cloud.Project.Project
    export interface Project {
        access: cloud.AccessTypeEnum;
        creationDate: string;
        description?: string;
        expiration?: string;
        orderId?: number;
        planCode: string;
        project_id: string;
        status: cloud.project.ProjectStatus;
        unleash: boolean;
    }
    // interface fullName: cloud.Region.Region
    export interface Region {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        ipCountries: cloud.IpCountryEnum[];
        name: string;
        services: cloud.Component[];
        status: cloud.RegionStatus;
    }
    // type fullname: cloud.RegionContinent
    export type RegionContinent = "EU" | "NA" | "US" | "ASIA"
    // type fullname: cloud.RegionStatus
    export type RegionStatus = "UP" | "DOWN" | "MAINTENANCE"
    // type fullname: cloud.ServiceStatus
    export type ServiceStatus = "UP" | "DOWN"
    // interface fullName: cloud.Vrack.Vrack
    export interface Vrack {
        description: string;
        id: string;
        name: string;
    }
    export namespace authentication {
        // interface fullName: cloud.authentication.Catalog.Catalog
        export interface Catalog {
            endpoints: cloud.authentication.Endpoint[];
            id: string;
            type: string;
        }
        // interface fullName: cloud.authentication.Domain.Domain
        export interface Domain {
            name: string;
        }
        // interface fullName: cloud.authentication.Endpoint.Endpoint
        export interface Endpoint {
            id: string;
            interface: string;
            legacy_endpoint_id: string;
            region_id: string;
            service_id: string;
            url: string;
        }
        // interface fullName: cloud.authentication.OpenstackToken.OpenstackToken
        export interface OpenstackToken {
            catalog: cloud.authentication.Catalog[];
            expires_at: string;
            issued_at: string;
            methods: string[];
            project: cloud.authentication.TokenProject;
            roles: cloud.authentication.Role[];
            user: cloud.authentication.UserToken;
        }
        // interface fullName: cloud.authentication.Role.Role
        export interface Role {
            id: string;
            name: string;
        }
        // interface fullName: cloud.authentication.Token.Token
        export interface Token {
            'X-Auth-Token': string;
            token: cloud.authentication.OpenstackToken;
        }
        // interface fullName: cloud.authentication.TokenProject.TokenProject
        export interface TokenProject {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
        // interface fullName: cloud.authentication.UserToken.UserToken
        export interface UserToken {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
    }
    export namespace capabilities {
        // interface fullName: cloud.capabilities.Capability.Capability
        export interface Capability {
            enabled: boolean;
            name: string;
        }
    }
    export namespace flavor {
        // interface fullName: cloud.flavor.Flavor.Flavor
        export interface Flavor {
            available: boolean;
            capabilities: cloud.capabilities.Capability[];
            disk: number;
            id: string;
            inboundBandwidth?: number;
            name: string;
            osType: string;
            outboundBandwidth?: number;
            planCodes: cloud.flavor.FlavorPlanCodes;
            ram: number;
            region: string;
            type: string;
            vcpus: number;
        }
        // interface fullName: cloud.flavor.FlavorPlanCodes.FlavorPlanCodes
        export interface FlavorPlanCodes {
            hourly?: string;
            monthly?: string;
        }
    }
    export namespace image {
        // interface fullName: cloud.image.Image.Image
        export interface Image {
            creationDate: string;
            flavorType?: string;
            id: string;
            minDisk: number;
            minRam: number;
            name: string;
            planCode?: string;
            region: string;
            size: number;
            status: string;
            tags?: string[];
            type: string;
            user: string;
            visibility: string;
        }
        // type fullname: cloud.image.OSTypeEnum
        export type OSTypeEnum = "linux" | "bsd" | "windows"
    }
    export namespace instance {
        // interface fullName: cloud.instance.Access.Access
        export interface Access {
            login: string;
            password: string;
            type: string;
            url: string;
        }
        // interface fullName: cloud.instance.ApplicationAccess.ApplicationAccess
        export interface ApplicationAccess {
            accesses: cloud.instance.Access[];
            status: cloud.instance.ApplicationAccessStateEnum;
        }
        // type fullname: cloud.instance.ApplicationAccessStateEnum
        export type ApplicationAccessStateEnum = "installing" | "ok"
        // interface fullName: cloud.instance.AutoBackup.AutoBackup
        export interface AutoBackup {
            cron: string;
            rotation: number;
        }
        // interface fullName: cloud.instance.Instance.Instance
        export interface Instance {
            created: string;
            flavorId: string;
            id: string;
            imageId: string;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            operationIds: string[];
            planCode?: string;
            region: string;
            sshKeyId?: string;
            status: cloud.instance.InstanceStatusEnum;
        }
        // interface fullName: cloud.instance.InstanceDetail.InstanceDetail
        export interface InstanceDetail {
            created: string;
            flavor: cloud.flavor.Flavor;
            id: string;
            image: cloud.image.Image;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            operationIds: string[];
            planCode?: string;
            region: string;
            sshKey?: cloud.sshkey.SshKeyDetail;
            status: cloud.instance.InstanceStatusEnum;
        }
        // interface fullName: cloud.instance.InstanceMetrics.InstanceMetrics
        export interface InstanceMetrics {
            unit: string;
            values: cloud.instance.InstanceMetricsValue[];
        }
        // interface fullName: cloud.instance.InstanceMetricsValue.InstanceMetricsValue
        export interface InstanceMetricsValue {
            timestamp: number;
            value: number;
        }
        // type fullname: cloud.instance.InstanceStatusEnum
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING"
        // interface fullName: cloud.instance.InstanceVnc.InstanceVnc
        export interface InstanceVnc {
            type: string;
            url: string;
        }
        // interface fullName: cloud.instance.IpAddress.IpAddress
        export interface IpAddress {
            gatewayIp?: string;
            ip: string;
            networkId: string;
            type: string;
            version: number;
        }
        // type fullname: cloud.instance.MetricsPeriod
        export type MetricsPeriod = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        // type fullname: cloud.instance.MetricsType
        export type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        // interface fullName: cloud.instance.MonthlyBilling.MonthlyBilling
        export interface MonthlyBilling {
            since: string;
            status: cloud.instance.MonthlyBillingStatusEnum;
        }
        // type fullname: cloud.instance.MonthlyBillingStatusEnum
        export type MonthlyBillingStatusEnum = "activationPending" | "ok"
        // interface fullName: cloud.instance.MonthlyInstanceBulkParams.MonthlyInstanceBulkParams
        export interface MonthlyInstanceBulkParams {
            instanceId: string;
            region: string;
        }
        // interface fullName: cloud.instance.NetworkBulkParams.NetworkBulkParams
        export interface NetworkBulkParams {
            networkId: string;
        }
        // interface fullName: cloud.instance.NetworkParams.NetworkParams
        export interface NetworkParams {
            ip?: string;
            networkId: string;
        }
        // type fullname: cloud.instance.RebootTypeEnum
        export type RebootTypeEnum = "soft" | "hard"
        // interface fullName: cloud.instance.RescueAdminPassword.RescueAdminPassword
        export interface RescueAdminPassword {
            adminPassword?: string;
        }
    }
    export namespace instanceInterface {
        // interface fullName: cloud.instanceInterface.FixedIp.FixedIp
        export interface FixedIp {
            ip: string;
            subnetId: string;
        }
        // interface fullName: cloud.instanceInterface.Interface.Interface
        export interface Interface {
            fixedIps: cloud.instanceInterface.FixedIp[];
            id: string;
            macAddress: string;
            networkId: string;
            state: string;
            type: string;
        }
    }
    export namespace instancegroup {
        // interface fullName: cloud.instancegroup.InstanceGroup.InstanceGroup
        export interface InstanceGroup {
            id: string;
            instance_ids: string[];
            name: string;
            region: string;
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        // type fullname: cloud.instancegroup.InstanceGroupTypeEnum
        export type InstanceGroupTypeEnum = "affinity" | "anti-affinity"
    }
    export namespace ip {
        // interface fullName: cloud.ip.CloudIp.CloudIp
        export interface CloudIp {
            id: string;
            ip?: string;
            status: cloud.ip.IpStatusEnum;
            type: string;
        }
        // interface fullName: cloud.ip.FailoverIp.FailoverIp
        export interface FailoverIp {
            block?: string;
            continentCode?: string;
            geoloc?: string;
            id: string;
            ip?: string;
            progress: number;
            routedTo: string;
            status: cloud.ip.IpStatusEnum;
            subType: cloud.ip.IpSubTypeEnum;
        }
        // type fullname: cloud.ip.IpStatusEnum
        export type IpStatusEnum = "ok" | "operationPending"
        // type fullname: cloud.ip.IpSubTypeEnum
        export type IpSubTypeEnum = "cloud" | "ovh"
    }
    export namespace migration {
        // interface fullName: cloud.migration.Migration.Migration
        export interface Migration {
            date: string;
            migrationId: string;
            resourceId: string;
            resourceType: cloud.migration.ResourceTypeEnum;
        }
        // type fullname: cloud.migration.ResourceTypeEnum
        export type ResourceTypeEnum = "instance"
    }
    export namespace network {
        // interface fullName: cloud.network.IPPool.IPPool
        export interface IPPool {
            dhcp: boolean;
            end: string;
            network: string;
            region: string;
            start: string;
        }
        // interface fullName: cloud.network.Network.Network
        export interface Network {
            id: string;
            name: string;
            regions: cloud.network.NetworkRegion[];
            status: cloud.network.NetworkStatusEnum;
            type?: cloud.network.NetworkTypeEnum;
            vlanId: number;
        }
        // interface fullName: cloud.network.NetworkRegion.NetworkRegion
        export interface NetworkRegion {
            region: string;
            status: cloud.network.NetworkRegionStatusEnum;
        }
        // type fullname: cloud.network.NetworkRegionStatusEnum
        export type NetworkRegionStatusEnum = "ACTIVE" | "BUILDING"
        // type fullname: cloud.network.NetworkStatusEnum
        export type NetworkStatusEnum = "BUILDING" | "ACTIVE" | "DELETING"
        // type fullname: cloud.network.NetworkTypeEnum
        export type NetworkTypeEnum = "public" | "private"
        // interface fullName: cloud.network.Subnet.Subnet
        export interface Subnet {
            cidr: string;
            gatewayIp?: string;
            id: string;
            ipPools: cloud.network.IPPool[];
        }
    }
    export namespace openstackClient {
        // interface fullName: cloud.openstackClient.Profile.Profile
        export interface Profile {
            name: string;
        }
        // interface fullName: cloud.openstackClient.Session.Session
        export interface Session {
            expires: string;
            id: string;
            profile: cloud.openstackClient.Profile;
            websocket: string;
        }
    }
    export namespace order {
        // interface fullName: cloud.order.Order.Order
        export interface Order {
            date: string;
            orderId: number;
            planCode: string;
            serviceName?: string;
            status: cloud.order.StatusEnum;
        }
        // type fullname: cloud.order.StatusEnum
        export type StatusEnum = "unpaid" | "delivering" | "delivered" | "unknown"
    }
    export namespace project {
        // type fullname: cloud.project.ProjectStatus
        export type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended"
    }
    export namespace quota {
        // interface fullName: cloud.quota.AllowedQuota.AllowedQuota
        export interface AllowedQuota {
            compute: cloud.quota.ComputeQuota;
            name: string;
            network: cloud.quota.NetworkQuota;
            volume: cloud.quota.VolumeQuota;
        }
        // interface fullName: cloud.quota.ComputeQuota.ComputeQuota
        export interface ComputeQuota {
            cores: number;
            instances: number;
            ram: number;
        }
        // interface fullName: cloud.quota.InstanceUsageQuotas.InstanceUsageQuotas
        export interface InstanceUsageQuotas {
            maxCores: number;
            maxInstances: number;
            maxRam: number;
            usedCores: number;
            usedInstances: number;
            usedRAM: number;
        }
        // interface fullName: cloud.quota.KeypairQuotas.KeypairQuotas
        export interface KeypairQuotas {
            maxCount: number;
        }
        // interface fullName: cloud.quota.NetworkQuota.NetworkQuota
        export interface NetworkQuota {
            networks: number;
            ports: number;
            subnets: number;
        }
        // interface fullName: cloud.quota.Quotas.Quotas
        export interface Quotas {
            instance?: cloud.quota.InstanceUsageQuotas;
            keypair?: cloud.quota.KeypairQuotas;
            region: string;
            volume?: cloud.quota.VolumeUsageQuotas;
        }
        // interface fullName: cloud.quota.VolumeQuota.VolumeQuota
        export interface VolumeQuota {
            gigabytes: number;
            snapshots: number;
            volumes: number;
        }
        // interface fullName: cloud.quota.VolumeUsageQuotas.VolumeUsageQuotas
        export interface VolumeUsageQuotas {
            maxGigabytes: number;
            usedGigabytes: number;
            volumeCount: number;
        }
    }
    export namespace role {
        // interface fullName: cloud.role.Permission.Permission
        export interface Permission {
            label: string;
            roles: string[];
        }
        // interface fullName: cloud.role.Role.Role
        export interface Role {
            description: string;
            id: string;
            name: string;
            permissions: string[];
        }
        // interface fullName: cloud.role.Roles.Roles
        export interface Roles {
            roles: cloud.role.Role[];
            services: cloud.role.Service[];
        }
        // interface fullName: cloud.role.Service.Service
        export interface Service {
            name: string;
            permissions: cloud.role.Permission[];
        }
    }
    export namespace sshkey {
        // interface fullName: cloud.sshkey.SshKey.SshKey
        export interface SshKey {
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
        // interface fullName: cloud.sshkey.SshKeyDetail.SshKeyDetail
        export interface SshKeyDetail {
            fingerPrint: string;
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
    }
    export namespace stack {
        // interface fullName: cloud.stack.Content.Content
        export interface Content {
            content: string;
            type: string;
        }
        // interface fullName: cloud.stack.InstructionGuide.InstructionGuide
        export interface InstructionGuide {
            content: cloud.stack.Content[];
            language: string;
            sections: cloud.stack.Section[];
            title: string;
        }
        // interface fullName: cloud.stack.Section.Section
        export interface Section {
            content: cloud.stack.Content[];
            steps: cloud.stack.Step[];
            title: string;
        }
        // interface fullName: cloud.stack.Stack.Stack
        export interface Stack {
            commit: string;
            description: string;
            gitRepository: string;
            instructions: cloud.stack.InstructionGuide[];
            name: string;
            release: string;
            uuid: string;
        }
        // interface fullName: cloud.stack.Step.Step
        export interface Step {
            content: cloud.stack.Content[];
            title: string;
        }
    }
    export namespace storage {
        // interface fullName: cloud.storage.Container.Container
        export interface Container {
            id: string;
            name: string;
            region: string;
            storedBytes: number;
            storedObjects: number;
        }
        // interface fullName: cloud.storage.ContainerAccess.ContainerAccess
        export interface ContainerAccess {
            endpoints: cloud.storage.Endpoint[];
            token: string;
        }
        // interface fullName: cloud.storage.ContainerDetail.ContainerDetail
        export interface ContainerDetail {
            archive: boolean;
            containerType: cloud.storage.TypeEnum;
            cors: string[];
            name: string;
            objects: cloud.storage.ContainerObject[];
            public: boolean;
            region: string;
            staticUrl: string;
            storedBytes: number;
            storedObjects: number;
        }
        // interface fullName: cloud.storage.ContainerObject.ContainerObject
        export interface ContainerObject {
            contentType: string;
            lastModified: string;
            name: string;
            retrievalDelay: number;
            retrievalState: cloud.storage.RetrievalStateEnum;
            size: number;
        }
        // interface fullName: cloud.storage.ContainerObjectTempURL.ContainerObjectTempURL
        export interface ContainerObjectTempURL {
            expirationDate: string;
            getURL: string;
        }
        // interface fullName: cloud.storage.Endpoint.Endpoint
        export interface Endpoint {
            region: string;
            url: string;
        }
        // type fullname: cloud.storage.RetrievalStateEnum
        export type RetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        // type fullname: cloud.storage.RightEnum
        export type RightEnum = "all" | "read" | "write"
        // type fullname: cloud.storage.TypeEnum
        export type TypeEnum = "static" | "public" | "private"
    }
    export namespace user {
        // interface fullName: cloud.user.Openrc.Openrc
        export interface Openrc {
            content: string;
        }
        // type fullname: cloud.user.OpenrcVersionEnum
        export type OpenrcVersionEnum = "v2.0" | "v3"
        // interface fullName: cloud.user.Rclone.Rclone
        export interface Rclone {
            content: string;
        }
        // type fullname: cloud.user.RoleEnum
        export type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator"
        // interface fullName: cloud.user.User.User
        export interface User {
            creationDate: string;
            description: string;
            id: number;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        // interface fullName: cloud.user.UserDetail.UserDetail
        export interface UserDetail {
            creationDate: string;
            description: string;
            id: number;
            password: string;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        // type fullname: cloud.user.UserStatusEnum
        export type UserStatusEnum = "creating" | "ok" | "deleting" | "deleted"
    }
    export namespace volume {
        // interface fullName: cloud.volume.Snapshot.Snapshot
        export interface Snapshot {
            creationDate: string;
            description: string;
            id: string;
            name: string;
            planCode?: string;
            region: string;
            size: number;
            status: cloud.volume.SnapshotStatusEnum;
            volumeId: string;
        }
        // type fullname: cloud.volume.SnapshotStatusEnum
        export type SnapshotStatusEnum = "creating" | "available" | "deleting" | "error" | "error_deleting"
        // interface fullName: cloud.volume.Volume.Volume
        export interface Volume {
            attachedTo: string[];
            bootable: boolean;
            creationDate: string;
            description: string;
            id: string;
            name: string;
            planCode?: string;
            region: string;
            size: number;
            status: string;
            type: cloud.volume.VolumeTypeEnum;
        }
        // type fullname: cloud.volume.VolumeTypeEnum
        export type VolumeTypeEnum = "classic" | "high-speed"
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

/**
 * END API /cloud Models
 */
export function proxyCloud(ovhEngine: OvhRequestable): Cloud {
    return buildOvhProxy(ovhEngine, '/cloud');
}
export default proxyCloud;
/**
 * Api Proxy model
 */// Apis harmony
// path /cloud
export interface Cloud{
    order: {
        // GET /cloud/order
        $get(params?: {planCode?: string}): Promise<cloud.order.Order[]>;
    }
    project: {
        // GET /cloud/project
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /cloud/project/{serviceName}
            $get(): Promise<cloud.Project>;
            // PUT /cloud/project/{serviceName}
            $put(params?: {access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatus, unleash?: boolean}): Promise<void>;
            activateMonthlyBilling: {
                // POST /cloud/project/{serviceName}/activateMonthlyBilling
                $post(params: {instances: cloud.instance.MonthlyInstanceBulkParams[]}): Promise<cloud.instance.InstanceDetail[]>;
            }
            confirmTermination: {
                // POST /cloud/project/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            flavor: {
                // GET /cloud/project/{serviceName}/flavor
                $get(params?: {region?: string}): Promise<cloud.flavor.Flavor[]>;
                $(flavorId: string): {
                    // GET /cloud/project/{serviceName}/flavor/{flavorId}
                    $get(): Promise<cloud.flavor.Flavor>;
                };
            }
            image: {
                // GET /cloud/project/{serviceName}/image
                $get(params?: {flavorType?: string, osType?: cloud.image.OSTypeEnum, region?: string}): Promise<cloud.image.Image[]>;
                $(imageId: string): {
                    // GET /cloud/project/{serviceName}/image/{imageId}
                    $get(): Promise<cloud.image.Image>;
                };
            }
            instance: {
                // GET /cloud/project/{serviceName}/instance
                $get(params?: {region?: string}): Promise<cloud.instance.Instance[]>;
                // POST /cloud/project/{serviceName}/instance
                $post(params: {autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.InstanceDetail>;
                bulk: {
                    // POST /cloud/project/{serviceName}/instance/bulk
                    $post(params: {autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.Instance[]>;
                }
                group: {
                    // GET /cloud/project/{serviceName}/instance/group
                    $get(params?: {region?: string}): Promise<cloud.instancegroup.InstanceGroup[]>;
                    // POST /cloud/project/{serviceName}/instance/group
                    $post(params: {name: string, region: string, type: cloud.instancegroup.InstanceGroupTypeEnum}): Promise<cloud.instancegroup.InstanceGroup>;
                    $(groupId: string): {
                        // DELETE /cloud/project/{serviceName}/instance/group/{groupId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/instance/group/{groupId}
                        $get(params?: {region?: string}): Promise<cloud.instancegroup.InstanceGroup>;
                    };
                }
                $(instanceId: string): {
                    // DELETE /cloud/project/{serviceName}/instance/{instanceId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/instance/{instanceId}
                    $get(): Promise<cloud.instance.InstanceDetail>;
                    // PUT /cloud/project/{serviceName}/instance/{instanceId}
                    $put(params: {instanceName: string}): Promise<void>;
                    activeMonthlyBilling: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
                        $post(): Promise<cloud.instance.InstanceDetail>;
                    }
                    applicationAccess: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
                        $post(): Promise<cloud.instance.ApplicationAccess>;
                    }
                    interface: {
                        // GET /cloud/project/{serviceName}/instance/{instanceId}/interface
                        $get(): Promise<cloud.instanceInterface.Interface[]>;
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/interface
                        $post(params: {ip?: string, networkId: string}): Promise<cloud.instanceInterface.Interface>;
                        $(interfaceId: string): {
                            // DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                            $get(): Promise<cloud.instanceInterface.Interface>;
                        };
                    }
                    monitoring: {
                        // GET /cloud/project/{serviceName}/instance/{instanceId}/monitoring
                        $get(params: {period: cloud.instance.MetricsPeriod, type: cloud.instance.MetricsType}): Promise<cloud.instance.InstanceMetrics>;
                    }
                    reboot: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/reboot
                        $post(params: {type: cloud.instance.RebootTypeEnum}): Promise<void>;
                    }
                    reinstall: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/reinstall
                        $post(params: {imageId: string}): Promise<cloud.instance.InstanceDetail>;
                    }
                    rescueMode: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
                        $post(params: {imageId?: string, rescue: boolean}): Promise<cloud.instance.RescueAdminPassword>;
                    }
                    resize: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/resize
                        $post(params: {flavorId: string}): Promise<cloud.instance.InstanceDetail>;
                    }
                    resume: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/resume
                        $post(): Promise<void>;
                    }
                    snapshot: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/snapshot
                        $post(params: {snapshotName: string}): Promise<void>;
                    }
                    start: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/start
                        $post(): Promise<void>;
                    }
                    stop: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/stop
                        $post(): Promise<void>;
                    }
                    vnc: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/vnc
                        $post(): Promise<cloud.instance.InstanceVnc>;
                    }
                };
            }
            ip: {
                // GET /cloud/project/{serviceName}/ip
                $get(): Promise<cloud.ip.CloudIp[]>;
                failover: {
                    // GET /cloud/project/{serviceName}/ip/failover
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    $(id: string): {
                        // GET /cloud/project/{serviceName}/ip/failover/{id}
                        $get(): Promise<cloud.ip.FailoverIp>;
                        attach: {
                            // POST /cloud/project/{serviceName}/ip/failover/{id}/attach
                            $post(params: {instanceId: string}): Promise<cloud.ip.FailoverIp>;
                        }
                    };
                }
            }
            lab: {
                // GET /cloud/project/{serviceName}/lab
                $get(): Promise<cloud.Lab[]>;
                $(labId: string): {
                    // GET /cloud/project/{serviceName}/lab/{labId}
                    $get(): Promise<cloud.Lab>;
                    // POST /cloud/project/{serviceName}/lab/{labId}
                    $post(): Promise<cloud.Operation>;
                    agreement: {
                        // GET /cloud/project/{serviceName}/lab/{labId}/agreement
                        $get(): Promise<cloud.LabAgreements>;
                    }
                };
            }
            migration: {
                // GET /cloud/project/{serviceName}/migration
                $get(): Promise<cloud.migration.Migration[]>;
                $(migrationId: string): {
                    // GET /cloud/project/{serviceName}/migration/{migrationId}
                    $get(): Promise<cloud.migration.Migration>;
                    // PUT /cloud/project/{serviceName}/migration/{migrationId}
                    $put(params: {date: string}): Promise<cloud.migration.Migration>;
                };
            }
            network: {
                private: {
                    // GET /cloud/project/{serviceName}/network/private
                    $get(): Promise<cloud.network.Network[]>;
                    // POST /cloud/project/{serviceName}/network/private
                    $post(params: {name: string, regions?: string[], vlanId?: number}): Promise<cloud.network.Network>;
                    $(networkId: string): {
                        // DELETE /cloud/project/{serviceName}/network/private/{networkId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/network/private/{networkId}
                        $get(): Promise<cloud.network.Network>;
                        // PUT /cloud/project/{serviceName}/network/private/{networkId}
                        $put(params: {name: string}): Promise<void>;
                        region: {
                            // POST /cloud/project/{serviceName}/network/private/{networkId}/region
                            $post(params: {region: string}): Promise<cloud.network.Network>;
                        }
                        subnet: {
                            // GET /cloud/project/{serviceName}/network/private/{networkId}/subnet
                            $get(): Promise<cloud.network.Subnet[]>;
                            // POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
                            $post(params: {dhcp: boolean, end: string, network: string, noGateway: boolean, region: string, start: string}): Promise<cloud.network.Subnet>;
                            $(subnetId: string): {
                                // DELETE /cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}
                                $delete(): Promise<void>;
                            };
                        }
                    };
                }
                public: {
                    // GET /cloud/project/{serviceName}/network/public
                    $get(): Promise<cloud.network.Network[]>;
                }
            }
            openstackClient: {
                // POST /cloud/project/{serviceName}/openstackClient
                $post(): Promise<cloud.openstackClient.Session>;
            }
            operation: {
                // GET /cloud/project/{serviceName}/operation
                $get(): Promise<cloud.Operation[]>;
                $(operationId: string): {
                    // GET /cloud/project/{serviceName}/operation/{operationId}
                    $get(): Promise<cloud.Operation>;
                };
            }
            quota: {
                // GET /cloud/project/{serviceName}/quota
                $get(): Promise<cloud.quota.Quotas[]>;
            }
            region: {
                // GET /cloud/project/{serviceName}/region
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/region
                $post(params: {region: string}): Promise<cloud.Region>;
                $(regionName: string): {
                    // GET /cloud/project/{serviceName}/region/{regionName}
                    $get(): Promise<cloud.Region>;
                    quota: {
                        // GET /cloud/project/{serviceName}/region/{regionName}/quota
                        $get(): Promise<cloud.quota.Quotas>;
                        // POST /cloud/project/{serviceName}/region/{regionName}/quota
                        $post(params: {name: string}): Promise<cloud.Operation>;
                        allowed: {
                            // GET /cloud/project/{serviceName}/region/{regionName}/quota/allowed
                            $get(): Promise<cloud.quota.AllowedQuota[]>;
                        }
                    }
                };
            }
            regionAvailable: {
                // GET /cloud/project/{serviceName}/regionAvailable
                $get(): Promise<cloud.AvailableRegion[]>;
            }
            role: {
                // GET /cloud/project/{serviceName}/role
                $get(): Promise<cloud.role.Roles>;
            }
            serviceInfos: {
                // GET /cloud/project/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cloud/project/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            snapshot: {
                // GET /cloud/project/{serviceName}/snapshot
                $get(params?: {flavorType?: string, region?: string}): Promise<cloud.image.Image[]>;
                $(imageId: string): {
                    // DELETE /cloud/project/{serviceName}/snapshot/{imageId}
                    $delete(): Promise<cloud.image.Image>;
                    // GET /cloud/project/{serviceName}/snapshot/{imageId}
                    $get(): Promise<cloud.image.Image>;
                };
            }
            sshkey: {
                // GET /cloud/project/{serviceName}/sshkey
                $get(params?: {region?: string}): Promise<cloud.sshkey.SshKey[]>;
                // POST /cloud/project/{serviceName}/sshkey
                $post(params: {name: string, publicKey: string, region?: string}): Promise<cloud.sshkey.SshKeyDetail>;
                $(keyId: string): {
                    // DELETE /cloud/project/{serviceName}/sshkey/{keyId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/sshkey/{keyId}
                    $get(): Promise<cloud.sshkey.SshKeyDetail>;
                };
            }
            stack: {
                // GET /cloud/project/{serviceName}/stack
                $get(): Promise<cloud.stack.Stack[]>;
                $(stackId: string): {
                    // GET /cloud/project/{serviceName}/stack/{stackId}
                    $get(): Promise<cloud.stack.Stack>;
                    client: {
                        // POST /cloud/project/{serviceName}/stack/{stackId}/client
                        $post(): Promise<cloud.openstackClient.Session>;
                    }
                };
            }
            storage: {
                // GET /cloud/project/{serviceName}/storage
                $get(): Promise<cloud.storage.Container[]>;
                // POST /cloud/project/{serviceName}/storage
                $post(params: {archive: boolean, containerName: string, region: string}): Promise<cloud.storage.Container>;
                access: {
                    // GET /cloud/project/{serviceName}/storage/access
                    $get(): Promise<cloud.storage.ContainerAccess>;
                    // POST /cloud/project/{serviceName}/storage/access
                    $post(): Promise<cloud.storage.ContainerAccess>;
                }
                $(containerId: string): {
                    // DELETE /cloud/project/{serviceName}/storage/{containerId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/storage/{containerId}
                    $get(params?: {noObjects?: boolean}): Promise<cloud.storage.ContainerDetail>;
                    // PUT /cloud/project/{serviceName}/storage/{containerId}
                    $put(params?: {containerType?: cloud.storage.TypeEnum}): Promise<void>;
                    cors: {
                        // DELETE /cloud/project/{serviceName}/storage/{containerId}/cors
                        $delete(params: {origin: string}): Promise<void>;
                        // POST /cloud/project/{serviceName}/storage/{containerId}/cors
                        $post(params: {origin: string}): Promise<void>;
                    }
                    publicUrl: {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/publicUrl
                        $post(params: {expirationDate: string, objectName: string}): Promise<cloud.storage.ContainerObjectTempURL>;
                    }
                    static: {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/static
                        $post(): Promise<void>;
                    }
                    user: {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/user
                        $post(params: {description?: string, right: cloud.storage.RightEnum}): Promise<cloud.user.UserDetail>;
                    }
                };
            }
            terminate: {
                // POST /cloud/project/{serviceName}/terminate
                $post(): Promise<string>;
            }
            user: {
                // GET /cloud/project/{serviceName}/user
                $get(): Promise<cloud.user.User[]>;
                // POST /cloud/project/{serviceName}/user
                $post(params?: {description?: string, role?: cloud.user.RoleEnum, roles?: cloud.user.RoleEnum[]}): Promise<cloud.user.UserDetail>;
                $(userId: number): {
                    // DELETE /cloud/project/{serviceName}/user/{userId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/user/{userId}
                    $get(): Promise<cloud.user.User>;
                    openrc: {
                        // GET /cloud/project/{serviceName}/user/{userId}/openrc
                        $get(params: {region: string, version?: cloud.user.OpenrcVersionEnum}): Promise<cloud.user.Openrc>;
                    }
                    rclone: {
                        // GET /cloud/project/{serviceName}/user/{userId}/rclone
                        $get(params: {region: string}): Promise<cloud.user.Rclone>;
                    }
                    regeneratePassword: {
                        // POST /cloud/project/{serviceName}/user/{userId}/regeneratePassword
                        $post(): Promise<cloud.user.UserDetail>;
                    }
                    role: {
                        // GET /cloud/project/{serviceName}/user/{userId}/role
                        $get(): Promise<cloud.role.Role[]>;
                        // POST /cloud/project/{serviceName}/user/{userId}/role
                        $post(params: {roleId: string}): Promise<cloud.user.UserDetail>;
                        // PUT /cloud/project/{serviceName}/user/{userId}/role
                        $put(params: {rolesIds: string[]}): Promise<cloud.user.UserDetail>;
                        $(roleId: string): {
                            // DELETE /cloud/project/{serviceName}/user/{userId}/role/{roleId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/user/{userId}/role/{roleId}
                            $get(): Promise<cloud.role.Role>;
                        };
                    }
                    token: {
                        // POST /cloud/project/{serviceName}/user/{userId}/token
                        $post(params: {password: string}): Promise<cloud.authentication.Token>;
                    }
                };
            }
            volume: {
                // GET /cloud/project/{serviceName}/volume
                $get(params?: {region?: string}): Promise<cloud.volume.Volume[]>;
                // POST /cloud/project/{serviceName}/volume
                $post(params: {description?: string, imageId?: string, name?: string, region: string, size: number, snapshotId?: string, type: cloud.volume.VolumeTypeEnum}): Promise<cloud.volume.Volume>;
                snapshot: {
                    // GET /cloud/project/{serviceName}/volume/snapshot
                    $get(params?: {region?: string}): Promise<cloud.volume.Snapshot[]>;
                    $(snapshotId: string): {
                        // DELETE /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                        $get(): Promise<cloud.volume.Snapshot>;
                    };
                }
                $(volumeId: string): {
                    // DELETE /cloud/project/{serviceName}/volume/{volumeId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/volume/{volumeId}
                    $get(): Promise<cloud.volume.Volume>;
                    // PUT /cloud/project/{serviceName}/volume/{volumeId}
                    $put(params?: {description?: string, name?: string}): Promise<cloud.volume.Volume>;
                    attach: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/attach
                        $post(params: {instanceId: string}): Promise<cloud.volume.Volume>;
                    }
                    detach: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/detach
                        $post(params: {instanceId: string}): Promise<cloud.volume.Volume>;
                    }
                    snapshot: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/snapshot
                        $post(params?: {description?: string, name?: string}): Promise<cloud.volume.Snapshot>;
                    }
                    upsize: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/upsize
                        $post(params: {size: number}): Promise<cloud.volume.Volume>;
                    }
                };
            }
            vrack: {
                // GET /cloud/project/{serviceName}/vrack
                $get(): Promise<cloud.Vrack>;
                // POST /cloud/project/{serviceName}/vrack
                $post(): Promise<cloud.Operation>;
            }
        };
    }
// Api
  /**
   * Missing description
   * Get all cloud pending orders
   */
  get(path: '/cloud/order'): (params?: {planCode?: string}) => Promise<cloud.order.Order[]>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  get(path: '/cloud/project'): () => Promise<string[]>;
  /**
   * Project
   * Get this object properties
   */
  get(path: '/cloud/project/{serviceName}'): (params: {serviceName: string}) => Promise<cloud.Project>;
  /**
   * Missing description
   * Get flavors
   */
  get(path: '/cloud/project/{serviceName}/flavor'): (params: {serviceName: string, region?: string}) => Promise<cloud.flavor.Flavor[]>;
  /**
   * Missing description
   * Get flavor
   */
  get(path: '/cloud/project/{serviceName}/flavor/{flavorId}'): (params: {flavorId: string, serviceName: string}) => Promise<cloud.flavor.Flavor>;
  /**
   * Missing description
   * Get images
   */
  get(path: '/cloud/project/{serviceName}/image'): (params: {serviceName: string, flavorType?: string, osType?: cloud.image.OSTypeEnum, region?: string}) => Promise<cloud.image.Image[]>;
  /**
   * Missing description
   * Get image
   */
  get(path: '/cloud/project/{serviceName}/image/{imageId}'): (params: {imageId: string, serviceName: string}) => Promise<cloud.image.Image>;
  /**
   * Missing description
   * Get instances
   */
  get(path: '/cloud/project/{serviceName}/instance'): (params: {serviceName: string, region?: string}) => Promise<cloud.instance.Instance[]>;
  /**
   * Missing description
   * Get instance
   */
  get(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {instanceId: string, serviceName: string}) => Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Get interfaces
   */
  get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface'): (params: {instanceId: string, serviceName: string}) => Promise<cloud.instanceInterface.Interface[]>;
  /**
   * Missing description
   * Get interface
   */
  get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}'): (params: {instanceId: string, interfaceId: string, serviceName: string}) => Promise<cloud.instanceInterface.Interface>;
  /**
   * Missing description
   * Return many statistics about the virtual machine for a given period
   */
  get(path: '/cloud/project/{serviceName}/instance/{instanceId}/monitoring'): (params: {instanceId: string, serviceName: string, period: cloud.instance.MetricsPeriod, type: cloud.instance.MetricsType}) => Promise<cloud.instance.InstanceMetrics>;
  /**
   * Missing description
   * Get the detail of a group
   */
  get(path: '/cloud/project/{serviceName}/instance/group'): (params: {serviceName: string, region?: string}) => Promise<cloud.instancegroup.InstanceGroup[]>;
  /**
   * Missing description
   * Get all groups
   */
  get(path: '/cloud/project/{serviceName}/instance/group/{groupId}'): (params: {groupId: string, serviceName: string, region?: string}) => Promise<cloud.instancegroup.InstanceGroup>;
  /**
   * Missing description
   * Get ips
   */
  get(path: '/cloud/project/{serviceName}/ip'): (params: {serviceName: string}) => Promise<cloud.ip.CloudIp[]>;
  /**
   * Missing description
   * Get failover ips
   */
  get(path: '/cloud/project/{serviceName}/ip/failover'): (params: {serviceName: string}) => Promise<cloud.ip.FailoverIp[]>;
  /**
   * Missing description
   * Get failover ip
   */
  get(path: '/cloud/project/{serviceName}/ip/failover/{id}'): (params: {id: string, serviceName: string}) => Promise<cloud.ip.FailoverIp>;
  /**
   * Manage labs on your Cloud Project
   * List available public cloud labs
   */
  get(path: '/cloud/project/{serviceName}/lab'): (params: {serviceName: string}) => Promise<cloud.Lab[]>;
  /**
   * Manage a lab
   * Get details of a public cloud lab
   */
  get(path: '/cloud/project/{serviceName}/lab/{labId}'): (params: {labId: string, serviceName: string}) => Promise<cloud.Lab>;
  /**
   * Manage lab agreements
   * List required agreements to active this lab
   */
  get(path: '/cloud/project/{serviceName}/lab/{labId}/agreement'): (params: {labId: string, serviceName: string}) => Promise<cloud.LabAgreements>;
  /**
   * Missing description
   * Get planned migrations
   */
  get(path: '/cloud/project/{serviceName}/migration'): (params: {serviceName: string}) => Promise<cloud.migration.Migration[]>;
  /**
   * Missing description
   * Get planned migration
   */
  get(path: '/cloud/project/{serviceName}/migration/{migrationId}'): (params: {migrationId: string, serviceName: string}) => Promise<cloud.migration.Migration>;
  /**
   * Missing description
   * Get private networks
   */
  get(path: '/cloud/project/{serviceName}/network/private'): (params: {serviceName: string}) => Promise<cloud.network.Network[]>;
  /**
   * Missing description
   * Get private network
   */
  get(path: '/cloud/project/{serviceName}/network/private/{networkId}'): (params: {networkId: string, serviceName: string}) => Promise<cloud.network.Network>;
  /**
   * Missing description
   * Get network subnets
   */
  get(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet'): (params: {networkId: string, serviceName: string}) => Promise<cloud.network.Subnet[]>;
  /**
   * Missing description
   * Get public networks
   */
  get(path: '/cloud/project/{serviceName}/network/public'): (params: {serviceName: string}) => Promise<cloud.network.Network[]>;
  /**
   * Manage the operations on your Cloud Project
   * List your operations
   */
  get(path: '/cloud/project/{serviceName}/operation'): (params: {serviceName: string}) => Promise<cloud.Operation[]>;
  /**
   * Manage one of your operations
   * Get information about one operation
   */
  get(path: '/cloud/project/{serviceName}/operation/{operationId}'): (params: {operationId: string, serviceName: string}) => Promise<cloud.Operation>;
  /**
   * List your quota
   * List quotas
   */
  get(path: '/cloud/project/{serviceName}/quota'): (params: {serviceName: string}) => Promise<cloud.quota.Quotas[]>;
  /**
   * Manage your regions
   * List your regions
   */
  get(path: '/cloud/project/{serviceName}/region'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Manage one of your region
   * Get information about your region
   */
  get(path: '/cloud/project/{serviceName}/region/{regionName}'): (params: {regionName: string, serviceName: string}) => Promise<cloud.Region>;
  /**
   * Consult quotas
   * List quotas
   */
  get(path: '/cloud/project/{serviceName}/region/{regionName}/quota'): (params: {regionName: string, serviceName: string}) => Promise<cloud.quota.Quotas>;
  /**
   * Get allowed quotas
   * Get allowed quotas on region
   */
  get(path: '/cloud/project/{serviceName}/region/{regionName}/quota/allowed'): (params: {regionName: string, serviceName: string}) => Promise<cloud.quota.AllowedQuota[]>;
  /**
   * Manage the regions you can add on your project
   * List the regions on which you can ask an access to
   */
  get(path: '/cloud/project/{serviceName}/regionAvailable'): (params: {serviceName: string}) => Promise<cloud.AvailableRegion[]>;
  /**
   * Missing description
   * Get all Roles
   */
  get(path: '/cloud/project/{serviceName}/role'): (params: {serviceName: string}) => Promise<cloud.role.Roles>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/cloud/project/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Missing description
   * Get snapshots
   */
  get(path: '/cloud/project/{serviceName}/snapshot'): (params: {serviceName: string, flavorType?: string, region?: string}) => Promise<cloud.image.Image[]>;
  /**
   * Missing description
   * Get snapshot details
   */
  get(path: '/cloud/project/{serviceName}/snapshot/{imageId}'): (params: {imageId: string, serviceName: string}) => Promise<cloud.image.Image>;
  /**
   * Missing description
   * Get SSH keys
   */
  get(path: '/cloud/project/{serviceName}/sshkey'): (params: {serviceName: string, region?: string}) => Promise<cloud.sshkey.SshKey[]>;
  /**
   * Missing description
   * Get SSH key
   */
  get(path: '/cloud/project/{serviceName}/sshkey/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<cloud.sshkey.SshKeyDetail>;
  /**
   * Missing description
   * Get stacks
   */
  get(path: '/cloud/project/{serviceName}/stack'): (params: {serviceName: string}) => Promise<cloud.stack.Stack[]>;
  /**
   * Missing description
   * Get stack
   */
  get(path: '/cloud/project/{serviceName}/stack/{stackId}'): (params: {serviceName: string, stackId: string}) => Promise<cloud.stack.Stack>;
  /**
   * Missing description
   * Get storage containers
   */
  get(path: '/cloud/project/{serviceName}/storage'): (params: {serviceName: string}) => Promise<cloud.storage.Container[]>;
  /**
   * Missing description
   * Get storage container
   */
  get(path: '/cloud/project/{serviceName}/storage/{containerId}'): (params: {containerId: string, serviceName: string, noObjects?: boolean}) => Promise<cloud.storage.ContainerDetail>;
  /**
   * Missing description
   * Access to storage API
   */
  get(path: '/cloud/project/{serviceName}/storage/access'): (params: {serviceName: string}) => Promise<cloud.storage.ContainerAccess>;
  /**
   * Missing description
   * Get all users
   */
  get(path: '/cloud/project/{serviceName}/user'): (params: {serviceName: string}) => Promise<cloud.user.User[]>;
  /**
   * Missing description
   * Get user details
   */
  get(path: '/cloud/project/{serviceName}/user/{userId}'): (params: {serviceName: string, userId: number}) => Promise<cloud.user.User>;
  /**
   * Missing description
   * Get RC file of OpenStack
   */
  get(path: '/cloud/project/{serviceName}/user/{userId}/openrc'): (params: {serviceName: string, userId: number, region: string, version?: cloud.user.OpenrcVersionEnum}) => Promise<cloud.user.Openrc>;
  /**
   * Missing description
   * Get rclone configuration file
   */
  get(path: '/cloud/project/{serviceName}/user/{userId}/rclone'): (params: {serviceName: string, userId: number, region: string}) => Promise<cloud.user.Rclone>;
  /**
   * Missing description
   * Get user roles
   */
  get(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {serviceName: string, userId: number}) => Promise<cloud.role.Role[]>;
  /**
   * Missing description
   * Get role detail
   */
  get(path: '/cloud/project/{serviceName}/user/{userId}/role/{roleId}'): (params: {roleId: string, serviceName: string, userId: number}) => Promise<cloud.role.Role>;
  /**
   * Missing description
   * Get volumes
   */
  get(path: '/cloud/project/{serviceName}/volume'): (params: {serviceName: string, region?: string}) => Promise<cloud.volume.Volume[]>;
  /**
   * Missing description
   * Get volume details
   */
  get(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {serviceName: string, volumeId: string}) => Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Get volume snapshots
   */
  get(path: '/cloud/project/{serviceName}/volume/snapshot'): (params: {serviceName: string, region?: string}) => Promise<cloud.volume.Snapshot[]>;
  /**
   * Missing description
   * Get volume snapshot details
   */
  get(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}'): (params: {serviceName: string, snapshotId: string}) => Promise<cloud.volume.Snapshot>;
  /**
   * Manage the vRack on your Cloud Project
   * Get the linked vRack on your project
   */
  get(path: '/cloud/project/{serviceName}/vrack'): (params: {serviceName: string}) => Promise<cloud.Vrack>;
  /**
   * Project
   * Alter this object properties
   */
  put(path: '/cloud/project/{serviceName}'): (params: {serviceName: string, access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatus, unleash?: boolean}) => Promise<void>;
  /**
   * Missing description
   * Alter an instance
   */
  put(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {instanceId: string, serviceName: string, instanceName: string}) => Promise<void>;
  /**
   * Missing description
   * Update planned migration
   */
  put(path: '/cloud/project/{serviceName}/migration/{migrationId}'): (params: {migrationId: string, serviceName: string, date: string}) => Promise<cloud.migration.Migration>;
  /**
   * Missing description
   * Rename private network
   */
  put(path: '/cloud/project/{serviceName}/network/private/{networkId}'): (params: {networkId: string, serviceName: string, name: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/cloud/project/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Missing description
   * Update your storage container
   */
  put(path: '/cloud/project/{serviceName}/storage/{containerId}'): (params: {containerId: string, serviceName: string, containerType?: cloud.storage.TypeEnum}) => Promise<void>;
  /**
   * Missing description
   * Update roles of a user
   */
  put(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {serviceName: string, userId: number, rolesIds: string[]}) => Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Update a volume
   */
  put(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {serviceName: string, volumeId: string, description?: string, name?: string}) => Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Activate monthly billing on multiple instances
   */
  post(path: '/cloud/project/{serviceName}/activateMonthlyBilling'): (params: {serviceName: string, instances: cloud.instance.MonthlyInstanceBulkParams[]}) => Promise<cloud.instance.InstanceDetail[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/cloud/project/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Missing description
   * Create a new instance
   */
  post(path: '/cloud/project/{serviceName}/instance'): (params: {serviceName: string, autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string}) => Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Activate monthly billing on instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling'): (params: {instanceId: string, serviceName: string}) => Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Return initial credentials of applications installed from public image
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess'): (params: {instanceId: string, serviceName: string}) => Promise<cloud.instance.ApplicationAccess>;
  /**
   * Missing description
   * Create interface on an instance and attached it to a network
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface'): (params: {instanceId: string, serviceName: string, ip?: string, networkId: string}) => Promise<cloud.instanceInterface.Interface>;
  /**
   * Missing description
   * Reboot an instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reboot'): (params: {instanceId: string, serviceName: string, type: cloud.instance.RebootTypeEnum}) => Promise<void>;
  /**
   * Missing description
   * Reinstall an instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reinstall'): (params: {instanceId: string, serviceName: string, imageId: string}) => Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Enable or disable rescue mode
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/rescueMode'): (params: {instanceId: string, serviceName: string, imageId?: string, rescue: boolean}) => Promise<cloud.instance.RescueAdminPassword>;
  /**
   * Missing description
   * Migrate your instance to another flavor
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resize'): (params: {instanceId: string, serviceName: string, flavorId: string}) => Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Resume a suspended instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resume'): (params: {instanceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Snapshot an instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/snapshot'): (params: {instanceId: string, serviceName: string, snapshotName: string}) => Promise<void>;
  /**
   * Missing description
   * Start an instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/start'): (params: {instanceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Stop an instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/stop'): (params: {instanceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Get VNC access to your instance
   */
  post(path: '/cloud/project/{serviceName}/instance/{instanceId}/vnc'): (params: {instanceId: string, serviceName: string}) => Promise<cloud.instance.InstanceVnc>;
  /**
   * Missing description
   * Create multiple instances
   */
  post(path: '/cloud/project/{serviceName}/instance/bulk'): (params: {serviceName: string, autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string}) => Promise<cloud.instance.Instance[]>;
  /**
   * Missing description
   * Create a group
   */
  post(path: '/cloud/project/{serviceName}/instance/group'): (params: {serviceName: string, name: string, region: string, type: cloud.instancegroup.InstanceGroupTypeEnum}) => Promise<cloud.instancegroup.InstanceGroup>;
  /**
   * Missing description
   * Attach failover ip to an instance
   */
  post(path: '/cloud/project/{serviceName}/ip/failover/{id}/attach'): (params: {id: string, serviceName: string, instanceId: string}) => Promise<cloud.ip.FailoverIp>;
  /**
   * Manage a lab
   * Activate a lab on your Cloud Project
   */
  post(path: '/cloud/project/{serviceName}/lab/{labId}'): (params: {labId: string, serviceName: string}) => Promise<cloud.Operation>;
  /**
   * Missing description
   * Create a new network
   */
  post(path: '/cloud/project/{serviceName}/network/private'): (params: {serviceName: string, name: string, regions?: string[], vlanId?: number}) => Promise<cloud.network.Network>;
  /**
   * Missing description
   * Activate private network in a new region
   */
  post(path: '/cloud/project/{serviceName}/network/private/{networkId}/region'): (params: {networkId: string, serviceName: string, region: string}) => Promise<cloud.network.Network>;
  /**
   * Missing description
   * Create a new network subnet
   */
  post(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet'): (params: {networkId: string, serviceName: string, dhcp: boolean, end: string, network: string, noGateway: boolean, region: string, start: string}) => Promise<cloud.network.Subnet>;
  /**
   * Missing description
   * Get OVH playground session to use the openstack terminal
   */
  post(path: '/cloud/project/{serviceName}/openstackClient'): (params: {serviceName: string}) => Promise<cloud.openstackClient.Session>;
  /**
   * Manage your regions
   * Request access to a region
   */
  post(path: '/cloud/project/{serviceName}/region'): (params: {serviceName: string, region: string}) => Promise<cloud.Region>;
  /**
   * Consult quotas
   * Change project quotas on region
   */
  post(path: '/cloud/project/{serviceName}/region/{regionName}/quota'): (params: {regionName: string, serviceName: string, name: string}) => Promise<cloud.Operation>;
  /**
   * Missing description
   * Create SSH key
   */
  post(path: '/cloud/project/{serviceName}/sshkey'): (params: {serviceName: string, name: string, publicKey: string, region?: string}) => Promise<cloud.sshkey.SshKeyDetail>;
  /**
   * Missing description
   * Get OVH playground session with a stack installed to use the openstack terminal
   */
  post(path: '/cloud/project/{serviceName}/stack/{stackId}/client'): (params: {serviceName: string, stackId: string}) => Promise<cloud.openstackClient.Session>;
  /**
   * Missing description
   * Create container
   */
  post(path: '/cloud/project/{serviceName}/storage'): (params: {serviceName: string, archive: boolean, containerName: string, region: string}) => Promise<cloud.storage.Container>;
  /**
   * Missing description
   * Add CORS support on your container
   */
  post(path: '/cloud/project/{serviceName}/storage/{containerId}/cors'): (params: {containerId: string, serviceName: string, origin: string}) => Promise<void>;
  /**
   * Missing description
   * Get a public temporary URL to access to one of your object
   */
  post(path: '/cloud/project/{serviceName}/storage/{containerId}/publicUrl'): (params: {containerId: string, serviceName: string, expirationDate: string, objectName: string}) => Promise<cloud.storage.ContainerObjectTempURL>;
  /**
   * Missing description
   * Deploy your container files as a static web site
   */
  post(path: '/cloud/project/{serviceName}/storage/{containerId}/static'): (params: {containerId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Create openstack user with only access to this container
   */
  post(path: '/cloud/project/{serviceName}/storage/{containerId}/user'): (params: {containerId: string, serviceName: string, description?: string, right: cloud.storage.RightEnum}) => Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Access to storage API
   */
  post(path: '/cloud/project/{serviceName}/storage/access'): (params: {serviceName: string}) => Promise<cloud.storage.ContainerAccess>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/cloud/project/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * Missing description
   * Create user
   */
  post(path: '/cloud/project/{serviceName}/user'): (params: {serviceName: string, description?: string, role?: cloud.user.RoleEnum, roles?: cloud.user.RoleEnum[]}) => Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Regenerate user password
   */
  post(path: '/cloud/project/{serviceName}/user/{userId}/regeneratePassword'): (params: {serviceName: string, userId: number}) => Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Add a role to a user
   */
  post(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {serviceName: string, userId: number, roleId: string}) => Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Get token for user
   */
  post(path: '/cloud/project/{serviceName}/user/{userId}/token'): (params: {serviceName: string, userId: number, password: string}) => Promise<cloud.authentication.Token>;
  /**
   * Missing description
   * Create a volume
   */
  post(path: '/cloud/project/{serviceName}/volume'): (params: {serviceName: string, description?: string, imageId?: string, name?: string, region: string, size: number, snapshotId?: string, type: cloud.volume.VolumeTypeEnum}) => Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Attach a volume on an instance
   */
  post(path: '/cloud/project/{serviceName}/volume/{volumeId}/attach'): (params: {serviceName: string, volumeId: string, instanceId: string}) => Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Detach a volume from an instance
   */
  post(path: '/cloud/project/{serviceName}/volume/{volumeId}/detach'): (params: {serviceName: string, volumeId: string, instanceId: string}) => Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Snapshot a volume
   */
  post(path: '/cloud/project/{serviceName}/volume/{volumeId}/snapshot'): (params: {serviceName: string, volumeId: string, description?: string, name?: string}) => Promise<cloud.volume.Snapshot>;
  /**
   * Missing description
   * Extend a volume
   */
  post(path: '/cloud/project/{serviceName}/volume/{volumeId}/upsize'): (params: {serviceName: string, volumeId: string, size: number}) => Promise<cloud.volume.Volume>;
  /**
   * Manage the vRack on your Cloud Project
   * Order and attach a new vRack on your project
   */
  post(path: '/cloud/project/{serviceName}/vrack'): (params: {serviceName: string}) => Promise<cloud.Operation>;
  /**
   * Missing description
   * Delete an instance
   */
  delete(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {instanceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete an interface
   */
  delete(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}'): (params: {instanceId: string, interfaceId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete a group
   */
  delete(path: '/cloud/project/{serviceName}/instance/group/{groupId}'): (params: {groupId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete private network
   */
  delete(path: '/cloud/project/{serviceName}/network/private/{networkId}'): (params: {networkId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete a network subnet
   */
  delete(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}'): (params: {networkId: string, serviceName: string, subnetId: string}) => Promise<void>;
  /**
   * Missing description
   * Delete a snapshot
   */
  delete(path: '/cloud/project/{serviceName}/snapshot/{imageId}'): (params: {imageId: string, serviceName: string}) => Promise<cloud.image.Image>;
  /**
   * Missing description
   * Delete SSH key
   */
  delete(path: '/cloud/project/{serviceName}/sshkey/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete container
   */
  delete(path: '/cloud/project/{serviceName}/storage/{containerId}'): (params: {containerId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete CORS support on your container
   */
  delete(path: '/cloud/project/{serviceName}/storage/{containerId}/cors'): (params: {containerId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete user
   */
  delete(path: '/cloud/project/{serviceName}/user/{userId}'): (params: {serviceName: string, userId: number}) => Promise<void>;
  /**
   * Missing description
   * Remove role for a user
   */
  delete(path: '/cloud/project/{serviceName}/user/{userId}/role/{roleId}'): (params: {roleId: string, serviceName: string, userId: number}) => Promise<void>;
  /**
   * Missing description
   * Delete a volume
   */
  delete(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {serviceName: string, volumeId: string}) => Promise<void>;
  /**
   * Missing description
   * Delete a volume snapshot
   */
  delete(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}'): (params: {serviceName: string, snapshotId: string}) => Promise<void>;
}
