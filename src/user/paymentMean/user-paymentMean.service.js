angular.module("ovh-api-services").service("UserPaymentMean", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanLexi");
        }
    };

});
