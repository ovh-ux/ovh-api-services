angular.module("ovh-api-services").service("OvhApiDedicatedServer", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedServerV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedServerAapi");
        }
    };
});
