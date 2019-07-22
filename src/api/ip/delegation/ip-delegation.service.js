angular.module("ovh-api-services").service("OvhApiIpDelegation", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiIpDelegationV6");
        }
    };
});

