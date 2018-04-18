angular.module("ovh-api-services").service("OvhApiMe", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeV6");
        },
        Agreements: function () {
            return $injector.get("OvhApiMeAgreements");
        },
        SshKey: function () {
            return $injector.get("OvhApiMeSshKey");
        },
        Bill: function () {
            return $injector.get("OvhApiMeBill");
        },
        Order: function () {
            return $injector.get("OvhApiMeOrder");
        },
        OvhAccount: function () {
            return $injector.get("OvhApiMeOvhAccount");
        },
        FidelityAccount: function () {
            return $injector.get("OvhApiMeFidelityAccount");
        },
        PaymentMean: function () {
            return $injector.get("OvhApiMePaymentMean");
        },
        AvailableAutomaticPaymentMeans: function () {
            return $injector.get("OvhApiMeAvailableAutomaticPaymentMeans");
        },
        Document: function () {
            return $injector.get("OvhApiMeDocument");
        },
        Contact: function () {
            return $injector.get("OvhApiMeContact");
        },
        Task: function () {
            return $injector.get("OvhApiMeTask");
        },
        Telephony: function () {
            return $injector.get("OvhApiMeTelephony");
        },
        Fax: function () {
            return $injector.get("OvhApiMeFax");
        },
        DepositRequest: function () {
            return $injector.get("OvhApiMeDepositRequest");
        }
    };
});
