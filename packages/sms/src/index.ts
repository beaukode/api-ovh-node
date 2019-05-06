import { ApiCommon } from '@ovh-api/common';
/**
 * All country prices accessible from a reference
 */
export type ReferenceCountryEnum = 'all' | 'ca' | 'cz' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'gb' | 'ie' | 'it' | 'lt' | 'ma' | 'nl' | 'pl' | 'pp' | 'pt' | 'qc' | 'ru' | 'sk' | 'sn' | 'tn' | 'we';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * SMS details
 */
export interface SmsAccount {
  /**
   */
  automaticRecreditAmount?: SmsPackQuantityAutomaticRecreditEnum;
  /**
   * URL called when state of a sent SMS changes
   *
   */
  callBack?: string;
  /**
   * Credit threshold after which an automatic recredit is launched
   *
   */
  creditThresholdForAutomaticRecredit?: Number;
  /**
   */
  creditsHoldByQuota?: Number;
  /**
   */
  creditsLeft?: Number;
  /**
   */
  description?: string;
  /**
   */
  name?: string;
  /**
   */
  smsResponse?: SmsResponse;
  /**
   */
  status?: SmsStatusAccountEnum;
  /**
   * URL called when a STOP is received after a receiver replied stop to a SMS
   *
   */
  stopCallBack?: string;
  /**
   */
  templates?: SmsTemplates;
  /**
   */
  userQuantityWithQuota?: Number;
}
/**
 * A structure describing all information about alert threshold informations
 */
export interface SmsAlertThreshold {
  /**
   */
  alertEmail?: string;
  /**
   */
  alertNumber?: string;
  /**
   */
  alertThreshold?: Number;
  /**
   */
  support?: SmsSupportEnum;
}
/**
 * SMS blacklist
 */
export interface SmsBlacklist {
  /**
   */
  dateCreation?: Date;
  /**
   * The sms number blacklisted
   *
   */
  number?: string;
}
/**
 * The charset format
 */
export type SmsCharsetEnum = 'UTF-8';
/**
 * The web access for your virtual number chat application
 */
export interface SmsChatAccess {
  /**
   * The creation date of this access
   *
   */
  creationDate?: Date;
  /**
   */
  id?: Number;
  /**
   * The url of the web access
   *
   */
  url?: string;
}
/**
 * The sms class of sms sending job
 */
export type SmsClassEnum = 'flash' | 'phoneDisplay' | 'sim' | 'toolkit';
/**
 * The sms coding
 */
export type SmsCodingEnum = '7bit' | '8bit';
/**
 * All country suffixes accessible for sms services and "all" available
 */
export type SmsCountryEnum = 'ag' | 'ai' | 'all' | 'an' | 'ar' | 'at' | 'au' | 'aw' | 'ba' | 'bb' | 'be' | 'bg' | 'bh' | 'bm' | 'bo' | 'br' | 'bz' | 'ch' | 'cl' | 'cn' | 'co' | 'cr' | 'cu' | 'cy' | 'cz' | 'de' | 'dk' | 'dm' | 'dz' | 'ec' | 'ee' | 'eg' | 'es' | 'fi' | 'fr' | 'gb' | 'gd' | 'gp' | 'gr' | 'gy' | 'hk' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 'is' | 'it' | 'jm' | 'jo' | 'jp' | 'kr' | 'kw' | 'ky' | 'lb' | 'lc' | 'lt' | 'lu' | 'lv' | 'ma' | 'me' | 'mq' | 'ms' | 'mt' | 'my' | 'nc' | 'ng' | 'nl' | 'no' | 'nz' | 'pa' | 'pe' | 'pf' | 'ph' | 'pk' | 'pl' | 'pt' | 'py' | 're' | 'ro' | 'rs' | 'ru' | 'sa' | 'se' | 'sg' | 'si' | 'sk' | 'sr' | 'tc' | 'th' | 'tn' | 'tr' | 'tt' | 'tw' | 'ua' | 'uy' | 'vc' | 've' | 'vg' | 'vn' | 'za';
/**
 * Way type
 */
export type SmsDocumentWayTypeEnum = 'incoming' | 'outgoing';
/**
 * Sms reach list
 */
export interface SmsException {
  /**
   * The abreviated country code.
   *
   */
  countrySuffixe?: string;
  /**
   * The exception message
   *
   */
  messages?: string[];
  /**
   * The list of operators impacted.
   *
   */
  operators?: string;
  /**
   * The type of routing restriction imposed by the operator
   *
   */
  restrictionCode?: SmsRestrictionCodeEnum;
  /**
   * The substitution sender used to bypass operator filter
   *
   */
  substitution?: string;
}
/**
 * Sms operator informations
 */
export interface SmsHlr {
  /**
   * The country
   *
   */
  country?: string;
  /**
   * The countryCode prefix number
   *
   */
  countryCode?: string;
  /**
   * The network name
   *
   */
  network?: string;
  /**
   * The operator name
   *
   */
  operator?: string;
  /**
   * The region
   *
   */
  region?: string;
}
/**
 * Home Location Register informations. Give informations about a given cellular phone.
 */
