import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace nichandle {
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    //nichandle.CreationRule
    // fullName: nichandle.CreationRule.CreationRule
    export interface CreationRule {
        defaultValue?: string;
        examples?: string[];
        fieldName?: string;
        in?: string[];
        mandatory?: boolean;
        prefix?: string;
        regularExpression?: string;
    }
    //nichandle.CreationRules
    // fullName: nichandle.CreationRules.CreationRules
    export interface CreationRules {
        address?: OVH.nichandle.CreationRule;
        area?: OVH.nichandle.CreationRule;
        birthCity?: OVH.nichandle.CreationRule;
        birthDay?: OVH.nichandle.CreationRule;
        city?: OVH.nichandle.CreationRule;
        companyNationalIdentificationNumber?: OVH.nichandle.CreationRule;
        corporationType?: OVH.nichandle.CreationRule;
        country?: OVH.nichandle.CreationRule;
        email?: OVH.nichandle.CreationRule;
        fax?: OVH.nichandle.CreationRule;
        firstname?: OVH.nichandle.CreationRule;
        italianSDI?: OVH.nichandle.CreationRule;
        language?: OVH.nichandle.CreationRule;
        legalform?: OVH.nichandle.CreationRule;
        name?: OVH.nichandle.CreationRule;
        nationalIdentificationNumber?: OVH.nichandle.CreationRule;
        organisation?: OVH.nichandle.CreationRule;
        ovhCompany?: OVH.nichandle.CreationRule;
        ovhSubsidiary?: OVH.nichandle.CreationRule;
        phone?: OVH.nichandle.CreationRule;
        phoneCountry?: OVH.nichandle.CreationRule;
        sex?: OVH.nichandle.CreationRule;
        spareEmail?: OVH.nichandle.CreationRule;
        vat?: OVH.nichandle.CreationRule;
        zip?: OVH.nichandle.CreationRule;
    }
    //nichandle.CreationRulesActionEnum
    export type CreationRulesActionEnum = "create" | "update"
    //nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
    //nichandle.LanguageEnum
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    //nichandle.LegalFormEnum
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    //nichandle.NewAccountAndToken
    // fullName: nichandle.NewAccountAndToken.NewAccountAndToken
    export interface NewAccountAndToken {
        consumerKey?: string;
        ovhIdentifier?: string;
    }
    //nichandle.OvhCompanyEnum
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    //nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace order {
    //order.Contract
    // fullName: order.Contract.Contract
    export interface Contract {
        content?: string;
        name?: string;
        url?: string;
    }
}
// Apis harmony
// path /newAccount
export interface NewAccount{
    // POST /newAccount
    $post(body?: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country: nichandle.CountryEnum, email: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany: nichandle.OvhCompanyEnum, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, vat?: string, zip?: string}): Promise<nichandle.NewAccountAndToken>;
    area: {
        // GET /newAccount/area
        $get(param?: {country: nichandle.CountryEnum}): Promise<string[]>;
    }
    contracts: {
        // GET /newAccount/contracts
        $get(param?: {company: nichandle.OvhCompanyEnum, subsidiary: nichandle.OvhSubsidiaryEnum}): Promise<order.Contract[]>;
    }
    corporationType: {
        // GET /newAccount/corporationType
        $get(param?: {country: nichandle.CountryEnum}): Promise<string[]>;
    }
    countries: {
        // GET /newAccount/countries
        $get(param?: {ovhCompany: nichandle.OvhCompanyEnum, ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<nichandle.CountryEnum[]>;
    }
    creationRules: {
        // GET /newAccount/creationRules
        $get(param?: {country: nichandle.CountryEnum, legalform: nichandle.LegalFormEnum, ovhCompany: nichandle.OvhCompanyEnum, ovhSubsidiary: nichandle.OvhSubsidiaryEnum}): Promise<nichandle.CreationRules>;
    }
    legalform: {
        // GET /newAccount/legalform
        $get(param?: {country: nichandle.CountryEnum}): Promise<string[]>;
    }
    rules: {
        // POST /newAccount/rules
        $post(body?: {action?: nichandle.CreationRulesActionEnum, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, vat?: string, zip?: string}): Promise<nichandle.CreationRule[]>;
    }
}
// Api
type PathsNewAccountGET = '/newAccount/area' |
  '/newAccount/contracts' |
  '/newAccount/corporationType' |
  '/newAccount/countries' |
  '/newAccount/creationRules' |
  '/newAccount/legalform';

type PathsNewAccountPOST = '/newAccount' |
  '/newAccount/rules';

export class ApiNewAccount extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * All available areas for a given country
   * All available areas for a given country
   */
  public get(path: '/newAccount/area', params: {country: OVH.nichandle.CountryEnum}): Promise<string[]>;
  /**
   * Returns the contracts that governs the creation of an OVH identifier
   * Returns the contracts that governs the creation of an OVH identifier
   */
  public get(path: '/newAccount/contracts', params: {company: OVH.nichandle.OvhCompanyEnum, subsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<order.Contract[]>;
  /**
   * All available corporation types for a given country
   * All available corporation types for a given country
   */
  public get(path: '/newAccount/corporationType', params: {country: OVH.nichandle.CountryEnum}): Promise<string[]>;
  /**
   * All available countries for an ovh company and an ovh subsidiary
   * All available countries for an ovh company and an ovh subsidiary
   */
  public get(path: '/newAccount/countries', params: {ovhCompany: OVH.nichandle.OvhCompanyEnum, ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<nichandle.CountryEnum[]>;
  /**
   * Give all the rules to follow in order to create an OVH identifier
   * Give all the rules to follow in order to create an OVH identifier
   */
  public get(path: '/newAccount/creationRules', params: {country: OVH.nichandle.CountryEnum, legalform: OVH.nichandle.LegalFormEnum, ovhCompany: OVH.nichandle.OvhCompanyEnum, ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum}): Promise<nichandle.CreationRules>;
  /**
   * All available legal forms for a given country
   * All available legal forms for a given country
   */
  public get(path: '/newAccount/legalform', params: {country: OVH.nichandle.CountryEnum}): Promise<string[]>;
  public get(path: PathsNewAccountGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Create a new OVH identifier
   * Create a new OVH identifier
   */
  public post(path: '/newAccount', params: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country: OVH.nichandle.CountryEnum, email: string, fax?: string, firstname?: string, italianSDI?: string, language?: OVH.nichandle.LanguageEnum, legalform: OVH.nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany: OVH.nichandle.OvhCompanyEnum, ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: OVH.nichandle.CountryEnum, sex?: OVH.nichandle.GenderEnum, spareEmail?: string, vat?: string, zip?: string}): Promise<nichandle.NewAccountAndToken>;
  /**
   * Give all the rules to follow in order to create and update an OVH identifier
   * Give all the rules to follow in order to create and update an OVH identifier
   */
  public post(path: '/newAccount/rules', params: {action?: OVH.nichandle.CreationRulesActionEnum, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: OVH.nichandle.CountryEnum, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: OVH.nichandle.LanguageEnum, legalform?: OVH.nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany?: OVH.nichandle.OvhCompanyEnum, ovhSubsidiary?: OVH.nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: OVH.nichandle.CountryEnum, sex?: OVH.nichandle.GenderEnum, spareEmail?: string, vat?: string, zip?: string}): Promise<nichandle.CreationRule[]>;
  public post(path: PathsNewAccountPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}