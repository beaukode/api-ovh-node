import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/logs Models
 * Source: https://api.us.ovhcloud.com/1.0/dbaas/logs.json
 */
export namespace dbaas {
    export namespace logs {
        // interface fullName: dbaas.logs.Alias.Alias
        export interface Alias {
            aliasId: string;
            createdAt: string;
            description?: string;
            isEditable: boolean;
            isShareable: boolean;
            name: string;
            optionId?: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.AllowedNetwork.AllowedNetwork
        export interface AllowedNetwork {
            allowedNetworkId: string;
            network: string;
        }
        // interface fullName: dbaas.logs.Archive.Archive
        export interface Archive {
            archiveId: string;
            createdAt?: string;
            filename: string;
            md5: string;
            retrievalDelay: number;
            retrievalState: dbaas.logs.ArchiveRetrievalStateEnum;
            sha256: string;
            size: number;
        }
        // type fullname: dbaas.logs.ArchiveRetrievalStateEnum
        export type ArchiveRetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        // interface fullName: dbaas.logs.ArchiveUrl.ArchiveUrl
        export interface ArchiveUrl {
            expirationDate: string;
            url: string;
        }
        // interface fullName: dbaas.logs.Cluster.Cluster
        export interface Cluster {
            clusterId: string;
            clusterType: dbaas.logs.ClusterClusterTypeEnum;
            dedicatedInputPEM: string;
            directInputPEM: string;
            hostname: string;
            isDefault: boolean;
            isUnlocked: boolean;
            region: dbaas.logs.ClusterRegionEnum;
        }
        // interface fullName: dbaas.logs.ClusterAllowedNetwork.ClusterAllowedNetwork
        export interface ClusterAllowedNetwork {
            allowedNetworkId: string;
            flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network: string;
        }
        // type fullname: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum
        export type ClusterAllowedNetworkFlowTypeEnum = "QUERY" | "DIRECT_INPUT" | "ALL"
        // type fullname: dbaas.logs.ClusterClusterTypeEnum
        export type ClusterClusterTypeEnum = "TRIAL" | "PRO" | "DEDICATED"
        // type fullname: dbaas.logs.ClusterRegionEnum
        export type ClusterRegionEnum = "GRA" | "RBX" | "BHS" | "SBG" | "P-19"
        // interface fullName: dbaas.logs.Dashboard.Dashboard
        export interface Dashboard {
            createdAt: string;
            dashboardId: string;
            description: string;
            isEditable: boolean;
            isShareable: boolean;
            optionId?: string;
            title: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.Engine.Engine
        export interface Engine {
            engineId: string;
            isDeprecated: boolean;
            name: dbaas.logs.EngineNameEnum;
            version: string;
        }
        // type fullname: dbaas.logs.EngineNameEnum
        export type EngineNameEnum = "FLOWGGER" | "LOGSTASH" | "TEST"
        // interface fullName: dbaas.logs.FlowggerConfiguration.FlowggerConfiguration
        export interface FlowggerConfiguration {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        // type fullname: dbaas.logs.FlowggerConfigurationLogFormatEnum
        export type FlowggerConfigurationLogFormatEnum = "RFC5424" | "LTSV" | "GELF" | "CAPNP"
        // type fullname: dbaas.logs.FlowggerConfigurationLogFramingEnum
        export type FlowggerConfigurationLogFramingEnum = "LINE" | "NUL" | "SYSLEN" | "CAPNP"
        // interface fullName: dbaas.logs.Index.Index
        export interface Index {
            alertNotifyEnabled?: boolean;
            createdAt: string;
            description?: string;
            indexId: string;
            isEditable: boolean;
            isShareable: boolean;
            maxSize: number;
            name: string;
            optionId?: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.Input.Input
        export interface Input {
            createdAt: string;
            description: string;
            engineId: string;
            exposedPort?: string;
            hostname: string;
            inputId: string;
            isRestartRequired: boolean;
            optionId?: string;
            publicAddress: string;
            singleInstanceEnabled?: boolean;
            sslCertificate: string;
            status: dbaas.logs.InputStatusEnum;
            streamId: string;
            title: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.InputAction.InputAction
        export interface InputAction {
            isAllowed: boolean;
            type: dbaas.logs.InputActionTypeEnum;
        }
        // type fullname: dbaas.logs.InputActionTypeEnum
        export type InputActionTypeEnum = "END" | "LOG" | "START" | "TEST" | "DESTROY" | "RESTART"
        // type fullname: dbaas.logs.InputStatusEnum
        export type InputStatusEnum = "INIT" | "PENDING" | "RUNNING" | "PROCESSING"
        // interface fullName: dbaas.logs.LogstashConfiguration.LogstashConfiguration
        export interface LogstashConfiguration {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        // interface fullName: dbaas.logs.Member.Member
        export interface Member {
            note?: string;
            username: string;
        }
        // interface fullName: dbaas.logs.Offer.Offer
        export interface Offer {
            curNbAlias: number;
            curNbDashboard: number;
            curNbIndex: number;
            curNbInput: number;
            curNbRole: number;
            curNbStream: number;
            esStorage?: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            reference: string;
            retention?: number;
        }
        // interface fullName: dbaas.logs.Operation.Operation
        export interface Operation {
            aliasId?: string;
            createdAt: string;
            dashboardId?: string;
            indexId?: string;
            inputId?: string;
            operationId: string;
            optionId?: string;
            roleId?: string;
            state: dbaas.logs.OperationStateEnum;
            streamId?: string;
            updatedAt?: string;
        }
        // type fullname: dbaas.logs.OperationStateEnum
        export type OperationStateEnum = "PENDING" | "RECEIVED" | "STARTED" | "SUCCESS" | "FAILURE" | "REVOKED" | "RETRY" | "RUNNING"
        // interface fullName: dbaas.logs.Option.Option
        export interface Option {
            createdAt: string;
            curNbAlias: number;
            curNbDashboard: number;
            curNbIndex: number;
            curNbInput: number;
            curNbRole: number;
            curNbStream: number;
            indexSize?: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            optionId: string;
            reference: string;
            state: dbaas.logs.OptionStateEnum;
            updatedAt?: string;
        }
        // type fullname: dbaas.logs.OptionStateEnum
        export type OptionStateEnum = "ENABLED" | "DISABLED"
        // interface fullName: dbaas.logs.Permission.Permission
        export interface Permission {
            aliasId?: string;
            dashboardId?: string;
            indexId?: string;
            permissionId: string;
            streamId?: string;
        }
        // type fullname: dbaas.logs.PermissionDashboardPermissionTypeEnum
        export type PermissionDashboardPermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        // type fullname: dbaas.logs.PermissionIndexPermissionTypeEnum
        export type PermissionIndexPermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        // interface fullName: dbaas.logs.PublicOffer.PublicOffer
        export interface PublicOffer {
            esStorage: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            reference: string;
        }
        // interface fullName: dbaas.logs.Quota.Quota
        export interface Quota {
            curNbAlias: number;
            curNbDashboard: number;
            curNbIndex: number;
            curNbInput: number;
            curNbRole: number;
            curNbStream: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
        }
        // interface fullName: dbaas.logs.Role.Role
        export interface Role {
            description: string;
            name: string;
            optionId?: string;
            roleId: string;
        }
        // interface fullName: dbaas.logs.Service.Service
        export interface Service {
            createdAt: string;
            displayName?: string;
            isCapped: boolean;
            serviceName: string;
            state?: dbaas.logs.ServiceStateEnum;
            updatedAt?: string;
            username: string;
        }
        // interface fullName: dbaas.logs.ServiceMetric.ServiceMetric
        export interface ServiceMetric {
            host: string;
            token: string;
        }
        // type fullname: dbaas.logs.ServiceStateEnum
        export type ServiceStateEnum = "INIT" | "TO_CONFIG" | "ENABLED" | "DISABLED"
        // interface fullName: dbaas.logs.Stream.Stream
        export interface Stream {
            canAlert: boolean;
            coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum;
            createdAt: string;
            description: string;
            indexingEnabled?: boolean;
            isEditable: boolean;
            isShareable: boolean;
            nbArchive: number;
            optionId?: string;
            parentStreamId?: string;
            streamId: string;
            title: string;
            updatedAt?: string;
            webSocketEnabled?: boolean;
        }
        // interface fullName: dbaas.logs.StreamAlertCondition.StreamAlertCondition
        export interface StreamAlertCondition {
            alertId: string;
            backlog: number;
            conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title: string;
            value?: string;
        }
        // type fullname: dbaas.logs.StreamAlertConditionConditionTypeEnum
        export type StreamAlertConditionConditionTypeEnum = "MESSAGE_COUNT" | "FIELD_VALUE" | "FIELD_CONTENT_VALUE"
        // type fullname: dbaas.logs.StreamAlertConditionConstraintTypeEnum
        export type StreamAlertConditionConstraintTypeEnum = "MEAN" | "MIN" | "MAX" | "SUM" | "STDDEV"
        // type fullname: dbaas.logs.StreamAlertConditionThresholdTypeEnum
        export type StreamAlertConditionThresholdTypeEnum = "MORE" | "LESS" | "LOWER" | "HIGHER"
        // type fullname: dbaas.logs.StreamColdStorageCompressionEnum
        export type StreamColdStorageCompressionEnum = "LZMA" | "GZIP" | "DEFLATED" | "ZSTD"
        // type fullname: dbaas.logs.StreamColdStorageContentEnum
        export type StreamColdStorageContentEnum = "ALL" | "GELF" | "PLAIN"
        // type fullname: dbaas.logs.StreamColdStorageTargetEnum
        export type StreamColdStorageTargetEnum = "PCA" | "PCS"
        // interface fullName: dbaas.logs.StreamRule.StreamRule
        export interface StreamRule {
            field: string;
            isInverted?: boolean;
            operator?: dbaas.logs.StreamRuleOperatorEnum;
            ruleId: string;
            value: string;
        }
        // type fullname: dbaas.logs.StreamRuleOperatorEnum
        export type StreamRuleOperatorEnum = "MATCH_EXACTLY" | "GREATER_THAN" | "SMALLER_THAN" | "FIELD_PRESENCE"
        // interface fullName: dbaas.logs.TemporaryLogsLink.TemporaryLogsLink
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        // interface fullName: dbaas.logs.TestResult.TestResult
        export interface TestResult {
            stderr?: string;
            stdout?: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.Token.Token
        export interface Token {
            clusterId?: string;
            createdAt: string;
            name: string;
            tokenId: string;
            updatedAt?: string;
            value: string;
        }
        // interface fullName: dbaas.logs.Url.Url
        export interface Url {
            address: string;
            type: dbaas.logs.UrlTypeEnum;
        }
        // type fullname: dbaas.logs.UrlTypeEnum
        export type UrlTypeEnum = "GRAYLOG_WEBUI" | "GRAYLOG_API" | "ELASTICSEARCH_API" | "KIBANA_WEBUI" | "CONSOLE" | "WEB_SOCKET" | "SERVICE_DOMAIN" | "TCP_TLS_GELF" | "TCP_GELF" | "UDP_GELF" | "TCP_TLS_RFC5424" | "TCP_RFC5424" | "UDP_RFC5424" | "TCP_TLS_LTSV_LINE" | "TCP_TLS_LTSV_NUL" | "TCP_LTSV_LINE" | "TCP_LTSV_NUL" | "TCP_TLS_CAP_N_PROTO" | "TCP_CAP_N_PROTO" | "UDP_LTSV_NUL" | "UDP_LTSV_LINE" | "UDP_CAP_N_PROTO" | "HTTP_GELF" | "HTTP_TLS_GELF" | "TCP_BEATS" | "TCP_TLS_BEATS"
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
 * END API /dbaas/logs Models
 */
export function proxyDbaasLogs(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasLogs;
/**
 * Api Proxy model
 */// Apis harmony
// path /dbaas
export interface Dbaas{
    logs: {
        // GET /dbaas/logs
        $get(): Promise<string[]>;
        input: {
            engine: {
                // GET /dbaas/logs/input/engine
                $get(): Promise<string[]>;
                $(engineId: string): {
                    // GET /dbaas/logs/input/engine/{engineId}
                    $get(): Promise<dbaas.logs.Engine>;
                };
            }
        }
        offer: {
            $(reference: string): {
                // GET /dbaas/logs/offer/{reference}
                $get(): Promise<dbaas.logs.PublicOffer>;
            };
        }
        $(serviceName: string): {
            // GET /dbaas/logs/{serviceName}
            $get(): Promise<dbaas.logs.Service>;
            // PUT /dbaas/logs/{serviceName}
            $put(params?: {displayName?: string, isCapped?: boolean}): Promise<dbaas.logs.Operation>;
            cluster: {
                // GET /dbaas/logs/{serviceName}/cluster
                $get(): Promise<string[]>;
                $(clusterId: string): {
                    // GET /dbaas/logs/{serviceName}/cluster/{clusterId}
                    $get(): Promise<dbaas.logs.Cluster>;
                    allowedNetwork: {
                        // GET /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork
                        $post(params: {flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum, network: string}): Promise<dbaas.logs.Operation>;
                        $(allowedNetworkId: string): {
                            // DELETE /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}
                            $get(): Promise<dbaas.logs.ClusterAllowedNetwork>;
                        };
                    }
                };
            }
            input: {
                // GET /dbaas/logs/{serviceName}/input
                $get(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/input
                $post(params: {autoSelectOption?: boolean, description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}): Promise<dbaas.logs.Operation>;
                $(inputId: string): {
                    // DELETE /dbaas/logs/{serviceName}/input/{inputId}
                    $delete(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/input/{inputId}
                    $get(): Promise<dbaas.logs.Input>;
                    // PUT /dbaas/logs/{serviceName}/input/{inputId}
                    $put(params: {description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}): Promise<dbaas.logs.Operation>;
                    action: {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/action
                        $get(): Promise<dbaas.logs.InputAction[]>;
                    }
                    allowedNetwork: {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork
                        $post(params: {network: string}): Promise<dbaas.logs.Operation>;
                        $(allowedNetworkId: string): {
                            // DELETE /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}
                            $get(): Promise<dbaas.logs.AllowedNetwork>;
                        };
                    }
                    configtest: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/configtest
                        $post(): Promise<dbaas.logs.Operation>;
                        result: {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configtest/result
                            $get(): Promise<dbaas.logs.TestResult>;
                        }
                    }
                    configuration: {
                        flowgger: {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                            $get(): Promise<dbaas.logs.FlowggerConfiguration>;
                            // PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                            $put(params: {logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum, logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum}): Promise<dbaas.logs.Operation>;
                        }
                        logstash: {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                            $get(): Promise<dbaas.logs.LogstashConfiguration>;
                            // PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                            $put(params: {filterSection?: string, inputSection: string, patternSection?: string}): Promise<dbaas.logs.Operation>;
                        }
                    }
                    end: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/end
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    logs: {
                        url: {
                            // POST /dbaas/logs/{serviceName}/input/{inputId}/logs/url
                            $post(): Promise<dbaas.logs.TemporaryLogsLink>;
                        }
                    }
                    restart: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/restart
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    start: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/start
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    url: {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/url
                        $get(): Promise<dbaas.logs.Url[]>;
                    }
                };
            }
            metrics: {
                // GET /dbaas/logs/{serviceName}/metrics
                $get(): Promise<dbaas.logs.ServiceMetric>;
            }
            offer: {
                // GET /dbaas/logs/{serviceName}/offer
                $get(): Promise<dbaas.logs.Offer>;
            }
            operation: {
                // GET /dbaas/logs/{serviceName}/operation
                $get(): Promise<string[]>;
                $(operationId: string): {
                    // GET /dbaas/logs/{serviceName}/operation/{operationId}
                    $get(): Promise<dbaas.logs.Operation>;
                };
            }
            option: {
                // GET /dbaas/logs/{serviceName}/option
                $get(): Promise<string[]>;
                $(optionId: string): {
                    // GET /dbaas/logs/{serviceName}/option/{optionId}
                    $get(): Promise<dbaas.logs.Option>;
                    terminate: {
                        // POST /dbaas/logs/{serviceName}/option/{optionId}/terminate
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                };
            }
            output: {
                elasticsearch: {
                    alias: {
                        // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias
                        $post(params: {autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}): Promise<dbaas.logs.Operation>;
                        $(aliasId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            $get(): Promise<dbaas.logs.Alias>;
                            // PUT /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            $put(params: {description: string, optionId?: string}): Promise<dbaas.logs.Operation>;
                            index: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                $post(params: {indexId: string}): Promise<dbaas.logs.Operation>;
                                $(indexId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            stream: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                $post(params: {streamId: string}): Promise<dbaas.logs.Operation>;
                                $(streamId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                    index: {
                        // GET /dbaas/logs/{serviceName}/output/elasticsearch/index
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/elasticsearch/index
                        $post(params: {alertNotifyEnabled?: boolean, autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}): Promise<dbaas.logs.Operation>;
                        $(indexId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            $get(): Promise<dbaas.logs.Index>;
                            // PUT /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            $put(params: {alertNotifyEnabled?: boolean, description: string}): Promise<dbaas.logs.Operation>;
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                }
                graylog: {
                    dashboard: {
                        // GET /dbaas/logs/{serviceName}/output/graylog/dashboard
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/graylog/dashboard
                        $post(params: {autoSelectOption?: boolean, description: string, optionId?: string, title: string}): Promise<dbaas.logs.Operation>;
                        $(dashboardId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            $get(): Promise<dbaas.logs.Dashboard>;
                            // PUT /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            $put(params: {description: string, optionId?: string, title: string}): Promise<dbaas.logs.Operation>;
                            duplicate: {
                                // POST /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate
                                $post(params: {autoSelectOption?: boolean, description: string, optionId?: string, streamId?: string, title: string}): Promise<dbaas.logs.Operation>;
                            }
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                    stream: {
                        // GET /dbaas/logs/{serviceName}/output/graylog/stream
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/graylog/stream
                        $post(params: {autoSelectOption?: boolean, coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, parentStreamId?: string, title: string, webSocketEnabled?: boolean}): Promise<dbaas.logs.Operation>;
                        $(streamId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            $get(): Promise<dbaas.logs.Stream>;
                            // PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            $put(params: {coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, title: string, webSocketEnabled?: boolean}): Promise<dbaas.logs.Operation>;
                            alert: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                $post(params: {backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}): Promise<dbaas.logs.Operation>;
                                $(alertId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    $get(): Promise<dbaas.logs.StreamAlertCondition>;
                                    // PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    $put(params: {backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}): Promise<dbaas.logs.Operation>;
                                };
                            }
                            archive: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive
                                $get(): Promise<string[]>;
                                $(archiveId: string): {
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
                                    $get(): Promise<dbaas.logs.Archive>;
                                    url: {
                                        // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url
                                        $post(): Promise<dbaas.logs.ArchiveUrl>;
                                    }
                                };
                            }
                            rule: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                $post(params: {field: string, isInverted?: boolean, operator: dbaas.logs.StreamRuleOperatorEnum, value: string}): Promise<dbaas.logs.Operation>;
                                $(ruleId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                    $get(): Promise<dbaas.logs.StreamRule[]>;
                                };
                            }
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                }
            }
            quota: {
                // GET /dbaas/logs/{serviceName}/quota
                $get(): Promise<dbaas.logs.Quota>;
            }
            role: {
                // GET /dbaas/logs/{serviceName}/role
                $get(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/role
                $post(params: {autoSelectOption?: boolean, description: string, name: string, optionId?: string}): Promise<dbaas.logs.Operation>;
                $(roleId: string): {
                    // DELETE /dbaas/logs/{serviceName}/role/{roleId}
                    $delete(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/role/{roleId}
                    $get(): Promise<dbaas.logs.Role>;
                    // PUT /dbaas/logs/{serviceName}/role/{roleId}
                    $put(params: {description: string, name: string, optionId?: string}): Promise<dbaas.logs.Operation>;
                    member: {
                        // GET /dbaas/logs/{serviceName}/role/{roleId}/member
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/role/{roleId}/member
                        $post(params: {note?: string, username: string}): Promise<dbaas.logs.Operation>;
                        $(username: string): {
                            // DELETE /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            $get(): Promise<dbaas.logs.Member>;
                            // PUT /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            $put(params?: {note?: string}): Promise<dbaas.logs.Operation>;
                        };
                    }
                    permission: {
                        // GET /dbaas/logs/{serviceName}/role/{roleId}/permission
                        $get(): Promise<string[]>;
                        alias: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/alias
                            $post(params: {aliasId: string}): Promise<dbaas.logs.Operation>;
                        }
                        dashboard: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard
                            $post(params: {dashboardId: string, permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum}): Promise<dbaas.logs.Operation>;
                        }
                        index: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/index
                            $post(params: {indexId: string, permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum}): Promise<dbaas.logs.Operation>;
                        }
                        stream: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/stream
                            $post(params: {streamId: string}): Promise<dbaas.logs.Operation>;
                        }
                        $(permissionId: string): {
                            // DELETE /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                            $get(): Promise<dbaas.logs.Permission[]>;
                        };
                    }
                };
            }
            serviceInfos: {
                // GET /dbaas/logs/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dbaas/logs/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            token: {
                // GET /dbaas/logs/{serviceName}/token
                $get(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/token
                $post(params: {clusterId?: string, name: string}): Promise<dbaas.logs.Operation>;
                $(tokenId: string): {
                    // DELETE /dbaas/logs/{serviceName}/token/{tokenId}
                    $delete(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/token/{tokenId}
                    $get(): Promise<dbaas.logs.Token>;
                };
            }
            url: {
                // GET /dbaas/logs/{serviceName}/url
                $get(): Promise<dbaas.logs.Url[]>;
            }
            user: {
                changePassword: {
                    // POST /dbaas/logs/{serviceName}/user/changePassword
                    $post(params: {password: string}): Promise<dbaas.logs.Operation>;
                }
            }
        };
    }
// Api
  /**
   * Operations about the DBAAS-LOGS service
   * List available services
   */
  get(path: '/dbaas/logs'): () => Promise<string[]>;
  /**
   * Operations about the DBAAS-LOGS service
   * Returns the service object of connected identity.
   */
  get(path: '/dbaas/logs/{serviceName}'): (params: {serviceName: string}) => Promise<dbaas.logs.Service>;
  /**
   * Service Clusters
   * Returns the list of allowed cluster
   */
  get(path: '/dbaas/logs/{serviceName}/cluster'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Service Clusters
   * Returns details of an allowed cluster
   */
  get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}'): (params: {clusterId: string, serviceName: string}) => Promise<dbaas.logs.Cluster>;
  /**
   * Cluster allowed networks
   * List all the network ID allowed to contact given cluster
   */
  get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork'): (params: {clusterId: string, serviceName: string}) => Promise<string[]>;
  /**
   * Cluster allowed networks
   * Returns details of an allowed network
   */
  get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}'): (params: {allowedNetworkId: string, clusterId: string, serviceName: string}) => Promise<dbaas.logs.ClusterAllowedNetwork>;
  /**
   * Inputs
   * Returns the list of registered input attached to the logged user
   */
  get(path: '/dbaas/logs/{serviceName}/input'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Input
   * Returns details of specified input
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Input>;
  /**
   * InputActions
   * Returns actions of specified input
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/action'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.InputAction[]>;
  /**
   * InputAllowedNetworks
   * List all network ID allowed to join input
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork'): (params: {inputId: string, serviceName: string}) => Promise<string[]>;
  /**
   * InputAllowedNetwork
   * List all network ID allowed to join input
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}'): (params: {allowedNetworkId: string, inputId: string, serviceName: string}) => Promise<dbaas.logs.AllowedNetwork>;
  /**
   * InputConfigtestResult
   * Returns the config test operation result
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest/result'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.TestResult>;
  /**
   * FlowggerConfiguration
   * Returns the flowgger configuration
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.FlowggerConfiguration>;
  /**
   * LogstashConfiguration
   * Returns the logstash configuration
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.LogstashConfiguration>;
  /**
   * InputUrls
   * Returns the list of urls of specified input
   */
  get(path: '/dbaas/logs/{serviceName}/input/{inputId}/url'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Url[]>;
  /**
   * Service Metrics
   * Returns Metrics credentials
   */
  get(path: '/dbaas/logs/{serviceName}/metrics'): (params: {serviceName: string}) => Promise<dbaas.logs.ServiceMetric>;
  /**
   * ServiceOffer
   * Returns the subscribed offer
   */
  get(path: '/dbaas/logs/{serviceName}/offer'): (params: {serviceName: string}) => Promise<dbaas.logs.Offer>;
  /**
   * Operations
   * Latest operations
   */
  get(path: '/dbaas/logs/{serviceName}/operation'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Operation
   * Returns details of specified operation
   */
  get(path: '/dbaas/logs/{serviceName}/operation/{operationId}'): (params: {operationId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * ServiceOptions
   * Returns the subscribed additional options
   */
  get(path: '/dbaas/logs/{serviceName}/option'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * ServiceOption
   * Returns details of a subscribed option
   */
  get(path: '/dbaas/logs/{serviceName}/option/{optionId}'): (params: {optionId: string, serviceName: string}) => Promise<dbaas.logs.Option>;
  /**
   * Aliases
   * Returns the list of alias for connected user
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Alias
   * Returns specified elasticsearch alias
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}'): (params: {aliasId: string, serviceName: string}) => Promise<dbaas.logs.Alias>;
  /**
   * AliasStreams
   * Returns the list of elasticsearch indexes attached to specified
        elasticsearch alias
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index'): (params: {aliasId: string, serviceName: string}) => Promise<string[]>;
  /**
   * AliasStreams
   * Returns the list of graylog streams attached to specified
        elasticsearch alias
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream'): (params: {aliasId: string, serviceName: string}) => Promise<string[]>;
  /**
   * StreamUrls
   * Returns the list of urls of specified graylog stream
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url'): (params: {aliasId: string, serviceName: string}) => Promise<dbaas.logs.Url[]>;
  /**
   * Indexes
   * Returns the list of elasticsearch indexes
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Index
   * Returns specified elasticsearch index
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}'): (params: {indexId: string, serviceName: string}) => Promise<dbaas.logs.Index>;
  /**
   * StreamUrls
   * Returns the list of urls of specified graylog stream
   */
  get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url'): (params: {indexId: string, serviceName: string}) => Promise<dbaas.logs.Url[]>;
  /**
   * Dashboards
   * Returns the list of graylog dashboards
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Dashboard
   * Returns details of specified graylog dashboard
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}'): (params: {dashboardId: string, serviceName: string}) => Promise<dbaas.logs.Dashboard>;
  /**
   * DashboardUrls
   * Returns the list of urls of specified graylog dashboard
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url'): (params: {dashboardId: string, serviceName: string}) => Promise<dbaas.logs.Url[]>;
  /**
   * Streams
   * Returns the list of graylog streams
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Stream
   * Returns details of specified graylog stream
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}'): (params: {serviceName: string, streamId: string}) => Promise<dbaas.logs.Stream>;
  /**
   * StreamAlerts
   * Returns the list of configured alerts of specified graylog stream
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert'): (params: {serviceName: string, streamId: string}) => Promise<string[]>;
  /**
   * StreamAlert
   * Returns details of specified graylog stream alert
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}'): (params: {alertId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.StreamAlertCondition>;
  /**
   * StreamArchives
   * Returns the list of archives
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive'): (params: {serviceName: string, streamId: string}) => Promise<string[]>;
  /**
   * StreamArchive
   * Returns details of specified archive
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}'): (params: {archiveId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.Archive>;
  /**
   * StreamRules
   * Returns the list of rules of specified graylog stream
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule'): (params: {serviceName: string, streamId: string}) => Promise<string[]>;
  /**
   * StreamRule
   * Returns details of specified graylog stream rule
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}'): (params: {ruleId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.StreamRule[]>;
  /**
   * StreamUrls
   * Returns the list of urls of specified graylog stream
   */
  get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url'): (params: {serviceName: string, streamId: string}) => Promise<dbaas.logs.Url[]>;
  /**
   * ServiceQuota
   * Returns the overall quota limits
   */
  get(path: '/dbaas/logs/{serviceName}/quota'): (params: {serviceName: string}) => Promise<dbaas.logs.Quota>;
  /**
   * Roles
   * Returns the list of roles
   */
  get(path: '/dbaas/logs/{serviceName}/role'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Role
   * Returns details of specified role
   */
  get(path: '/dbaas/logs/{serviceName}/role/{roleId}'): (params: {roleId: string, serviceName: string}) => Promise<dbaas.logs.Role>;
  /**
   * RoleMembers
   * Returns the member list of specified role
   */
  get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member'): (params: {roleId: string, serviceName: string}) => Promise<string[]>;
  /**
   * RoleMember
   * Returns the member metadata
   */
  get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}'): (params: {roleId: string, serviceName: string, username: string}) => Promise<dbaas.logs.Member>;
  /**
   * RolePermissions
   * Returns the list of permissions of specified role
   */
  get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission'): (params: {roleId: string, serviceName: string}) => Promise<string[]>;
  /**
   * RolePermission
   * Returns details of specified permission
   */
  get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}'): (params: {permissionId: string, roleId: string, serviceName: string}) => Promise<dbaas.logs.Permission[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dbaas/logs/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Tokens
   * Returns the list of service tokens
   */
  get(path: '/dbaas/logs/{serviceName}/token'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Token
   * Returns the specified token
   */
  get(path: '/dbaas/logs/{serviceName}/token/{tokenId}'): (params: {serviceName: string, tokenId: string}) => Promise<dbaas.logs.Token>;
  /**
   * ServiceUrls
   * Returns platform useful urls.
   */
  get(path: '/dbaas/logs/{serviceName}/url'): (params: {serviceName: string}) => Promise<dbaas.logs.Url[]>;
  /**
   * Engines
   * Returns the list of available input engines
   */
  get(path: '/dbaas/logs/input/engine'): () => Promise<string[]>;
  /**
   * Engine
   * Returns details of specified input engine
   */
  get(path: '/dbaas/logs/input/engine/{engineId}'): (params: {engineId: string}) => Promise<dbaas.logs.Engine>;
  /**
   * Offer
   * Display specified offer
   */
  get(path: '/dbaas/logs/offer/{reference}'): (params: {reference: string}) => Promise<dbaas.logs.PublicOffer>;
  /**
   * Operations about the DBAAS-LOGS service
   * Update the service properties
   */
  put(path: '/dbaas/logs/{serviceName}'): (params: {serviceName: string, displayName?: string, isCapped?: boolean}) => Promise<dbaas.logs.Operation>;
  /**
   * Input
   * Update information of specified input object
   */
  put(path: '/dbaas/logs/{serviceName}/input/{inputId}'): (params: {inputId: string, serviceName: string, description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}) => Promise<dbaas.logs.Operation>;
  /**
   * FlowggerConfiguration
   * Update the flowgger configuration
   */
  put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger'): (params: {inputId: string, serviceName: string, logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum, logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum}) => Promise<dbaas.logs.Operation>;
  /**
   * LogstashConfiguration
   * Update the logstash configuration
   */
  put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash'): (params: {inputId: string, serviceName: string, filterSection?: string, inputSection: string, patternSection?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Alias
   * Update specified elasticsearch alias
   */
  put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}'): (params: {aliasId: string, serviceName: string, description: string, optionId?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Index
   * Update specified elasticsearch index
   */
  put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}'): (params: {indexId: string, serviceName: string, alertNotifyEnabled?: boolean, description: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Dashboard
   * Update information of specified graylog dashboard
   */
  put(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}'): (params: {dashboardId: string, serviceName: string, description: string, optionId?: string, title: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Stream
   * Update information of specified graylog stream
   */
  put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}'): (params: {serviceName: string, streamId: string, coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, title: string, webSocketEnabled?: boolean}) => Promise<dbaas.logs.Operation>;
  /**
   * StreamAlert
   * Update alert information of specified graylog stream
   */
  put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}'): (params: {alertId: string, serviceName: string, streamId: string, backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Role
   * Update information of specified role
   */
  put(path: '/dbaas/logs/{serviceName}/role/{roleId}'): (params: {roleId: string, serviceName: string, description: string, name: string, optionId?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * RoleMember
   * Update the member metadata
   */
  put(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}'): (params: {roleId: string, serviceName: string, username: string, note?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dbaas/logs/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Cluster allowed networks
   * Allow an IP to contact cluster
   */
  post(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork'): (params: {clusterId: string, serviceName: string, flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum, network: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Inputs
   * Register a new input object
   */
  post(path: '/dbaas/logs/{serviceName}/input'): (params: {serviceName: string, autoSelectOption?: boolean, description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}) => Promise<dbaas.logs.Operation>;
  /**
   * InputAllowedNetworks
   * Allow an ip to join input
   */
  post(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork'): (params: {inputId: string, serviceName: string, network: string}) => Promise<dbaas.logs.Operation>;
  /**
   * InputConfigtest
   * Validate configuration of specified input
   */
  post(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * InputEnd
   * Schedule the end of specified input
   */
  post(path: '/dbaas/logs/{serviceName}/input/{inputId}/end'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * InputLogs
   * Generate a temporary url to retrieve input logs
   */
  post(path: '/dbaas/logs/{serviceName}/input/{inputId}/logs/url'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.TemporaryLogsLink>;
  /**
   * InputRestart
   * Schedule the restart of specified input
   */
  post(path: '/dbaas/logs/{serviceName}/input/{inputId}/restart'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * InputStart
   * Schedule the start of specified input
   */
  post(path: '/dbaas/logs/{serviceName}/input/{inputId}/start'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * ServiceOption
   * Remove the specified subscribed option
   */
  post(path: '/dbaas/logs/{serviceName}/option/{optionId}/terminate'): (params: {optionId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Aliases
   * Register a new elasticsearch alias
   */
  post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias'): (params: {serviceName: string, autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}) => Promise<dbaas.logs.Operation>;
  /**
   * AliasStreams
   * Attach a elasticsearch index to specified elasticsearch alias
   */
  post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index'): (params: {aliasId: string, serviceName: string, indexId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * AliasStreams
   * Attach a graylog stream to specified elasticsearch alias
   */
  post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream'): (params: {aliasId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Indexes
   * Register a new elasticsearch index
   */
  post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index'): (params: {serviceName: string, alertNotifyEnabled?: boolean, autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Dashboards
   * Register a new graylog dashboard
   */
  post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard'): (params: {serviceName: string, autoSelectOption?: boolean, description: string, optionId?: string, title: string}) => Promise<dbaas.logs.Operation>;
  /**
   * DashboardClone
   * Copy all widgets from specified dashboard to a new one
   */
  post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate'): (params: {dashboardId: string, serviceName: string, autoSelectOption?: boolean, description: string, optionId?: string, streamId?: string, title: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Streams
   * Register a new graylog stream
   */
  post(path: '/dbaas/logs/{serviceName}/output/graylog/stream'): (params: {serviceName: string, autoSelectOption?: boolean, coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, parentStreamId?: string, title: string, webSocketEnabled?: boolean}) => Promise<dbaas.logs.Operation>;
  /**
   * StreamAlerts
   * Register a new alert on specified graylog stream
   */
  post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert'): (params: {serviceName: string, streamId: string, backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Streams
   * Get a public temporary URL to access the archive
   */
  post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url'): (params: {archiveId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.ArchiveUrl>;
  /**
   * StreamRules
   * Register a new rule on specified graylog stream
   */
  post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule'): (params: {serviceName: string, streamId: string, field: string, isInverted?: boolean, operator: dbaas.logs.StreamRuleOperatorEnum, value: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Roles
   * Register a new role
   */
  post(path: '/dbaas/logs/{serviceName}/role'): (params: {serviceName: string, autoSelectOption?: boolean, description: string, name: string, optionId?: string}) => Promise<dbaas.logs.Operation>;
  /**
   * RoleMembers
   * Append user into the member list of specified role
   */
  post(path: '/dbaas/logs/{serviceName}/role/{roleId}/member'): (params: {roleId: string, serviceName: string, note?: string, username: string}) => Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionAlias
   * Append a elasticsearch alias permission to role
   */
  post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/alias'): (params: {roleId: string, serviceName: string, aliasId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionIndex
   * Append a graylog dashboard permission to role
   */
  post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard'): (params: {roleId: string, serviceName: string, dashboardId: string, permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum}) => Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionIndex
   * Append a elasticsearch index permission to role
   */
  post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/index'): (params: {roleId: string, serviceName: string, indexId: string, permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum}) => Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionIndex
   * Append a graylog stream permission to role
   */
  post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/stream'): (params: {roleId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Tokens
   * Add a new token
   */
  post(path: '/dbaas/logs/{serviceName}/token'): (params: {serviceName: string, clusterId?: string, name: string}) => Promise<dbaas.logs.Operation>;
  /**
   * ServiceChangePassword
   * Initiate a password change procedure.
   */
  post(path: '/dbaas/logs/{serviceName}/user/changePassword'): (params: {serviceName: string, password: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Cluster allowed networks
   * Remove the specified IP from the list of allowed networks
   */
  delete(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}'): (params: {allowedNetworkId: string, clusterId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Input
   * Remove the specified input object
   */
  delete(path: '/dbaas/logs/{serviceName}/input/{inputId}'): (params: {inputId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * InputAllowedNetwork
   * Remove the specified IP from the list of allowed networks
   */
  delete(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}'): (params: {allowedNetworkId: string, inputId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Alias
   * Remove specified elasticsearch alias
   */
  delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}'): (params: {aliasId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * AliasStream
   * Detach a elasticsearch index from specified elasticsearch alias
   */
  delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}'): (params: {aliasId: string, indexId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * AliasStream
   * Detach a graylog stream from specified elasticsearch alias
   */
  delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}'): (params: {aliasId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Index
   * Remove specified elasticsearch index
   */
  delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}'): (params: {indexId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Dashboard
   * Remove specified graylog dashboard
   */
  delete(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}'): (params: {dashboardId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Stream
   * Remove specified graylog stream
   */
  delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}'): (params: {serviceName: string, streamId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * StreamAlert
   * Remove alert from specified graylog stream
   */
  delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}'): (params: {alertId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * StreamRule
   * Remove specified graylog stream rule
   */
  delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}'): (params: {ruleId: string, serviceName: string, streamId: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Role
   * Remove specified role
   */
  delete(path: '/dbaas/logs/{serviceName}/role/{roleId}'): (params: {roleId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * RoleMember
   * Remove user from the member list of specified role
   */
  delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}'): (params: {roleId: string, serviceName: string, username: string}) => Promise<dbaas.logs.Operation>;
  /**
   * RolePermission
   * Remove specified permission
   */
  delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}'): (params: {permissionId: string, roleId: string, serviceName: string}) => Promise<dbaas.logs.Operation>;
  /**
   * Token
   * Delete the specified token
   */
  delete(path: '/dbaas/logs/{serviceName}/token/{tokenId}'): (params: {serviceName: string, tokenId: string}) => Promise<dbaas.logs.Operation>;
}
