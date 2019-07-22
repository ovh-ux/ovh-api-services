angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudDatacenter", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiVrackDedicatedCloudDatacenterV6");
        }
    };
});
