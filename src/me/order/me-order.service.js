angular.module("ovh-api-services").service("OvhApiMeOrder", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiMeOrderLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiMeOrderErika");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("OvhApiMeOrderPayRegisteredPaymentMean");
        }
    };

});
