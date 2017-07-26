angular.module("ovh-api-services").service("DedicatedServer", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedServerLexi");
        },
        Aapi: function () {
            return $injector.get("DedicatedServerAapi");
        }
    };
});
