angular.module("ovh-api-services").service("VrackDedicatedCloudDatacenter", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedCloudDatacenterLexi");
        }
    };
});
