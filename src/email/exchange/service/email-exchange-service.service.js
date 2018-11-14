angular.module("ovh-api-services").service("OvhApiEmailExchangeService", function ($injector) {
    "use strict";
    return {
        v7: function () {
            return $injector.get("OvhApiEmailExchangeServiceV7");
        }
    };
});