export interface SmsHlrLookupNumber {
  /**
   * HLR creation datetime
   *
   */
  datetime?: Date;
  /**
   * HLR id
   *
   */
  id?: Number;
  /**
   * MSISDN
   *
   */
  msisdn?: string;
  /**
   * The {Mobile Country Code, Mobile Network Code} unique identifier
   *
   */
  operatorCode?: string;
  /**
   * Has the MSISDN been ported from its original network
   *
   */
  ported?: boolean;
  /**
   * Is the MSISDN currently reachable
   *
   */
  reachable?: boolean;
  /**
   * Is the MSISDN currently roaming outside its natinal network
   *
   */
  roaming?: boolean;
  /**
   * Status of the HLR request
   *
   */
  status?: SmsHlrStatuses;
  /**
   * Is the MSISDN valid
   *
   */
  valid?: boolean;
}
/**
 * The sms coding
 */
export type SmsHlrStatuses = 'doing' | 'done' | 'error' | 'todo';
/**
 * Sms history of sms incoming received
 */
export interface SmsIncoming {
  /**
   */
  creationDatetime?: Date;
  /**
   */
  credits?: Number;
  /**
   */
  id?: Number;
  /**
   */
  message?: string;
  /**
   */
  sender?: string;
  /**
   */
  tag?: string;
}
/**
 * Sms job
 */
export interface SmsJob {
  /**
   */
  creationDatetime?: Date;
  /**
   */
  credits?: Number;
  /**
   */
  deliveryReceipt?: Number;
  /**
   */
  differedDelivery?: Number;
  /**
   */
  id?: Number;
  /**
   */
  message?: string;
  /**
   */
  messageLength?: Number;
  /**
   */
  numberOfSms?: Number;
  /**
   */
  ptt?: Number;
  /**
   */
  receiver?: string;
  /**
   */
  sender?: string;
}
/**
 * Sms history of sms outgoing sent
 */
export interface SmsOutgoing {
  /**
   */
  creationDatetime?: Date;
  /**
   */
  credits?: Number;
  /**
   */
  deliveryReceipt?: Number;
  /**
   */
  differedDelivery?: Number;
  /**
   */
  id?: Number;
  /**
   */
  message?: string;
  /**
   */
  messageLength?: Number;
  /**
   */
  numberOfSms?: Number;
  /**
   */
  ptt?: Number;
  /**
   */
  receiver?: string;
  /**
   */
  sender?: string;
  /**
   */
  tag?: string;
  /**
   * Tariff code applied on the sms
   *
   */
  tariffCode?: string;
}
/**
 * A structure describing all information about an sms pack offer
 */
export interface SmsPackOffer {
  /**
   */
  countryDestination?: string;
  /**
   */
  giftPrice?: Number;
  /**
   */
  giftQuantity?: Number;
  /**
   */
  language?: string;
  /**
   */
  price?: Number;
  /**
   */
  quantity?: Number;
  /**
   */
  smsQuantity?: Number;
  /**
   */
  totalPrice?: Number;
}
/**
 * Pack quantity automatic recredit possibilities
 */
export type SmsPackQuantityAutomaticRecreditEnum = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000;
/**
 * Pack quantity levels
 */
export type SmsPackQuantityEnum = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000;
/**
 * Phone book
 */
export interface SmsPhonebook {
  /**
   * Identifier of the phonebook
   *
   */
  bookKey?: string;
  /**
   * Phonebook name
   *
   */
  name?: string;
  /**
   * Phone key identifier between the phone and phonebooks
   *
   */
  phoneKey?: string;
}
/**
 * Phone book contact
 */
export interface SmsPhonebookContact {
  /**
   * Group name of the phonebook
   *
   */
  group?: string;
  /**
   * Home mobile phone number of the contact
   *
   */
  homeMobile?: string;
  /**
   * Home landline phone number of the contact
   *
   */
  homePhone?: string;
  /**
   * Contact identifier
   *
   */
  id?: Number;
  /**
   * Contact name
   *
   */
  name?: string;
  /**
   * Contact surname
   *
   */
  surname?: string;
  /**
   * Mobile phone office number of the contact
   *
   */
  workMobile?: string;
  /**
   * Landline phone office number of the contact
   *
   */
  workPhone?: string;
}
/**
 * The priority of an sms sending
 */
export type SmsPriorityEnum = 'high' | 'low' | 'medium' | 'veryLow';
/**
 * A structure describing ptt details
 */
export interface SmsPttDetails {
  /**
   * Ptt informations
   *
   */
  comment?: string;
  /**
   * Ptt short description
   *
   */
  description?: string;
  /**
   * Ptt volatility type
   *
   */
  duration?: SmsPttDurationTypeEnum;
}
/**
 * All typology of ptt duration
 */
export type SmsPttDurationTypeEnum = 'indeterminated' | 'permanent' | 'temporary';
/**
 * A structure describing all information about quota informations
 */
export interface SmsQuota {
  /**
   */
  quotaLeft?: Number;
  /**
   */
  quotaStatus?: SmsQuotaStatusUserEnum;
}
/**
 * Current quota status
 */
export type SmsQuotaStatusUserEnum = 'active' | 'inactive';
/**
 * Sms receivers preloaded
 */
export interface SmsReceiver {
  /**
   * Download file from URL before sending to contacts (works only with csvUrl and not document ID)
   *
   */
  autoUpdate?: boolean;
  /**
   * Is the object compatible with autoUpdate
   *
   */
  canAutoUpdate?: boolean;
  /**
   * Creation date of the document
   *
   */
  datetime?: Date;
  /**
   * Description name of the document
   *
   */
  description?: string;
  /**
   * Number of receiver records in the document
   *
   */
  records?: Number;
  /**
   * Slot number id
   *
   */
  slotId?: Number;
}
/**
 * A structure giving operation price and asynchronous task ID
 */
