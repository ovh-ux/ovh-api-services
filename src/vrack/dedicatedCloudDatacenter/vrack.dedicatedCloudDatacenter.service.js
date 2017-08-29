angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenter", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedCloudDatacenterLexi");
        }
    };
});
