angular.module("ovh-api-services").service("OvhApiMeBill", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeBillAapi");
        },
        v6: function () {
            return $injector.get("OvhApiMeBillV6");
        },
        v7: function () {
            return $injector.get("OvhApiMeBillV7");
        },
        Details: function () {
            return $injector.get("OvhApiMeBillDetails");
        },
        Debt: function () {
            return $injector.get("OvhApiMeBillDebt");
        }
    };
});
