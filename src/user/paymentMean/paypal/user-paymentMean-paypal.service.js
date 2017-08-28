angular.module("ovh-api-services").service("OvhApiUserPaymentMeanPaypal", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserPaymentMeanPaypalLexi");
        }
    };

});
