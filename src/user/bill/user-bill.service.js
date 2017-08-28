angular.module("ovh-api-services").service("OvhApiUserBill", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiUserBillAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiUserBillLexi");
        },
        Details: function () {
            return $injector.get("OvhApiUserBillDetails");
        }
    };
});
