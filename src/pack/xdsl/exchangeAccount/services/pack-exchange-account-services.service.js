angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServices", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountServicesLexi");
        }
    };
});