export interface SmsReceiversAsynchronousCleanReport {
  /**
   */
  taskId?: Number;
  /**
   */
  totalCreditsRemoved?: Number;
}
/**
 * All tyoplogy of senders
 */
export type SmsRefererSenderEnum = 'custom' | 'domain' | 'line' | 'nic' | 'owner' | 'virtual';
/**
 * A structure describing how to manage an sms Response
 */
export interface SmsResponse {
  /**
   * Default url callback used for a given response.
   *
   */
  cgiUrl?: string;
  /**
   */
  responseType?: SmsResponseTypeEnum;
  /**
   * Automatic notification sent by text in case of customer reply.
   *
   */
  text?: string;
  /**
   */
  trackingDefaultSmsSender?: string;
  /**
   */
  trackingOptions?: SmsResponseTrackingOptions[];
}
/**
 * The tracking media response
 */
export type SmsResponseTrackingMediaEnum = 'email' | 'sms' | 'voice';
/**
 * The tracking media response
 */
export interface SmsResponseTrackingOptions {
  /**
   */
  media?: SmsResponseTrackingMediaEnum;
  /**
   */
  sender?: string;
  /**
   */
  target?: string;
}
/**
 * Response type
 */
export type SmsResponseTypeEnum = 'cgi' | 'none' | 'text';
/**
 * Restriction type used by the operator to filter sms.
 */
export type SmsRestrictionCodeEnum = 'ALPHA' | 'BAD_DLR' | 'BLOCKED' | 'CODING' | 'DLR' | 'FLASHONLY' | 'MSISDN';
/**
 * SMS senders
 */
export interface SmsSender {
  /**
   * Message sent by the moderator
   *
   */
  comment?: string;
  /**
   * Sender description
   *
   */
  description?: string;
  /**
   * Specify if the sender is custom or not
   *
   */
  referer?: SmsRefererSenderEnum;
  /**
   * The sms sender
   *
   */
  sender?: string;
  /**
   * Sender status
   *
   */
  status?: SmsStatusSenderEnum;
  /**
   * Specify the kind of sender
   *
   */
  type?: SmsTypeSenderEnum;
  /**
   * Validation media identifier
   *
   */
  validationMedia?: string;
}
/**
 * A structure describing all information about senders available
 */
export interface SmsSenderAvailable {
  /**
   */
  referer?: SmsSenderRefererEnum;
  /**
   */
  sender?: string;
}
/**
 * The referer of the available sender
 */
export type SmsSenderRefererEnum = 'domain' | 'nichandle';
/**
 * A structure describing all information about quota informations
 */
export interface SmsSmsSendingReport {
  /**
   */
  ids?: Number[];
  /**
   */
  invalidReceivers?: string[];
  /**
   */
  totalCreditsRemoved?: Number;
  /**
   */
  validReceivers?: string[];
}
/**
 * Account status
 */
export type SmsStatusAccountEnum = 'disable' | 'enable';
/**
 * All existing status for a given referer
 */
export type SmsStatusSenderEnum = 'disable' | 'enable' | 'refused' | 'waitingValidation';
/**
 * The media support used to be contacted in case of alert
 */
export type SmsSupportEnum = 'both' | 'mail' | 'sms';
/**
 * Operation on a SMS service
 */
export interface SmsTask {
  /**
   */
  function?: SmsTodoGeneralPublicFunctionsEnum;
  /**
   */
  status?: TelephonyTaskStatusEnum;
  /**
   */
  step?: SmsTodoGeneralPublicStepsEnum;
  /**
   */
  taskId?: Number;
}
/**
 * Sms template for moderation (Needed to send in US country)
 */
export interface SmsTemplateControl {
  /**
   * Specify the kind of template
   *
   */
  activity?: SmsTypeTemplateEnum;
  /**
   * Message sent by the moderator
   *
   */
  comment?: string;
  /**
   * Template creation datetime
   *
   */
  datetime?: Date;
  /**
   * Template description
   *
   */
  description?: string;
  /**
   * Message pattern to be moderated. Use "#VALUE#" format for dynamic text area.
   *
   */
  message?: string;
  /**
   * Name of the template
   *
   */
  name?: string;
  /**
   * Template status
   *
   */
  status?: SmsStatusSenderEnum;
}
/**
 * A structure describing all information about templates informations
 */
export interface SmsTemplates {
  /**
   */
  customizedEmailMode?: boolean;
  /**
   */
  customizedSmsMode?: boolean;
  /**
   */
  emailBody?: string;
  /**
   */
  emailFrom?: string;
  /**
   */
  emailSubject?: string;
  /**
   */
  smsBody?: string;
}
/**
 * The task function
 */
export type SmsTodoGeneralPublicFunctionsEnum = 'cleanSmsReceivers';
/**
 * The task step
 */
export type SmsTodoGeneralPublicStepsEnum = 'checkOrder' | 'createHlrs' | 'finishing' | 'sendMailReport' | 'starting' | 'waitForHlrs';
/**
 * All existing types for a given sender
 */
