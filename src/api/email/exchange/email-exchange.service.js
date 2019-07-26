angular.module("ovh-api-services").service("OvhApiEmailExchange", function ($injector) {
    "use strict";
    return {
        service: function () {
            return $injector.get("OvhApiEmailExchangeService");
        }
    };
});
