angular.module("ovh-api-services").service("OvhApiMeOrder", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeOrderV6");
        },
        v7: function () {
            return $injector.get("OvhApiMeOrderV7");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("OvhApiMeOrderPayRegisteredPaymentMean");
        }
    };

});
