angular.module("ovh-api-services").service("OvhApiMeBillingCapacities", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeBillingCapacitiesV6");
        }
    };
});