export type SmsTypeSenderEnum = 'alpha' | 'numeric' | 'virtual';
/**
 * All existing types for a given template
 */
export type SmsTypeTemplateEnum = 'alerting' | 'authentification' | 'transactional';
/**
 * SMS users
 */
export interface SmsUser {
  /**
   */
  alertThresholdInformations?: SmsAlertThreshold;
  /**
   * URL called when state of a sent SMS changes
   *
   */
  callBack?: string;
  /**
   */
  ipRestrictions?: string[];
  /**
   * The sms user login
   *
   */
  login?: string;
  /**
   */
  password?: string;
  /**
   */
  quotaInformations?: SmsQuota;
  /**
   * URL called when a STOP is received after a receiver replied stop to a SMS
   *
   */
  stopCallBack?: string;
}
/**
 * Virtual numbers
 */
export interface SmsVirtualNumber {
  /**
   * The ISO formated country code of the number
   *
   */
  countryCode?: SmsVirtualNumberIsoCountryCodeEnum;
  /**
   * The virtual number
   *
   */
  number?: string;
}
/**
 * Virtual numbers
 */
export interface SmsVirtualNumberGenericService {
  /**
   * The ISO formated country code of the number
   *
   */
  countryCode?: SmsVirtualNumberIsoCountryCodeEnum;
  /**
   * The virtual number
   *
   */
  number?: string;
}
/**
 * The ISO formated country code of the number
 */
export type SmsVirtualNumberIsoCountryCodeEnum = 'be' | 'ch' | 'de' | 'es' | 'fr' | 'uk';
/**
 * Sms job
 */
export interface SmsVirtualNumberJob {
  /**
   */
  creationDatetime?: Date;
  /**
   */
  credits?: Number;
  /**
   */
  deliveryReceipt?: Number;
  /**
   */
  differedDelivery?: Number;
  /**
   */
  id?: Number;
  /**
   */
  message?: string;
  /**
   */
  messageLength?: Number;
  /**
   */
  numberOfSms?: Number;
  /**
   */
  ptt?: Number;
  /**
   */
  receiver?: string;
}
/**
 * Export file format
 */
export type TelephonyContactsExportFormatsEnum = 'csv';
/**
 * Telephony API related file hosted
 */
export interface TelephonyPcsFile {
  /**
   */
  filename?: string;
  /**
   */
  status?: TelephonyPcsFileStatusEnum;
  /**
   */
  url?: string;
  /**
   */
  urlExpirationDatetime?: Date;
}
/**
 * File providing task status
 */
export type TelephonyPcsFileStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Operation on a telephony service
 */
export interface TelephonyTask {
  /**
   * Action associated with the task
   *
   */
  action?: string;
  /**
   * Potential failure reason of the task
   *
   */
  message?: string;
  /**
   * Object potentially created at the end of the task
   *
   */
  objectCreated?: string;
  /**
   */
  serviceType?: string;
  /**
   * Status of the task
   *
   */
  status?: TelephonyTaskStatusEnum;
  /**
   */
  taskId?: Number;
}
/**
 * Task status
 */
export type TelephonyTaskStatusEnum = 'doing' | 'done' | 'error' | 'pause' | 'todo';
type PathsSmsGET = '/sms' | 
'/sms/{serviceName}/users' | 
'/sms/{serviceName}/users/{login}/outgoing/{id}' | 
'/sms/{serviceName}/users/{login}/outgoing/{id}/hlr' | 
'/sms/{serviceName}/users/{login}/outgoing' | 
'/sms/{serviceName}/users/{login}/jobs' | 
'/sms/{serviceName}/users/{login}/jobs/{id}' | 
'/sms/{serviceName}/users/{login}/document' | 
'/sms/{serviceName}/users/{login}/incoming' | 
'/sms/{serviceName}/users/{login}/incoming/{id}' | 
'/sms/{serviceName}/users/{login}' | 
'/sms/{serviceName}/users/{login}/receivers' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}/csv' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}' | 
'/sms/{serviceName}/jobs' | 
'/sms/{serviceName}/jobs/{id}' | 
'/sms/{serviceName}/exceptions' | 
'/sms/{serviceName}/seeOffers' | 
'/sms/{serviceName}/receivers/{slotId}/csv' | 
'/sms/{serviceName}/receivers/{slotId}' | 
'/sms/{serviceName}/receivers' | 
'/sms/{serviceName}/serviceInfos' | 
'/sms/{serviceName}/document' | 
'/sms/{serviceName}/task' | 
'/sms/{serviceName}/task/{taskId}' | 
'/sms/{serviceName}/templatesControl' | 
'/sms/{serviceName}/templatesControl/{name}' | 
'/sms/{serviceName}/virtualNumbers' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing' | 
'/sms/{serviceName}/virtualNumbers/{number}/chatAccess' | 
'/sms/{serviceName}/virtualNumbers/{number}' | 
'/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/incoming' | 
'/sms/{serviceName}/incoming/{id}' | 
'/sms/{serviceName}/incoming' | 
'/sms/{serviceName}/senders/{sender}' | 
'/sms/{serviceName}/senders' | 
'/sms/{serviceName}' | 
'/sms/{serviceName}/phonebooks/{bookKey}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/export' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' | 
'/sms/{serviceName}/phonebooks' | 
'/sms/{serviceName}/outgoing/{id}' | 
'/sms/{serviceName}/outgoing/{id}/hlr' | 
'/sms/{serviceName}/outgoing' | 
'/sms/{serviceName}/hlr' | 
'/sms/{serviceName}/hlr/{id}/operator' | 
'/sms/{serviceName}/hlr/{id}' | 
'/sms/{serviceName}/blacklists' | 
'/sms/{serviceName}/blacklists/{number}' | 
'/sms/{serviceName}/sendersAvailableForValidation' | 
'/sms/virtualNumbers' | 
'/sms/virtualNumbers/{number}/serviceInfos' | 
'/sms/virtualNumbers/{number}' | 
'/sms/ptts';

