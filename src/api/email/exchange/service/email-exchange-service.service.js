angular.module("ovh-api-services").service("OvhApiEmailExchangeService", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiEmailExchangeServiceAapi");
        },
        v6: function () {
            return $injector.get("OvhApiEmailExchangeServiceV6");
        },
        v7: function () {
            return $injector.get("OvhApiEmailExchangeServiceV7");
        }
    };
});
