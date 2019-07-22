angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBilling", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsProjectBillingV6");
        }
    };
});
