angular.module("ovh-api-services").service("OvhApiDedicatedCeph", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephLexi");
        },
        User: function () {
            return $injector.get("OvhApiDedicatedCephUser");
        },
        Acl: function () {
            return $injector.get("OvhApiDedicatedCephAcl");
        },
        Pool: function () {
            return $injector.get("OvhApiDedicatedCephPool");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedCephTask");
        }
    };
});
