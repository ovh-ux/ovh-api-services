angular.module("ovh-api-services").service("OvhApiIp", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiIpV6");
        },
        Reverse: function () {
            return $injector.get("OvhApiIpReverse");
        }
    };
});
