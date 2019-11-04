// Generated by https://quicktype.io
/**
 * Original OVH Model
 */
export interface Schema {
    apis:         API[];
    basePath:     string;
    models:       {[key:string]: ModelsProp};
    apiVersion:   string;
    resourcePath: string;
}

export interface API {
    path:        string;
    operations:  Operation[];
    description: string;
}

export interface Operation {
    resellerOnly:     boolean;
    parameters:       Parameter[];
    responseType:     string;
    responseFullType: string;
    apiStatus:        APIStatus;
    httpMethod:       "DELETE" | "GET" | "POST" | "PUT";
    noAuthentication: boolean;
    description:      string;
}

export interface APIStatus {
    description:     Description;
    value:           Value;
    deprecatedDate?: string;
    deletionDate?:   string;
    replacement?:    string;
}

export enum Description {
    BetaVersion = "Beta version",
    DeprecatedWillBeRemoved = "Deprecated, will be removed",
    StableProductionVersion = "Stable production version",
}

export enum Value {
    Beta = "BETA",
    Deprecated = "DEPRECATED",
    Production = "PRODUCTION",
}

export interface Parameter {
    fullType:    string;
    description: null | string;
    name:        null | string;
    paramType:   "body" | "path" | "query";
    dataType:    string;
    required:    boolean;
}

export interface ModelsProp {
    id:          string;
    description: string;
    namespace:   string;
    enum?:       string[];
    enumType?:   "long" | "string";
    generics?:    string[];
    properties?:  {[key:string]: FieldProp};
}

export interface FieldProp  {
    canBeNull:    boolean;
    description?: string;
    fullType?:    string;
    readOnly:     boolean;
    required:     boolean;
    type:         string;
}

export interface OvhIndex {
    apis:     API[];
    basePath: string;
}

export interface API {
    path:        string;
    schema:      string; // "{path}.{format}",
    format:      ApiFormat[];
    description: string;
}

export enum ApiFormat {
    JSON = "json",
    YAML = "yaml",
}
