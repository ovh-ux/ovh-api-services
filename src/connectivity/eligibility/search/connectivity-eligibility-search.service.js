angular.module("ovh-api-services").service("OvhApiConnectivityEligibilitySearch", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiConnectivityEligibilitySearchV6");
        }
    };
});
