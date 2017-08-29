angular.module("ovh-api-services").service("OvhApiDedicatedCephUser", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephUserLexi");
        },
        Pool: function () {
            return $injector.get("OvhApiDedicatedCephUserPool");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedCephUserAapi");
        }
    };
});
