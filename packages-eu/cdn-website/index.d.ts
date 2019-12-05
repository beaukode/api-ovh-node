import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /cdn/website Models
 */
export declare namespace cdn {
    namespace website {
        interface Backend {
            ipv4: string;
            status: cdn.website.BackendStatusEnum;
        }
        type BackendStatusEnum = "creating" | "error" | "on" | "removing";
        interface Domain {
            domain: string;
            status: cdn.website.DomainStatusEnum;
        }
        type DomainStatusEnum = "error" | "on" | "removing";
        type DomainZoneStatusEnum = "error" | "on" | "removing";
        interface StatsDataType {
            date: string;
            value: number;
        }
        type StatsPeriodEnum = "day" | "month" | "week";
        type StatsTypeEnum = "backend" | "cdn";
        type StatsValueEnum = "bandwidth" | "request";
        interface Task {
            comment?: string;
            function: cdn.website.TaskFunctionEnum;
            status: cdn.website.TaskStateEnum;
            taskId: number;
        }
        type TaskFunctionEnum = "flushAll" | "installBackend" | "removeBackend" | "removeDomain" | "removeZone";
        type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo";
        interface Website {
            anycast: string;
            offer: string;
            service: string;
        }
        interface Zone {
            status: cdn.website.DomainZoneStatusEnum;
            zone: string;
        }
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
 * END API /cdn/website Models
 */
export declare function proxyCdnWebsite(ovhEngine: OvhRequestable): Cdn;
export default proxyCdnWebsite;
/**
 * Api Proxy model
 */ export interface Cdn {
    website: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<cdn.website.Website>;
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            zone: {
                $delete(): Promise<cdn.website.Task>;
                $get(): Promise<cdn.website.Zone>;
                $post(params: {
                    zone: string;
                }): Promise<cdn.website.Zone>;
                backends: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        ipv4: string;
                    }): Promise<cdn.website.Task>;
                    $(ipv4: string): {
                        $delete(): Promise<cdn.website.Task>;
                        $get(): Promise<cdn.website.Backend>;
                        tasks: {
                            $get(): Promise<number[]>;
                            $(taskId: number): {
                                $get(): Promise<cdn.website.Task>;
                            };
                        };
                    };
                };
                domains: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        domain: string;
                    }): Promise<cdn.website.Domain>;
                    $(domain: string): {
                        $delete(): Promise<cdn.website.Task>;
                        $get(): Promise<cdn.website.Domain>;
                        flush: {
                            $post(): Promise<cdn.website.Task>;
                        };
                        statistics: {
                            $get(params: {
                                period: cdn.website.StatsPeriodEnum;
                                type: cdn.website.StatsTypeEnum;
                                value: cdn.website.StatsValueEnum;
                            }): Promise<cdn.website.StatsDataType[]>;
                        };
                        tasks: {
                            $get(): Promise<number[]>;
                            $(taskId: number): {
                                $get(): Promise<cdn.website.Task>;
                            };
                        };
                    };
                };
                tasks: {
                    $get(): Promise<number[]>;
                    $(taskId: number): {
                        $get(): Promise<cdn.website.Task>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the CDNWEBSITE service
     * List available services
     */
    get(path: '/cdn/website'): () => Promise<string[]>;
    /**
     * Website CDN
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<cdn.website.Website>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Zone on CDN
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/zone'): (params: {
        serviceName: string;
    }) => Promise<cdn.website.Zone>;
    /**
     * List the cdn.website.Backend objects
     * Backend associated to this zone
     */
    get(path: '/cdn/website/{serviceName}/zone/backends'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Backend on zone
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}'): (params: {
        ipv4: string;
        serviceName: string;
    }) => Promise<cdn.website.Backend>;
    /**
     * List the cdn.website.Task objects
     * Task associated to this backend
     */
    get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks'): (params: {
        ipv4: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Task on CDN
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}/tasks/{taskId}'): (params: {
        ipv4: string;
        serviceName: string;
        taskId: number;
    }) => Promise<cdn.website.Task>;
    /**
     * List the cdn.website.Domain objects
     * Domain associated to this zone
     */
    get(path: '/cdn/website/{serviceName}/zone/domains'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Domain on CDN
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/zone/domains/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<cdn.website.Domain>;
    /**
     * statistics operations
     * Get statistics about request on CDN, bandwidth value in Bytes
     */
    get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/statistics'): (params: {
        domain: string;
        serviceName: string;
        period: cdn.website.StatsPeriodEnum;
        type: cdn.website.StatsTypeEnum;
        value: cdn.website.StatsValueEnum;
    }) => Promise<cdn.website.StatsDataType[]>;
    /**
     * List the cdn.website.Task objects
     * Task associated to this domain
     */
    get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Task on CDN
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/zone/domains/{domain}/tasks/{taskId}'): (params: {
        domain: string;
        serviceName: string;
        taskId: number;
    }) => Promise<cdn.website.Task>;
    /**
     * List the cdn.website.Task objects
     * Task associated to this zone
     */
    get(path: '/cdn/website/{serviceName}/zone/tasks'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Task on CDN
     * Get this object properties
     */
    get(path: '/cdn/website/{serviceName}/zone/tasks/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<cdn.website.Task>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/cdn/website/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Zone on CDN
     * Configure a zone on CDN
     */
    post(path: '/cdn/website/{serviceName}/zone'): (params: {
        serviceName: string;
        zone: string;
    }) => Promise<cdn.website.Zone>;
    /**
     * List the cdn.website.Backend objects
     * Configure a backend on the zone
     */
    post(path: '/cdn/website/{serviceName}/zone/backends'): (params: {
        serviceName: string;
        ipv4: string;
    }) => Promise<cdn.website.Task>;
    /**
     * List the cdn.website.Domain objects
     * Configure a domain on CDN
     */
    post(path: '/cdn/website/{serviceName}/zone/domains'): (params: {
        serviceName: string;
        domain: string;
    }) => Promise<cdn.website.Domain>;
    /**
     * flush operations
     * Flush all cache
     */
    post(path: '/cdn/website/{serviceName}/zone/domains/{domain}/flush'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<cdn.website.Task>;
    /**
     * Zone on CDN
     * Remove a zone from the CDN
     */
    delete(path: '/cdn/website/{serviceName}/zone'): (params: {
        serviceName: string;
    }) => Promise<cdn.website.Task>;
    /**
     * Backend on zone
     * Remove a backend from the zone
     */
    delete(path: '/cdn/website/{serviceName}/zone/backends/{ipv4}'): (params: {
        ipv4: string;
        serviceName: string;
    }) => Promise<cdn.website.Task>;
    /**
     * Domain on CDN
     * Remove a domain from the CDN
     */
    delete(path: '/cdn/website/{serviceName}/zone/domains/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<cdn.website.Task>;
}
