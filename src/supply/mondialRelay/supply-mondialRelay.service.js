angular.module("ovh-api-services").service("OvhApiSupplyMondialRelay", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSupplyMondialRelayLexi");
        },
        Aapi: function () {
            return angular.noop();
        }
    };
});
