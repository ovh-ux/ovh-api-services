angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterZerto", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterZertoV6");
        },
        Single: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterZertoSingle");
        }
    };
});
