angular.module("ovh-api-services").service("OvhApiVrackIp", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackIpLexi");
        }
    };
});
