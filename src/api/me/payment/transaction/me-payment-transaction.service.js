angular.module("ovh-api-services").service("OvhApiMePaymentTransaction", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentTransactionV6");
        }
    };
});
