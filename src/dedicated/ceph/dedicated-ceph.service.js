angular.module("ovh-api-services").service("DedicatedCeph", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephLexi");
        },
        User: function () {
            return $injector.get("DedicatedCephUser");
        },
        Acl: function () {
            return $injector.get("DedicatedCephAcl");
        },
        Pool: function () {
            return $injector.get("DedicatedCephPool");
        },
        Task: function () {
            return $injector.get("DedicatedCephTask");
        }
    };
});
