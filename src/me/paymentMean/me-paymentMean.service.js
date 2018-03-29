angular.module("ovh-api-services").service("OvhApiMePaymentMean", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanV6");
        }
    };

});
