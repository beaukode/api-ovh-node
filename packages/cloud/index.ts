import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cloud Models
 */
export namespace cloud {
    //cloud.AccessTypeEnum
    export type AccessTypeEnum = "full" | "restricted"
    //cloud.Acl
    // fullName: cloud.Acl.Acl
    export interface Acl {
        accountId: string;
        type: cloud.AclTypeEnum;
    }
    //cloud.AclTypeEnum
    export type AclTypeEnum = "readOnly" | "readWrite"
    //cloud.Alerting
    // fullName: cloud.Alerting.Alerting
    export interface Alerting {
        creationDate: string;
        delay: cloud.AlertingDelayEnum;
        email: string;
        formattedMonthlyThreshold: orderPrice;
        id: string;
        monthlyThreshold: number;
    }
    //cloud.AlertingAlert
    // fullName: cloud.AlertingAlert.AlertingAlert
    export interface AlertingAlert {
        alertDate: string;
        alertId: number;
        emails: string[];
    }
    //cloud.AlertingDelayEnum
    export type AlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400
    //cloud.ArchiveStoragePrice
    // fullName: cloud.ArchiveStoragePrice.ArchiveStoragePrice
    export interface ArchiveStoragePrice {
        monthlyPrice: orderPrice;
        region: string;
    }
    //cloud.AvailableRegion
    // fullName: cloud.AvailableRegion.AvailableRegion
    export interface AvailableRegion {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        name: string;
    }
    //cloud.Backup
    // fullName: cloud.Backup.Backup
    export interface Backup {
        backupName: string;
        createdAt: string;
        cron: string;
        executions?: cloud.Execution[];
        id: string;
        instanceId: string;
        name: string;
    }
    //cloud.BandwidthStoragePrice
    // fullName: cloud.BandwidthStoragePrice.BandwidthStoragePrice
    export interface BandwidthStoragePrice {
        price: orderPrice;
        region: string;
    }
    //cloud.Component
    // fullName: cloud.Component.Component
    export interface Component {
        name: string;
        status: cloud.ServiceStatus;
    }
    //cloud.Credit
    // fullName: cloud.Credit.Credit
    export interface Credit {
        available_credit: orderPrice;
        bill?: string;
        description?: string;
        id: number;
        products?: string[];
        total_credit: orderPrice;
        used_credit: orderPrice;
        validity?: cloud.common.VoucherValidity;
        voucher?: string;
    }
    //cloud.Execution
    // fullName: cloud.Execution.Execution
    export interface Execution {
        executedAt: string;
        state: cloud.ExecutionState;
        stateInfo: string;
    }
    //cloud.ExecutionState
    export type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    //cloud.FlavorPrice
    // fullName: cloud.FlavorPrice.FlavorPrice
    export interface FlavorPrice {
        flavorId: string;
        flavorName: string;
        monthlyPrice?: orderPrice;
        price: orderPrice;
        region: string;
    }
    //cloud.IpCountryEnum
    export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    //cloud.Operation
    // fullName: cloud.Operation.Operation
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
    //cloud.OperationStatus
    export type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    //cloud.Price
    // fullName: cloud.Price.Price
    export interface Price {
        archive: cloud.ArchiveStoragePrice[];
        bandwidthArchiveIn: cloud.BandwidthStoragePrice[];
        bandwidthArchiveOut: cloud.BandwidthStoragePrice[];
        bandwidthStorage: cloud.BandwidthStoragePrice[];
        instances: cloud.FlavorPrice[];
        projectCreation: orderPrice;
        snapshots: cloud.SnapshotPrice[];
        storage: cloud.StoragePrice[];
        volumes: cloud.VolumePrice[];
    }
    //cloud.Project
    // fullName: cloud.Project.Project
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
    //cloud.Region
    // fullName: cloud.Region.Region
    export interface Region {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        ipCountries: cloud.IpCountryEnum[];
        name: string;
        services: cloud.Component[];
        status: cloud.RegionStatus;
    }
    //cloud.RegionContinent
    export type RegionContinent = "EU" | "NA" | "US" | "ASIA"
    //cloud.RegionStatus
    export type RegionStatus = "UP" | "DOWN" | "MAINTENANCE"
    //cloud.ServiceStatus
    export type ServiceStatus = "UP" | "DOWN"
    //cloud.SnapshotPrice
    // fullName: cloud.SnapshotPrice.SnapshotPrice
    export interface SnapshotPrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    //cloud.StoragePrice
    // fullName: cloud.StoragePrice.StoragePrice
    export interface StoragePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    //cloud.VolumePrice
    // fullName: cloud.VolumePrice.VolumePrice
    export interface VolumePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
        volumeName: string;
    }
    //cloud.Vrack
    // fullName: cloud.Vrack.Vrack
    export interface Vrack {
        description: string;
        id: string;
        name: string;
    }
    export namespace authentication {
        //cloud.authentication.Catalog
        // fullName: cloud.authentication.Catalog.Catalog
        export interface Catalog {
            endpoints: cloud.authentication.Endpoint[];
            id: string;
            type: string;
        }
        //cloud.authentication.Domain
        // fullName: cloud.authentication.Domain.Domain
        export interface Domain {
            name: string;
        }
        //cloud.authentication.Endpoint
        // fullName: cloud.authentication.Endpoint.Endpoint
        export interface Endpoint {
            id: string;
            interface: string;
            legacy_endpoint_id: string;
            region_id: string;
            service_id: string;
            url: string;
        }
        //cloud.authentication.OpenstackToken
        // fullName: cloud.authentication.OpenstackToken.OpenstackToken
        export interface OpenstackToken {
            catalog: cloud.authentication.Catalog[];
            expires_at: string;
            issued_at: string;
            methods: string[];
            project: cloud.authentication.TokenProject;
            roles: cloud.authentication.Role[];
            user: cloud.authentication.UserToken;
        }
        //cloud.authentication.Role
        // fullName: cloud.authentication.Role.Role
        export interface Role {
            id: string;
            name: string;
        }
        //cloud.authentication.Token
        // fullName: cloud.authentication.Token.Token
        export interface Token {
            'X-Auth-Token': string;
            token: cloud.authentication.OpenstackToken;
        }
        //cloud.authentication.TokenProject
        // fullName: cloud.authentication.TokenProject.TokenProject
        export interface TokenProject {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
        //cloud.authentication.UserToken
        // fullName: cloud.authentication.UserToken.UserToken
        export interface UserToken {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
    }
    export namespace billingView {
        //cloud.billingView.BandwidthInstance
        // fullName: cloud.billingView.BandwidthInstance.BandwidthInstance
        export interface BandwidthInstance {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        //cloud.billingView.BandwidthStorage
        // fullName: cloud.billingView.BandwidthStorage.BandwidthStorage
        export interface BandwidthStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        //cloud.billingView.HourlyInstance
        // fullName: cloud.billingView.HourlyInstance.HourlyInstance
        export interface HourlyInstance {
            details: cloud.billingView.HourlyInstanceDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        //cloud.billingView.HourlyInstanceBandwidth
        // fullName: cloud.billingView.HourlyInstanceBandwidth.HourlyInstanceBandwidth
        export interface HourlyInstanceBandwidth {
            incomingBandwidth?: cloud.billingView.BandwidthInstance;
            outgoingBandwidth?: cloud.billingView.BandwidthInstance;
            region: string;
            totalPrice: number;
        }
        //cloud.billingView.HourlyInstanceDetail
        // fullName: cloud.billingView.HourlyInstanceDetail.HourlyInstanceDetail
        export interface HourlyInstanceDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        //cloud.billingView.HourlyInstanceOption
        // fullName: cloud.billingView.HourlyInstanceOption.HourlyInstanceOption
        export interface HourlyInstanceOption {
            details: cloud.billingView.HourlyInstanceOptionDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        //cloud.billingView.HourlyInstanceOptionDetail
        // fullName: cloud.billingView.HourlyInstanceOptionDetail.HourlyInstanceOptionDetail
        export interface HourlyInstanceOptionDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        //cloud.billingView.HourlyResources
        // fullName: cloud.billingView.HourlyResources.HourlyResources
        export interface HourlyResources {
            instance: cloud.billingView.HourlyInstance[];
            instanceBandwidth: cloud.billingView.HourlyInstanceBandwidth[];
            instanceOption: cloud.billingView.HourlyInstanceOption[];
            snapshot: cloud.billingView.HourlySnapshot[];
            storage: cloud.billingView.HourlyStorage[];
            volume: cloud.billingView.HourlyVolume[];
        }
        //cloud.billingView.HourlySnapshot
        // fullName: cloud.billingView.HourlySnapshot.HourlySnapshot
        export interface HourlySnapshot {
            instance?: cloud.billingView.InstanceSnapshot;
            region: string;
            totalPrice: number;
            volume?: cloud.billingView.VolumeSnapshot;
        }
        //cloud.billingView.HourlyStorage
        // fullName: cloud.billingView.HourlyStorage.HourlyStorage
        export interface HourlyStorage {
            incomingBandwidth?: cloud.billingView.BandwidthStorage;
            outgoingBandwidth?: cloud.billingView.BandwidthStorage;
            region: string;
            stored?: cloud.billingView.StoredStorage;
            totalPrice: number;
            type: cloud.billingView.StorageTypeEnum;
        }
        //cloud.billingView.HourlyVolume
        // fullName: cloud.billingView.HourlyVolume.HourlyVolume
        export interface HourlyVolume {
            details: cloud.billingView.HourlyVolumeDetail[];
            quantity: cloud.billingView.Quantity;
            region: string;
            totalPrice: number;
            type: string;
        }
        //cloud.billingView.HourlyVolumeDetail
        // fullName: cloud.billingView.HourlyVolumeDetail.HourlyVolumeDetail
        export interface HourlyVolumeDetail {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
            volumeId: string;
        }
        //cloud.billingView.InstanceSnapshot
        // fullName: cloud.billingView.InstanceSnapshot.InstanceSnapshot
        export interface InstanceSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        //cloud.billingView.MonthlyInstance
        // fullName: cloud.billingView.MonthlyInstance.MonthlyInstance
        export interface MonthlyInstance {
            details: cloud.billingView.MonthlyInstanceDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        //cloud.billingView.MonthlyInstanceDetail
        // fullName: cloud.billingView.MonthlyInstanceDetail.MonthlyInstanceDetail
        export interface MonthlyInstanceDetail {
            activation: string;
            instanceId: string;
            totalPrice: number;
        }
        //cloud.billingView.MonthlyInstanceOption
        // fullName: cloud.billingView.MonthlyInstanceOption.MonthlyInstanceOption
        export interface MonthlyInstanceOption {
            details: cloud.billingView.MonthlyInstanceOptionDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        //cloud.billingView.MonthlyInstanceOptionDetail
        // fullName: cloud.billingView.MonthlyInstanceOptionDetail.MonthlyInstanceOptionDetail
        export interface MonthlyInstanceOptionDetail {
            instanceId: string;
            totalPrice: number;
        }
        //cloud.billingView.MonthlyResources
        // fullName: cloud.billingView.MonthlyResources.MonthlyResources
        export interface MonthlyResources {
            instance: cloud.billingView.MonthlyInstance[];
            instanceOption: cloud.billingView.MonthlyInstanceOption[];
        }
        //cloud.billingView.Quantity
        // fullName: cloud.billingView.Quantity.Quantity
        export interface Quantity {
            unit: cloud.billingView.UnitQuantity;
            value: number;
        }
        //cloud.billingView.StorageTypeEnum
        export type StorageTypeEnum = "pcs" | "pca"
        //cloud.billingView.StoredStorage
        // fullName: cloud.billingView.StoredStorage.StoredStorage
        export interface StoredStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        //cloud.billingView.UnitQuantity
        export type UnitQuantity = "GiB" | "GiBh" | "Hour"
        //cloud.billingView.UsedCredit
        // fullName: cloud.billingView.UsedCredit.UsedCredit
        export interface UsedCredit {
            description: string;
            id: number;
            usedAmount: number;
        }
        //cloud.billingView.UsedCredits
        // fullName: cloud.billingView.UsedCredits.UsedCredits
        export interface UsedCredits {
            details: cloud.billingView.UsedCredit[];
            totalCredit: number;
        }
        //cloud.billingView.VolumeSnapshot
        // fullName: cloud.billingView.VolumeSnapshot.VolumeSnapshot
        export interface VolumeSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
    }
    export namespace common {
        //cloud.common.VoucherValidity
        // fullName: cloud.common.VoucherValidity.VoucherValidity
        export interface VoucherValidity {
            from?: string;
            to?: string;
        }
    }
    export namespace containerRegistry {
        export namespace registry {
            //cloud.containerRegistry.registry.RegionEnum
            export type RegionEnum = "GRA7"
            //cloud.containerRegistry.registry.Registry
            // fullName: cloud.containerRegistry.registry.Registry.Registry
            export interface Registry {
                createdAt: string;
                id: string;
                name: string;
                projectID: string;
                region: cloud.containerRegistry.registry.RegionEnum;
                status: cloud.containerRegistry.registry.StatusEnum;
                updatedAt: string;
                url: string;
                version: string;
            }
            //cloud.containerRegistry.registry.StatusEnum
            export type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING"
        }
        export namespace user {
            //cloud.containerRegistry.user.User
            // fullName: cloud.containerRegistry.user.User.User
            export interface User {
                email: string;
                id: string;
                password?: string;
                user: string;
            }
        }
    }
    export namespace flavor {
        //cloud.flavor.Flavor
        // fullName: cloud.flavor.Flavor.Flavor
        export interface Flavor {
            available: boolean;
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
        //cloud.flavor.FlavorPlanCodes
        // fullName: cloud.flavor.FlavorPlanCodes.FlavorPlanCodes
        export interface FlavorPlanCodes {
            hourly?: string;
            monthly?: string;
        }
    }
    export namespace forecast {
        //cloud.forecast.ProjectForecast
        // fullName: cloud.forecast.ProjectForecast.ProjectForecast
        export interface ProjectForecast {
            lastMetric: string;
            projectForecast: orderPrice;
        }
    }
    export namespace image {
        //cloud.image.Image
        // fullName: cloud.image.Image.Image
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
        //cloud.image.OSTypeEnum
        export type OSTypeEnum = "linux" | "bsd" | "windows"
    }
    export namespace instance {
        //cloud.instance.Access
        // fullName: cloud.instance.Access.Access
        export interface Access {
            login: string;
            password: string;
            type: string;
            url: string;
        }
        //cloud.instance.ApplicationAccess
        // fullName: cloud.instance.ApplicationAccess.ApplicationAccess
        export interface ApplicationAccess {
            accesses: cloud.instance.Access[];
            status: cloud.instance.ApplicationAccessStateEnum;
        }
        //cloud.instance.ApplicationAccessStateEnum
        export type ApplicationAccessStateEnum = "installing" | "ok"
        //cloud.instance.Instance
        // fullName: cloud.instance.Instance.Instance
        export interface Instance {
            created: string;
            flavorId: string;
            id: string;
            imageId: string;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            planCode?: string;
            region: string;
            sshKeyId?: string;
            status: cloud.instance.InstanceStatusEnum;
        }
        //cloud.instance.InstanceDetail
        // fullName: cloud.instance.InstanceDetail.InstanceDetail
        export interface InstanceDetail {
            created: string;
            flavor: cloud.flavor.Flavor;
            id: string;
            image: cloud.image.Image;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            planCode?: string;
            region: string;
            sshKey: cloud.sshkey.SshKeyDetail;
            status: cloud.instance.InstanceStatusEnum;
        }
        //cloud.instance.InstanceMetrics
        // fullName: cloud.instance.InstanceMetrics.InstanceMetrics
        export interface InstanceMetrics {
            unit: string;
            values: cloud.instance.InstanceMetricsValue[];
        }
        //cloud.instance.InstanceMetricsValue
        // fullName: cloud.instance.InstanceMetricsValue.InstanceMetricsValue
        export interface InstanceMetricsValue {
            timestamp: number;
            value: number;
        }
        //cloud.instance.InstanceStatusEnum
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING"
        //cloud.instance.InstanceVnc
        // fullName: cloud.instance.InstanceVnc.InstanceVnc
        export interface InstanceVnc {
            type: string;
            url: string;
        }
        //cloud.instance.IpAddress
        // fullName: cloud.instance.IpAddress.IpAddress
        export interface IpAddress {
            gatewayIp?: string;
            ip: string;
            networkId: string;
            type: string;
            version: number;
        }
        //cloud.instance.MetricsPeriod
        export type MetricsPeriod = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        //cloud.instance.MetricsType
        export type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        //cloud.instance.MonthlyBilling
        // fullName: cloud.instance.MonthlyBilling.MonthlyBilling
        export interface MonthlyBilling {
            since: string;
            status: cloud.instance.MonthlyBillingStatusEnum;
        }
        //cloud.instance.MonthlyBillingStatusEnum
        export type MonthlyBillingStatusEnum = "activationPending" | "ok"
        //cloud.instance.NetworkBulkParams
        // fullName: cloud.instance.NetworkBulkParams.NetworkBulkParams
        export interface NetworkBulkParams {
            networkId: string;
        }
        //cloud.instance.NetworkParams
        // fullName: cloud.instance.NetworkParams.NetworkParams
        export interface NetworkParams {
            ip?: string;
            networkId: string;
        }
        //cloud.instance.RebootTypeEnum
        export type RebootTypeEnum = "soft" | "hard"
        //cloud.instance.RescueAdminPassword
        // fullName: cloud.instance.RescueAdminPassword.RescueAdminPassword
        export interface RescueAdminPassword {
            adminPassword?: string;
        }
    }
    export namespace instanceInterface {
        //cloud.instanceInterface.FixedIp
        // fullName: cloud.instanceInterface.FixedIp.FixedIp
        export interface FixedIp {
            ip: string;
            subnetId: string;
        }
        //cloud.instanceInterface.Interface
        // fullName: cloud.instanceInterface.Interface.Interface
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
        //cloud.instancegroup.InstanceGroup
        // fullName: cloud.instancegroup.InstanceGroup.InstanceGroup
        export interface InstanceGroup {
            id: string;
            instance_ids: string[];
            name: string;
            region: string;
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        //cloud.instancegroup.InstanceGroupTypeEnum
        export type InstanceGroupTypeEnum = "affinity" | "anti-affinity"
    }
    export namespace ip {
        //cloud.ip.CloudIp
        // fullName: cloud.ip.CloudIp.CloudIp
        export interface CloudIp {
            id: string;
            ip?: string;
            status: cloud.ip.IpStatusEnum;
            type: string;
        }
        //cloud.ip.FailoverIp
        // fullName: cloud.ip.FailoverIp.FailoverIp
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
        //cloud.ip.IpStatusEnum
        export type IpStatusEnum = "ok" | "operationPending"
        //cloud.ip.IpSubTypeEnum
        export type IpSubTypeEnum = "cloud" | "ovh"
    }
    export namespace kube {
        //cloud.kube.Cluster
        // fullName: cloud.kube.Cluster.Cluster
        export interface Cluster {
            controlPlaneIsUpToDate: boolean;
            createdAt: string;
            id: string;
            isUpToDate: boolean;
            name: string;
            nextUpgradeVersions?: cloud.kube.Version[];
            nodesUrl: string;
            region: cloud.kube.Region;
            status: cloud.kube.ClusterStatus;
            updatePolicy: string;
            updatedAt: string;
            url: string;
            version: string;
        }
        //cloud.kube.ClusterStatus
        export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
        //cloud.kube.Flavor
        // fullName: cloud.kube.Flavor.Flavor
        export interface Flavor {
            category: cloud.kube.FlavorCategory;
            id: string;
            name: string;
            state: cloud.kube.FlavorState;
        }
        //cloud.kube.FlavorCategory
        export type FlavorCategory = "c" | "g" | "t" | "b" | "r"
        //cloud.kube.FlavorState
        export type FlavorState = "available" | "unavailable"
        //cloud.kube.Kubeconfig
        // fullName: cloud.kube.Kubeconfig.Kubeconfig
        export interface Kubeconfig {
            content: string;
        }
        //cloud.kube.Node
        // fullName: cloud.kube.Node.Node
        export interface Node {
            createdAt: string;
            flavor: string;
            id: string;
            instanceId?: string;
            isUpToDate: boolean;
            name?: string;
            status: cloud.kube.NodeStatus;
            updatedAt: string;
            version: string;
        }
        //cloud.kube.NodeStatus
        export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
        //cloud.kube.Region
        export type Region = "GRA5" | "GRA7"
        //cloud.kube.ResetWorkerNodesPolicy
        export type ResetWorkerNodesPolicy = "reinstall" | "delete"
        //cloud.kube.UpdatePolicy
        export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        //cloud.kube.UpdateStrategy
        export type UpdateStrategy = "LATEST_PATCH" | "NEXT_MINOR"
        //cloud.kube.Version
        export type Version = "1.11" | "1.12" | "1.13" | "1.14" | "1.15"
    }
    export namespace migration {
        //cloud.migration.Migration
        // fullName: cloud.migration.Migration.Migration
        export interface Migration {
            date: string;
            migrationId: string;
            resourceId: string;
            resourceType: cloud.migration.ResourceTypeEnum;
        }
        //cloud.migration.ResourceTypeEnum
        export type ResourceTypeEnum = "instance"
    }
    export namespace network {
        //cloud.network.IPPool
        // fullName: cloud.network.IPPool.IPPool
        export interface IPPool {
            dhcp: boolean;
            end: string;
            network: string;
            region: string;
            start: string;
        }
        //cloud.network.Network
        // fullName: cloud.network.Network.Network
        export interface Network {
            id: string;
            name: string;
            regions: cloud.network.NetworkRegion[];
            status: cloud.network.NetworkStatusEnum;
            type?: cloud.network.NetworkTypeEnum;
            vlanId: number;
        }
        //cloud.network.NetworkRegion
        // fullName: cloud.network.NetworkRegion.NetworkRegion
        export interface NetworkRegion {
            region: string;
            status: cloud.network.NetworkRegionStatusEnum;
        }
        //cloud.network.NetworkRegionStatusEnum
        export type NetworkRegionStatusEnum = "ACTIVE" | "BUILDING"
        //cloud.network.NetworkStatusEnum
        export type NetworkStatusEnum = "BUILDING" | "ACTIVE" | "DELETING"
        //cloud.network.NetworkTypeEnum
        export type NetworkTypeEnum = "public" | "private"
        //cloud.network.Subnet
        // fullName: cloud.network.Subnet.Subnet
        export interface Subnet {
            cidr: string;
            gatewayIp?: string;
            id: string;
            ipPools: cloud.network.IPPool[];
        }
    }
    export namespace openstackClient {
        //cloud.openstackClient.Profile
        // fullName: cloud.openstackClient.Profile.Profile
        export interface Profile {
            name: string;
        }
        //cloud.openstackClient.Session
        // fullName: cloud.openstackClient.Session.Session
        export interface Session {
            expires: string;
            id: string;
            profile: cloud.openstackClient.Profile;
            websocket: string;
        }
    }
    export namespace order {
        //cloud.order.Order
        // fullName: cloud.order.Order.Order
        export interface Order {
            date: string;
            orderId: number;
            planCode: string;
            serviceName?: string;
            status: cloud.order.StatusEnum;
        }
        //cloud.order.StatusEnum
        export type StatusEnum = "unpaid" | "delivering" | "delivered" | "unknown"
    }
    export namespace pca {
        //cloud.pca.BillingRefEnum
        export type BillingRefEnum = "backup" | "delete" | "restore"
        //cloud.pca.DownloadCredentials
        // fullName: cloud.pca.DownloadCredentials.DownloadCredentials
        export interface DownloadCredentials {
            authEndpoint: string;
            container: string;
            login: string;
            password: string;
            region: string;
            storageEndpoint: string;
            tenantId: string;
            tenantName: string;
        }
        //cloud.pca.FunctionTypeEnum
        export type FunctionTypeEnum = "createUser" | "delete" | "restore" | "setPassword" | "setSessionName" | "setSshKey"
        //cloud.pca.SessionStateEnum
        export type SessionStateEnum = "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore"
        //cloud.pca.TaskStateEnum
        export type TaskStateEnum = "cancelled" | "deleted" | "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore" | "todo"
        //cloud.pca.TaskTypeEnum
        export type TaskTypeEnum = "delete" | "restore"
        //cloud.pca.TransferState
        // fullName: cloud.pca.TransferState.TransferState
        export interface TransferState {
            agreements?: number[];
            projectId: string;
            state: cloud.pca.TransferStateEnum;
            transferDate?: string;
        }
        //cloud.pca.TransferStateEnum
        export type TransferStateEnum = "deleted" | "transferred" | "untransferred" | "waitingAgreementsValidation"
    }
    export namespace project {
        //cloud.project.BandwidthStorageUsage
        // fullName: cloud.project.BandwidthStorageUsage.BandwidthStorageUsage
        export interface BandwidthStorageUsage {
            downloadedBytes: number;
            region: string;
            total: orderPrice;
        }
        //cloud.project.Bill
        // fullName: cloud.project.Bill.Bill
        export interface Bill {
            billId: string;
            type: cloud.project.BillTypeEnum;
        }
        //cloud.project.BillTypeEnum
        export type BillTypeEnum = "creditPurchased" | "monthlyConsumption" | "monthlyInstanceActivation"
        //cloud.project.CurrentUsage
        // fullName: cloud.project.CurrentUsage.CurrentUsage
        export interface CurrentUsage {
            instances: cloud.project.InstancesUsage;
            snapshots: cloud.project.SnapshotsUsage;
            storage: cloud.project.StorageUsage;
            total: orderPrice;
            volumeSnapshots: cloud.project.SnapshotsUsage;
            volumes: cloud.project.VolumesUsage;
        }
        //cloud.project.InstanceMonthlyBilling
        // fullName: cloud.project.InstanceMonthlyBilling.InstanceMonthlyBilling
        export interface InstanceMonthlyBilling {
            activatedOn: string;
            cost: orderPrice;
        }
        //cloud.project.InstanceUsageDetail
        // fullName: cloud.project.InstanceUsageDetail.InstanceUsageDetail
        export interface InstanceUsageDetail {
            hourly?: orderPrice;
            instanceId: string;
            monthly?: cloud.project.InstanceMonthlyBilling;
            monthlyBilling: boolean;
            reference: string;
        }
        //cloud.project.InstancesUsage
        // fullName: cloud.project.InstancesUsage.InstancesUsage
        export interface InstancesUsage {
            detail: cloud.project.InstanceUsageDetail[];
            total: orderPrice;
        }
        //cloud.project.NewProject
        // fullName: cloud.project.NewProject.NewProject
        export interface NewProject {
            agreements?: number[];
            credit?: cloud.project.NewProjectCredit;
            description?: string;
            orderId?: number;
            project?: string;
            status: cloud.project.NewProjectStatusEnum;
        }
        //cloud.project.NewProjectCredit
        // fullName: cloud.project.NewProjectCredit.NewProjectCredit
        export interface NewProjectCredit {
            description?: string;
            id: number;
            products?: string[];
            total_credit: orderPrice;
            validity?: cloud.common.VoucherValidity;
        }
        //cloud.project.NewProjectInfo
        // fullName: cloud.project.NewProjectInfo.NewProjectInfo
        export interface NewProjectInfo {
            agreements?: number[];
            error?: cloud.project.NewProjectInfoError;
            order?: orderPrice;
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        //cloud.project.NewProjectInfoError
        // fullName: cloud.project.NewProjectInfoError.NewProjectInfoError
        export interface NewProjectInfoError {
            code: cloud.project.NewProjectInfoErrorCodeEnum;
            message: string;
        }
        //cloud.project.NewProjectInfoErrorCodeEnum
        export type NewProjectInfoErrorCodeEnum = "accountNotEligible" | "challengePaymentMethodRequested" | "invalidPaymentMean" | "maxProjectsLimitReached" | "paypalAccountNotVerified" | "unpaidDebts"
        //cloud.project.NewProjectInfoVoucher
        // fullName: cloud.project.NewProjectInfoVoucher.NewProjectInfoVoucher
        export interface NewProjectInfoVoucher {
            credit: orderPrice;
            paymentMethodRequired: boolean;
        }
        //cloud.project.NewProjectStatusEnum
        export type NewProjectStatusEnum = "creating" | "ok" | "validationPending" | "waitingAgreementsValidation"
        //cloud.project.ProductAgreements
        // fullName: cloud.project.ProductAgreements.ProductAgreements
        export interface ProductAgreements {
            agreementsToValidate?: number[];
            agreementsValidated?: number[];
        }
        //cloud.project.ProductNameEnum
        export type ProductNameEnum = "registry"
        //cloud.project.ProjectStatus
        export type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended"
        //cloud.project.ProjectUsage
        // fullName: cloud.project.ProjectUsage.ProjectUsage
        export interface ProjectUsage {
            current: cloud.project.CurrentUsage;
        }
        //cloud.project.SnapshotUsageDetail
        // fullName: cloud.project.SnapshotUsageDetail.SnapshotUsageDetail
        export interface SnapshotUsageDetail {
            price: orderPrice;
            region: string;
            storedSize: complexType.UnitAndValue<number>;
        }
        //cloud.project.SnapshotsUsage
        // fullName: cloud.project.SnapshotsUsage.SnapshotsUsage
        export interface SnapshotsUsage {
            detail: cloud.project.SnapshotUsageDetail[];
            total: orderPrice;
        }
        //cloud.project.StorageUsage
        // fullName: cloud.project.StorageUsage.StorageUsage
        export interface StorageUsage {
            bandwidth: cloud.project.BandwidthStorageUsage[];
            total: orderPrice;
            volume: cloud.project.StorageVolumeUsage[];
        }
        //cloud.project.StorageVolumeUsage
        // fullName: cloud.project.StorageVolumeUsage.StorageVolumeUsage
        export interface StorageVolumeUsage {
            region: string;
            storedBytes: number;
            total: orderPrice;
        }
        //cloud.project.VolumeType
        export type VolumeType = "classic" | "high-speed"
        //cloud.project.VolumeUsageDetail
        // fullName: cloud.project.VolumeUsageDetail.VolumeUsageDetail
        export interface VolumeUsageDetail {
            price: orderPrice;
            volumeCapacity: complexType.UnitAndValue<number>;
            volumeId: string;
            volumeType: cloud.project.VolumeType;
        }
        //cloud.project.VolumesUsage
        // fullName: cloud.project.VolumesUsage.VolumesUsage
        export interface VolumesUsage {
            detail: cloud.project.VolumeUsageDetail[];
            total: orderPrice;
        }
    }
    export namespace quota {
        //cloud.quota.AllowedQuota
        // fullName: cloud.quota.AllowedQuota.AllowedQuota
        export interface AllowedQuota {
            compute: cloud.quota.ComputeQuota;
            name: string;
            network: cloud.quota.NetworkQuota;
            volume: cloud.quota.VolumeQuota;
        }
        //cloud.quota.ComputeQuota
        // fullName: cloud.quota.ComputeQuota.ComputeQuota
        export interface ComputeQuota {
            cores: number;
            instances: number;
            ram: number;
        }
        //cloud.quota.InstanceUsageQuotas
        // fullName: cloud.quota.InstanceUsageQuotas.InstanceUsageQuotas
        export interface InstanceUsageQuotas {
            maxCores: number;
            maxInstances: number;
            maxRam: number;
            usedCores: number;
            usedInstances: number;
            usedRAM: number;
        }
        //cloud.quota.KeypairQuotas
        // fullName: cloud.quota.KeypairQuotas.KeypairQuotas
        export interface KeypairQuotas {
            maxCount: number;
        }
        //cloud.quota.NetworkQuota
        // fullName: cloud.quota.NetworkQuota.NetworkQuota
        export interface NetworkQuota {
            networks: number;
            ports: number;
            subnets: number;
        }
        //cloud.quota.Quotas
        // fullName: cloud.quota.Quotas.Quotas
        export interface Quotas {
            instance?: cloud.quota.InstanceUsageQuotas;
            keypair?: cloud.quota.KeypairQuotas;
            region: string;
            volume?: cloud.quota.VolumeUsageQuotas;
        }
        //cloud.quota.VolumeQuota
        // fullName: cloud.quota.VolumeQuota.VolumeQuota
        export interface VolumeQuota {
            gigabytes: number;
            snapshots: number;
            volumes: number;
        }
        //cloud.quota.VolumeUsageQuotas
        // fullName: cloud.quota.VolumeUsageQuotas.VolumeUsageQuotas
        export interface VolumeUsageQuotas {
            maxGigabytes: number;
            usedGigabytes: number;
            volumeCount: number;
        }
    }
    export namespace role {
        //cloud.role.Permission
        // fullName: cloud.role.Permission.Permission
        export interface Permission {
            label: string;
            roles: string[];
        }
        //cloud.role.Role
        // fullName: cloud.role.Role.Role
        export interface Role {
            description: string;
            id: string;
            name: string;
            permissions: string[];
        }
        //cloud.role.Roles
        // fullName: cloud.role.Roles.Roles
        export interface Roles {
            roles: cloud.role.Role[];
            services: cloud.role.Service[];
        }
        //cloud.role.Service
        // fullName: cloud.role.Service.Service
        export interface Service {
            name: string;
            permissions: cloud.role.Permission[];
        }
    }
    export namespace sshkey {
        //cloud.sshkey.SshKey
        // fullName: cloud.sshkey.SshKey.SshKey
        export interface SshKey {
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
        //cloud.sshkey.SshKeyDetail
        // fullName: cloud.sshkey.SshKeyDetail.SshKeyDetail
        export interface SshKeyDetail {
            fingerPrint: string;
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
    }
    export namespace stack {
        //cloud.stack.Content
        // fullName: cloud.stack.Content.Content
        export interface Content {
            content: string;
            type: string;
        }
        //cloud.stack.InstructionGuide
        // fullName: cloud.stack.InstructionGuide.InstructionGuide
        export interface InstructionGuide {
            content: cloud.stack.Content[];
            language: string;
            sections: cloud.stack.Section[];
            title: string;
        }
        //cloud.stack.Section
        // fullName: cloud.stack.Section.Section
        export interface Section {
            content: cloud.stack.Content[];
            steps: cloud.stack.Step[];
            title: string;
        }
        //cloud.stack.Stack
        // fullName: cloud.stack.Stack.Stack
        export interface Stack {
            commit: string;
            description: string;
            gitRepository: string;
            instructions: cloud.stack.InstructionGuide[];
            name: string;
            release: string;
            uuid: string;
        }
        //cloud.stack.Step
        // fullName: cloud.stack.Step.Step
        export interface Step {
            content: cloud.stack.Content[];
            title: string;
        }
    }
    export namespace storage {
        //cloud.storage.Container
        // fullName: cloud.storage.Container.Container
        export interface Container {
            id: string;
            name: string;
            region: string;
            storedBytes: number;
            storedObjects: number;
        }
        //cloud.storage.ContainerAccess
        // fullName: cloud.storage.ContainerAccess.ContainerAccess
        export interface ContainerAccess {
            endpoints: cloud.storage.Endpoint[];
            token: string;
        }
        //cloud.storage.ContainerDetail
        // fullName: cloud.storage.ContainerDetail.ContainerDetail
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
        //cloud.storage.ContainerObject
        // fullName: cloud.storage.ContainerObject.ContainerObject
        export interface ContainerObject {
            contentType: string;
            lastModified: string;
            name: string;
            retrievalDelay: number;
            retrievalState: cloud.storage.RetrievalStateEnum;
            size: number;
        }
        //cloud.storage.ContainerObjectTempURL
        // fullName: cloud.storage.ContainerObjectTempURL.ContainerObjectTempURL
        export interface ContainerObjectTempURL {
            expirationDate: string;
            getURL: string;
        }
        //cloud.storage.Endpoint
        // fullName: cloud.storage.Endpoint.Endpoint
        export interface Endpoint {
            region: string;
            url: string;
        }
        //cloud.storage.RetrievalStateEnum
        export type RetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        //cloud.storage.RightEnum
        export type RightEnum = "all" | "read" | "write"
        //cloud.storage.TypeEnum
        export type TypeEnum = "static" | "public" | "private"
    }
    export namespace usage {
        //cloud.usage.PaymentTypeEnum
        export type PaymentTypeEnum = "pre" | "post"
        //cloud.usage.Period
        // fullName: cloud.usage.Period.Period
        export interface Period {
            from: string;
            to: string;
        }
        //cloud.usage.UsageBill
        // fullName: cloud.usage.UsageBill.UsageBill
        export interface UsageBill {
            bill_id: string;
            credit: number;
            part: number;
            payment_type: cloud.usage.PaymentTypeEnum;
            total: number;
        }
        //cloud.usage.UsageCurrent
        // fullName: cloud.usage.UsageCurrent.UsageCurrent
        export interface UsageCurrent {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
        }
        //cloud.usage.UsageCurrentBills
        // fullName: cloud.usage.UsageCurrentBills.UsageCurrentBills
        export interface UsageCurrentBills {
            bills: cloud.usage.UsageBill[];
        }
        //cloud.usage.UsageForecast
        // fullName: cloud.usage.UsageForecast.UsageForecast
        export interface UsageForecast {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            usableCredits?: cloud.billingView.UsedCredits;
        }
        //cloud.usage.UsageHistory
        // fullName: cloud.usage.UsageHistory.UsageHistory
        export interface UsageHistory {
            id: string;
            lastUpdate: string;
            period: cloud.usage.Period;
        }
        //cloud.usage.UsageHistoryDetail
        // fullName: cloud.usage.UsageHistoryDetail.UsageHistoryDetail
        export interface UsageHistoryDetail {
            hourlyUsage?: cloud.billingView.HourlyResources;
            id: string;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
        }
        //cloud.usage.UsageHistoryDetailBills
        // fullName: cloud.usage.UsageHistoryDetailBills.UsageHistoryDetailBills
        export interface UsageHistoryDetailBills {
            bills: cloud.usage.UsageBill[];
        }
    }
    export namespace user {
        //cloud.user.Openrc
        // fullName: cloud.user.Openrc.Openrc
        export interface Openrc {
            content: string;
        }
        //cloud.user.OpenrcVersionEnum
        export type OpenrcVersionEnum = "v2.0" | "v3"
        //cloud.user.Rclone
        // fullName: cloud.user.Rclone.Rclone
        export interface Rclone {
            content: string;
        }
        //cloud.user.RoleEnum
        export type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator"
        //cloud.user.User
        // fullName: cloud.user.User.User
        export interface User {
            creationDate: string;
            description: string;
            id: number;
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        //cloud.user.UserDetail
        // fullName: cloud.user.UserDetail.UserDetail
        export interface UserDetail {
            creationDate: string;
            description: string;
            id: number;
            password: string;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        //cloud.user.UserStatusEnum
        export type UserStatusEnum = "creating" | "ok" | "deleting" | "deleted"
    }
    export namespace volume {
        //cloud.volume.Snapshot
        // fullName: cloud.volume.Snapshot.Snapshot
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
        //cloud.volume.SnapshotStatusEnum
        export type SnapshotStatusEnum = "creating" | "available" | "deleting" | "error" | "error_deleting"
        //cloud.volume.Volume
        // fullName: cloud.volume.Volume.Volume
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
        //cloud.volume.VolumeTypeEnum
        export type VolumeTypeEnum = "classic" | "high-speed"
    }
}
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace nichandle {
    //nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace pca {
    //pca.Account
    // fullName: pca.Account.Account
    export interface Account {
        domain: string;
        host: string;
        login: string;
        password: string;
        sshkey?: string;
    }
    //pca.Billing
    // fullName: pca.Billing.Billing
    export interface Billing {
        billed: boolean;
        date: string;
        id: number;
        quantity: number;
        reference: cloud.pca.BillingRefEnum;
        total: number;
    }
    //pca.File
    // fullName: pca.File.File
    export interface File {
        MD5: string;
        SHA1: string;
        SHA256: string;
        id: string;
        name: string;
        size: number;
        state: string;
        type: string;
    }
    //pca.Session
    // fullName: pca.Session.Session
    export interface Session {
        endDate?: string;
        id: string;
        login: string;
        name: string;
        size: number;
        srcIp?: string;
        startDate: string;
        state: cloud.pca.SessionStateEnum;
    }
    //pca.Task
    // fullName: pca.Task.Task
    export interface Task {
        comment?: string;
        function: cloud.pca.FunctionTypeEnum;
        id: string;
        ipAddress?: string;
        login: string;
        status: cloud.pca.TaskStateEnum;
        todoDate: string;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
    // GET /cloud
    $get(): Promise<string[]>;
    agreements: {
        // GET /cloud/agreements
        $get(params: {product: cloud.project.ProductNameEnum}): Promise<cloud.project.ProductAgreements>;
    }
    createProject: {
        // POST /cloud/createProject
        $post(params?: {credit?: number, description?: string, voucher?: string}): Promise<cloud.project.NewProject>;
    }
    createProjectInfo: {
        // GET /cloud/createProjectInfo
        $get(params?: {voucher?: string}): Promise<cloud.project.NewProjectInfo>;
    }
    order: {
        // GET /cloud/order
        $get(params?: {planCode?: string}): Promise<cloud.order.Order[]>;
    }
    price: {
        // GET /cloud/price
        $get(params?: {flavorId?: string, region?: string}): Promise<cloud.Price>;
    }
    project: {
        // GET /cloud/project
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /cloud/project/{serviceName}
            $get(): Promise<cloud.Project>;
            // PUT /cloud/project/{serviceName}
            $put(params?: {access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatus, unleash?: boolean}): Promise<void>;
            acl: {
                // GET /cloud/project/{serviceName}/acl
                $get(params?: {type?: cloud.AclTypeEnum}): Promise<string[]>;
                // POST /cloud/project/{serviceName}/acl
                $post(params: {accountId: string, type: cloud.AclTypeEnum}): Promise<cloud.Acl>;
                $(accountId: string): {
                    // DELETE /cloud/project/{serviceName}/acl/{accountId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/acl/{accountId}
                    $get(): Promise<cloud.Acl>;
                };
            }
            alerting: {
                // GET /cloud/project/{serviceName}/alerting
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/alerting
                $post(params: {delay: cloud.AlertingDelayEnum, email: string, monthlyThreshold: number}): Promise<cloud.Alerting>;
                $(id: string): {
                    // DELETE /cloud/project/{serviceName}/alerting/{id}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/alerting/{id}
                    $get(): Promise<cloud.Alerting>;
                    // PUT /cloud/project/{serviceName}/alerting/{id}
                    $put(params?: {creationDate?: string, delay?: cloud.AlertingDelayEnum, email?: string, formattedMonthlyThreshold?: orderPrice, id?: string, monthlyThreshold?: number}): Promise<void>;
                    alert: {
                        // GET /cloud/project/{serviceName}/alerting/{id}/alert
                        $get(): Promise<number[]>;
                        $(alertId: number): {
                            // GET /cloud/project/{serviceName}/alerting/{id}/alert/{alertId}
                            $get(): Promise<cloud.AlertingAlert>;
                        };
                    }
                };
            }
            bill: {
                // GET /cloud/project/{serviceName}/bill
                $get(params: {from: string, to: string}): Promise<cloud.project.Bill[]>;
            }
            cancel: {
                // POST /cloud/project/{serviceName}/cancel
                $post(): Promise<void>;
            }
            changeContact: {
                // POST /cloud/project/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /cloud/project/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            consumption: {
                // GET /cloud/project/{serviceName}/consumption
                $get(params: {from: string, to: string}): Promise<cloud.project.ProjectUsage>;
            }
            containerRegistry: {
                // GET /cloud/project/{serviceName}/containerRegistry
                $get(): Promise<cloud.containerRegistry.registry.Registry[]>;
                // POST /cloud/project/{serviceName}/containerRegistry
                $post(params: {name: string, region: cloud.containerRegistry.registry.RegionEnum}): Promise<cloud.containerRegistry.registry.Registry>;
                $(registryID: string): {
                    // DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $get(): Promise<cloud.containerRegistry.registry.Registry>;
                    // PUT /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $put(params: {name: string}): Promise<void>;
                    users: {
                        // GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                        $get(): Promise<cloud.containerRegistry.user.User[]>;
                        // POST /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                        $post(params?: {email?: string, login?: string}): Promise<cloud.containerRegistry.user.User>;
                        $(userID: string): {
                            // DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}
                            $delete(): Promise<void>;
                        };
                    }
                };
            }
            credit: {
                // GET /cloud/project/{serviceName}/credit
                $get(): Promise<number[]>;
                // POST /cloud/project/{serviceName}/credit
                $post(params: {code: string}): Promise<void>;
                $(id: number): {
                    // GET /cloud/project/{serviceName}/credit/{id}
                    $get(): Promise<cloud.Credit>;
                };
            }
            flavor: {
                // GET /cloud/project/{serviceName}/flavor
                $get(params?: {region?: string}): Promise<cloud.flavor.Flavor[]>;
                $(flavorId: string): {
                    // GET /cloud/project/{serviceName}/flavor/{flavorId}
                    $get(): Promise<cloud.flavor.Flavor>;
                };
            }
            forecast: {
                // GET /cloud/project/{serviceName}/forecast
                $get(params: {toDate: string}): Promise<cloud.forecast.ProjectForecast>;
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
                $post(params: {flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.InstanceDetail>;
                bulk: {
                    // POST /cloud/project/{serviceName}/instance/bulk
                    $post(params: {flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.Instance[]>;
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
            kube: {
                // GET /cloud/project/{serviceName}/kube
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/kube
                $post(params: {name?: string, region: cloud.kube.Region, version?: cloud.kube.Version}): Promise<cloud.kube.Cluster>;
                regions: {
                    // GET /cloud/project/{serviceName}/kube/regions
                    $get(): Promise<cloud.kube.Region[]>;
                }
                $(kubeId: string): {
                    // DELETE /cloud/project/{serviceName}/kube/{kubeId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/kube/{kubeId}
                    $get(): Promise<cloud.kube.Cluster>;
                    // PUT /cloud/project/{serviceName}/kube/{kubeId}
                    $put(params: {name: string}): Promise<void>;
                    flavors: {
                        // GET /cloud/project/{serviceName}/kube/{kubeId}/flavors
                        $get(): Promise<cloud.kube.Flavor[]>;
                    }
                    kubeconfig: {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig
                        $post(): Promise<cloud.kube.Kubeconfig>;
                    }
                    node: {
                        // GET /cloud/project/{serviceName}/kube/{kubeId}/node
                        $get(): Promise<cloud.kube.Node[]>;
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/node
                        $post(params: {flavorName: string, name?: string}): Promise<cloud.kube.Node>;
                        $(nodeId: string): {
                            // DELETE /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                            $get(): Promise<cloud.kube.Node>;
                        };
                    }
                    reset: {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/reset
                        $post(params?: {version?: cloud.kube.Version, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicy}): Promise<void>;
                    }
                    update: {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/update
                        $post(params?: {strategy?: cloud.kube.UpdateStrategy}): Promise<void>;
                    }
                    updatePolicy: {
                        // PUT /cloud/project/{serviceName}/kube/{kubeId}/updatePolicy
                        $put(params: {updatePolicy: cloud.kube.UpdatePolicy}): Promise<void>;
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
                    }
                    workflow: {
                        backup: {
                            // GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                            $get(): Promise<cloud.Backup[]>;
                            // POST /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                            $post(params: {cron: string, instanceId: string, maxExecutionCount?: number, name: string, rotation: number}): Promise<cloud.Backup>;
                            $(backupWorkflowId: string): {
                                // DELETE /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                $delete(): Promise<void>;
                                // GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                $get(): Promise<cloud.Backup>;
                            };
                        }
                    }
                };
            }
            regionAvailable: {
                // GET /cloud/project/{serviceName}/regionAvailable
                $get(): Promise<cloud.AvailableRegion[]>;
            }
            retain: {
                // POST /cloud/project/{serviceName}/retain
                $post(): Promise<void>;
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
                $(snapshotId: string): {
                    // DELETE /cloud/project/{serviceName}/snapshot/{snapshotId}
                    $delete(): Promise<cloud.image.Image>;
                    // GET /cloud/project/{serviceName}/snapshot/{snapshotId}
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
                        $delete(): Promise<void>;
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
            unleash: {
                // POST /cloud/project/{serviceName}/unleash
                $post(): Promise<void>;
            }
            usage: {
                current: {
                    // GET /cloud/project/{serviceName}/usage/current
                    $get(): Promise<cloud.usage.UsageCurrent>;
                }
                forecast: {
                    // GET /cloud/project/{serviceName}/usage/forecast
                    $get(): Promise<cloud.usage.UsageForecast>;
                }
                history: {
                    // GET /cloud/project/{serviceName}/usage/history
                    $get(params?: {from?: string, to?: string}): Promise<cloud.usage.UsageHistory[]>;
                    $(usageId: string): {
                        // GET /cloud/project/{serviceName}/usage/history/{usageId}
                        $get(): Promise<cloud.usage.UsageHistoryDetail>;
                    };
                }
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
                        $post(params: {roleId: string}): Promise<cloud.user.User>;
                        // PUT /cloud/project/{serviceName}/user/{userId}/role
                        $put(params: {rolesIds: string[]}): Promise<cloud.user.User>;
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
    subsidiaryPrice: {
        // GET /cloud/subsidiaryPrice
        $get(params: {flavorId?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, region?: string}): Promise<cloud.Price>;
    }
    $(serviceName: string | number): {
        pca: {
            // GET /cloud/{serviceName}/pca
            $get(): Promise<string[]>;
            $(pcaServiceName: string): {
                // GET /cloud/{serviceName}/pca/{pcaServiceName}
                $get(): Promise<pca.Account>;
                // PUT /cloud/{serviceName}/pca/{pcaServiceName}
                $put(params?: {domain?: string, host?: string, login?: string, password?: string, sshkey?: string}): Promise<void>;
                billing: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/billing
                    $get(params?: {billed?: boolean, date_from?: string, date_to?: string}): Promise<number[]>;
                    $(billingId: number): {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}
                        $get(): Promise<pca.Billing>;
                    };
                }
                serviceInfos: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                    $get(): Promise<services.Service>;
                    // PUT /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                    $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
                }
                sessions: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions
                    $get(params?: {name?: string}): Promise<string[]>;
                    $(sessionId: string): {
                        // DELETE /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $delete(): Promise<pca.Task>;
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $get(): Promise<pca.Session>;
                        // PUT /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $put(params?: {endDate?: string, id?: string, login?: string, name?: string, size?: number, srcIp?: string, startDate?: string, state?: cloud.pca.SessionStateEnum}): Promise<void>;
                        files: {
                            // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files
                            $get(params?: {name?: string}): Promise<string[]>;
                            $(fileId: string): {
                                // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}
                                $get(): Promise<pca.File>;
                            };
                        }
                        restore: {
                            // POST /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore
                            $post(): Promise<pca.Task>;
                        }
                    };
                }
                tasks: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                    $get(params?: {function_?: cloud.pca.FunctionTypeEnum, status?: cloud.pca.TaskStateEnum, todoDate_from?: string, todoDate_to?: string}): Promise<string[]>;
                    // POST /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                    $post(params: {fileIds: string[], sessionId: string, taskFunction: cloud.pca.TaskTypeEnum}): Promise<pca.Task>;
                    $(taskId: string): {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}
                        $get(): Promise<pca.Task>;
                    };
                }
                usage: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/usage
                    $get(): Promise<number>;
                }
            };
        }
    };
// Api
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  get(path: '/cloud'): () => Promise<string[]>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  get(path: '/cloud/{serviceName}/pca'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Cloud Archives Account
   * Get this object properties
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}'): (params: {pcaServiceName: string, serviceName: string}) => Promise<pca.Account>;
  /**
   * List the pca.Billing objects
   * cloud Archives billing items
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing'): (params: {pcaServiceName: string, serviceName: string, billed?: boolean, date_from?: string, date_to?: string}) => Promise<number[]>;
  /**
   * cloud archives billing
   * Get this object properties
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}'): (params: {billingId: number, pcaServiceName: string, serviceName: string}) => Promise<pca.Billing>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos'): (params: {pcaServiceName: string, serviceName: string}) => Promise<services.Service>;
  /**
   * List the pca.Session objects
   * cloud archives sessions for account
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions'): (params: {pcaServiceName: string, serviceName: string, name?: string}) => Promise<string[]>;
  /**
   * cloud archives sessions
   * Get this object properties
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}'): (params: {pcaServiceName: string, serviceName: string, sessionId: string}) => Promise<pca.Session>;
  /**
   * List the pca.File objects
   * cloud archives files in session
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files'): (params: {pcaServiceName: string, serviceName: string, sessionId: string, name?: string}) => Promise<string[]>;
  /**
   * cloud archives files
   * Get this object properties
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}'): (params: {fileId: string, pcaServiceName: string, serviceName: string, sessionId: string}) => Promise<pca.File>;
  /**
   * List the pca.Task objects
   * cloud archives tasks for account
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks'): (params: {pcaServiceName: string, serviceName: string, function_?: cloud.pca.FunctionTypeEnum, status?: cloud.pca.TaskStateEnum, todoDate_from?: string, todoDate_to?: string}) => Promise<string[]>;
  /**
   * cloud archives tasks
   * Get this object properties
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}'): (params: {pcaServiceName: string, serviceName: string, taskId: string}) => Promise<pca.Task>;
  /**
   * usage operations
   * View account current total sessions usage (bytes)
   */
  get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/usage'): (params: {pcaServiceName: string, serviceName: string}) => Promise<number>;
  /**
   * Get agreements related to a product
   * Get agreements related to a product
   */
  get(path: '/cloud/agreements'): (params: {product: cloud.project.ProductNameEnum}) => Promise<cloud.project.ProductAgreements>;
  /**
   * Get information about a cloud project creation
   * Get information about a cloud project creation
   */
  get(path: '/cloud/createProjectInfo'): (params?: {voucher?: string}) => Promise<cloud.project.NewProjectInfo>;
  /**
   * Missing description
   * Get all cloud pending orders
   */
  get(path: '/cloud/order'): (params?: {planCode?: string}) => Promise<cloud.order.Order[]>;
  /**
   * Get services prices
   * Get services prices
   */
  get(path: '/cloud/price'): (params?: {flavorId?: string, region?: string}) => Promise<cloud.Price>;
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
   * List the cloud.Acl objects
   * Get ACL on your cloud project
   */
  get(path: '/cloud/project/{serviceName}/acl'): (params: {serviceName: string, type?: cloud.AclTypeEnum}) => Promise<string[]>;
  /**
   * Cloud ACL
   * Get this object properties
   */
  get(path: '/cloud/project/{serviceName}/acl/{accountId}'): (params: {accountId: string, serviceName: string}) => Promise<cloud.Acl>;
  /**
   * List the cloud.Alerting objects
   * Manage alerts on your consumption
   */
  get(path: '/cloud/project/{serviceName}/alerting'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Cloud alerting consumption
   * Get this object properties
   */
  get(path: '/cloud/project/{serviceName}/alerting/{id}'): (params: {id: string, serviceName: string}) => Promise<cloud.Alerting>;
  /**
   * List the cloud.AlertingAlert objects
   * See alerts
   */
  get(path: '/cloud/project/{serviceName}/alerting/{id}/alert'): (params: {id: string, serviceName: string}) => Promise<number[]>;
  /**
   * Cloud alert on your consumption
   * Get this object properties
   */
  get(path: '/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}'): (params: {alertId: number, id: string, serviceName: string}) => Promise<cloud.AlertingAlert>;
  /**
   * bill operations
   * Get your project bills
   */
  get(path: '/cloud/project/{serviceName}/bill'): (params: {serviceName: string, from: string, to: string}) => Promise<cloud.project.Bill[]>;
  /**
   * consumption operations
   * Get your project consumption
   */
  get(path: '/cloud/project/{serviceName}/consumption'): (params: {serviceName: string, from: string, to: string}) => Promise<cloud.project.ProjectUsage>;
  /**
   * Manage registries
   * List registries of the project
   */
  get(path: '/cloud/project/{serviceName}/containerRegistry'): (params: {serviceName: string}) => Promise<cloud.containerRegistry.registry.Registry[]>;
  /**
   * Manage a Docker registry
   * Get the registry information
   */
  get(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}'): (params: {registryID: string, serviceName: string}) => Promise<cloud.containerRegistry.registry.Registry>;
  /**
   * Manage users
   * List registry user
   */
  get(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users'): (params: {registryID: string, serviceName: string}) => Promise<cloud.containerRegistry.user.User[]>;
  /**
   * List the cloud.Credit objects
   * Get your credit
   */
  get(path: '/cloud/project/{serviceName}/credit'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Cloud credit
   * Get this object properties
   */
  get(path: '/cloud/project/{serviceName}/credit/{id}'): (params: {id: number, serviceName: string}) => Promise<cloud.Credit>;
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
   * Get your consumption forecast
   */
  get(path: '/cloud/project/{serviceName}/forecast'): (params: {serviceName: string, toDate: string}) => Promise<cloud.forecast.ProjectForecast>;
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
   * Manage your clusters
   * List your managed Kubernetes clusters
   */
  get(path: '/cloud/project/{serviceName}/kube'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Manage your cluster
   * Get information about your managed Kubernetes cluster
   */
  get(path: '/cloud/project/{serviceName}/kube/{kubeId}'): (params: {kubeId: string, serviceName: string}) => Promise<cloud.kube.Cluster>;
  /**
   * List all flavors available
   * List all flavors available
   */
  get(path: '/cloud/project/{serviceName}/kube/{kubeId}/flavors'): (params: {kubeId: string, serviceName: string}) => Promise<cloud.kube.Flavor[]>;
  /**
   * Manage your nodes
   * List your nodes
   */
  get(path: '/cloud/project/{serviceName}/kube/{kubeId}/node'): (params: {kubeId: string, serviceName: string}) => Promise<cloud.kube.Node[]>;
  /**
   * Manage a single node on your cluster
   * Get information on a specific node on your cluster
   */
  get(path: '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}'): (params: {kubeId: string, nodeId: string, serviceName: string}) => Promise<cloud.kube.Node>;
  /**
   * List Kubernetes available regions
   * List Kubernetes available regions
   */
  get(path: '/cloud/project/{serviceName}/kube/regions'): (params: {serviceName: string}) => Promise<cloud.kube.Region[]>;
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
   * Manage your automated backups
   * List your automated backups
   */
  get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup'): (params: {regionName: string, serviceName: string}) => Promise<cloud.Backup[]>;
  /**
   * Manage a backup workflow process
   * Get details about a backup workflow process
   */
  get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}'): (params: {backupWorkflowId: string, regionName: string, serviceName: string}) => Promise<cloud.Backup>;
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
  get(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}'): (params: {serviceName: string, snapshotId: string}) => Promise<cloud.image.Image>;
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
   * Get current usage
   */
  get(path: '/cloud/project/{serviceName}/usage/current'): (params: {serviceName: string}) => Promise<cloud.usage.UsageCurrent>;
  /**
   * Missing description
   * Get usage forecast
   */
  get(path: '/cloud/project/{serviceName}/usage/forecast'): (params: {serviceName: string}) => Promise<cloud.usage.UsageForecast>;
  /**
   * Missing description
   * Usage information on your project
   */
  get(path: '/cloud/project/{serviceName}/usage/history'): (params: {serviceName: string, from?: string, to?: string}) => Promise<cloud.usage.UsageHistory[]>;
  /**
   * Missing description
   * Usage information details
   */
  get(path: '/cloud/project/{serviceName}/usage/history/{usageId}'): (params: {serviceName: string, usageId: string}) => Promise<cloud.usage.UsageHistoryDetail>;
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
   * Get services prices for a subsidiary
   * Get services prices for a subsidiary
   */
  get(path: '/cloud/subsidiaryPrice'): (params: {flavorId?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, region?: string}) => Promise<cloud.Price>;
  /**
   * Cloud Archives Account
   * Alter this object properties
   */
  put(path: '/cloud/{serviceName}/pca/{pcaServiceName}'): (params: {pcaServiceName: string, serviceName: string, domain?: string, host?: string, login?: string, password?: string, sshkey?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos'): (params: {pcaServiceName: string, serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * cloud archives sessions
   * Alter this object properties
   */
  put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}'): (params: {pcaServiceName: string, serviceName: string, sessionId: string, endDate?: string, id?: string, login?: string, name?: string, size?: number, srcIp?: string, startDate?: string, state?: cloud.pca.SessionStateEnum}) => Promise<void>;
  /**
   * Project
   * Alter this object properties
   */
  put(path: '/cloud/project/{serviceName}'): (params: {serviceName: string, access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatus, unleash?: boolean}) => Promise<void>;
  /**
   * Cloud alerting consumption
   * Alter this object properties
   */
  put(path: '/cloud/project/{serviceName}/alerting/{id}'): (params: {id: string, serviceName: string, creationDate?: string, delay?: cloud.AlertingDelayEnum, email?: string, formattedMonthlyThreshold?: orderPrice, monthlyThreshold?: number}) => Promise<void>;
  /**
   * Manage a Docker registry
   * Update the registry
   */
  put(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}'): (params: {registryID: string, serviceName: string, name: string}) => Promise<void>;
  /**
   * Missing description
   * Alter an instance
   */
  put(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {instanceId: string, serviceName: string, instanceName: string}) => Promise<void>;
  /**
   * Manage your cluster
   * Update information about your managed Kubernetes cluster
   */
  put(path: '/cloud/project/{serviceName}/kube/{kubeId}'): (params: {kubeId: string, serviceName: string, name: string}) => Promise<void>;
  /**
   * Manage the update policy of your cluster
   * Change the update policy of your cluster
   */
  put(path: '/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy'): (params: {kubeId: string, serviceName: string, updatePolicy: cloud.kube.UpdatePolicy}) => Promise<void>;
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
  put(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {serviceName: string, userId: number, rolesIds: string[]}) => Promise<cloud.user.User>;
  /**
   * Missing description
   * Update a volume
   */
  put(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {serviceName: string, volumeId: string, description?: string, name?: string}) => Promise<cloud.volume.Volume>;
  /**
   * restore operations
   * Create a restore task for session
   */
  post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore'): (params: {pcaServiceName: string, serviceName: string, sessionId: string}) => Promise<pca.Task>;
  /**
   * List the pca.Task objects
   * Create a cloud archives task
   */
  post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks'): (params: {pcaServiceName: string, serviceName: string, fileIds: string[], sessionId: string, taskFunction: cloud.pca.TaskTypeEnum}) => Promise<pca.Task>;
  /**
   * Start a new cloud project
   * Start a new cloud project
   */
  post(path: '/cloud/createProject'): (params?: {credit?: number, description?: string, voucher?: string}) => Promise<cloud.project.NewProject>;
  /**
   * List the cloud.Acl objects
   * Create new ACL
   */
  post(path: '/cloud/project/{serviceName}/acl'): (params: {serviceName: string, accountId: string, type: cloud.AclTypeEnum}) => Promise<cloud.Acl>;
  /**
   * List the cloud.Alerting objects
   * Add new alert
   */
  post(path: '/cloud/project/{serviceName}/alerting'): (params: {serviceName: string, delay: cloud.AlertingDelayEnum, email: string, monthlyThreshold: number}) => Promise<cloud.Alerting>;
  /**
   * cancel operations
   * Cancel project creation
   */
  post(path: '/cloud/project/{serviceName}/cancel'): (params: {serviceName: string}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/cloud/project/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/cloud/project/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Manage registries
   * Create a new registry
   */
  post(path: '/cloud/project/{serviceName}/containerRegistry'): (params: {serviceName: string, name: string, region: cloud.containerRegistry.registry.RegionEnum}) => Promise<cloud.containerRegistry.registry.Registry>;
  /**
   * Manage users
   * Create a new registry user
   */
  post(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users'): (params: {registryID: string, serviceName: string, email?: string, login?: string}) => Promise<cloud.containerRegistry.user.User>;
  /**
   * List the cloud.Credit objects
   * Add credit to your project
   */
  post(path: '/cloud/project/{serviceName}/credit'): (params: {serviceName: string, code: string}) => Promise<void>;
  /**
   * Missing description
   * Create a new instance
   */
  post(path: '/cloud/project/{serviceName}/instance'): (params: {serviceName: string, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string}) => Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Active monthly billing on instance
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
  post(path: '/cloud/project/{serviceName}/instance/bulk'): (params: {serviceName: string, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string}) => Promise<cloud.instance.Instance[]>;
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
   * Manage your clusters
   * Create a new managed Kubernetes cluster
   */
  post(path: '/cloud/project/{serviceName}/kube'): (params: {serviceName: string, name?: string, region: cloud.kube.Region, version?: cloud.kube.Version}) => Promise<cloud.kube.Cluster>;
  /**
   * Get your cluster configuration
   * Generate kubeconfig file
   */
  post(path: '/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig'): (params: {kubeId: string, serviceName: string}) => Promise<cloud.kube.Kubeconfig>;
  /**
   * Manage your nodes
   * Deploy a node for your cluster
   */
  post(path: '/cloud/project/{serviceName}/kube/{kubeId}/node'): (params: {kubeId: string, serviceName: string, flavorName: string, name?: string}) => Promise<cloud.kube.Node>;
  /**
   * Reset your cluster
   * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
   */
  post(path: '/cloud/project/{serviceName}/kube/{kubeId}/reset'): (params: {kubeId: string, serviceName: string, version?: cloud.kube.Version, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicy}) => Promise<void>;
  /**
   * Update cluster
   * Force cluster and node update to the latest patch within minor version or next minor version
   */
  post(path: '/cloud/project/{serviceName}/kube/{kubeId}/update'): (params: {kubeId: string, serviceName: string, strategy?: cloud.kube.UpdateStrategy}) => Promise<void>;
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
   * Manage your automated backups
   * Create a new automated backup
   */
  post(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup'): (params: {regionName: string, serviceName: string, cron: string, instanceId: string, maxExecutionCount?: number, name: string, rotation: number}) => Promise<cloud.Backup>;
  /**
   * retain operations
   * Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call
   */
  post(path: '/cloud/project/{serviceName}/retain'): (params: {serviceName: string}) => Promise<void>;
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
   * unleash operations
   * Request more quota on your /cloud project
   */
  post(path: '/cloud/project/{serviceName}/unleash'): (params: {serviceName: string}) => Promise<void>;
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
  post(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {serviceName: string, userId: number, roleId: string}) => Promise<cloud.user.User>;
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
   * cloud archives sessions
   * Create a delete task for all files in session
   */
  delete(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}'): (params: {pcaServiceName: string, serviceName: string, sessionId: string}) => Promise<pca.Task>;
  /**
   * Cloud ACL
   * Delete ACL
   */
  delete(path: '/cloud/project/{serviceName}/acl/{accountId}'): (params: {accountId: string, serviceName: string}) => Promise<void>;
  /**
   * Cloud alerting consumption
   * Delete alerting
   */
  delete(path: '/cloud/project/{serviceName}/alerting/{id}'): (params: {id: string, serviceName: string}) => Promise<void>;
  /**
   * Manage a Docker registry
   * Delete a registry
   */
  delete(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}'): (params: {registryID: string, serviceName: string}) => Promise<void>;
  /**
   * Manage users
   * Delete a registry user
   */
  delete(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}'): (params: {registryID: string, serviceName: string, userID: string}) => Promise<void>;
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
   * Manage your cluster
   * Delete your managed Kubernetes cluster
   */
  delete(path: '/cloud/project/{serviceName}/kube/{kubeId}'): (params: {kubeId: string, serviceName: string}) => Promise<void>;
  /**
   * Manage a single node on your cluster
   * Delete a node on your cluster
   */
  delete(path: '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}'): (params: {kubeId: string, nodeId: string, serviceName: string}) => Promise<void>;
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
   * Manage a backup workflow process
   * Delete a backup workflow process
   */
  delete(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}'): (params: {backupWorkflowId: string, regionName: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete a snapshot
   */
  delete(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}'): (params: {serviceName: string, snapshotId: string}) => Promise<cloud.image.Image>;
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
/**
 * classic Model
 */type orderPrice = order.Price;
