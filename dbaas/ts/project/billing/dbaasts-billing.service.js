angular.module("ovh-api-services").service("DBaasTsProjectBilling", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsProjectBillingLexi");
        }
    };
});
