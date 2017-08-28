angular.module("ovh-api-services").service("OvhApiMePaymentMean", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanLexi");
        }
    };

});
