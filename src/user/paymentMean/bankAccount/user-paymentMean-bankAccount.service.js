angular.module("ovh-api-services").service("OvhApiUserPaymentMeanBankAccount", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserPaymentMeanBankAccountLexi");
        }
    };

});
