angular.module("ovh-api-services").service("OvhApiMePaymentMethod", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMethodV6");
        }
    };

});
