angular.module("ovh-api-services").service("OvhApiVrackDedicatedServer", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedServerV6");
        }
    };
});