type PathsSmsPUT = '/sms/{serviceName}/users/{login}' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}' | 
'/sms/{serviceName}/receivers/{slotId}' | 
'/sms/{serviceName}/serviceInfos' | 
'/sms/{serviceName}/templatesControl/{name}' | 
'/sms/{serviceName}/senders/{sender}' | 
'/sms/{serviceName}' | 
'/sms/{serviceName}/phonebooks/{bookKey}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' | 
'/sms/virtualNumbers/{number}/serviceInfos';

type PathsSmsPOST = '/sms/{serviceName}/users' | 
'/sms/{serviceName}/users/{login}/jobs' | 
'/sms/{serviceName}/users/{login}/receivers' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}/clean' | 
'/sms/{serviceName}/jobs' | 
'/sms/{serviceName}/receivers/{slotId}/clean' | 
'/sms/{serviceName}/receivers' | 
'/sms/{serviceName}/templatesControl' | 
'/sms/{serviceName}/templatesControl/{name}/relaunchValidation' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs' | 
'/sms/{serviceName}/virtualNumbers/{number}/chatAccess' | 
'/sms/{serviceName}/senders/{sender}/validate' | 
'/sms/{serviceName}/senders' | 
'/sms/{serviceName}/transferCredits' | 
'/sms/{serviceName}/phonebooks/{bookKey}/import' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' | 
'/sms/{serviceName}/phonebooks' | 
'/sms/{serviceName}/hlr';

type PathsSmsDELETE = '/sms/{serviceName}/users/{login}/outgoing/{id}' | 
'/sms/{serviceName}/users/{login}/jobs/{id}' | 
'/sms/{serviceName}/users/{login}/incoming/{id}' | 
'/sms/{serviceName}/users/{login}' | 
'/sms/{serviceName}/users/{login}/receivers/{slotId}' | 
'/sms/{serviceName}/jobs/{id}' | 
'/sms/{serviceName}/receivers/{slotId}' | 
'/sms/{serviceName}/templatesControl/{name}' | 
'/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' | 
'/sms/{serviceName}/virtualNumbers/{number}/chatAccess' | 
'/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' | 
'/sms/{serviceName}/incoming/{id}' | 
'/sms/{serviceName}/senders/{sender}' | 
'/sms/{serviceName}/phonebooks/{bookKey}' | 
'/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' | 
'/sms/{serviceName}/outgoing/{id}' | 
'/sms/{serviceName}/blacklists/{number}';

