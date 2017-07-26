angular.module("ovh-api-services").service("VrackIp", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackIpLexi");
        }
    };
});
