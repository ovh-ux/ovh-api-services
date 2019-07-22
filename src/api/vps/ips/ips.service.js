angular.module("ovh-api-services").service("OvhApiVpsIps", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVpsIpsV6");
        }
    };
});
