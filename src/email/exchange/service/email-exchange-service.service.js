angular.module("ovh-api-services").service("OvhApiEmailExchangeService", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiEmailExchangeServiceV6");
        },
        v7: function () {
            return $injector.get("OvhApiEmailExchangeServiceV7");
        }
    };
});
