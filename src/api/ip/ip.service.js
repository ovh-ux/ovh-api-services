angular.module("ovh-api-services").service("OvhApiIp", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpV6");
        },
        Delegation: function () {
            return $injector.get("OvhApiIpDelegation");
        },
        Reverse: function () {
            return $injector.get("OvhApiIpReverse");
        }
    };
});
