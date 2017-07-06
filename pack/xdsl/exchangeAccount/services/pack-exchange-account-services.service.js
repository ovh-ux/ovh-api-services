angular.module("ovh-api-services").service("PackXdslExchangeAccountServices", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("PackXdslExchangeAccountServicesLexi");
        }
    };
});
