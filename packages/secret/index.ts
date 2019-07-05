import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';

export namespace secret {
    //secret.Secret
    // fullName: secret.Secret.Secret
    export interface Secret {
        expiration: string;
        secret: string;
    }
}
export function proxySecret(ovhEngine: OvhRequestable): Secret {
    return buildOvhProxy(ovhEngine, '/secret');
}
// Apis harmony
// path /secret
export interface Secret{
    retrieve: {
        // POST /secret/retrieve
        $post(body?: {id: string}): Promise<secret.Secret>;
    }
}
// Api
type PathsSecretPOST = '/secret/retrieve';

export class ApiSecret extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Retrieve a secret sent by email
   * Retrieve a secret sent by email
   */
  public post(path: '/secret/retrieve', params: {id: string}): Promise<secret.Secret>;
  public post(path: PathsSecretPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
export default ApiSecret;
