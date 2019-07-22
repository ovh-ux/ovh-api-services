angular.module("ovh-api-services").service("OvhApiDedicatedCephUser", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephUserV6");
        },
        Pool: function () {
            return $injector.get("OvhApiDedicatedCephUserPool");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedCephUserAapi");
        }
    };
});
