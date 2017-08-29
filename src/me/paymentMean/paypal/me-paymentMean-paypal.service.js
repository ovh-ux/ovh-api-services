angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypal", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanPaypalLexi");
        }
    };

});
