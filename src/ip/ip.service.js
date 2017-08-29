angular.module("ovh-api-services").service("OvhApiIp", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiIpLexi");
        },
        Reverse: function () {
            return $injector.get("OvhApiIpReverse");
        }
    };
});
