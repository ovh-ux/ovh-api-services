angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterZertoSingle", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterZertoSingleV6");
        }
    };
});
