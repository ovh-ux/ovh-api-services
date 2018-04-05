angular.module("ovh-api-services").service("OvhApiMeBill", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeBillAapi");
        },
        v6: function () {
            return $injector.get("OvhApiMeBillV6");
        },
        Details: function () {
            return $injector.get("OvhApiMeBillDetails");
        }
    };
});
