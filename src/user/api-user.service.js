angular.module("ovh-api-services").service("OvhApiUser", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiUserLexi");
        },
        Agreements: function () {
            return $injector.get("OvhApiUserAgreements");
        },
        SshKey: function () {
            return $injector.get("OvhApiUserSshKey");
        },
        Bill: function () {
            return $injector.get("OvhApiUserBill");
        },
        Order: function () {
            return $injector.get("OvhApiUserOrder");
        },
        OvhAccount: function () {
            return $injector.get("OvhApiUserOvhAccount");
        },
        FidelityAccount: function () {
            return $injector.get("OvhApiUserFidelityAccount");
        },
        PaymentMean: function () {
            return $injector.get("OvhApiUserPaymentMean");
        },
        AvailableAutomaticPaymentMeans: function () {
            return $injector.get("OvhApiUserAvailableAutomaticPaymentMeans");
        },
        Document: function () {
            return $injector.get("OvhApiUserDocument");
        },
        Contact: function () {
            return $injector.get("OvhApiUserContact");
        },
        Task: function () {
            return $injector.get("OvhApiUserTask");
        },
        Telephony: function () {
            return $injector.get("OvhApiUserTelephony");
        },
        Fax: function () {
            return $injector.get("OvhApiUserFax");
        }
    };
});
