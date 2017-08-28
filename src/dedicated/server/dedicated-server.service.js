angular.module("ovh-api-services").service("OvhApiDedicatedServer", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedServerLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedServerAapi");
        }
    };
});
