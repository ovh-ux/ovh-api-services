angular.module("ovh-api-services").service("OvhApiMeBill", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeBillAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiMeBillLexi");
        },
        Details: function () {
            return $injector.get("OvhApiMeBillDetails");
        }
    };
});
