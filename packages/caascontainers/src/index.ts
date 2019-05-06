import { ApiCommon } from '@ovh-api/common';
/**
 * The new framework password
 */
export interface DockerFrameworkPassword {
  /**
   * The new framework password
   *
   */
  password?: string;
}
/**
 * A host on which containers can be deployed
 */
export interface DockerSlave {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * The stack to which the slave belongs
   *
   */
  stack?: string;
  /**
   * The framework UUID
   *
   */
  flavorId?: string;
  /**
   * The slave hostname
   *
   */
  name?: string;
  /**
   * The slave UUID
   *
   */
  id?: string;
  /**
   * The state of the slave
   *
   */
  state?: DockerSlaveStatus;
  /**
   * Metrics about slave usage
   *
   */
  metrics?: DockerSlaveMetrics;
  /**
   * The region where the slave is located
   *
   */
  region?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
}
/**
 * Attributes of the slave flavor
 */
export interface DockerSlaveFlavor {
  /**
   * Whether the flavor is an Openstack or dedicated flavor
   *
   */
  isVm?: boolean;
  /**
   * The disk size, in GB
   *
   */
  disk?: Number;
  /**
   * Wether the disk is HA (stored in Ceph) or local (SSD)
   *
   */
  diskHa?: boolean;
  /**
   * The amount of (v)CPUs
   *
   */
  cpus?: Number;
  /**
   * The network bandwidth, in Mbps
   *
   */
  bandwidth?: Number;
  /**
   * The flavor UUID
   *
   */
  id?: string;
  /**
   * The amount of RAM, in MB
   *
   */
  ram?: Number;
}
/**
 * Application data
 */
export interface DockerSlaveFrameworkApp {
  /**
   * Application image
   *
   */
  image?: string;
  /**
   * Application memory
   *
   */
  mem?: Number;
  /**
   * Number of running containers instances
   *
   */
  instances?: Number;
  /**
   * Application volumes
   *
   */
  volumes?: DockerSlaveFrameworkAppVolume[];
  /**
   * Application CPU
   *
   */
  cpu?: Number;
  /**
   * Application id
   *
   */
  id?: string;
  /**
   * Application ports
   *
   */
  ports?: DockerSlaveFrameworkAppPort[];
  /**
   * Application environment
   *
   */
  env?: DockerSlaveFrameworkAppEnvironment[];
  /**
   * Application status
   *
   */
  status?: string;
}
/**
 * Application environment variable
 */
export interface DockerSlaveFrameworkAppEnvironment {
  /**
   * variable value
   *
   */
  value?: string;
  /**
   * variable key
   *
   */
  key?: string;
}
/**
 * Application ports
 */
export interface DockerSlaveFrameworkAppPort {
  /**
   * Port protocol
   *
   */
  protocol?: string;
  /**
   * Container port
   *
   */
  containerPort?: Number;
  /**
   * Host port
   *
   */
  hostPort?: Number;
}
/**
 * Application volumes
 */
export interface DockerSlaveFrameworkAppVolume {
  /**
   * Volume mode
   *
   */
  mode?: string;
  /**
   * Container path
   *
   */
  containerPath?: Number;
  /**
   * Host path
   *
   */
  hostPath?: Number;
}
/**
 * Metrics about slave usage
 */
export interface DockerSlaveMetrics {
  /**
   * Metrics about used slave resources
   *
   */
  usedResources?: DockerSlaveMetricsUsedResources;
  /**
   * Metrics about available slave resources
   *
   */
  resources?: DockerSlaveMetricsResources;
}
/**
 * Metrics about available slave resources
 */
export interface DockerSlaveMetricsResources {
  /**
   * Available memory
   *
   */
  mem?: Number;
  /**
   * Available CPU
   *
   */
  cpu?: Number;
}
/**
 * Metrics about used slave resources
 */
export interface DockerSlaveMetricsUsedResources {
  /**
   * Used memory
   *
   */
  mem?: Number;
  /**
   * Used CPU
   *
   */
  cpu?: Number;
}
/**
 * The state of the slave
 */
export type DockerSlaveStatus = 'blocked' | 'created' | 'creating';
/**
 * An isolated client Docker PaaS environment
 */
export interface DockerStack {
  /**
   * The cluster on which the stack is deployed
   *
   */
  cluster?: string;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * A list of slave UUIDs
   *
   */
  slaves?: string[];
  /**
   * The DNS address of the stack load balancer
   *
   */
  loadBalancer?: string;
  /**
   * The stack name
   *
   */
  name?: string;
  /**
   * Metrics about slave usage
   *
   */
  metrics?: DockerSlaveMetrics;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
}
/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerStackCustomSsl {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * The custom SSL public certificate
   *
   */
  certificate?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
}
/**
 * Action validation message
 */
export interface DockerStackCustomSslMessage {
  /**
   * The action validation message
   *
   */
  message?: string;
}
/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerStackInputCustomSsl {
  /**
   * The custom SSL public certificate
   *
   */
  certificate?: string;
  /**
   * The custom SSL certificate private key
   *
   */
  key?: string;
}
/**
 * Credentials providing authentication to an external registry
 */
