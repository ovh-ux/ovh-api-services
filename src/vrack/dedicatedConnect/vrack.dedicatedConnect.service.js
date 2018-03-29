angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnect", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedConnectV6");
        }
    };
});
