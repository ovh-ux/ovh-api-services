angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBilling", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsProjectBillingLexi");
        }
    };
});
