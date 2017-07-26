angular.module("ovh-api-services").service("User", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("UserLexi");
        },
        Agreements: function () {
            return $injector.get("UserAgreements");
        },
        SshKey: function () {
            return $injector.get("UserSshKey");
        },
        Bill: function () {
            return $injector.get("UserBill");
        },
        Order: function () {
            return $injector.get("UserOrder");
        },
        OvhAccount: function () {
            return $injector.get("UserOvhAccount");
        },
        FidelityAccount: function () {
            return $injector.get("UserFidelityAccount");
        },
        PaymentMean: function () {
            return $injector.get("UserPaymentMean");
        },
        AvailableAutomaticPaymentMeans: function () {
            return $injector.get("UserAvailableAutomaticPaymentMeans");
        },
        Document: function () {
            return $injector.get("UserDocument");
        },
        Contact: function () {
            return $injector.get("UserContact");
        },
        Task: function () {
            return $injector.get("UserTask");
        },
        Telephony: function () {
            return $injector.get("UserTelephony");
        },
        Fax: function () {
            return $injector.get("UserFax");
        }
    };
});
