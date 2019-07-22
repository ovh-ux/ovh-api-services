angular.module("ovh-api-services").service("OvhApiVrackIp", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackIpV6");
        }
    };
});
