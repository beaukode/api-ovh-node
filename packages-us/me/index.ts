import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /me Models
 * Source: https://api.us.ovhcloud.com/1.0/me.json
 */
export namespace agreements {
    // type fullname: agreements.AgreementStateEnum
    export type AgreementStateEnum = "ko" | "obsolete" | "ok" | "todo"
    // interface fullName: agreements.Contract.Contract
    export interface Contract {
        active: boolean;
        date: string;
        name: string;
        pdf: string;
        text: string;
    }
    // interface fullName: agreements.ContractAgreement.ContractAgreement
    export interface ContractAgreement {
        agreed: agreements.AgreementStateEnum;
        contractId: number;
        date: string;
        id: number;
    }
}
export namespace api {
    // interface fullName: api.Application.Application
    export interface Application {
        applicationId: number;
        applicationKey: string;
        description: string;
        name: string;
        status: api.ApplicationStatusEnum;
    }
    // type fullname: api.ApplicationStatusEnum
    export type ApplicationStatusEnum = "active" | "blocked" | "inactive" | "trusted"
    // interface fullName: api.Credential.Credential
    export interface Credential {
        allowedIPs?: string[];
        applicationId: number;
        creation: string;
        credentialId: number;
        expiration?: string;
        lastUse?: string;
        ovhSupport: boolean;
        rules: auth.AccessRule[];
        status: auth.CredentialStateEnum;
    }
}
export namespace auth {
    // interface fullName: auth.AccessRule.AccessRule
    export interface AccessRule {
        method: http.MethodEnum;
        path: string;
    }
    // type fullname: auth.CredentialStateEnum
    export type CredentialStateEnum = "expired" | "pendingValidation" | "refused" | "validated"
}
export namespace balance {
    // interface fullName: balance.CustomerBalance.CustomerBalance
    export interface CustomerBalance {
        active: boolean;
        dueAmount: order.Price;
        pendingAmount: order.Price;
        todoAmount: order.Price;
        unmaturedAmount: order.Price;
    }
    // interface fullName: balance.InvoicingBalance.InvoicingBalance
    export interface InvoicingBalance {
        amount: order.Price;
        date: string;
        debtId: number;
        dueAmount: order.Price;
        dueDate?: string;
        orderId: number;
        pendingAmount: order.Price;
        todoAmount: order.Price;
        unmaturedAmount: order.Price;
    }
    // interface fullName: balance.OperationBalance.OperationBalance
    export interface OperationBalance {
        amount: order.Price;
        date: string;
        depositOrderId: number;
        operationId: number;
        status: debt.entry.StatusEnum;
        type?: debt.entry.OperationEnum;
    }
}
export namespace billing {
    // interface fullName: billing.AutomaticPaymentMean.AutomaticPaymentMean
    export interface AutomaticPaymentMean {
        bankAccount: boolean;
        creditCard: boolean;
        deferredPaymentAccount: boolean;
        paypal: boolean;
    }
    // type fullname: billing.DocumentExtensionEnum
    export type DocumentExtensionEnum = "html" | "pdf"
    // interface fullName: billing.FidelityAccount.FidelityAccount
    export interface FidelityAccount {
        alertThreshold?: number;
        balance: number;
        canBeCredited: boolean;
        lastUpdate: string;
        openDate: string;
    }
    // interface fullName: billing.FidelityMovement.FidelityMovement
    export interface FidelityMovement {
        amount: number;
        balance: number;
        date: string;
        description: string;
        movementId: number;
        operation: billing.fidelityAccount.OperationEnum;
        order: number;
        previousBalance: number;
    }
    // interface fullName: billing.Invoice.Invoice
    export interface Invoice {
        billId: string;
        date: string;
        htmlUrl: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        tax: orderPrice;
        url: string;
    }
    // interface fullName: billing.InvoiceDeposit.InvoiceDeposit
    export interface InvoiceDeposit {
        amount: orderPrice;
        date: string;
        depositId: string;
        orderId: number;
        password: string;
        paymentInfo?: billing.paymentMethod.PaymentInfo;
        pdfUrl: string;
        url: string;
    }
    // interface fullName: billing.InvoiceDepositRequest.InvoiceDepositRequest
    export interface InvoiceDepositRequest {
        creationDate: string;
        id: number;
        orderIds?: number[];
    }
    // interface fullName: billing.InvoiceDetail.InvoiceDetail
    export interface InvoiceDetail {
        billDetailId: string;
        description: string;
        domain: string;
        periodEnd?: string;
        periodStart?: string;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // interface fullName: billing.InvoiceRefund.InvoiceRefund
    export interface InvoiceRefund {
        date: string;
        htmlUrl: string;
        orderId: number;
        originalBillId?: string;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        refundId: string;
        tax: orderPrice;
        url: string;
    }
    // interface fullName: billing.InvoiceRefundDetail.InvoiceRefundDetail
    export interface InvoiceRefundDetail {
        description: string;
        domain: string;
        quantity: string;
        refundDetailId: string;
        refundId: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // interface fullName: billing.InvoiceWithdrawal.InvoiceWithdrawal
    export interface InvoiceWithdrawal {
        amount: orderPrice;
        country: string;
        date: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        url: string;
        withdrawalId: string;
    }
    // interface fullName: billing.ItemDetail.ItemDetail
    export interface ItemDetail {
        order: billing.ItemDetail.Order;
    }
    export namespace ItemDetail {
        // interface fullName: billing.ItemDetail.Order.Order
        export interface Order {
            action?: billing.ItemDetail.OrderActionEnum;
            configurations: billing.ItemDetail.OrderConfiguration[];
            plan: billing.ItemDetail.OrderPlan;
        }
        // type fullname: billing.ItemDetail.OrderActionEnum
        export type OrderActionEnum = "consumption" | "installation" | "renew" | "upgrade"
        // interface fullName: billing.ItemDetail.OrderConfiguration.OrderConfiguration
        export interface OrderConfiguration {
            label: string;
            value: string;
        }
        // interface fullName: billing.ItemDetail.OrderPlan.OrderPlan
        export interface OrderPlan {
            code?: string;
            duration?: string;
            pricingMode?: string;
            product: billing.ItemDetail.OrderPlanProduct;
            quantity?: number;
        }
        // interface fullName: billing.ItemDetail.OrderPlanProduct.OrderPlanProduct
        export interface OrderPlanProduct {
            name?: string;
        }
    }
    // interface fullName: billing.Order.Order
    export interface Order {
        date?: string;
        expirationDate?: string;
        orderId: number;
        password: string;
        pdfUrl: string;
        priceWithTax: orderPrice;
        priceWithoutTax: orderPrice;
        retractionDate?: string;
        tax: orderPrice;
        url: string;
    }
    // interface fullName: billing.OrderDetail.OrderDetail
    export interface OrderDetail {
        cancelled: boolean;
        description: string;
        domain: string;
        orderDetailId: number;
        quantity: string;
        totalPrice: orderPrice;
        unitPrice: orderPrice;
    }
    // type fullname: billing.PaymentMeanEnum
    export type PaymentMeanEnum = "cash" | "chargeback" | "cheque" | "creditAccount" | "creditCard" | "debtAccount" | "deposit" | "digitalLaunchPad" | "edinar" | "fidelityPoints" | "free" | "ideal" | "incubatorAccount" | "mandat" | "multibanco" | "none" | "ovhAccount" | "paymentMandate" | "paypal" | "payu" | "platnosci" | "refund" | "transfer" | "withdrawal"
    // interface fullName: billing.PaymentMeanValidation.PaymentMeanValidation
    export interface PaymentMeanValidation {
        id: number;
        submitUrl?: string;
        url: string;
        validationType: billing.PaymentMeanValidationType;
    }
    // type fullname: billing.PaymentMeanValidationType
    export type PaymentMeanValidationType = "creditAccount" | "documentToSend" | "simpleValidation"
    // interface fullName: billing.PaymentMethod.PaymentMethod
    export interface PaymentMethod {
        billingContactId: number;
        creationDate: string;
        default?: boolean;
        description: string;
        id: number;
        paymentSubType?: billing.paymentMethod.PaymentSubTypeEnum;
        paymentType: billing.paymentMethod.PaymentTypeEnum;
        publicLabel: string;
        status: billing.paymentMethod.StatusEnum;
    }
    // type fullname: billing.ReusablePaymentMeanEnum
    export type ReusablePaymentMeanEnum = "CREDIT_CARD" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL" | "bankAccount" | "creditCard" | "fidelityAccount" | "ovhAccount" | "paypal"
    // interface fullName: billing.SlaOperation.SlaOperation
    export interface SlaOperation {
        date: string;
        description: string;
        endDate?: string;
        id: number;
        name: string;
        startDate: string;
    }
    // interface fullName: billing.SlaOperationService.SlaOperationService
    export interface SlaOperationService {
        description: string;
        serviceName: string;
        slaApplication: string;
        slaPlan: string;
    }
    // interface fullName: billing.VoucherAccount.VoucherAccount
    export interface VoucherAccount {
        balance: orderPrice;
        lastUpdate: string;
        openDate: string;
        voucherAccountId: string;
    }
    // interface fullName: billing.VoucherMovement.VoucherMovement
    export interface VoucherMovement {
        amount: orderPrice;
        balance: orderPrice;
        date: string;
        description: string;
        movementId: number;
        operation: billing.voucherAccount.OperationEnum;
        order: number;
        previousBalance: orderPrice;
    }
    export namespace credit {
        // interface fullName: billing.credit.Balance.Balance
        export interface Balance {
            amount: orderPrice;
            balanceDetails: billing.credit.balance.BalanceDetail[];
            balanceName: string;
            booked: billing.credit.balance.BookedMovement[];
            creationDate: string;
            expiring: billing.credit.balance.ExpiringMovement[];
            expiringSummary: billing.credit.balance.ExpiringMovement[];
            lastUpdate: string;
            type: billing.credit.balance.Type;
        }
        export namespace balance {
            // interface fullName: billing.credit.balance.BalanceDetail.BalanceDetail
            export interface BalanceDetail {
                amount: orderPrice;
                serviceId?: number;
            }
            // interface fullName: billing.credit.balance.BookedMovement.BookedMovement
            export interface BookedMovement {
                amount: orderPrice;
                orderId: number;
            }
            // interface fullName: billing.credit.balance.ExpiringMovement.ExpiringMovement
            export interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: billing.credit.balance.movement.SubObject;
            }
            // interface fullName: billing.credit.balance.Movement.Movement
            export interface Movement {
                amount: orderPrice;
                balanceName: string;
                creationDate: string;
                expirationDate?: string;
                lastUpdate: string;
                movementId: number;
                orderId?: number;
                sourceObject: billing.credit.balance.movement.SubObject;
                type: string;
            }
            // type fullname: billing.credit.balance.Type
            export type Type = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS"
            export namespace movement {
                // interface fullName: billing.credit.balance.movement.SubObject.SubObject
                export interface SubObject {
                    id?: string;
                    name?: string;
                }
            }
        }
    }
    export namespace fidelityAccount {
        // type fullname: billing.fidelityAccount.OperationEnum
        export type OperationEnum = "bonus" | "cancel-bonus" | "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
    export namespace order {
        // interface fullName: billing.order.AssociatedObject.AssociatedObject
        export interface AssociatedObject {
            id?: string;
            type?: billing.order.associatedObject.TypeEnum;
        }
        // interface fullName: billing.order.AutomaticPaymentCapacities.AutomaticPaymentCapacities
        export interface AutomaticPaymentCapacities {
            canBePaidAutomatically: boolean;
            paymentMethodId?: number;
        }
        // interface fullName: billing.order.AvailablePaymentMethod.AvailablePaymentMethod
        export interface AvailablePaymentMethod {
            id: number;
            type: billing.paymentMethod.PaymentTypeEnum;
        }
        // interface fullName: billing.order.OrderCapacities.OrderCapacities
        export interface OrderCapacities {
            payment?: billing.order.AutomaticPaymentCapacities;
        }
        // type fullname: billing.order.OrderStatusEnum
        export type OrderStatusEnum = "cancelled" | "cancelling" | "checking" | "delivered" | "delivering" | "documentsRequested" | "notPaid" | "unknown"
        // interface fullName: billing.order.OrderVoucher.OrderVoucher
        export interface OrderVoucher {
            amount: orderPrice;
            balanceName: string;
        }
        // interface fullName: billing.order.PaymentMethods.PaymentMethods
        export interface PaymentMethods {
            available: payment.method.AvailablePaymentMethod[];
            registered: number[];
        }
        // interface fullName: billing.order.RegisteredPaymentMean.RegisteredPaymentMean
        export interface RegisteredPaymentMean {
            paymentMean: billing.ReusablePaymentMeanEnum;
        }
        // type fullname: billing.order.RetractionReasonEnum
        export type RetractionReasonEnum = "competitor" | "difficulty" | "expensive" | "other" | "performance" | "reliability" | "unused"
        export namespace associatedObject {
            // type fullname: billing.order.associatedObject.TypeEnum
            export type TypeEnum = "Bill" | "Deposit" | "Refund" | "Withdrawal"
        }
        export namespace credit {
            // interface fullName: billing.order.credit.Balance.Balance
            export interface Balance {
                amount: orderPrice;
                balanceName: string;
            }
        }
    }
    export namespace paymentMethod {
        // type fullname: billing.paymentMethod.CreatePaymentTypeEnum
        export type CreatePaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "PAYPAL"
        // interface fullName: billing.paymentMethod.PaymentInfo.PaymentInfo
        export interface PaymentInfo {
            description?: string;
            paymentType: billing.paymentMethod.PaymentTypeEnum;
            publicLabel?: string;
        }
        // type fullname: billing.paymentMethod.PaymentSubTypeEnum
        export type PaymentSubTypeEnum = "AMERICAN_EXPRESS" | "MASTERCARD" | "VISA"
        // type fullname: billing.paymentMethod.PaymentTypeEnum
        export type PaymentTypeEnum = "BANK_ACCOUNT" | "CREDIT_CARD" | "DEFERRED_PAYMENT_ACCOUNT" | "ENTERPRISE" | "INTERNAL_TRUSTED_ACCOUNT" | "PAYPAL"
        // type fullname: billing.paymentMethod.StatusEnum
        export type StatusEnum = "BLOCKED" | "BLOCKED_BY_CUSTOMER" | "BROKEN" | "CANCELED" | "CANCELED_BY_CUSTOMER" | "CREATED" | "ERROR" | "EXPIRED" | "PAUSED" | "VALID" | "VALID_FOR_CREDIT"
    }
    export namespace voucherAccount {
        // type fullname: billing.voucherAccount.OperationEnum
        export type OperationEnum = "cancel-credit" | "cancel-debit" | "cancel-pre-debit" | "credit" | "debit" | "pre-credit" | "pre-debit"
    }
}
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace contact {
    // interface fullName: contact.Address.Address
    export interface Address {
        city: string;
        country: nichandle.CountryEnum;
        line1: string;
        line2?: string;
        line3?: string;
        otherDetails?: string;
        province?: string;
        zip: string;
    }
    // interface fullName: contact.Contact.Contact
    export interface Contact {
        address: contact.Address;
        birthCity?: string;
        birthCountry?: nichandle.CountryEnum;
        birthDay?: string;
        birthZip?: string;
        cellPhone?: string;
        companyNationalIdentificationNumber?: string;
        email: string;
        fax?: string;
        firstName: string;
        gender?: nichandle.GenderEnum;
        id: number;
        language: nichandle.LanguageEnum;
        lastName: string;
        legalForm: nichandle.LegalFormEnum;
        nationalIdentificationNumber?: string;
        nationality?: nichandle.CountryEnum;
        organisationName?: string;
        organisationType?: string;
        phone?: string;
        spareEmail?: string;
        vat?: string;
    }
    // interface fullName: contact.FieldInformation.FieldInformation
    export interface FieldInformation {
        fieldName: string;
        mandatory: boolean;
        readOnly: boolean;
    }
}
export namespace coreTypes {
    // type fullname: coreTypes.ContinentEnum
    export type ContinentEnum = "africa" | "antartica" | "asia" | "europe" | "north-america" | "oceania" | "south-america"
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace debt {
    export namespace associatedObject {
        // interface fullName: debt.associatedObject.PaymentInfo.PaymentInfo
        export interface PaymentInfo {
            description?: string;
            paymentType: billing.PaymentMeanEnum;
            publicLabel?: string;
        }
        // type fullname: debt.associatedObject.TypeEnum
        export type TypeEnum = "Bill" | "DebtOperation" | "Deposit" | "Order" | "OvhAccountMovement" | "Refund" | "Withdrawal"
    }
    export namespace entry {
        // interface fullName: debt.entry.AssociatedObject.AssociatedObject
        export interface AssociatedObject {
            id?: string;
            paymentInfo?: debt.associatedObject.PaymentInfo;
            subId?: string;
            type?: debt.associatedObject.TypeEnum;
        }
        // type fullname: debt.entry.OperationEnum
        export type OperationEnum = "CANCEL" | "CASH_MANUAL" | "CHECK_MANUAL" | "CREDITCARD" | "CREDITCARD_AUTOMATIC" | "CREDITCARD_MANUAL" | "CREDIT_ACCOUNT_AUTOMATIC" | "EDINAR_MANUAL" | "IDEAL_MANUAL" | "MULTIBANCO_MANUAL" | "ORDER" | "PAYPAL_AUTOMATIC" | "PAYPAL_MANUAL" | "PAYU_MANUAL" | "RECOVERY_TRANSFER_AUTOMATIC" | "REFUND" | "REFUND_CHECK" | "REFUND_CREDITCARD" | "REFUND_CREDIT_ACCOUNT" | "REFUND_LOSS" | "REFUND_PAYPAL" | "REFUND_PAYU" | "REFUND_SEPA" | "REFUND_TRANSFER" | "REFUND_UNKNOWN" | "SEPA_AUTOMATIC" | "TRANSFER_MANUAL" | "UNPAID_CHECK" | "UNPAID_CREDITCARD" | "UNPAID_CREDIT_ACCOUNT" | "UNPAID_PAYPAL" | "UNPAID_SEPA" | "UNPAID_WITHDRAW" | "WARRANT_MANUAL" | "WITHDRAW_AUTOMATIC"
        // type fullname: debt.entry.StatusEnum
        export type StatusEnum = "CANCELLED" | "DONE" | "FAILED" | "PAID" | "PENDING" | "TODO"
    }
}
export namespace dedicated {
    // type fullname: dedicated.TemplateOsFileSystemEnum
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    // type fullname: dedicated.TemplateOsHardwareRaidEnum
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    // type fullname: dedicated.TemplateOsLanguageEnum
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    // interface fullName: dedicated.TemplateOsProperties.TemplateOsProperties
    export interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    // type fullname: dedicated.TemplateOsTypeEnum
    export type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows"
    // type fullname: dedicated.TemplateOsUsageEnum
    export type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation"
    // type fullname: dedicated.TemplatePartitionTypeEnum
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        // interface fullName: dedicated.installationTemplate.Templates.Templates
        export interface Templates {
            availableLanguages: dedicated.TemplateOsLanguageEnum[];
            beta?: boolean;
            bitFormat: dedicated.server.BitFormatEnum;
            category: dedicated.TemplateOsUsageEnum;
            customization?: dedicated.TemplateOsProperties;
            defaultLanguage: dedicated.TemplateOsLanguageEnum;
            deprecated?: boolean;
            description: string;
            distribution: string;
            family: dedicated.TemplateOsTypeEnum;
            filesystems: dedicated.TemplateOsFileSystemEnum[];
            hardRaidConfiguration?: boolean;
            lastModification?: string;
            lvmReady?: boolean;
            supportsDistributionKernel?: boolean;
            supportsGptLabel?: boolean;
            supportsRTM: boolean;
            supportsSqlServer?: boolean;
            supportsUEFI?: dedicated.server.SupportsUEFIEnum;
            templateName: string;
        }
        // interface fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
        export interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        // interface fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
        export interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        // interface fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
        export interface templatePartitions {
            filesystem: dedicated.TemplateOsFileSystemEnum;
            mountpoint: string;
            order: number;
            raid?: dedicated.server.PartitionRaidEnum;
            size: complexType.UnitAndValue<number>;
            type: dedicated.TemplatePartitionTypeEnum;
            volumeName?: string;
        }
    }
    export namespace server {
        // type fullname: dedicated.server.BitFormatEnum
        export type BitFormatEnum = 32 | 64
        // type fullname: dedicated.server.PartitionRaidEnum
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        // type fullname: dedicated.server.SupportsUEFIEnum
        export type SupportsUEFIEnum = "no" | "only" | "yes"
    }
}
export namespace geolocation {
    // interface fullName: geolocation.ContinentCountryLocation.ContinentCountryLocation
    export interface ContinentCountryLocation {
        continent: coreTypes.ContinentEnum;
        countryCode: coreTypes.CountryEnum;
        ip: string;
    }
}
export namespace http {
    // type fullname: http.MethodEnum
    export type MethodEnum = "DELETE" | "GET" | "POST" | "PUT"
}
export namespace me {
    export namespace billing {
        export namespace group {
            // interface fullName: me.billing.group.BillingGroup.BillingGroup
            export interface BillingGroup {
                contactId?: number;
                creationDate: string;
                groupId: number;
                lastUpdate: string;
                name: string;
                paymentMethodId?: number;
            }
            // interface fullName: me.billing.group.Service.Service
            export interface Service {
                groupId: number;
                serviceId: number;
            }
            export namespace service {
                // interface fullName: me.billing.group.service.Create.Create
                export interface Create {
                    serviceId: number;
                }
            }
        }
    }
    export namespace consent {
        // interface fullName: me.consent.Campaign.Campaign
        export interface Campaign {
            description: string;
            name: string;
            type: me.consent.CampaignTypeEnum;
        }
        // type fullname: me.consent.CampaignTypeEnum
        export type CampaignTypeEnum = "OPTIN" | "OPTOUT"
        // interface fullName: me.consent.Consent.Consent
        export interface Consent {
            campaign: string;
            history: me.consent.Decision[];
            type: me.consent.CampaignTypeEnum;
            value: boolean;
        }
        // interface fullName: me.consent.Decision.Decision
        export interface Decision {
            timestamp: string;
            value: boolean;
        }
    }
    export namespace consumption {
        // interface fullName: me.consumption.Price.Price
        export interface Price {
            currencyCode: order.CurrencyCodeEnum;
            text: string;
            value: number;
            valueInUcents: number;
        }
        // interface fullName: me.consumption.Transaction.Transaction
        export interface Transaction {
            beginDate: string;
            creationDate?: string;
            elements: me.consumption.transaction.Element[];
            endDate?: string;
            id?: number;
            lastUpdate?: string;
            price: me.consumption.Price;
            serviceId: number;
        }
        export namespace transaction {
            // interface fullName: me.consumption.transaction.Element.Element
            export interface Element {
                details: me.consumption.transaction.Element.Detail[];
                planCode: string;
                planFamily: string;
                price: me.consumption.Price;
                quantity: number;
            }
            export namespace Element {
                // interface fullName: me.consumption.transaction.Element.Detail.Detail
                export interface Detail {
                    price: me.consumption.Price;
                    quantity: number;
                    unique_id?: string;
                }
            }
        }
    }
    export namespace credit {
        // interface fullName: me.credit.Balance.Balance
        export interface Balance {
            amount: orderPrice;
            balanceDetails: me.credit.balance.BalanceDetails[];
            balanceName: string;
            booked: me.credit.balance.BookedMovement[];
            creationDate: string;
            expiring: me.credit.balance.ExpiringMovement[];
            lastUpdate: string;
            type: me.credit.balance.TypeEnum;
        }
        export namespace balance {
            // interface fullName: me.credit.balance.BalanceDetails.BalanceDetails
            export interface BalanceDetails {
                amount: orderPrice;
                balanceSubName?: string;
                expiring: me.credit.balance.ExpiringMovement[];
                serviceId?: number;
            }
            // interface fullName: me.credit.balance.BookedMovement.BookedMovement
            export interface BookedMovement {
                amount: orderPrice;
                balanceSubName?: string;
                orderId: number;
            }
            // interface fullName: me.credit.balance.ExpiringMovement.ExpiringMovement
            export interface ExpiringMovement {
                amount: orderPrice;
                creationDate: string;
                expirationDate: string;
                lastUpdate: string;
                sourceObject: me.credit.balance.movement.SubObject;
            }
            // interface fullName: me.credit.balance.Movement.Movement
            export interface Movement {
                amount: orderPrice;
                balanceName: string;
                creationDate: string;
                expirationDate?: string;
                lastUpdate: string;
                movementId: number;
                orderId?: number;
                sourceObject: me.credit.balance.movement.SubObject;
                type: me.credit.balance.movement.TypeEnum;
            }
            // type fullname: me.credit.balance.TypeEnum
            export type TypeEnum = "PREPAID_ACCOUNT" | "VOUCHER" | "DEPOSIT" | "BONUS"
            export namespace movement {
                // interface fullName: me.credit.balance.movement.SubObject.SubObject
                export interface SubObject {
                    id: string;
                    name: string;
                }
                // type fullname: me.credit.balance.movement.TypeEnum
                export type TypeEnum = "BONUS" | "CANCEL" | "EXPIRE" | "GIFT" | "MANUAL" | "ORDER" | "REFUND" | "UNPAID" | "USE" | "VOUCHER"
            }
        }
        export namespace code {
            // interface fullName: me.credit.code.Redeem.Redeem
            export interface Redeem {
                inputCode: string;
                serviceId: number;
            }
        }
    }
    export namespace payment {
        export namespace method {
            // interface fullName: me.payment.method.AvailablePaymentMethod.AvailablePaymentMethod
            export interface AvailablePaymentMethod {
                icon: me.payment.method.Icon;
                integration: paymentmethodIntegrationType;
                oneshot: boolean;
                paymentType: string;
                registerable: boolean;
                registerableWithTransaction: boolean;
            }
            // interface fullName: me.payment.method.CallbackUrl.CallbackUrl
            export interface CallbackUrl {
                cancel: string;
                error: string;
                failure: string;
                pending: string;
                success: string;
            }
            // interface fullName: me.payment.method.Icon.Icon
            export interface Icon {
                data?: string;
                name?: string;
            }
            // interface fullName: me.payment.method.PaymentMethod.PaymentMethod
            export interface PaymentMethod {
                billingContactId?: number;
                creationDate: string;
                default: boolean;
                description?: string;
                expirationDate?: string;
                icon: me.payment.method.Icon;
                label?: string;
                lastUpdate: string;
                paymentMeanId?: number;
                paymentMethodId: number;
                paymentSubType?: string;
                paymentType: string;
                status: me.payment.method.PaymentMethod.Status;
            }
            export namespace PaymentMethod {
                // type fullname: me.payment.method.PaymentMethod.Status
                export type Status = "CANCELED" | "CANCELING" | "CREATED" | "ERROR" | "EXPIRED" | "CREATING" | "MAINTENANCE" | "PAUSED" | "VALID"
            }
            export namespace Register {
                // interface fullName: me.payment.method.Register.ValidationResult.ValidationResult
                export interface ValidationResult {
                    formSessionId?: string;
                    merchantId?: string;
                    organizationId?: string;
                    paymentMethodId: number;
                    url?: string;
                    validationType: paymentmethodIntegrationType;
                }
            }
            // interface fullName: me.payment.method.Transaction.Transaction
            export interface Transaction {
                amount: orderPrice;
                creationDate: string;
                status: me.payment.method.Transaction.Status;
                transactionId: number;
                type: me.payment.method.Transaction.Type;
            }
            export namespace Transaction {
                // type fullname: me.payment.method.Transaction.Status
                export type Status = "CANCELED" | "CANCELING" | "CONFIRMING" | "CREATED" | "ERROR" | "FAILED" | "READY" | "SUCCESS"
                // type fullname: me.payment.method.Transaction.Type
                export type Type = "CREDIT" | "DEBIT"
            }
        }
    }
}
export namespace nichandle {
    export namespace Authentication {
        // interface fullName: nichandle.Authentication.Certificate.Certificate
        export interface Certificate {
            expiration: string;
            subject: string;
        }
        // interface fullName: nichandle.Authentication.Group.Group
        export interface Group {
            creation: string;
            defaultGroup: boolean;
            description: string;
            lastUpdate: string;
            name: string;
            role: nichandle.RoleEnum;
        }
        // interface fullName: nichandle.Authentication.Provider.Provider
        export interface Provider {
            creation: string;
            groupAttributeName: string;
            idpSigningCertificate: nichandle.Authentication.Certificate;
            lastUpdate: string;
            ssoServiceUrl: string;
        }
    }
    // interface fullName: nichandle.BillingCapacities.BillingCapacities
    export interface BillingCapacities {
        canUseDebtSystem: boolean;
        canUsePostalMailForInvoices: boolean;
        requiredPaymentMethod: nichandle.RequiredPaymentMethodEnum;
    }
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
    // interface fullName: nichandle.Currency.Currency
    export interface Currency {
        code: string;
        symbol: string;
    }
    // interface fullName: nichandle.DeveloperModeRestriction.DeveloperModeRestriction
    export interface DeveloperModeRestriction {
        enabled: boolean;
    }
    // type fullname: nichandle.GenderEnum
    export type GenderEnum = "female" | "male"
    // type fullname: nichandle.IpRegistryEnum
    export type IpRegistryEnum = "ARIN" | "RIPE"
    // interface fullName: nichandle.IpRestriction.IpRestriction
    export interface IpRestriction {
        id: number;
        ip: string;
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    // interface fullName: nichandle.IpRestrictionDefaultRule.IpRestrictionDefaultRule
    export interface IpRestrictionDefaultRule {
        rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
        warning: boolean;
    }
    // interface fullName: nichandle.Ipv4Org.Ipv4Org
    export interface Ipv4Org {
        abuse_mailbox: string;
        address: string;
        city: string;
        country: nichandle.CountryEnum;
        firstname: string;
        lastname: string;
        organisationId: string;
        phone: string;
        registry: nichandle.IpRegistryEnum;
        state?: string;
        zip?: string;
    }
    // type fullname: nichandle.LanguageEnum
    export type LanguageEnum = "cs_CZ" | "de_DE" | "en_AU" | "en_CA" | "en_GB" | "en_IE" | "en_US" | "es_ES" | "fi_FI" | "fr_CA" | "fr_FR" | "fr_MA" | "fr_SN" | "fr_TN" | "it_IT" | "lt_LT" | "nl_NL" | "pl_PL" | "pt_PT"
    // type fullname: nichandle.LegalFormEnum
    export type LegalFormEnum = "administration" | "association" | "corporation" | "individual" | "other" | "personalcorporation"
    // interface fullName: nichandle.ManagerPreference.ManagerPreference
    export interface ManagerPreference {
        key: string;
        value: string;
    }
    // interface fullName: nichandle.Nichandle.Nichandle
    export interface Nichandle {
        address?: string;
        area?: string;
        birthCity?: string;
        birthDay?: string;
        city?: string;
        companyNationalIdentificationNumber?: string;
        corporationType?: string;
        country: nichandle.CountryEnum;
        currency: nichandle.Currency;
        customerCode?: string;
        email: string;
        fax?: string;
        firstname?: string;
        italianSDI?: string;
        language?: nichandle.LanguageEnum;
        legalform: nichandle.LegalFormEnum;
        name?: string;
        nationalIdentificationNumber?: string;
        nichandle: string;
        organisation?: string;
        ovhCompany: nichandle.OvhCompanyEnum;
        ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        phone?: string;
        phoneCountry?: nichandle.CountryEnum;
        sex?: nichandle.GenderEnum;
        spareEmail?: string;
        state: nichandle.StateEnum;
        vat?: string;
        zip?: string;
    }
    // interface fullName: nichandle.NichandleSmsNotification.NichandleSmsNotification
    export interface NichandleSmsNotification {
        abuse: boolean;
        creationDate: string;
        phoneNumber: string;
        status: nichandle.NotificationStatusEnum;
        updateDate?: string;
    }
    // type fullname: nichandle.NotificationStatusEnum
    export type NotificationStatusEnum = "ok" | "waitingForValidation"
    // type fullname: nichandle.OvhCompanyEnum
    export type OvhCompanyEnum = "kimsufi" | "ovh" | "soyoustart"
    // type fullname: nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
    // type fullname: nichandle.RequiredPaymentMethodEnum
    export type RequiredPaymentMethodEnum = "mandatoryForAutorenew" | "mandatoryForPostpaid" | "notMandatory"
    // type fullname: nichandle.RoleEnum
    export type RoleEnum = "REGULAR" | "ADMIN" | "UNPRIVILEGED"
    // type fullname: nichandle.StateEnum
    export type StateEnum = "complete" | "incomplete"
    // interface fullName: nichandle.SubAccount.SubAccount
    export interface SubAccount {
        creationDate: string;
        description?: string;
        id: number;
    }
    // interface fullName: nichandle.SubAccountConsumerKey.SubAccountConsumerKey
    export interface SubAccountConsumerKey {
        consumerKey: string;
    }
    // interface fullName: nichandle.User.User
    export interface User {
        creation: string;
        description: string;
        email: string;
        group: string;
        lastUpdate: string;
        login: string;
        passwordLastUpdate: string;
        status: nichandle.UserStatus;
    }
    // type fullname: nichandle.UserStatus
    export type UserStatus = "OK" | "DISABLED" | "PASSWORD_CHANGE_REQUIRED"
    // interface fullName: nichandle.VipStatus.VipStatus
    export interface VipStatus {
        cloud: boolean;
        dedicated: boolean;
        telecom: boolean;
        web: boolean;
    }
    // interface fullName: nichandle.VoucherStatus.VoucherStatus
    export interface VoucherStatus {
        validity: boolean;
    }
    export namespace accessRestriction {
        // type fullname: nichandle.accessRestriction.IpRestrictionRuleEnum
        export type IpRestrictionRuleEnum = "accept" | "deny"
        // interface fullName: nichandle.accessRestriction.SOTPAccount.SOTPAccount
        export interface SOTPAccount {
            creationDate: string;
            lastUsedDate?: string;
            remaining: number;
            status: nichandle.accessRestriction.SOTPStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.SOTPSecret.SOTPSecret
        export interface SOTPSecret {
            codes: string[];
        }
        // type fullname: nichandle.accessRestriction.SOTPStatusEnum
        export type SOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        // interface fullName: nichandle.accessRestriction.SOTPValidate.SOTPValidate
        export interface SOTPValidate {
            remainingCodes: number;
        }
        // interface fullName: nichandle.accessRestriction.SmsAccount.SmsAccount
        export interface SmsAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            phoneNumber: string;
            status: nichandle.accessRestriction.SmsStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.SmsCode.SmsCode
        export interface SmsCode {
            challenge: string;
        }
        // interface fullName: nichandle.accessRestriction.SmsSecret.SmsSecret
        export interface SmsSecret {
            id: number;
            remainingTry: number;
        }
        // type fullname: nichandle.accessRestriction.SmsStatusEnum
        export type SmsStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        // interface fullName: nichandle.accessRestriction.TOTPAccount.TOTPAccount
        export interface TOTPAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.TOTPStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.TOTPSecret.TOTPSecret
        export interface TOTPSecret {
            id: number;
            qrcodeHelper: string;
            secret: string;
        }
        // type fullname: nichandle.accessRestriction.TOTPStatusEnum
        export type TOTPStatusEnum = "disabled" | "enabled" | "needCodeValidation" | "needEmailValidation"
        // interface fullName: nichandle.accessRestriction.U2FAccount.U2FAccount
        export interface U2FAccount {
            creationDate: string;
            description: string;
            id: number;
            lastUsedDate?: string;
            status: nichandle.accessRestriction.U2FStatusEnum;
        }
        // interface fullName: nichandle.accessRestriction.U2FRegisterChallenge.U2FRegisterChallenge
        export interface U2FRegisterChallenge {
            applicationId: string;
            id: number;
            request: nichandle.accessRestriction.U2FRegistrationRequest;
        }
        // interface fullName: nichandle.accessRestriction.U2FRegistrationRequest.U2FRegistrationRequest
        export interface U2FRegistrationRequest {
            challenge: string;
            version: string;
        }
        // interface fullName: nichandle.accessRestriction.U2FSignChallenge.U2FSignChallenge
        export interface U2FSignChallenge {
            applicationId: string;
            request: nichandle.accessRestriction.U2FSignRequest;
        }
        // interface fullName: nichandle.accessRestriction.U2FSignRequest.U2FSignRequest
        export interface U2FSignRequest {
            challenge: string;
            keyHandle: string;
            version: string;
        }
        // type fullname: nichandle.accessRestriction.U2FStatusEnum
        export type U2FStatusEnum = "disabled" | "enabled" | "needCodeValidation"
    }
    export namespace changeEmail {
        // type fullname: nichandle.changeEmail.TaskStateEnum
        export type TaskStateEnum = "aborted" | "done" | "refused" | "todo"
    }
    export namespace emailChange {
        // interface fullName: nichandle.emailChange.Task.Task
        export interface Task {
            dateDone?: string;
            dateRequest: string;
            id: number;
            newEmail: string;
            state: nichandle.changeEmail.TaskStateEnum;
        }
    }
    // interface fullName: nichandle.ipxe.ipxe
    export interface ipxe {
        name: string;
        script: string;
    }
    // interface fullName: nichandle.sshKey.sshKey
    export interface sshKey {
        default: boolean;
        key: string;
        keyName: string;
    }
}
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace payment {
    export namespace method {
        // interface fullName: payment.method.AvailablePaymentMethod.AvailablePaymentMethod
        export interface AvailablePaymentMethod {
            icon: payment.method.Icon;
            integration: paymentmethodIntegrationType;
            oneshot: boolean;
            paymentType: string;
            registerable: boolean;
            registerableWithTransaction: boolean;
        }
        // interface fullName: payment.method.Icon.Icon
        export interface Icon {
            data?: string;
            name?: string;
        }
        // type fullname: payment.method.IntegrationType
        export type IntegrationType = "DONE" | "IFRAME_VANTIV" | "IN_CONTEXT" | "REDIRECT"
    }
}
export namespace service {
    // interface fullName: service.Operation.Operation
    export interface Operation {
        id: number;
        quantity: number;
        resource?: service.Resource;
        status: service.OperationStatus;
        type: service.OperationType;
    }
    // type fullname: service.OperationStatus
    export type OperationStatus = "todo" | "doing" | "done" | "error" | "cancelled" | "waiting" | "scheduled" | "delayed"
    // type fullname: service.OperationType
    export type OperationType = "installation" | "upgrade"
    // interface fullName: service.Resource.Resource
    export interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    // type fullname: service.ResourceStateEnum
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
}

/**
 * END API /me Models
 */
export function proxyMe(ovhEngine: OvhRequestable): Me {
    return buildOvhProxy(ovhEngine, '/me');
}
export default proxyMe;
/**
 * Api Proxy model
 */// Apis harmony
// path /me
export interface Me{
    // GET /me
    $get(): Promise<nichandle.Nichandle>;
    // PUT /me
    $put(params?: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, currency?: nichandle.Currency, customerCode?: string, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, nichandle?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, state?: nichandle.StateEnum, vat?: string, zip?: string}): Promise<void>;
    accessRestriction: {
        backupCode: {
            // DELETE /me/accessRestriction/backupCode
            $delete(): Promise<void>;
            // GET /me/accessRestriction/backupCode
            $get(): Promise<nichandle.accessRestriction.SOTPAccount>;
            // POST /me/accessRestriction/backupCode
            $post(): Promise<nichandle.accessRestriction.SOTPSecret>;
            disable: {
                // POST /me/accessRestriction/backupCode/disable
                $post(params: {code: string}): Promise<void>;
            }
            enable: {
                // POST /me/accessRestriction/backupCode/enable
                $post(params: {code: string}): Promise<void>;
            }
            validate: {
                // POST /me/accessRestriction/backupCode/validate
                $post(params: {code: string}): Promise<nichandle.accessRestriction.SOTPValidate>;
            }
        }
        developerMode: {
            // GET /me/accessRestriction/developerMode
            $get(): Promise<nichandle.DeveloperModeRestriction>;
            // PUT /me/accessRestriction/developerMode
            $put(params?: {enabled?: boolean}): Promise<void>;
        }
        ip: {
            // GET /me/accessRestriction/ip
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/ip
            $post(params: {ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}): Promise<void>;
            $(id: number): {
                // DELETE /me/accessRestriction/ip/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/ip/{id}
                $get(): Promise<nichandle.IpRestriction>;
                // PUT /me/accessRestriction/ip/{id}
                $put(params?: {id?: number, ip?: string, rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}): Promise<void>;
            };
        }
        ipDefaultRule: {
            // GET /me/accessRestriction/ipDefaultRule
            $get(): Promise<nichandle.IpRestrictionDefaultRule>;
            // PUT /me/accessRestriction/ipDefaultRule
            $put(params?: {rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}): Promise<void>;
        }
        sms: {
            // GET /me/accessRestriction/sms
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/sms
            $post(params: {phone: string}): Promise<nichandle.accessRestriction.SmsSecret>;
            $(id: number): {
                // DELETE /me/accessRestriction/sms/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/sms/{id}
                $get(): Promise<nichandle.accessRestriction.SmsAccount>;
                // PUT /me/accessRestriction/sms/{id}
                $put(params?: {creationDate?: string, description?: string, id?: number, lastUsedDate?: string, phoneNumber?: string, status?: nichandle.accessRestriction.SmsStatusEnum}): Promise<void>;
                disable: {
                    // POST /me/accessRestriction/sms/{id}/disable
                    $post(params: {code: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/sms/{id}/enable
                    $post(params: {code: string}): Promise<void>;
                }
                sendCode: {
                    // POST /me/accessRestriction/sms/{id}/sendCode
                    $post(): Promise<nichandle.accessRestriction.SmsCode>;
                }
                validate: {
                    // POST /me/accessRestriction/sms/{id}/validate
                    $post(params: {code: string}): Promise<void>;
                }
            };
        }
        totp: {
            // GET /me/accessRestriction/totp
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/totp
            $post(): Promise<nichandle.accessRestriction.TOTPSecret>;
            $(id: number): {
                // DELETE /me/accessRestriction/totp/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/totp/{id}
                $get(): Promise<nichandle.accessRestriction.TOTPAccount>;
                // PUT /me/accessRestriction/totp/{id}
                $put(params?: {creationDate?: string, description?: string, id?: number, lastUsedDate?: string, status?: nichandle.accessRestriction.TOTPStatusEnum}): Promise<void>;
                disable: {
                    // POST /me/accessRestriction/totp/{id}/disable
                    $post(params: {code: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/totp/{id}/enable
                    $post(params: {code: string}): Promise<void>;
                }
                validate: {
                    // POST /me/accessRestriction/totp/{id}/validate
                    $post(params: {code: string}): Promise<void>;
                }
            };
        }
        u2f: {
            // GET /me/accessRestriction/u2f
            $get(): Promise<number[]>;
            // POST /me/accessRestriction/u2f
            $post(): Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
            $(id: number): {
                // DELETE /me/accessRestriction/u2f/{id}
                $delete(): Promise<void>;
                // GET /me/accessRestriction/u2f/{id}
                $get(): Promise<nichandle.accessRestriction.U2FAccount>;
                // PUT /me/accessRestriction/u2f/{id}
                $put(params?: {creationDate?: string, description?: string, id?: number, lastUsedDate?: string, status?: nichandle.accessRestriction.U2FStatusEnum}): Promise<void>;
                challenge: {
                    // POST /me/accessRestriction/u2f/{id}/challenge
                    $post(): Promise<nichandle.accessRestriction.U2FSignChallenge>;
                }
                disable: {
                    // POST /me/accessRestriction/u2f/{id}/disable
                    $post(params: {clientData: string, signatureData: string}): Promise<void>;
                }
                enable: {
                    // POST /me/accessRestriction/u2f/{id}/enable
                    $post(params: {clientData: string, signatureData: string}): Promise<void>;
                }
                validate: {
                    // POST /me/accessRestriction/u2f/{id}/validate
                    $post(params: {clientData: string, registrationData: string}): Promise<void>;
                }
            };
        }
    }
    agreements: {
        // GET /me/agreements
        $get(params?: {agreed?: agreements.AgreementStateEnum, contractId?: number}): Promise<number[]>;
        $(id: number): {
            // GET /me/agreements/{id}
            $get(): Promise<agreements.ContractAgreement>;
            accept: {
                // POST /me/agreements/{id}/accept
                $post(): Promise<string>;
            }
            contract: {
                // GET /me/agreements/{id}/contract
                $get(): Promise<agreements.Contract>;
            }
        };
    }
    api: {
        application: {
            // GET /me/api/application
            $get(): Promise<number[]>;
            $(applicationId: number): {
                // DELETE /me/api/application/{applicationId}
                $delete(): Promise<void>;
                // GET /me/api/application/{applicationId}
                $get(): Promise<api.Application>;
            };
        }
        credential: {
            // GET /me/api/credential
            $get(params?: {applicationId?: number, status?: auth.CredentialStateEnum}): Promise<number[]>;
            $(credentialId: number): {
                // DELETE /me/api/credential/{credentialId}
                $delete(): Promise<void>;
                // GET /me/api/credential/{credentialId}
                $get(): Promise<api.Credential>;
                // PUT /me/api/credential/{credentialId}
                $put(params?: {allowedIPs?: string[], applicationId?: number, creation?: string, credentialId?: number, expiration?: string, lastUse?: string, ovhSupport?: boolean, rules?: auth.AccessRule[], status?: auth.CredentialStateEnum}): Promise<void>;
                application: {
                    // GET /me/api/credential/{credentialId}/application
                    $get(): Promise<api.Application>;
                }
            };
        }
    }
    availableAutomaticPaymentMeans: {
        // GET /me/availableAutomaticPaymentMeans
        $get(): Promise<billing.AutomaticPaymentMean>;
    }
    bill: {
        // GET /me/bill
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(billId: string): {
            // GET /me/bill/{billId}
            $get(): Promise<billing.Invoice>;
            debt: {
                // GET /me/bill/{billId}/debt
                $get(): Promise<balance.InvoicingBalance>;
                operation: {
                    // GET /me/bill/{billId}/debt/operation
                    $get(params?: {depositOrderId?: number}): Promise<number[]>;
                    $(operationId: number): {
                        // GET /me/bill/{billId}/debt/operation/{operationId}
                        $get(): Promise<balance.OperationBalance>;
                        associatedObject: {
                            // GET /me/bill/{billId}/debt/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    };
                }
            }
            details: {
                // GET /me/bill/{billId}/details
                $get(): Promise<string[]>;
                $(billDetailId: string): {
                    // GET /me/bill/{billId}/details/{billDetailId}
                    $get(): Promise<billing.InvoiceDetail>;
                };
            }
            download: {
                // GET /me/bill/{billId}/download
                $get(params?: {extension?: billing.DocumentExtensionEnum}): Promise<string>;
            }
        };
    }
    billing: {
        group: {
            // GET /me/billing/group
            $get(params?: {name?: string}): Promise<number[]>;
            // POST /me/billing/group
            $post(params?: {contactId?: number, creationDate?: string, groupId?: number, lastUpdate?: string, name?: string, paymentMethodId?: number}): Promise<me.billing.group.BillingGroup>;
            $(groupId: number): {
                // DELETE /me/billing/group/{groupId}
                $delete(): Promise<void>;
                // GET /me/billing/group/{groupId}
                $get(): Promise<me.billing.group.BillingGroup>;
                // PUT /me/billing/group/{groupId}
                $put(params?: {contactId?: number, creationDate?: string, groupId?: number, lastUpdate?: string, name?: string, paymentMethodId?: number}): Promise<void>;
                service: {
                    // GET /me/billing/group/{groupId}/service
                    $get(): Promise<number[]>;
                    // POST /me/billing/group/{groupId}/service
                    $post(params: {serviceId: number}): Promise<me.billing.group.Service>;
                    $(serviceId: number): {
                        // DELETE /me/billing/group/{groupId}/service/{serviceId}
                        $delete(): Promise<void>;
                        // GET /me/billing/group/{groupId}/service/{serviceId}
                        $get(): Promise<me.billing.group.Service>;
                    };
                }
            };
        }
    }
    certificates: {
        // GET /me/certificates
        $get(params?: {name?: string}): Promise<string[]>;
    }
    changeEmail: {
        // POST /me/changeEmail
        $post(params: {newEmail: string}): Promise<nichandle.emailChange.Task>;
    }
    changePassword: {
        // POST /me/changePassword
        $post(): Promise<void>;
    }
    consent: {
        // GET /me/consent
        $get(): Promise<me.consent.Campaign[]>;
        $(campaignName: string): {
            // GET /me/consent/{campaignName}
            $get(): Promise<me.consent.Campaign>;
            decision: {
                // GET /me/consent/{campaignName}/decision
                $get(): Promise<me.consent.Consent>;
                // PUT /me/consent/{campaignName}/decision
                $put(params: {value: boolean}): Promise<void>;
            }
        };
    }
    consumption: {
        usage: {
            current: {
                // GET /me/consumption/usage/current
                $get(): Promise<me.consumption.Transaction[]>;
            }
            forecast: {
                // GET /me/consumption/usage/forecast
                $get(): Promise<me.consumption.Transaction[]>;
            }
            history: {
                // GET /me/consumption/usage/history
                $get(params: {beginDate: string, endDate: string}): Promise<me.consumption.Transaction[]>;
            }
        }
    }
    contact: {
        // GET /me/contact
        $get(): Promise<number[]>;
        // POST /me/contact
        $post(params: {address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}): Promise<contact.Contact>;
        $(contactId: number): {
            // GET /me/contact/{contactId}
            $get(): Promise<contact.Contact>;
            // PUT /me/contact/{contactId}
            $put(params?: {address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}): Promise<contact.Contact>;
            fields: {
                // GET /me/contact/{contactId}/fields
                $get(): Promise<contact.FieldInformation[]>;
            }
        };
    }
    credit: {
        balance: {
            // GET /me/credit/balance
            $get(params?: {type?: me.credit.balance.TypeEnum}): Promise<string[]>;
            $(balanceName: string): {
                // GET /me/credit/balance/{balanceName}
                $get(): Promise<me.credit.Balance>;
                movement: {
                    // GET /me/credit/balance/{balanceName}/movement
                    $get(): Promise<number[]>;
                    $(movementId: number): {
                        // GET /me/credit/balance/{balanceName}/movement/{movementId}
                        $get(): Promise<me.credit.balance.Movement>;
                    };
                }
            };
        }
        code: {
            // POST /me/credit/code
            $post(params: {inputCode: string, serviceId?: number}): Promise<me.credit.balance.Movement>;
        }
    }
    debtAccount: {
        // GET /me/debtAccount
        $get(): Promise<balance.CustomerBalance>;
        debt: {
            // GET /me/debtAccount/debt
            $get(): Promise<number[]>;
            $(debtId: number): {
                // GET /me/debtAccount/debt/{debtId}
                $get(): Promise<balance.InvoicingBalance>;
                operation: {
                    // GET /me/debtAccount/debt/{debtId}/operation
                    $get(params?: {depositOrderId?: number}): Promise<number[]>;
                    $(operationId: number): {
                        // GET /me/debtAccount/debt/{debtId}/operation/{operationId}
                        $get(): Promise<balance.OperationBalance>;
                        associatedObject: {
                            // GET /me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject
                            $get(): Promise<debt.entry.AssociatedObject>;
                        }
                    };
                }
            };
        }
        pay: {
            // POST /me/debtAccount/pay
            $post(params?: {orderIds?: number[], paymentMethodId?: number}): Promise<billing.InvoiceDepositRequest>;
        }
    }
    deposit: {
        // GET /me/deposit
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(depositId: string): {
            // GET /me/deposit/{depositId}
            $get(): Promise<billing.InvoiceDeposit>;
            download: {
                // GET /me/deposit/{depositId}/download
                $get(): Promise<string>;
            }
            paidBills: {
                // GET /me/deposit/{depositId}/paidBills
                $get(): Promise<string[]>;
                $(billId: string): {
                    // GET /me/deposit/{depositId}/paidBills/{billId}
                    $get(): Promise<billing.Invoice>;
                    debt: {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/debt
                        $get(): Promise<balance.InvoicingBalance>;
                        operation: {
                            // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation
                            $get(params?: {depositOrderId?: number}): Promise<number[]>;
                            $(operationId: number): {
                                // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}
                                $get(): Promise<balance.OperationBalance>;
                                associatedObject: {
                                    // GET /me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject
                                    $get(): Promise<debt.entry.AssociatedObject>;
                                }
                            };
                        }
                    }
                    details: {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/details
                        $get(): Promise<string[]>;
                        $(billDetailId: string): {
                            // GET /me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}
                            $get(): Promise<billing.InvoiceDetail>;
                        };
                    }
                    download: {
                        // GET /me/deposit/{depositId}/paidBills/{billId}/download
                        $get(params?: {extension?: billing.DocumentExtensionEnum}): Promise<string>;
                    }
                };
            }
        };
    }
    depositRequest: {
        // GET /me/depositRequest
        $get(params?: {creationDate_from?: string, creationDate_to?: string}): Promise<number[]>;
        $(id: number): {
            // GET /me/depositRequest/{id}
            $get(): Promise<billing.InvoiceDepositRequest>;
        };
    }
    fidelityAccount: {
        // GET /me/fidelityAccount
        $get(): Promise<billing.FidelityAccount>;
        // PUT /me/fidelityAccount
        $put(params?: {alertThreshold?: number, balance?: number, canBeCredited?: boolean, lastUpdate?: string, openDate?: string}): Promise<void>;
        creditOrder: {
            // POST /me/fidelityAccount/creditOrder
            $post(params: {amount: number}): Promise<billing.Order>;
        }
        movements: {
            // GET /me/fidelityAccount/movements
            $get(params?: {date_from?: string, date_to?: string}): Promise<number[]>;
            $(movementId: number): {
                // GET /me/fidelityAccount/movements/{movementId}
                $get(): Promise<billing.FidelityMovement>;
            };
        }
    }
    geolocation: {
        // POST /me/geolocation
        $post(): Promise<geolocation.ContinentCountryLocation>;
    }
    identity: {
        group: {
            // GET /me/identity/group
            $get(): Promise<string[]>;
            // POST /me/identity/group
            $post(params: {description?: string, name: string, role?: nichandle.RoleEnum}): Promise<nichandle.Authentication.Group>;
            $(group: string): {
                // DELETE /me/identity/group/{group}
                $delete(): Promise<void>;
                // GET /me/identity/group/{group}
                $get(): Promise<nichandle.Authentication.Group>;
                // PUT /me/identity/group/{group}
                $put(params?: {description?: string, role?: nichandle.RoleEnum}): Promise<void>;
            };
        }
        user: {
            // GET /me/identity/user
            $get(): Promise<string[]>;
            // POST /me/identity/user
            $post(params: {description?: string, email: string, group?: string, login: string, password: string}): Promise<void>;
            $(user: string): {
                // DELETE /me/identity/user/{user}
                $delete(): Promise<void>;
                // GET /me/identity/user/{user}
                $get(): Promise<nichandle.User>;
                // PUT /me/identity/user/{user}
                $put(params?: {description?: string, email?: string, group?: string}): Promise<void>;
                disable: {
                    // POST /me/identity/user/{user}/disable
                    $post(): Promise<void>;
                }
                enable: {
                    // POST /me/identity/user/{user}/enable
                    $post(): Promise<void>;
                }
            };
        }
    }
    installationTemplate: {
        // GET /me/installationTemplate
        $get(): Promise<string[]>;
        // POST /me/installationTemplate
        $post(params: {baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string}): Promise<void>;
        $(templateName: string): {
            // DELETE /me/installationTemplate/{templateName}
            $delete(): Promise<void>;
            // GET /me/installationTemplate/{templateName}
            $get(): Promise<dedicated.installationTemplate.Templates>;
            // PUT /me/installationTemplate/{templateName}
            $put(params?: {availableLanguages?: dedicated.TemplateOsLanguageEnum[], beta?: boolean, bitFormat?: dedicated.server.BitFormatEnum, category?: dedicated.TemplateOsUsageEnum, customization?: dedicated.TemplateOsProperties, defaultLanguage?: dedicated.TemplateOsLanguageEnum, deprecated?: boolean, description?: string, distribution?: string, family?: dedicated.TemplateOsTypeEnum, filesystems?: dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, lvmReady?: boolean, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: dedicated.server.SupportsUEFIEnum, templateName?: string}): Promise<void>;
            checkIntegrity: {
                // POST /me/installationTemplate/{templateName}/checkIntegrity
                $post(): Promise<void>;
            }
            partitionScheme: {
                // GET /me/installationTemplate/{templateName}/partitionScheme
                $get(): Promise<string[]>;
                // POST /me/installationTemplate/{templateName}/partitionScheme
                $post(params: {name: string, priority: number}): Promise<void>;
                $(schemeName: string): {
                    // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $delete(): Promise<void>;
                    // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $put(params?: {name?: string, priority?: number}): Promise<void>;
                    hardwareRaid: {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $post(params: {disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}): Promise<void>;
                        $(name: string): {
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $delete(): Promise<void>;
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $put(params?: {disks?: string[], mode?: dedicated.TemplateOsHardwareRaidEnum, name?: string, step?: number}): Promise<void>;
                        };
                    }
                    partition: {
                        // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $get(): Promise<string[]>;
                        // POST /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $post(params: {filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
                        $(mountpoint: string): {
                            // DELETE /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $delete(): Promise<void>;
                            // GET /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            // PUT /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $put(params?: {filesystem?: dedicated.TemplateOsFileSystemEnum, mountpoint?: string, order?: number, raid?: dedicated.server.PartitionRaidEnum, size?: complexType.UnitAndValue<number>, type?: dedicated.TemplatePartitionTypeEnum, volumeName?: string}): Promise<void>;
                        };
                    }
                };
            }
        };
    }
    ipOrganisation: {
        // GET /me/ipOrganisation
        $get(): Promise<string[]>;
        // POST /me/ipOrganisation
        $post(params: {abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
        $(organisationId: string): {
            // DELETE /me/ipOrganisation/{organisationId}
            $delete(): Promise<void>;
            // GET /me/ipOrganisation/{organisationId}
            $get(): Promise<nichandle.Ipv4Org>;
            // PUT /me/ipOrganisation/{organisationId}
            $put(params?: {abuse_mailbox?: string, address?: string, city?: string, country?: nichandle.CountryEnum, firstname?: string, lastname?: string, organisationId?: string, phone?: string, registry?: nichandle.IpRegistryEnum, state?: string, zip?: string}): Promise<void>;
        };
    }
    ipxeScript: {
        // GET /me/ipxeScript
        $get(): Promise<string[]>;
        // POST /me/ipxeScript
        $post(params: {description: string, name: string, script: string}): Promise<nichandle.ipxe>;
        $(name: string): {
            // DELETE /me/ipxeScript/{name}
            $delete(): Promise<void>;
            // GET /me/ipxeScript/{name}
            $get(): Promise<nichandle.ipxe>;
        };
    }
    order: {
        // GET /me/order
        $get(): Promise<number[]>;
        $(orderId: number): {
            // GET /me/order/{orderId}
            $get(): Promise<billing.Order>;
            associatedObject: {
                // GET /me/order/{orderId}/associatedObject
                $get(): Promise<billing.order.AssociatedObject>;
            }
            availablePaymentMethod: {
                // GET /me/order/{orderId}/availablePaymentMethod
                $get(): Promise<billing.order.AvailablePaymentMethod[]>;
            }
            availableRegisteredPaymentMean: {
                // GET /me/order/{orderId}/availableRegisteredPaymentMean
                $get(): Promise<billing.order.RegisteredPaymentMean[]>;
            }
            balance: {
                // GET /me/order/{orderId}/balance
                $get(): Promise<number[]>;
                // POST /me/order/{orderId}/balance
                $post(params: {balanceName: string}): Promise<billing.order.credit.Balance>;
                $(balanceName: string): {
                    // DELETE /me/order/{orderId}/balance/{balanceName}
                    $delete(): Promise<void>;
                    // GET /me/order/{orderId}/balance/{balanceName}
                    $get(): Promise<billing.order.credit.Balance>;
                };
            }
            details: {
                // GET /me/order/{orderId}/details
                $get(): Promise<number[]>;
                $(detailId: number): {
                    // GET /me/order/{orderId}/details/{detailId}
                    $get(): Promise<billing.OrderDetail>;
                    extension: {
                        // GET /me/order/{orderId}/details/{detailId}/extension
                        $get(): Promise<billing.ItemDetail>;
                    }
                    operations: {
                        // GET /me/order/{orderId}/details/{detailId}/operations
                        $get(): Promise<number[]>;
                        $(operationId: number): {
                            // GET /me/order/{orderId}/details/{detailId}/operations/{operationId}
                            $get(): Promise<service.Operation>;
                        };
                    }
                };
            }
            pay: {
                // POST /me/order/{orderId}/pay
                $post(params: {paymentMethod: billing.order.AvailablePaymentMethod}): Promise<void>;
            }
            payWithRegisteredPaymentMean: {
                // POST /me/order/{orderId}/payWithRegisteredPaymentMean
                $post(params: {paymentMean: billing.paymentMethod.PaymentTypeEnum, paymentMeanId?: number}): Promise<void>;
            }
            paymentMethods: {
                // GET /me/order/{orderId}/paymentMethods
                $get(): Promise<billing.order.PaymentMethods>;
            }
            retraction: {
                // POST /me/order/{orderId}/retraction
                $post(params: {comment?: string, reason: billing.order.RetractionReasonEnum}): Promise<void>;
            }
            status: {
                // GET /me/order/{orderId}/status
                $get(): Promise<billing.order.OrderStatusEnum>;
            }
            voucher: {
                // GET /me/order/{orderId}/voucher
                $get(): Promise<number[]>;
                // POST /me/order/{orderId}/voucher
                $post(params: {balanceName: string}): Promise<billing.order.OrderVoucher>;
                $(balanceName: string): {
                    // DELETE /me/order/{orderId}/voucher/{balanceName}
                    $delete(): Promise<void>;
                    // GET /me/order/{orderId}/voucher/{balanceName}
                    $get(): Promise<billing.order.OrderVoucher>;
                };
            }
        };
    }
    passwordRecover: {
        // POST /me/passwordRecover
        $post(params: {ovhCompany: nichandle.OvhCompanyEnum, ovhId: string}): Promise<void>;
    }
    payment: {
        availableMethods: {
            // GET /me/payment/availableMethods
            $get(): Promise<me.payment.method.AvailablePaymentMethod[]>;
        }
        method: {
            // GET /me/payment/method
            $get(params?: {paymentType?: string, status?: me.payment.method.PaymentMethod.Status}): Promise<number[]>;
            // POST /me/payment/method
            $post(params: {callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}): Promise<me.payment.method.Register.ValidationResult>;
            $(paymentMethodId: number): {
                // DELETE /me/payment/method/{paymentMethodId}
                $delete(): Promise<me.payment.method.PaymentMethod>;
                // GET /me/payment/method/{paymentMethodId}
                $get(): Promise<me.payment.method.PaymentMethod>;
                // PUT /me/payment/method/{paymentMethodId}
                $put(params?: {default_?: boolean, description?: string}): Promise<billing.PaymentMethod>;
                challenge: {
                    // POST /me/payment/method/{paymentMethodId}/challenge
                    $post(params: {challenge: string}): Promise<me.payment.method.PaymentMethod>;
                }
                finalize: {
                    // POST /me/payment/method/{paymentMethodId}/finalize
                    $post(params?: {expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string}): Promise<me.payment.method.PaymentMethod>;
                }
            };
        }
        transaction: {
            // GET /me/payment/transaction
            $get(params?: {paymentMethodId?: number, status?: me.payment.method.Transaction.Status}): Promise<number[]>;
            $(transactionId: number): {
                // GET /me/payment/transaction/{transactionId}
                $get(): Promise<me.payment.method.Transaction>;
            };
        }
    }
    paymentMethod: {
        // GET /me/paymentMethod
        $get(params?: {paymentType?: billing.paymentMethod.PaymentTypeEnum, status?: billing.paymentMethod.StatusEnum}): Promise<number[]>;
        // POST /me/paymentMethod
        $post(params: {billingContactId?: number, default_?: boolean, description?: string, paymentType: billing.paymentMethod.CreatePaymentTypeEnum, urlCallback?: string}): Promise<billing.PaymentMeanValidation>;
        $(id: number): {
            // DELETE /me/paymentMethod/{id}
            $delete(): Promise<void>;
            // GET /me/paymentMethod/{id}
            $get(): Promise<billing.PaymentMethod>;
            // PUT /me/paymentMethod/{id}
            $put(params?: {default_?: boolean, description?: string}): Promise<billing.PaymentMethod>;
        };
    }
    refund: {
        // GET /me/refund
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(refundId: string): {
            // GET /me/refund/{refundId}
            $get(): Promise<billing.InvoiceRefund>;
            details: {
                // GET /me/refund/{refundId}/details
                $get(): Promise<string[]>;
                $(refundDetailId: string): {
                    // GET /me/refund/{refundId}/details/{refundDetailId}
                    $get(): Promise<billing.InvoiceRefundDetail>;
                };
            }
            download: {
                // GET /me/refund/{refundId}/download
                $get(params?: {extension?: billing.DocumentExtensionEnum}): Promise<string>;
            }
        };
    }
    sla: {
        // GET /me/sla
        $get(): Promise<number[]>;
        $(id: number): {
            // GET /me/sla/{id}
            $get(): Promise<billing.SlaOperation>;
            apply: {
                // POST /me/sla/{id}/apply
                $post(): Promise<void>;
            }
            canBeApplied: {
                // GET /me/sla/{id}/canBeApplied
                $get(): Promise<boolean>;
            }
            services: {
                // GET /me/sla/{id}/services
                $get(): Promise<billing.SlaOperationService[]>;
            }
            status: {
                // GET /me/sla/{id}/status
                $get(): Promise<string>;
            }
        };
    }
    sshKey: {
        // GET /me/sshKey
        $get(): Promise<string[]>;
        // POST /me/sshKey
        $post(params: {key: string, keyName: string}): Promise<void>;
        $(keyName: string): {
            // DELETE /me/sshKey/{keyName}
            $delete(): Promise<void>;
            // GET /me/sshKey/{keyName}
            $get(): Promise<nichandle.sshKey>;
            // PUT /me/sshKey/{keyName}
            $put(params?: {default_?: boolean, key?: string, keyName?: string}): Promise<void>;
        };
    }
    subAccount: {
        // GET /me/subAccount
        $get(): Promise<number[]>;
        // POST /me/subAccount
        $post(params?: {description?: string}): Promise<number>;
        $(id: number): {
            // GET /me/subAccount/{id}
            $get(): Promise<nichandle.SubAccount>;
            // PUT /me/subAccount/{id}
            $put(params?: {creationDate?: string, description?: string, id?: number}): Promise<void>;
            createConsumerKey: {
                // POST /me/subAccount/{id}/createConsumerKey
                $post(): Promise<nichandle.SubAccountConsumerKey>;
            }
        };
    }
    task: {
        emailChange: {
            // GET /me/task/emailChange
            $get(params?: {state?: nichandle.changeEmail.TaskStateEnum}): Promise<number[]>;
            $(id: number): {
                // GET /me/task/emailChange/{id}
                $get(): Promise<nichandle.emailChange.Task>;
                accept: {
                    // POST /me/task/emailChange/{id}/accept
                    $post(params: {token: string}): Promise<void>;
                }
                refuse: {
                    // POST /me/task/emailChange/{id}/refuse
                    $post(params: {token: string}): Promise<void>;
                }
            };
        }
    }
    vipStatus: {
        // GET /me/vipStatus
        $get(): Promise<nichandle.VipStatus>;
    }
    voucher: {
        checkValidity: {
            // POST /me/voucher/checkValidity
            $post(params: {voucher: string}): Promise<nichandle.VoucherStatus>;
        }
    }
    withdrawal: {
        // GET /me/withdrawal
        $get(params?: {date_from?: string, date_to?: string, orderId?: number}): Promise<string[]>;
        $(withdrawalId: string): {
            // GET /me/withdrawal/{withdrawalId}
            $get(): Promise<billing.InvoiceWithdrawal>;
            download: {
                // GET /me/withdrawal/{withdrawalId}/download
                $get(): Promise<string>;
            }
        };
    }
// Api
  /**
   * Details about your OVH identifier
   * Get this object properties
   */
  get(path: '/me'): () => Promise<nichandle.Nichandle>;
  /**
   * SOTP Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/backupCode'): () => Promise<nichandle.accessRestriction.SOTPAccount>;
  /**
   * Login restrictions on a development version of the Manager
   * Get this object properties
   */
  get(path: '/me/accessRestriction/developerMode'): () => Promise<nichandle.DeveloperModeRestriction>;
  /**
   * List the nichandle.IpRestriction objects
   * List of IP restrictions
   */
  get(path: '/me/accessRestriction/ip'): () => Promise<number[]>;
  /**
   * List of all IP Restrictions
   * Get this object properties
   */
  get(path: '/me/accessRestriction/ip/{id}'): (params: {id: number}) => Promise<nichandle.IpRestriction>;
  /**
   * IP Restriction default rule
   * Get this object properties
   */
  get(path: '/me/accessRestriction/ipDefaultRule'): () => Promise<nichandle.IpRestrictionDefaultRule>;
  /**
   * List the nichandle.accessRestriction.SmsAccount objects
   * List of Sms accounts
   */
  get(path: '/me/accessRestriction/sms'): () => Promise<number[]>;
  /**
   * Sms Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/sms/{id}'): (params: {id: number}) => Promise<nichandle.accessRestriction.SmsAccount>;
  /**
   * List the nichandle.accessRestriction.TOTPAccount objects
   * List of TOTP accounts
   */
  get(path: '/me/accessRestriction/totp'): () => Promise<number[]>;
  /**
   * TOTP Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/totp/{id}'): (params: {id: number}) => Promise<nichandle.accessRestriction.TOTPAccount>;
  /**
   * List the nichandle.accessRestriction.U2FAccount objects
   * List of U2F accounts
   */
  get(path: '/me/accessRestriction/u2f'): () => Promise<number[]>;
  /**
   * U2F Two-Factor Authentication
   * Get this object properties
   */
  get(path: '/me/accessRestriction/u2f/{id}'): (params: {id: number}) => Promise<nichandle.accessRestriction.U2FAccount>;
  /**
   * List of contracts signed between you and OVH
   * List of contracts signed between you and OVH
   */
  get(path: '/me/agreements'): (params?: {agreed?: agreements.AgreementStateEnum, contractId?: number}) => Promise<number[]>;
  /**
   * Get this object properties
   * Get this object properties
   */
  get(path: '/me/agreements/{id}'): (params: {id: number}) => Promise<agreements.ContractAgreement>;
  /**
   * Get this object properties
   * Get this object properties
   */
  get(path: '/me/agreements/{id}/contract'): (params: {id: number}) => Promise<agreements.Contract>;
  /**
   * List the api.Application objects
   * List of your Api Application
   */
  get(path: '/me/api/application'): () => Promise<number[]>;
  /**
   * API Application
   * Get this object properties
   */
  get(path: '/me/api/application/{applicationId}'): (params: {applicationId: number}) => Promise<api.Application>;
  /**
   * List the api.Credential objects
   * List of your Api Credentials
   */
  get(path: '/me/api/credential'): (params?: {applicationId?: number, status?: auth.CredentialStateEnum}) => Promise<number[]>;
  /**
   * API Credential
   * Get this object properties
   */
  get(path: '/me/api/credential/{credentialId}'): (params: {credentialId: number}) => Promise<api.Credential>;
  /**
   * API Application
   * Get this object properties
   */
  get(path: '/me/api/credential/{credentialId}/application'): (params: {credentialId: number}) => Promise<api.Application>;
  /**
   * availableAutomaticPaymentMeans operations
   * List available payment methods in this Nic's country
   */
  get(path: '/me/availableAutomaticPaymentMeans'): () => Promise<billing.AutomaticPaymentMean>;
  /**
   * List the billing.Invoice objects
   * List of all the bills the logged account has
   */
  get(path: '/me/bill'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  get(path: '/me/bill/{billId}'): (params: {billId: string}) => Promise<billing.Invoice>;
  /**
   * State of a balance
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/debt'): (params: {billId: string}) => Promise<balance.InvoicingBalance>;
  /**
   * List the balance.OperationBalance objects
   * All operations related to these debts
   */
  get(path: '/me/bill/{billId}/debt/operation'): (params: {billId: string, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/debt/operation/{operationId}'): (params: {billId: string, operationId: number}) => Promise<balance.OperationBalance>;
  /**
   * associatedObject operations
   * Return main data about the object related to this operation
   */
  get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject'): (params: {billId: string, operationId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.InvoiceDetail objects
   * Give access to all entries of the bill
   */
  get(path: '/me/bill/{billId}/details'): (params: {billId: string}) => Promise<string[]>;
  /**
   * Information about an invoice entry
   * Get this object properties
   */
  get(path: '/me/bill/{billId}/details/{billDetailId}'): (params: {billDetailId: string, billId: string}) => Promise<billing.InvoiceDetail>;
  /**
   * download operations
   * Generate download link for the document
   */
  get(path: '/me/bill/{billId}/download'): (params: {billId: string, extension?: billing.DocumentExtensionEnum}) => Promise<string>;
  /**
   * Manage billing groups
   * Retrieve all billing groups
   */
  get(path: '/me/billing/group'): (params?: {name?: string}) => Promise<number[]>;
  /**
   * Manage billing groups
   * Retrieve information about a billing group
   */
  get(path: '/me/billing/group/{groupId}'): (params: {groupId: number}) => Promise<me.billing.group.BillingGroup>;
  /**
   * 
   * Retrieve billing group service ID list
   */
  get(path: '/me/billing/group/{groupId}/service'): (params: {groupId: number}) => Promise<number[]>;
  /**
   * 
   * Retrieve information about a billing group service
   */
  get(path: '/me/billing/group/{groupId}/service/{serviceId}'): (params: {groupId: number, serviceId: number}) => Promise<me.billing.group.Service>;
  /**
   * Get all certificates of the account
   * Get all certificates of the account
   */
  get(path: '/me/certificates'): (params?: {name?: string}) => Promise<string[]>;
  /**
   * List all consent campaign available
   * List all consent campaign available
   */
  get(path: '/me/consent'): () => Promise<me.consent.Campaign[]>;
  /**
   * Retrieve information about a consent campaign
   * Retrieve information about a consent campaign
   */
  get(path: '/me/consent/{campaignName}'): (params: {campaignName: string}) => Promise<me.consent.Campaign>;
  /**
   * Get decision value for a consent campaign
   * Get decision value for a consent campaign
   */
  get(path: '/me/consent/{campaignName}/decision'): (params: {campaignName: string}) => Promise<me.consent.Consent>;
  /**
   * Missing description
   * Get on-going consumptions for all services
   */
  get(path: '/me/consumption/usage/current'): () => Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Get forecasted consumptions for all services
   */
  get(path: '/me/consumption/usage/forecast'): () => Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Get list of transactions between two dates
   */
  get(path: '/me/consumption/usage/history'): (params: {beginDate: string, endDate: string}) => Promise<me.consumption.Transaction[]>;
  /**
   * Missing description
   * Retrieve all contact that you created
   */
  get(path: '/me/contact'): () => Promise<number[]>;
  /**
   * Missing description
   * Retrieve information about a contact
   */
  get(path: '/me/contact/{contactId}'): (params: {contactId: number}) => Promise<contact.Contact>;
  /**
   * Missing description
   * Display mandatory/read-only informations of a contact
   */
  get(path: '/me/contact/{contactId}/fields'): (params: {contactId: number}) => Promise<contact.FieldInformation[]>;
  /**
   * Manage credit balances
   * Retrieve all credit balances
   */
  get(path: '/me/credit/balance'): (params?: {type?: me.credit.balance.TypeEnum}) => Promise<string[]>;
  /**
   * Manage credit balances
   * Retrieve a credit balance
   */
  get(path: '/me/credit/balance/{balanceName}'): (params: {balanceName: string}) => Promise<me.credit.Balance>;
  /**
   * Manage credit balance movements
   * Retrieve movements for a specific balance
   */
  get(path: '/me/credit/balance/{balanceName}/movement'): (params: {balanceName: string}) => Promise<number[]>;
  /**
   * Manage credit balance movements
   * Retrieve a specific movement for a credit balance
   */
  get(path: '/me/credit/balance/{balanceName}/movement/{movementId}'): (params: {balanceName: string, movementId: number}) => Promise<me.credit.balance.Movement>;
  /**
   * Balance of the account
   * Get this object properties
   */
  get(path: '/me/debtAccount'): () => Promise<balance.CustomerBalance>;
  /**
   * List the balance.InvoicingBalance objects
   * All debts related to your account
   */
  get(path: '/me/debtAccount/debt'): () => Promise<number[]>;
  /**
   * State of a balance
   * Get this object properties
   */
  get(path: '/me/debtAccount/debt/{debtId}'): (params: {debtId: number}) => Promise<balance.InvoicingBalance>;
  /**
   * List the balance.OperationBalance objects
   * All operations related to these debts
   */
  get(path: '/me/debtAccount/debt/{debtId}/operation'): (params: {debtId: number, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}'): (params: {debtId: number, operationId: number}) => Promise<balance.OperationBalance>;
  /**
   * associatedObject operations
   * Return main data about the object related to this operation
   */
  get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject'): (params: {debtId: number, operationId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.InvoiceDeposit objects
   * List of all the deposits made to your prepaid account or debt account
   */
  get(path: '/me/deposit'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a deposit
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}'): (params: {depositId: string}) => Promise<billing.InvoiceDeposit>;
  /**
   * download operations
   * Generate download link for the pdf document
   */
  get(path: '/me/deposit/{depositId}/download'): (params: {depositId: string}) => Promise<string>;
  /**
   * List the billing.Invoice objects
   * Get invoices paid by this deposit
   */
  get(path: '/me/deposit/{depositId}/paidBills'): (params: {depositId: string}) => Promise<string[]>;
  /**
   * Details about a Bill
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}'): (params: {billId: string, depositId: string}) => Promise<billing.Invoice>;
  /**
   * State of a balance
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt'): (params: {billId: string, depositId: string}) => Promise<balance.InvoicingBalance>;
  /**
   * List the balance.OperationBalance objects
   * All operations related to these debts
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation'): (params: {billId: string, depositId: string, depositOrderId?: number}) => Promise<number[]>;
  /**
   * Operation that happend on a debt
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}'): (params: {billId: string, depositId: string, operationId: number}) => Promise<balance.OperationBalance>;
  /**
   * associatedObject operations
   * Return main data about the object related to this operation
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject'): (params: {billId: string, depositId: string, operationId: number}) => Promise<debt.entry.AssociatedObject>;
  /**
   * List the billing.InvoiceDetail objects
   * Give access to all entries of the bill
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/details'): (params: {billId: string, depositId: string}) => Promise<string[]>;
  /**
   * Information about an invoice entry
   * Get this object properties
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}'): (params: {billDetailId: string, billId: string, depositId: string}) => Promise<billing.InvoiceDetail>;
  /**
   * download operations
   * Generate download link for the document
   */
  get(path: '/me/deposit/{depositId}/paidBills/{billId}/download'): (params: {billId: string, depositId: string, extension?: billing.DocumentExtensionEnum}) => Promise<string>;
  /**
   * List the billing.InvoiceDepositRequest objects
   * List of all the deposit requests made
   */
  get(path: '/me/depositRequest'): (params?: {creationDate_from?: string, creationDate_to?: string}) => Promise<number[]>;
  /**
   * Details about a deposit
   * Get this object properties
   */
  get(path: '/me/depositRequest/{id}'): (params: {id: number}) => Promise<billing.InvoiceDepositRequest>;
  /**
   * Balance of the fidelity account
   * Get this object properties
   */
  get(path: '/me/fidelityAccount'): () => Promise<billing.FidelityAccount>;
  /**
   * List the billing.FidelityMovement objects
   * List of entries of the fidelity account
   */
  get(path: '/me/fidelityAccount/movements'): (params?: {date_from?: string, date_to?: string}) => Promise<number[]>;
  /**
   * Details about a fidelity account
   * Get this object properties
   */
  get(path: '/me/fidelityAccount/movements/{movementId}'): (params: {movementId: number}) => Promise<billing.FidelityMovement>;
  /**
   * Groups linked to this account
   * Retrieve all groups of this account
   */
  get(path: '/me/identity/group'): () => Promise<string[]>;
  /**
   * A group linked to this account
   * Get this object properties
   */
  get(path: '/me/identity/group/{group}'): (params: {group: string}) => Promise<nichandle.Authentication.Group>;
  /**
   * Users linked to this account
   * Retrieve all users of this account
   */
  get(path: '/me/identity/user'): () => Promise<string[]>;
  /**
   * A user linked to this account
   * Get this object properties
   */
  get(path: '/me/identity/user/{user}'): (params: {user: string}) => Promise<nichandle.User>;
  /**
   * List the dedicated.installationTemplate.Templates objects
   * Your customized operating system installation templates
   */
  get(path: '/me/installationTemplate'): () => Promise<string[]>;
  /**
   * Available installation templates
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}'): (params: {templateName: string}) => Promise<dedicated.installationTemplate.Templates>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Partitioning schemes available on this template
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme'): (params: {templateName: string}) => Promise<string[]>;
  /**
   * Partitioning schemes available on this template
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Hardware RAIDs defined in this partitioning scheme
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {schemeName: string, templateName: string}) => Promise<string[]>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.hardwareRaid>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Partitions defined in this partitioning scheme
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {schemeName: string, templateName: string}) => Promise<string[]>;
  /**
   *  Partitions defined in this partitioning scheme
   * Get this object properties
   */
  get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.templatePartitions>;
  /**
   * List the nichandle.Ipv4Org objects
   * List of organisations
   */
  get(path: '/me/ipOrganisation'): () => Promise<string[]>;
  /**
   * Details about an IP block organisation
   * Get this object properties
   */
  get(path: '/me/ipOrganisation/{organisationId}'): (params: {organisationId: string}) => Promise<nichandle.Ipv4Org>;
  /**
   * List the nichandle.ipxe objects
   * List of all your IPXE scripts
   */
  get(path: '/me/ipxeScript'): () => Promise<string[]>;
  /**
   * Customer IPXE scripts
   * Get this object properties
   */
  get(path: '/me/ipxeScript/{name}'): (params: {name: string}) => Promise<nichandle.ipxe>;
  /**
   * Retrieve order list
   * Retrieve order list
   */
  get(path: '/me/order'): () => Promise<number[]>;
  /**
   * Retrieve an order
   * Retrieve an order
   */
  get(path: '/me/order/{orderId}'): (params: {orderId: number}) => Promise<billing.Order>;
  /**
   * Return data about the object associated to the order
   * Return data about the object associated to the order
   */
  get(path: '/me/order/{orderId}/associatedObject'): (params: {orderId: number}) => Promise<billing.order.AssociatedObject>;
  /**
   * List of payment methods you can use to pay this order
   * List of payment methods you can use to pay this order
   */
  get(path: '/me/order/{orderId}/availablePaymentMethod'): (params: {orderId: number}) => Promise<billing.order.AvailablePaymentMethod[]>;
  /**
   * List of registered payment mean you can use to pay this order
   * List of registered payment mean you can use to pay this order
   */
  get(path: '/me/order/{orderId}/availableRegisteredPaymentMean'): (params: {orderId: number}) => Promise<billing.order.RegisteredPaymentMean[]>;
  /**
   * Interact with credit balances linked to this Order
   * List credit balances applied on this Order
   */
  get(path: '/me/order/{orderId}/balance'): (params: {orderId: number}) => Promise<number[]>;
  /**
   * Interact with a credit balance linked to this Order
   * Retrieve Credit applied on this Order
   */
  get(path: '/me/order/{orderId}/balance/{balanceName}'): (params: {balanceName: string, orderId: number}) => Promise<billing.order.credit.Balance>;
  /**
   * Retrieve details of an order
   * Retrieve details of an order
   */
  get(path: '/me/order/{orderId}/details'): (params: {orderId: number}) => Promise<number[]>;
  /**
   * Retrieve an order detail
   * Retrieve an order detail
   */
  get(path: '/me/order/{orderId}/details/{detailId}'): (params: {detailId: number, orderId: number}) => Promise<billing.OrderDetail>;
  /**
   * Retrieve an order detail extensions
   * Retrieve an order detail extensions
   */
  get(path: '/me/order/{orderId}/details/{detailId}/extension'): (params: {detailId: number, orderId: number}) => Promise<billing.ItemDetail>;
  /**
   * Retrieve a list of operations linked to this order detail
   * Retrieve a list of operations linked to this order detail
   */
  get(path: '/me/order/{orderId}/details/{detailId}/operations'): (params: {detailId: number, orderId: number}) => Promise<number[]>;
  /**
   * Retrieve informations about an Operation linked to the order detail
   * Retrieve a list of operations linked to this order detail
   */
  get(path: '/me/order/{orderId}/details/{detailId}/operations/{operationId}'): (params: {detailId: number, operationId: number, orderId: number}) => Promise<service.Operation>;
  /**
   * List of registered payment method you can use to pay this order
   * List of registered payment method you can use to pay this order
   */
  get(path: '/me/order/{orderId}/paymentMethods'): (params: {orderId: number}) => Promise<billing.order.PaymentMethods>;
  /**
   * Return status of order
   * Return status of order
   */
  get(path: '/me/order/{orderId}/status'): (params: {orderId: number}) => Promise<billing.order.OrderStatusEnum>;
  /**
   * Interact with Vouchers linked to this Order
   * List vouchers applied on this Order
   */
  get(path: '/me/order/{orderId}/voucher'): (params: {orderId: number}) => Promise<number[]>;
  /**
   * Interact with a specific Voucher linked to this Order
   * Retrieve Voucher applied on this Order
   */
  get(path: '/me/order/{orderId}/voucher/{balanceName}'): (params: {balanceName: string, orderId: number}) => Promise<billing.order.OrderVoucher>;
  /**
   * Available payment methods
   * Retrieve available payment method
   */
  get(path: '/me/payment/availableMethods'): () => Promise<me.payment.method.AvailablePaymentMethod[]>;
  /**
   * Manage payment method
   * Retrieve payment method ID list
   */
  get(path: '/me/payment/method'): (params?: {paymentType?: string, status?: me.payment.method.PaymentMethod.Status}) => Promise<number[]>;
  /**
   * Manage payment method
   * Get one payment method
   */
  get(path: '/me/payment/method/{paymentMethodId}'): (params: {paymentMethodId: number}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * Retrieve payment method transaction ID list
   * Retrieve associated payment method transaction ID list
   */
  get(path: '/me/payment/transaction'): (params?: {paymentMethodId?: number, status?: me.payment.method.Transaction.Status}) => Promise<number[]>;
  /**
   * Manage payment method transaction
   * Get associated payment method transaction
   */
  get(path: '/me/payment/transaction/{transactionId}'): (params: {transactionId: number}) => Promise<me.payment.method.Transaction>;
  /**
   * Retrieve payment method list
   * Retrieve payment method id list
   */
  get(path: '/me/paymentMethod'): (params?: {paymentType?: billing.paymentMethod.PaymentTypeEnum, status?: billing.paymentMethod.StatusEnum}) => Promise<number[]>;
  /**
   * Manage the payment mean.
   * Get one payment method
   */
  get(path: '/me/paymentMethod/{id}'): (params: {id: number}) => Promise<billing.PaymentMethod>;
  /**
   * List the billing.InvoiceRefund objects
   * List of all the refunds the logged account has
   */
  get(path: '/me/refund'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a Refund
   * Get this object properties
   */
  get(path: '/me/refund/{refundId}'): (params: {refundId: string}) => Promise<billing.InvoiceRefund>;
  /**
   * List the billing.InvoiceRefundDetail objects
   * Give access to all entries of the refund
   */
  get(path: '/me/refund/{refundId}/details'): (params: {refundId: string}) => Promise<string[]>;
  /**
   * Information about refund entry
   * Get this object properties
   */
  get(path: '/me/refund/{refundId}/details/{refundDetailId}'): (params: {refundDetailId: string, refundId: string}) => Promise<billing.InvoiceRefundDetail>;
  /**
   * download operations
   * Generate download link for the document
   */
  get(path: '/me/refund/{refundId}/download'): (params: {refundId: string, extension?: billing.DocumentExtensionEnum}) => Promise<string>;
  /**
   * List the billing.SlaOperation objects
   * List active SLA
   */
  get(path: '/me/sla'): () => Promise<number[]>;
  /**
   * SLA properties
   * Get this object properties
   */
  get(path: '/me/sla/{id}'): (params: {id: number}) => Promise<billing.SlaOperation>;
  /**
   * canBeApplied operations
   * Check whether this SLA can be applied on your services
   */
  get(path: '/me/sla/{id}/canBeApplied'): (params: {id: number}) => Promise<boolean>;
  /**
   * services operations
   * Get services impacted by this SLA
   */
  get(path: '/me/sla/{id}/services'): (params: {id: number}) => Promise<billing.SlaOperationService[]>;
  /**
   * status operations
   * Get the status request of this SLA
   */
  get(path: '/me/sla/{id}/status'): (params: {id: number}) => Promise<string>;
  /**
   * List the nichandle.sshKey objects
   * List of your public SSH keys
   */
  get(path: '/me/sshKey'): () => Promise<string[]>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Get this object properties
   */
  get(path: '/me/sshKey/{keyName}'): (params: {keyName: string}) => Promise<nichandle.sshKey>;
  /**
   * List the nichandle.SubAccount objects
   * List of sub-accounts
   */
  get(path: '/me/subAccount'): () => Promise<number[]>;
  /**
   * Sub Account
   * Get this object properties
   */
  get(path: '/me/subAccount/{id}'): (params: {id: number}) => Promise<nichandle.SubAccount>;
  /**
   * List the nichandle.emailChange.Task objects
   * List of email change tasks you are involved in
   */
  get(path: '/me/task/emailChange'): (params?: {state?: nichandle.changeEmail.TaskStateEnum}) => Promise<number[]>;
  /**
   * Task running an email change on an account
   * Get this object properties
   */
  get(path: '/me/task/emailChange/{id}'): (params: {id: number}) => Promise<nichandle.emailChange.Task>;
  /**
   * vipStatus operations
   * VIP Status of this account
   */
  get(path: '/me/vipStatus'): () => Promise<nichandle.VipStatus>;
  /**
   * List the billing.InvoiceWithdrawal objects
   * List of all the withdrawals made from your prepaid account
   */
  get(path: '/me/withdrawal'): (params?: {date_from?: string, date_to?: string, orderId?: number}) => Promise<string[]>;
  /**
   * Details about a withdrawal
   * Get this object properties
   */
  get(path: '/me/withdrawal/{withdrawalId}'): (params: {withdrawalId: string}) => Promise<billing.InvoiceWithdrawal>;
  /**
   * download operations
   * Generate download link for the pdf document
   */
  get(path: '/me/withdrawal/{withdrawalId}/download'): (params: {withdrawalId: string}) => Promise<string>;
  /**
   * Details about your OVH identifier
   * Alter this object properties
   */
  put(path: '/me'): (params?: {address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: nichandle.CountryEnum, currency?: nichandle.Currency, customerCode?: string, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: nichandle.LanguageEnum, legalform?: nichandle.LegalFormEnum, name?: string, nationalIdentificationNumber?: string, nichandle?: string, organisation?: string, ovhCompany?: nichandle.OvhCompanyEnum, ovhSubsidiary?: nichandle.OvhSubsidiaryEnum, phone?: string, phoneCountry?: nichandle.CountryEnum, sex?: nichandle.GenderEnum, spareEmail?: string, state?: nichandle.StateEnum, vat?: string, zip?: string}) => Promise<void>;
  /**
   * Login restrictions on a development version of the Manager
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/developerMode'): (params?: {enabled?: boolean}) => Promise<void>;
  /**
   * List of all IP Restrictions
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/ip/{id}'): (params: {id: number, ip?: string, rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}) => Promise<void>;
  /**
   * IP Restriction default rule
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/ipDefaultRule'): (params?: {rule?: nichandle.accessRestriction.IpRestrictionRuleEnum, warning?: boolean}) => Promise<void>;
  /**
   * Sms Two-Factor Authentication
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/sms/{id}'): (params: {id: number, creationDate?: string, description?: string, lastUsedDate?: string, phoneNumber?: string, status?: nichandle.accessRestriction.SmsStatusEnum}) => Promise<void>;
  /**
   * TOTP Two-Factor Authentication
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/totp/{id}'): (params: {id: number, creationDate?: string, description?: string, lastUsedDate?: string, status?: nichandle.accessRestriction.TOTPStatusEnum}) => Promise<void>;
  /**
   * U2F Two-Factor Authentication
   * Alter this object properties
   */
  put(path: '/me/accessRestriction/u2f/{id}'): (params: {id: number, creationDate?: string, description?: string, lastUsedDate?: string, status?: nichandle.accessRestriction.U2FStatusEnum}) => Promise<void>;
  /**
   * API Credential
   * Alter this object properties
   */
  put(path: '/me/api/credential/{credentialId}'): (params: {credentialId: number, allowedIPs?: string[], applicationId?: number, creation?: string, expiration?: string, lastUse?: string, ovhSupport?: boolean, rules?: auth.AccessRule[], status?: auth.CredentialStateEnum}) => Promise<void>;
  /**
   * Manage billing groups
   * Edit billing group
   */
  put(path: '/me/billing/group/{groupId}'): (params: {groupId: number, contactId?: number, creationDate?: string, lastUpdate?: string, name?: string, paymentMethodId?: number}) => Promise<void>;
  /**
   * Get decision value for a consent campaign
   * Update decision of a consent campaign
   */
  put(path: '/me/consent/{campaignName}/decision'): (params: {campaignName: string, value: boolean}) => Promise<void>;
  /**
   * Missing description
   * Update an existing contact
   */
  put(path: '/me/contact/{contactId}'): (params: {contactId: number, address?: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email?: string, fax?: string, firstName?: string, gender?: nichandle.GenderEnum, language?: nichandle.LanguageEnum, lastName?: string, legalForm?: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone?: string, vat?: string}) => Promise<contact.Contact>;
  /**
   * Balance of the fidelity account
   * Alter this object properties
   */
  put(path: '/me/fidelityAccount'): (params?: {alertThreshold?: number, balance?: number, canBeCredited?: boolean, lastUpdate?: string, openDate?: string}) => Promise<void>;
  /**
   * A group linked to this account
   * Alter a group
   */
  put(path: '/me/identity/group/{group}'): (params: {group: string, description?: string, role?: nichandle.RoleEnum}) => Promise<void>;
  /**
   * A user linked to this account
   * Alter a user
   */
  put(path: '/me/identity/user/{user}'): (params: {user: string, description?: string, email?: string, group?: string}) => Promise<void>;
  /**
   * Available installation templates
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}'): (params: {templateName: string, availableLanguages?: dedicated.TemplateOsLanguageEnum[], beta?: boolean, bitFormat?: dedicated.server.BitFormatEnum, category?: dedicated.TemplateOsUsageEnum, customization?: dedicated.TemplateOsProperties, defaultLanguage?: dedicated.TemplateOsLanguageEnum, deprecated?: boolean, description?: string, distribution?: string, family?: dedicated.TemplateOsTypeEnum, filesystems?: dedicated.TemplateOsFileSystemEnum[], hardRaidConfiguration?: boolean, lastModification?: string, lvmReady?: boolean, supportsDistributionKernel?: boolean, supportsGptLabel?: boolean, supportsRTM?: boolean, supportsSqlServer?: boolean, supportsUEFI?: dedicated.server.SupportsUEFIEnum}) => Promise<void>;
  /**
   * Partitioning schemes available on this template
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string, name?: string, priority?: number}) => Promise<void>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string, disks?: string[], mode?: dedicated.TemplateOsHardwareRaidEnum, step?: number}) => Promise<void>;
  /**
   *  Partitions defined in this partitioning scheme
   * Alter this object properties
   */
  put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string, filesystem?: dedicated.TemplateOsFileSystemEnum, order?: number, raid?: dedicated.server.PartitionRaidEnum, size?: complexType.UnitAndValue<number>, type?: dedicated.TemplatePartitionTypeEnum, volumeName?: string}) => Promise<void>;
  /**
   * Details about an IP block organisation
   * Alter this object properties
   */
  put(path: '/me/ipOrganisation/{organisationId}'): (params: {organisationId: string, abuse_mailbox?: string, address?: string, city?: string, country?: nichandle.CountryEnum, firstname?: string, lastname?: string, phone?: string, registry?: nichandle.IpRegistryEnum, state?: string, zip?: string}) => Promise<void>;
  /**
   * Manage payment method
   * Edit payment method
   */
  put(path: '/me/payment/method/{paymentMethodId}'): (params: {paymentMethodId: number, default_?: boolean, description?: string}) => Promise<billing.PaymentMethod>;
  /**
   * Manage the payment mean.
   * Edit payment method
   */
  put(path: '/me/paymentMethod/{id}'): (params: {id: number, default_?: boolean, description?: string}) => Promise<billing.PaymentMethod>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Alter this object properties
   */
  put(path: '/me/sshKey/{keyName}'): (params: {keyName: string, default_?: boolean, key?: string}) => Promise<void>;
  /**
   * Sub Account
   * Alter this object properties
   */
  put(path: '/me/subAccount/{id}'): (params: {id: number, creationDate?: string, description?: string}) => Promise<void>;
  /**
   * SOTP Two-Factor Authentication
   * Add a SOTP access restriction
   */
  post(path: '/me/accessRestriction/backupCode'): () => Promise<nichandle.accessRestriction.SOTPSecret>;
  /**
   * disable operations
   * Disable this SOTP account
   */
  post(path: '/me/accessRestriction/backupCode/disable'): (params: {code: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this SOTP account
   */
  post(path: '/me/accessRestriction/backupCode/enable'): (params: {code: string}) => Promise<void>;
  /**
   * validate operations
   * Validate your SOTP account
   */
  post(path: '/me/accessRestriction/backupCode/validate'): (params: {code: string}) => Promise<nichandle.accessRestriction.SOTPValidate>;
  /**
   * List the nichandle.IpRestriction objects
   * Add an IP access restriction
   */
  post(path: '/me/accessRestriction/ip'): (params: {ip: string, rule: nichandle.accessRestriction.IpRestrictionRuleEnum, warning: boolean}) => Promise<void>;
  /**
   * List the nichandle.accessRestriction.SmsAccount objects
   * Add a SMS access restriction
   */
  post(path: '/me/accessRestriction/sms'): (params: {phone: string}) => Promise<nichandle.accessRestriction.SmsSecret>;
  /**
   * disable operations
   * Disable this SMS account
   */
  post(path: '/me/accessRestriction/sms/{id}/disable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this SMS account
   */
  post(path: '/me/accessRestriction/sms/{id}/enable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * sendCode operations
   * Send a SMS to this account
   */
  post(path: '/me/accessRestriction/sms/{id}/sendCode'): (params: {id: number}) => Promise<nichandle.accessRestriction.SmsCode>;
  /**
   * validate operations
   * Validate your SMS account
   */
  post(path: '/me/accessRestriction/sms/{id}/validate'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * List the nichandle.accessRestriction.TOTPAccount objects
   * Add a TOTP access restriction
   */
  post(path: '/me/accessRestriction/totp'): () => Promise<nichandle.accessRestriction.TOTPSecret>;
  /**
   * disable operations
   * Disable this TOTP account
   */
  post(path: '/me/accessRestriction/totp/{id}/disable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this TOTP account
   */
  post(path: '/me/accessRestriction/totp/{id}/enable'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * validate operations
   * Validate your TOTP account
   */
  post(path: '/me/accessRestriction/totp/{id}/validate'): (params: {id: number, code: string}) => Promise<void>;
  /**
   * List the nichandle.accessRestriction.U2FAccount objects
   * Add a U2F access restriction
   */
  post(path: '/me/accessRestriction/u2f'): () => Promise<nichandle.accessRestriction.U2FRegisterChallenge>;
  /**
   * challenge operations
   * Get an U2F Challenge
   */
  post(path: '/me/accessRestriction/u2f/{id}/challenge'): (params: {id: number}) => Promise<nichandle.accessRestriction.U2FSignChallenge>;
  /**
   * disable operations
   * Disable this U2F account
   */
  post(path: '/me/accessRestriction/u2f/{id}/disable'): (params: {id: number, clientData: string, signatureData: string}) => Promise<void>;
  /**
   * enable operations
   * Enable this U2F account
   */
  post(path: '/me/accessRestriction/u2f/{id}/enable'): (params: {id: number, clientData: string, signatureData: string}) => Promise<void>;
  /**
   * validate operations
   * Validate your U2F account
   */
  post(path: '/me/accessRestriction/u2f/{id}/validate'): (params: {id: number, clientData: string, registrationData: string}) => Promise<void>;
  /**
   * Accept this contract
   * Accept this contract
   */
  post(path: '/me/agreements/{id}/accept'): (params: {id: number}) => Promise<string>;
  /**
   * Manage billing groups
   * Create a new billing group
   */
  post(path: '/me/billing/group'): (params?: {contactId?: number, creationDate?: string, groupId?: number, lastUpdate?: string, name?: string, paymentMethodId?: number}) => Promise<me.billing.group.BillingGroup>;
  /**
   * 
   * Associate a service to a billing group
   */
  post(path: '/me/billing/group/{groupId}/service'): (params: {groupId: number, serviceId: number}) => Promise<me.billing.group.Service>;
  /**
   * changeEmail operations
   * Initiate an email change procedure
   */
  post(path: '/me/changeEmail'): (params: {newEmail: string}) => Promise<nichandle.emailChange.Task>;
  /**
   * changePassword operations
   * Initiate a password change procedure
   */
  post(path: '/me/changePassword'): () => Promise<void>;
  /**
   * Missing description
   * Create a new contact
   */
  post(path: '/me/contact'): (params: {address: contact.Address, birthCity?: string, birthCountry?: nichandle.CountryEnum, birthDay?: string, birthZip?: string, cellPhone?: string, companyNationalIdentificationNumber?: string, email: string, fax?: string, firstName: string, gender?: nichandle.GenderEnum, language: nichandle.LanguageEnum, lastName: string, legalForm: nichandle.LegalFormEnum, nationalIdentificationNumber?: string, nationality?: nichandle.CountryEnum, organisationName?: string, organisationType?: string, phone: string, vat?: string}) => Promise<contact.Contact>;
  /**
   * Validate a code to generate associated credit movement
   * Validate a code to generate associated credit movement
   */
  post(path: '/me/credit/code'): (params: {inputCode: string, serviceId?: number}) => Promise<me.credit.balance.Movement>;
  /**
   * pay operations
   * Create an order in order to pay selected invoices
   */
  post(path: '/me/debtAccount/pay'): (params?: {orderIds?: number[], paymentMethodId?: number}) => Promise<billing.InvoiceDepositRequest>;
  /**
   * creditOrder operations
   * Generate an order that can be paid in order to credit the fidelity account
   */
  post(path: '/me/fidelityAccount/creditOrder'): (params: {amount: number}) => Promise<billing.Order>;
  /**
   * Route for getting visitor's country and continent
   * Fetch visitor country & region
   */
  post(path: '/me/geolocation'): () => Promise<geolocation.ContinentCountryLocation>;
  /**
   * Groups linked to this account
   * Create a new group
   */
  post(path: '/me/identity/group'): (params: {description?: string, name: string, role?: nichandle.RoleEnum}) => Promise<nichandle.Authentication.Group>;
  /**
   * Users linked to this account
   * Create a new user
   */
  post(path: '/me/identity/user'): (params: {description?: string, email: string, group?: string, login: string, password: string}) => Promise<void>;
  /**
   * A user linked to this account
   * Disable this user
   */
  post(path: '/me/identity/user/{user}/disable'): (params: {user: string}) => Promise<void>;
  /**
   * A user linked to this account
   * Enable this user
   */
  post(path: '/me/identity/user/{user}/enable'): (params: {user: string}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.Templates objects
   * Create a template
   */
  post(path: '/me/installationTemplate'): (params: {baseTemplateName: string, defaultLanguage: dedicated.TemplateOsLanguageEnum, name: string}) => Promise<void>;
  /**
   * checkIntegrity operations
   * Check the integrity of this template
   */
  post(path: '/me/installationTemplate/{templateName}/checkIntegrity'): (params: {templateName: string}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Add a scheme of partition
   */
  post(path: '/me/installationTemplate/{templateName}/partitionScheme'): (params: {templateName: string, name: string, priority: number}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Add an hardware RAID in this partitioning scheme
   */
  post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {schemeName: string, templateName: string, disks: string[], mode: dedicated.TemplateOsHardwareRaidEnum, name: string, step: number}) => Promise<void>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Add a partition in this partitioning scheme
   */
  post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {schemeName: string, templateName: string, filesystem: dedicated.TemplateOsFileSystemEnum, mountpoint: string, raid?: number, size: number, step: number, type: dedicated.TemplatePartitionTypeEnum, volumeName?: string}) => Promise<void>;
  /**
   * List the nichandle.Ipv4Org objects
   * Add an organisation
   */
  post(path: '/me/ipOrganisation'): (params: {abuse_mailbox: string, address: string, city: string, country: nichandle.CountryEnum, firstname: string, lastname: string, phone: string, registry: nichandle.IpRegistryEnum, state?: string, zip?: string}) => Promise<void>;
  /**
   * List the nichandle.ipxe objects
   * Add an IPXE script
   */
  post(path: '/me/ipxeScript'): (params: {description: string, name: string, script: string}) => Promise<nichandle.ipxe>;
  /**
   * Interact with credit balances linked to this Order
   * Use a credit balance on this Order
   */
  post(path: '/me/order/{orderId}/balance'): (params: {orderId: number, balanceName: string}) => Promise<billing.order.credit.Balance>;
  /**
   * Pay this Order
   * Pay this Order
   */
  post(path: '/me/order/{orderId}/pay'): (params: {orderId: number, paymentMethod: billing.order.AvailablePaymentMethod}) => Promise<void>;
  /**
   * Pay with an already registered payment mean
   * Pay with an already registered payment mean
   */
  post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean'): (params: {orderId: number, paymentMean: billing.paymentMethod.PaymentTypeEnum, paymentMeanId?: number}) => Promise<void>;
  /**
   * Request retraction of order
   * Request retraction of order
   */
  post(path: '/me/order/{orderId}/retraction'): (params: {orderId: number, comment?: string, reason: billing.order.RetractionReasonEnum}) => Promise<void>;
  /**
   * Interact with Vouchers linked to this Order
   * Use a Voucher on this Order
   */
  post(path: '/me/order/{orderId}/voucher'): (params: {orderId: number, balanceName: string}) => Promise<billing.order.OrderVoucher>;
  /**
   * Request a password recover
   * Request a password recover
   */
  post(path: '/me/passwordRecover'): (params: {ovhCompany: nichandle.OvhCompanyEnum, ovhId: string}) => Promise<void>;
  /**
   * Manage payment method
   * Pay an order and register a new payment method if necessary
   */
  post(path: '/me/payment/method'): (params: {callbackUrl: me.payment.method.CallbackUrl, default_?: boolean, description?: string, orderId?: number, paymentType: string, register?: boolean}) => Promise<me.payment.method.Register.ValidationResult>;
  /**
   * Challenge your payment method
   * Challenge one payment method
   */
  post(path: '/me/payment/method/{paymentMethodId}/challenge'): (params: {paymentMethodId: number, challenge: string}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * Finalize one payment method registration
   * Finalize one payment method registration
   */
  post(path: '/me/payment/method/{paymentMethodId}/finalize'): (params: {paymentMethodId: number, expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * Retrieve payment method list
   * Create payment method
   */
  post(path: '/me/paymentMethod'): (params: {billingContactId?: number, default_?: boolean, description?: string, paymentType: billing.paymentMethod.CreatePaymentTypeEnum, urlCallback?: string}) => Promise<billing.PaymentMeanValidation>;
  /**
   * apply operations
   * Ask for SLA application
   */
  post(path: '/me/sla/{id}/apply'): (params: {id: number}) => Promise<void>;
  /**
   * List the nichandle.sshKey objects
   * Add a new public SSH key
   */
  post(path: '/me/sshKey'): (params: {key: string, keyName: string}) => Promise<void>;
  /**
   * List the nichandle.SubAccount objects
   * Create a new sub-account
   */
  post(path: '/me/subAccount'): (params?: {description?: string}) => Promise<number>;
  /**
   * createConsumerKey operations
   * Create a consumer key for the current application
   */
  post(path: '/me/subAccount/{id}/createConsumerKey'): (params: {id: number}) => Promise<nichandle.SubAccountConsumerKey>;
  /**
   * accept operations
   * Accept this change request
   */
  post(path: '/me/task/emailChange/{id}/accept'): (params: {id: number, token: string}) => Promise<void>;
  /**
   * refuse operations
   * Refuse this change request
   */
  post(path: '/me/task/emailChange/{id}/refuse'): (params: {id: number, token: string}) => Promise<void>;
  /**
   * checkValidity operations
   * Verify existing voucher
   */
  post(path: '/me/voucher/checkValidity'): (params: {voucher: string}) => Promise<nichandle.VoucherStatus>;
  /**
   * SOTP Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/backupCode'): () => Promise<void>;
  /**
   * List of all IP Restrictions
   * Delete this restriction rule
   */
  delete(path: '/me/accessRestriction/ip/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Sms Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/sms/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * TOTP Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/totp/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * U2F Two-Factor Authentication
   * Delete this Two-Factor
   */
  delete(path: '/me/accessRestriction/u2f/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * API Application
   * Remove this application. It will revoke all credential belonging to this application.
   */
  delete(path: '/me/api/application/{applicationId}'): (params: {applicationId: number}) => Promise<void>;
  /**
   * API Credential
   * Remove this credential
   */
  delete(path: '/me/api/credential/{credentialId}'): (params: {credentialId: number}) => Promise<void>;
  /**
   * Manage billing groups
   * Delete a billing group
   */
  delete(path: '/me/billing/group/{groupId}'): (params: {groupId: number}) => Promise<void>;
  /**
   * 
   * Unlink a service from a billing group
   */
  delete(path: '/me/billing/group/{groupId}/service/{serviceId}'): (params: {groupId: number, serviceId: number}) => Promise<void>;
  /**
   * A group linked to this account
   * Delete this object
   */
  delete(path: '/me/identity/group/{group}'): (params: {group: string}) => Promise<void>;
  /**
   * A user linked to this account
   * Delete this object
   */
  delete(path: '/me/identity/user/{user}'): (params: {user: string}) => Promise<void>;
  /**
   * Available installation templates
   * remove this template
   */
  delete(path: '/me/installationTemplate/{templateName}'): (params: {templateName: string}) => Promise<void>;
  /**
   * Partitioning schemes available on this template
   * remove this scheme of partition
   */
  delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string}) => Promise<void>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Remove this RAID
   */
  delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string}) => Promise<void>;
  /**
   *  Partitions defined in this partitioning scheme
   * remove this partition
   */
  delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string}) => Promise<void>;
  /**
   * Details about an IP block organisation
   * Delete this organisation
   */
  delete(path: '/me/ipOrganisation/{organisationId}'): (params: {organisationId: string}) => Promise<void>;
  /**
   * Customer IPXE scripts
   * Remove this IPXE Script
   */
  delete(path: '/me/ipxeScript/{name}'): (params: {name: string}) => Promise<void>;
  /**
   * Interact with a credit balance linked to this Order
   * Remove a credit balance from this Order
   */
  delete(path: '/me/order/{orderId}/balance/{balanceName}'): (params: {balanceName: string, orderId: number}) => Promise<void>;
  /**
   * Interact with a specific Voucher linked to this Order
   * Remove Voucher from this Order
   */
  delete(path: '/me/order/{orderId}/voucher/{balanceName}'): (params: {balanceName: string, orderId: number}) => Promise<void>;
  /**
   * Manage payment method
   * Cancel one payment method
   */
  delete(path: '/me/payment/method/{paymentMethodId}'): (params: {paymentMethodId: number}) => Promise<me.payment.method.PaymentMethod>;
  /**
   * Manage the payment mean.
   * Delete the selected payment mean
   */
  delete(path: '/me/paymentMethod/{id}'): (params: {id: number}) => Promise<void>;
  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
   * Remove this public SSH key
   */
  delete(path: '/me/sshKey/{keyName}'): (params: {keyName: string}) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type orderPrice = order.Price;
type paymentmethodIntegrationType = payment.method.IntegrationType;
