angular.module("ovh-api-services").service("SupplyMondialRelay", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SupplyMondialRelayLexi");
        },
        Aapi: function () {
            return angular.noop();
        }
    };
});
