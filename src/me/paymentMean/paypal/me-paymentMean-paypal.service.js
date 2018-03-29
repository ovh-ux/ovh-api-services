angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypal", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanPaypalV6");
        }
    };

});
