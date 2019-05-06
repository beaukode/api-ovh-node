import { ApiCommon } from '@ovh-api/common';
/**
 * Support ticket message
 */
export interface SupportMessage {
  /**
   * Message body
   *
   */
  body?: string;
  /**
   * Message creation date
   *
   */
  creationDate?: Date;
  /**
   * Message sender type
   *
   */
  from?: SupportMessageSenderEnum;
  /**
   * Message identifier
   *
   */
  messageId?: Number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
  /**
   * Message last update date
   *
   */
  updateDate?: Date;
}
/**
 * Message sender type
 */
export type SupportMessageSenderEnum = 'customer' | 'support';
/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  /**
   * Message identifier
   *
   */
  messageId?: Number;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
  /**
   * Ticket external number
   *
   */
  ticketNumber?: Number;
}
/**
 * Support Ticket
 */
export interface SupportTicket {
  /**
   * Customer account identifier
   *
   */
  accountId?: string;
  /**
   * Can this ticket be closed or not
   *
   */
  canBeClosed?: boolean;
  /**
   * Ticket request category
   *
   */
  category?: SupportTicketCategoryEnum;
  /**
   * Ticket creation date
   *
   */
  creationDate?: Date;
  /**
   * Sender type of last message
   *
   */
  lastMessageFrom?: SupportMessageSenderEnum;
  /**
   * Product service concerned by ticket
   *
   */
  product?: SupportTicketProductEnum;
  /**
   * Ticket score
   *
   */
  score?: string;
  /**
   * Name of service concerned by ticket
   *
   */
  serviceName?: string;
  /**
   * State of ticket
   *
   */
  state?: SupportTicketStatusEnum;
  /**
   * Ticket subject
   *
   */
  subject?: string;
  /**
   * Ticket identifier
   *
   */
  ticketId?: Number;
  /**
   * Ticket external number
   *
   */
  ticketNumber?: Number;
  /**
   * Ticket type
   *
   */
  type?: SupportTicketTypeEnum;
  /**
   * Ticket last update date
   *
   */
  updateDate?: Date;
}
/**
 * Ticket request category
 */
export type SupportTicketCategoryEnum = 'assistance' | 'billing' | 'incident';
/**
 * Ticket product
 */
export type SupportTicketProductEnum = 'adsl' | 'cdn' | 'dedicated' | 'dedicated-billing' | 'dedicated-other' | 'dedicatedcloud' | 'domain' | 'exchange' | 'fax' | 'hosting' | 'housing' | 'iaas' | 'mail' | 'network' | 'publiccloud' | 'sms' | 'ssl' | 'storage' | 'telecom-billing' | 'telecom-other' | 'voip' | 'vps' | 'web-billing' | 'web-other';
/**
 * Support ticket statuses
 */
export type SupportTicketStatusEnum = 'closed' | 'open' | 'unknown';
/**
 * Ticket request subcategory
 */
export type SupportTicketSubCategoryEnum = 'alerts' | 'autorenew' | 'bill' | 'down' | 'inProgress' | 'new' | 'other' | 'perfs' | 'start' | 'usage';
/**
 * Ticket type (criticalIntervention requires VIP support level)
 */
export type SupportTicketTypeEnum = 'criticalIntervention' | 'genericRequest';
type PathsSupportGET = '/support/tickets/{ticketId}/canBeScored' | 
'/support/tickets/{ticketId}' | 
'/support/tickets/{ticketId}/messages' | 
'/support/tickets';

type PathsSupportPOST = '/support/tickets/create' | 
'/support/tickets/{ticketId}/close' | 
'/support/tickets/{ticketId}/reopen' | 
'/support/tickets/{ticketId}/reply' | 
'/support/tickets/{ticketId}/score';

export class ApiSupport extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Check whether ticket can be scored
  Checks whether ticket can be scored
  **/
  public get(path: '/support/tickets/{ticketId}/canBeScored', pathParams: {ticketId: Number}): Promise<boolean>;
  /**
  Get ticket
  Get ticket
  **/
  public get(path: '/support/tickets/{ticketId}', pathParams: {ticketId: Number}): Promise<SupportTicket>;
  /**
  Get ticket messages
  Get ticket messages
  **/
  public get(path: '/support/tickets/{ticketId}/messages', pathParams: {ticketId: Number}): Promise<SupportMessage[]>;
  /**
  List support tickets identifiers for this service
  List support tickets identifiers for this service
  **/
  public get(path: '/support/tickets', pathParams: null, queryParams: {minCreationDate?: Date, product?: SupportTicketProductEnum, ticketNumber?: string, maxCreationDate?: Date, serviceName?: string, status?: SupportTicketStatusEnum, subject?: string, category?: SupportTicketCategoryEnum, archived?: boolean}): Promise<Number[]>;
  public get(path: PathsSupportGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Create a new ticket
  Create a new ticket
  **/
  public post(path: '/support/tickets/create'): Promise<SupportNewMessageInfo>;
  /**
  Close ticket
  Close ticket
  **/
  public post(path: '/support/tickets/{ticketId}/close', pathParams: {ticketId: Number}): Promise<void>;
  /**
  Reopen a ticket
  Reopen a ticket
  **/
  public post(path: '/support/tickets/{ticketId}/reopen', pathParams: {ticketId: Number}): Promise<void>;
  /**
  Reply to ticket
  Reply to ticket
  **/
  public post(path: '/support/tickets/{ticketId}/reply', pathParams: {ticketId: Number}): Promise<void>;
  /**
  Set ticket score
  Set ticket score
  **/
  public post(path: '/support/tickets/{ticketId}/score', pathParams: {ticketId: Number}): Promise<void>;
  public post(path: PathsSupportPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
