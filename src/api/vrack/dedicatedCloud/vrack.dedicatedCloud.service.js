angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloud", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedCloudV6");
        }
    };
});
