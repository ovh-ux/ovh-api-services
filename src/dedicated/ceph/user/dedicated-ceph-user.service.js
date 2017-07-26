angular.module("ovh-api-services").service("DedicatedCephUser", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephUserLexi");
        },
        Pool: function () {
            return $injector.get("DedicatedCephUserPool");
        },
        Aapi: function () {
            return $injector.get("DedicatedCephUserAapi");
        }
    };
});
