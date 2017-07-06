angular.module("ovh-api-services").service("UserPaymentMeanPaypal", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanPaypalLexi");
        }
    };

});
