angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServices", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslExchangeAccountServicesV6");
        }
    };
});