export interface DockerStackRegistryCredentials {
  /**
   * The URL of the registry
   *
   */
  registryUrl?: string;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
  /**
   * The registry account username
   *
   */
  username?: string;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * A framework installed for a docker PaaS stack
 */
export interface StackFramework {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: Date;
  /**
   * The framework name
   *
   */
  accessUrl?: string;
  /**
   * The framework name
   *
   */
  name?: string;
  /**
   * The framework UUID
   *
   */
  id?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: Date;
}
/**
 * Application deployed on the framework
 */
export interface StackFrameworkApplication {
  /**
   * Application list
   *
   */
  apps?: DockerSlaveFrameworkApp[];
}
type PathscaascontainersGET = '/caas/containers/slaves/flavors' | 
'/caas/containers/slaves/flavors/{flavorId}' | 
'/caas/containers/{serviceName}/availableFrameworks' | 
'/caas/containers/{serviceName}' | 
'/caas/containers/{serviceName}/frameworks/{frameworkId}' | 
'/caas/containers/{serviceName}/frameworks/{frameworkId}/apps' | 
'/caas/containers/{serviceName}/frameworks' | 
'/caas/containers/{serviceName}/registry/credentials/{credentialsId}' | 
'/caas/containers/{serviceName}/registry/credentials' | 
'/caas/containers/{serviceName}/ssl' | 
'/caas/containers/{serviceName}/slaves/{slaveId}' | 
'/caas/containers/{serviceName}/slaves' | 
'/caas/containers/{serviceName}/serviceInfos' | 
'/caas/containers';

type PathscaascontainersPUT = '/caas/containers/{serviceName}/frameworks/{frameworkId}/password' | 
'/caas/containers/{serviceName}/registry/credentials/{credentialsId}' | 
'/caas/containers/{serviceName}/ssl' | 
'/caas/containers/{serviceName}/serviceInfos';

type PathscaascontainersPOST = '/caas/containers/{serviceName}/registry/credentials' | 
'/caas/containers/{serviceName}/changeContact';

type PathscaascontainersDELETE = '/caas/containers/{serviceName}/registry/credentials/{credentialsId}' | 
'/caas/containers/{serviceName}/ssl';

class Apicaascontainers extends ApiCommon {
  /**
  Missing description
  List the /cloud flavors available for the Docker PaaS slaves
  **/
  public get(path: '/caas/containers/slaves/flavors', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect the argument slave flavor
  **/
  public get(path: '/caas/containers/slaves/flavors/{flavorId}', pathParams: {flavorId?: string}, queryParams: null): Promise<DockerSlaveFlavor>;
  /**
  Missing description
  List all the installable Mesos frameworks
  **/
  public get(path: '/caas/containers/{serviceName}/availableFrameworks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect the argument stack
  **/
  public get(path: '/caas/containers/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DockerStack>;
  /**
  Missing description
  Inspect the stack framework
  **/
  public get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}', pathParams: {frameworkId?: string, serviceName?: string}, queryParams: null): Promise<StackFramework>;
  /**
  Missing description
  List apps in the framework
  **/
  public get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/apps', pathParams: {frameworkId?: string, serviceName?: string}, queryParams: null): Promise<StackFrameworkApplication>;
  /**
  Missing description
  List the frameworks installed on the argument stack
  **/
  public get(path: '/caas/containers/{serviceName}/frameworks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect the image registry credentials associated to the stack
  **/
  public get(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', pathParams: {credentialsId?: string, serviceName?: string}, queryParams: null): Promise<DockerStackRegistryCredentials>;
  /**
  Missing description
  List the registry credentials associated to the stack.
  **/
  public get(path: '/caas/containers/{serviceName}/registry/credentials', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Missing description
  Inspect the custom SSL certificate and private
  **/
  public get(path: '/caas/containers/{serviceName}/ssl', pathParams: {serviceName?: string}, queryParams: null): Promise<DockerStackCustomSsl>;
  /**
  Missing description
  Inspect the argument user slave instance
  **/
  public get(path: '/caas/containers/{serviceName}/slaves/{slaveId}', pathParams: {slaveId?: string, serviceName?: string}, queryParams: null): Promise<DockerSlave>;
  /**
  Missing description
  List the id of the registered slave instances
  **/
  public get(path: '/caas/containers/{serviceName}/slaves', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/caas/containers/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the DOCKER service
  List available services
  **/
  public get(path: '/caas/containers', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathscaascontainersGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Missing description
  Update the framework access password
  **/
  public put(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/password', pathParams: {frameworkId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Update the registry credentials.
  **/
  public put(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', pathParams: {credentialsId?: string, serviceName?: string}, bodyParams: null): Promise<DockerStackRegistryCredentials>;
  /**
  Missing description
  Update the custom SSL certificate and private
  **/
  public put(path: '/caas/containers/{serviceName}/ssl', pathParams: {serviceName?: string}, bodyParams: null): Promise<DockerStackCustomSslMessage>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/caas/containers/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathscaascontainersPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Missing description
  Associate the stack with some credentials to an authenticated registry.
  **/
  public post(path: '/caas/containers/{serviceName}/registry/credentials', pathParams: {serviceName?: string}, bodyParams: null): Promise<DockerStackRegistryCredentials>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/caas/containers/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  public post(path: PathscaascontainersPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Missing description
  Delete the registry credentials.
  **/
  public delete(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', pathParams: {credentialsId?: string, serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Missing description
  Delete the custom SSL certificate and private key associated to the stack
  **/
  public delete(path: '/caas/containers/{serviceName}/ssl', pathParams: {serviceName?: string}, bodyParams: null): Promise<DockerStackCustomSslMessage>;
  public delete(path: PathscaascontainersDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
