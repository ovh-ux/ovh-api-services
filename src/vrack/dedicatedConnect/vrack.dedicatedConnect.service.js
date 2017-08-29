angular.module("ovh-api-services").service("OvhApiVrackDedicatedConnect", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedConnectLexi");
        }
    };
});
