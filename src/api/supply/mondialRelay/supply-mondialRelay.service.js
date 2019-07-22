angular.module("ovh-api-services").service("OvhApiSupplyMondialRelay", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSupplyMondialRelayV6");
        },
        Aapi: function () {
            return angular.noop();
        }
    };
});
