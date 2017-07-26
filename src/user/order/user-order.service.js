angular.module("ovh-api-services").service("UserOrder", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("UserOrderLexi");
        },
        Erika: function () {
            return $injector.get("UserOrderErika");
        },
        PayRegisteredPaymentMean: function () {
            return $injector.get("UserOrderPayRegisteredPaymentMean");
        }
    };

});