export class ApiSms extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/sms'): Promise<string[]>;
  /**
  List the sms.User objects
  Users associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/users', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Sms history of sms outgoing sent
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', pathParams: {serviceName: string, login: string, id: Number}): Promise<SmsOutgoing>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/outgoing/{id}/hlr', pathParams: {serviceName: string, login: string, id: Number}): Promise<SmsHlr>;
  /**
  List the sms.Outgoing objects
  Sms sent associated to the sms user
  **/
  public get(path: '/sms/{serviceName}/users/{login}/outgoing', pathParams: {serviceName: string, login: string}, queryParams: {tag?: string, receiver?: string, differedDelivery?: Number, deliveryReceipt?: Number, ptt?: Number, sender?: string}): Promise<Number[]>;
  /**
  List the sms.Job objects
  Sms in pending associated to the sms user
  **/
  public get(path: '/sms/{serviceName}/users/{login}/jobs', pathParams: {serviceName: string, login: string}): Promise<Number[]>;
  /**
  Sms job
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/jobs/{id}', pathParams: {serviceName: string, login: string, id: Number}): Promise<SmsJob>;
  /**
  document operations
  Get the /me/document id generated
  **/
  public get(path: '/sms/{serviceName}/users/{login}/document', pathParams: {serviceName: string, login: string}, queryParams: {tag?: string, 'creationDatetime.from'?: Date, wayType?: SmsDocumentWayTypeEnum, 'creationDatetime.to'?: Date}): Promise<string>;
  /**
  List the sms.Incoming objects
  Sms received associated to the sms user
  **/
  public get(path: '/sms/{serviceName}/users/{login}/incoming', pathParams: {serviceName: string, login: string}, queryParams: {tag?: string, sender?: string}): Promise<Number[]>;
  /**
  Sms history of sms incoming received
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/incoming/{id}', pathParams: {serviceName: string, login: string, id: Number}): Promise<SmsIncoming>;
  /**
  SMS users
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}', pathParams: {serviceName: string, login: string}): Promise<SmsUser>;
  /**
  List the sms.Receiver objects
  Receivers preloaded from text or csv document file
  **/
  public get(path: '/sms/{serviceName}/users/{login}/receivers', pathParams: {serviceName: string, login: string}): Promise<Number[]>;
  /**
  csv operations
  Get the document data container
  **/
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/csv', pathParams: {serviceName: string, login: string, slotId: Number}): Promise<string>;
  /**
  Sms receivers preloaded
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', pathParams: {serviceName: string, login: string, slotId: Number}): Promise<SmsReceiver>;
  /**
  List the sms.Job objects
  Sms in pending associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/jobs', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Sms job
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/jobs/{id}', pathParams: {serviceName: string, id: Number}): Promise<SmsJob>;
  /**
  exceptions operations
  Describe filter exceptions in sms sending from a specific receiver.
  **/
  public get(path: '/sms/{serviceName}/exceptions', pathParams: {serviceName: string}, queryParams: {receiver?: string}): Promise<SmsException[]>;
  /**
  seeOffers operations
  Describe SMS offers available.
  **/
  public get(path: '/sms/{serviceName}/seeOffers', pathParams: {serviceName: string}, queryParams: {quantity?: SmsPackQuantityEnum, countryCurrencyPrice?: ReferenceCountryEnum, countryDestination?: SmsCountryEnum}): Promise<SmsPackOffer[]>;
  /**
  csv operations
  Get the document data container
  **/
  public get(path: '/sms/{serviceName}/receivers/{slotId}/csv', pathParams: {serviceName: string, slotId: Number}): Promise<string>;
  /**
  Sms receivers preloaded
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/receivers/{slotId}', pathParams: {serviceName: string, slotId: Number}): Promise<SmsReceiver>;
  /**
  List the sms.Receiver objects
  Receivers preloaded from text or csv document file
  **/
  public get(path: '/sms/{serviceName}/receivers', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  document operations
  Get the /me/document id generated
  **/
  public get(path: '/sms/{serviceName}/document', pathParams: {serviceName: string}, queryParams: {'creationDatetime.to'?: Date, tag?: string, 'creationDatetime.from'?: Date, wayType?: SmsDocumentWayTypeEnum}): Promise<string>;
  /**
  List the sms.Task objects
  Operations on a SMS service
  **/
  public get(path: '/sms/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  Operation on a SMS service
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<SmsTask>;
  /**
  List the sms.TemplateControl objects
  Template pattern filled up for moderation (Needed to send in US country)
  **/
  public get(path: '/sms/{serviceName}/templatesControl', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Sms template for moderation (Needed to send in US country)
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/templatesControl/{name}', pathParams: {serviceName: string, name: string}): Promise<SmsTemplateControl>;
  /**
  List the sms.VirtualNumber objects
  Virtual numbers associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  List the sms.VirtualNumberJob objects
  Sms in pending associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', pathParams: {serviceName: string, number: string}): Promise<Number[]>;
  /**
  Sms job
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', pathParams: {serviceName: string, number: string, id: Number}): Promise<SmsVirtualNumberJob>;
  /**
  Sms history of sms outgoing sent
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', pathParams: {serviceName: string, number: string, id: Number}): Promise<SmsOutgoing>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr', pathParams: {serviceName: string, number: string, id: Number}): Promise<SmsHlr>;
  /**
  List the sms.Outgoing objects
  Sms sent associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing', pathParams: {serviceName: string, number: string}, queryParams: {sender?: string, 'creationDatetime.to'?: Date, receiver?: string, 'creationDatetime.from'?: Date, tag?: string, ptt?: Number, differedDelivery?: Number, deliveryReceipt?: Number}): Promise<Number[]>;
  /**
  The web access for your virtual number chat application
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', pathParams: {serviceName: string, number: string}): Promise<SmsChatAccess>;
  /**
  Virtual numbers
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}', pathParams: {serviceName: string, number: string}): Promise<SmsVirtualNumber>;
  /**
  Sms history of sms incoming received
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', pathParams: {serviceName: string, number: string, id: Number}): Promise<SmsIncoming>;
  /**
  List the sms.Incoming objects
  Sms received associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming', pathParams: {serviceName: string, number: string}, queryParams: {'creationDatetime.to'?: Date, sender?: string, 'creationDatetime.from'?: Date, tag?: string}): Promise<Number[]>;
  /**
  Sms history of sms incoming received
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/incoming/{id}', pathParams: {serviceName: string, id: Number}): Promise<SmsIncoming>;
  /**
  List the sms.Incoming objects
  Sms received associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/incoming', pathParams: {serviceName: string}, queryParams: {sender?: string, 'creationDatetime.to'?: Date, 'creationDatetime.from'?: Date, tag?: string}): Promise<Number[]>;
  /**
  SMS senders
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/senders/{sender}', pathParams: {serviceName: string, sender: string}): Promise<SmsSender>;
  /**
  List the sms.Sender objects
  Senders allowed associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/senders', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  SMS details
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}', pathParams: {serviceName: string}): Promise<SmsAccount>;
  /**
  Phone book
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}', pathParams: {serviceName: string, bookKey: string}): Promise<SmsPhonebook>;
  /**
  export operations
  Export the phonebook's contacts
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/export', pathParams: {serviceName: string, bookKey: string}, queryParams: {format?: TelephonyContactsExportFormatsEnum}): Promise<TelephonyPcsFile>;
  /**
  Phone book contact
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', pathParams: {serviceName: string, bookKey: string, id: Number}): Promise<SmsPhonebookContact>;
  /**
  List the sms.PhonebookContact objects
  Phonebook contacts
  **/
  public get(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', pathParams: {serviceName: string, bookKey: string}): Promise<Number[]>;
  /**
  List the sms.Phonebook objects
  Return phonebooks associated to this account
  **/
  public get(path: '/sms/{serviceName}/phonebooks', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Sms history of sms outgoing sent
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/outgoing/{id}', pathParams: {serviceName: string, id: Number}): Promise<SmsOutgoing>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/outgoing/{id}/hlr', pathParams: {serviceName: string, id: Number}): Promise<SmsHlr>;
  /**
  List the sms.Outgoing objects
  Sms sent associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/outgoing', pathParams: {serviceName: string}, queryParams: {ptt?: Number, deliveryReceipt?: Number, differedDelivery?: Number, 'creationDatetime.from'?: Date, tag?: string, sender?: string, 'creationDatetime.to'?: Date, receiver?: string}): Promise<Number[]>;
  /**
  List the sms.HlrLookupNumber objects
  Home Location Register informations. Give informations about a given cellular phone.
  **/
  public get(path: '/sms/{serviceName}/hlr', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Sms operator informations
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/hlr/{id}/operator', pathParams: {serviceName: string, id: Number}): Promise<SmsHlr>;
  /**
  Home Location Register informations. Give informations about a given cellular phone.
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/hlr/{id}', pathParams: {serviceName: string, id: Number}): Promise<SmsHlrLookupNumber>;
  /**
  List the sms.Blacklist objects
  Numbers blacklisted associated to the sms account
  **/
  public get(path: '/sms/{serviceName}/blacklists', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  SMS blacklist
  Get this object properties
  **/
  public get(path: '/sms/{serviceName}/blacklists/{number}', pathParams: {serviceName: string, number: string}): Promise<SmsBlacklist>;
  /**
  sendersAvailableForValidation operations
  The senders that are attached to your personal informations or OVH services and that can be automatically validated
  **/
  public get(path: '/sms/{serviceName}/sendersAvailableForValidation', pathParams: {serviceName: string}, queryParams: {referer?: SmsSenderRefererEnum}): Promise<SmsSenderAvailable[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/sms/virtualNumbers'): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/sms/virtualNumbers/{number}/serviceInfos', pathParams: {number: string}): Promise<ServicesService>;
  /**
  Virtual numbers
  Get this object properties
  **/
  public get(path: '/sms/virtualNumbers/{number}', pathParams: {number: string}): Promise<SmsVirtualNumberGenericService>;
  /**
  Get informations about the given ptt code
  Get informations about the given ptt code
  **/
  public get(path: '/sms/ptts', pathParams: null, queryParams: {ptt?: Number}): Promise<SmsPttDetails>;
  public get(path: PathsSmsGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  SMS users
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/users/{login}', pathParams: {serviceName: string, login: string}): Promise<void>;
  /**
  Sms receivers preloaded
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', pathParams: {serviceName: string, login: string, slotId: Number}): Promise<void>;
  /**
  Sms receivers preloaded
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/receivers/{slotId}', pathParams: {serviceName: string, slotId: Number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Sms template for moderation (Needed to send in US country)
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/templatesControl/{name}', pathParams: {serviceName: string, name: string}): Promise<void>;
  /**
  SMS senders
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/senders/{sender}', pathParams: {serviceName: string, sender: string}): Promise<void>;
  /**
  SMS details
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Phone book
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}', pathParams: {serviceName: string, bookKey: string}): Promise<void>;
  /**
  Phone book contact
  Alter this object properties
  **/
  public put(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', pathParams: {serviceName: string, bookKey: string, id: Number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/sms/virtualNumbers/{number}/serviceInfos', pathParams: {number: string}): Promise<void>;
  public put(path: PathsSmsPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the sms.User objects
  Create a new user for an sms account
  **/
  public post(path: '/sms/{serviceName}/users', pathParams: {serviceName: string}): Promise<void>;
  /**
  List the sms.Job objects
  Add one or several sending jobs
  **/
  public post(path: '/sms/{serviceName}/users/{login}/jobs', pathParams: {serviceName: string, login: string}): Promise<SmsSmsSendingReport>;
  /**
  List the sms.Receiver objects
  Add a new document of csv receivers
  **/
  public post(path: '/sms/{serviceName}/users/{login}/receivers', pathParams: {serviceName: string, login: string}): Promise<SmsReceiver>;
  /**
  clean operations
  Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
  **/
  public post(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}/clean', pathParams: {serviceName: string, login: string, slotId: Number}): Promise<SmsReceiversAsynchronousCleanReport>;
  /**
  List the sms.Job objects
  Add one or several sending jobs
  **/
  public post(path: '/sms/{serviceName}/jobs', pathParams: {serviceName: string}): Promise<SmsSmsSendingReport>;
  /**
  clean operations
  Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.
  **/
  public post(path: '/sms/{serviceName}/receivers/{slotId}/clean', pathParams: {serviceName: string, slotId: Number}): Promise<SmsReceiversAsynchronousCleanReport>;
  /**
  List the sms.Receiver objects
  Add a new document of csv receivers
  **/
  public post(path: '/sms/{serviceName}/receivers', pathParams: {serviceName: string}): Promise<SmsReceiver>;
  /**
  List the sms.TemplateControl objects
  Create the sms template control given
  **/
  public post(path: '/sms/{serviceName}/templatesControl', pathParams: {serviceName: string}): Promise<void>;
  /**
  relaunchValidation operations
  Attempt a new validation after moderation refusal
  **/
  public post(path: '/sms/{serviceName}/templatesControl/{name}/relaunchValidation', pathParams: {serviceName: string, name: string}): Promise<void>;
  /**
  List the sms.VirtualNumberJob objects
  Add one or several sending jobs
  **/
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs', pathParams: {serviceName: string, number: string}): Promise<SmsSmsSendingReport>;
  /**
  The web access for your virtual number chat application
  Create a new web access for this ressource
  **/
  public post(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', pathParams: {serviceName: string, number: string}): Promise<SmsChatAccess>;
  /**
  validate operations
  Validate a given sender with an activation code.
  **/
  public post(path: '/sms/{serviceName}/senders/{sender}/validate', pathParams: {serviceName: string, sender: string}): Promise<void>;
  /**
  List the sms.Sender objects
  Create the sms sender given
  **/
  public post(path: '/sms/{serviceName}/senders', pathParams: {serviceName: string}): Promise<string>;
  /**
  transferCredits operations
  Credit transfer between two sms accounts.
  **/
  public post(path: '/sms/{serviceName}/transferCredits', pathParams: {serviceName: string}): Promise<void>;
  /**
  import operations
  Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
  **/
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/import', pathParams: {serviceName: string, bookKey: string}): Promise<TelephonyTask>;
  /**
  List the sms.PhonebookContact objects
  Create a phonebook contact. Return identifier of the phonebook contact.
  **/
  public post(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact', pathParams: {serviceName: string, bookKey: string}): Promise<Number>;
  /**
  List the sms.Phonebook objects
  Add a phonebook. Return the bookKey.
  **/
  public post(path: '/sms/{serviceName}/phonebooks', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the sms.HlrLookupNumber objects
  Add one or several sending hlr lookup request
  **/
  public post(path: '/sms/{serviceName}/hlr', pathParams: {serviceName: string}): Promise<SmsSmsSendingReport>;
  public post(path: PathsSmsPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Sms history of sms outgoing sent
  Delete the sms outgoing history given
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/outgoing/{id}', pathParams: {serviceName: string, login: string, id: Number}): Promise<void>;
  /**
  Sms job
  Delete the sms job given (stop sending)
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/jobs/{id}', pathParams: {serviceName: string, login: string, id: Number}): Promise<void>;
  /**
  Sms history of sms incoming received
  Delete the sms incoming history given
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/incoming/{id}', pathParams: {serviceName: string, login: string, id: Number}): Promise<void>;
  /**
  SMS users
  Delete the sms user given
  **/
  public delete(path: '/sms/{serviceName}/users/{login}', pathParams: {serviceName: string, login: string}): Promise<void>;
  /**
  Sms receivers preloaded
  Delete the document from the slot
  **/
  public delete(path: '/sms/{serviceName}/users/{login}/receivers/{slotId}', pathParams: {serviceName: string, login: string, slotId: Number}): Promise<void>;
  /**
  Sms job
  Delete the sms job given (stop sending)
  **/
  public delete(path: '/sms/{serviceName}/jobs/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  Sms receivers preloaded
  Delete the document from the slot
  **/
  public delete(path: '/sms/{serviceName}/receivers/{slotId}', pathParams: {serviceName: string, slotId: Number}): Promise<void>;
  /**
  Sms template for moderation (Needed to send in US country)
  Delete the sms template control
  **/
  public delete(path: '/sms/{serviceName}/templatesControl/{name}', pathParams: {serviceName: string, name: string}): Promise<void>;
  /**
  Sms job
  Delete the sms job given (stop sending)
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}', pathParams: {serviceName: string, number: string, id: Number}): Promise<void>;
  /**
  Sms history of sms outgoing sent
  Delete the sms outgoing history given
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}', pathParams: {serviceName: string, number: string, id: Number}): Promise<void>;
  /**
  The web access for your virtual number chat application
  Delete the given web access
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/chatAccess', pathParams: {serviceName: string, number: string}): Promise<void>;
  /**
  Sms history of sms incoming received
  Delete the sms incoming history given
  **/
  public delete(path: '/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}', pathParams: {serviceName: string, number: string, id: Number}): Promise<void>;
  /**
  Sms history of sms incoming received
  Delete the sms incoming history given
  **/
  public delete(path: '/sms/{serviceName}/incoming/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  SMS senders
  Delete the sms sender given
  **/
  public delete(path: '/sms/{serviceName}/senders/{sender}', pathParams: {serviceName: string, sender: string}): Promise<void>;
  /**
  Phone book
  Delete a phonebook
  **/
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}', pathParams: {serviceName: string, bookKey: string}): Promise<void>;
  /**
  Phone book contact
  Delete a phonebook contact
  **/
  public delete(path: '/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}', pathParams: {serviceName: string, bookKey: string, id: Number}): Promise<void>;
  /**
  Sms history of sms outgoing sent
  Delete the sms outgoing history given
  **/
  public delete(path: '/sms/{serviceName}/outgoing/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  SMS blacklist
  Delete the blacklisted sms number given
  **/
  public delete(path: '/sms/{serviceName}/blacklists/{number}', pathParams: {serviceName: string, number: string}): Promise<void>;
  public delete(path: PathsSmsDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
