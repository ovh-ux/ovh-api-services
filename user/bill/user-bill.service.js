angular.module("ovh-api-services").service("UserBill", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("UserBillAapi");
        },
        Lexi: function () {
            return $injector.get("UserBillLexi");
        },
        Details: function () {
            return $injector.get("UserBillDetails");
        }
    };
});
