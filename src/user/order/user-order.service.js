angular.module("ovh-api-services").service("OvhApiUserOrder", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiUserOrderLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiUserOrderErika");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("OvhApiUserOrderPayRegisteredPaymentMean");
        }
    };

});
