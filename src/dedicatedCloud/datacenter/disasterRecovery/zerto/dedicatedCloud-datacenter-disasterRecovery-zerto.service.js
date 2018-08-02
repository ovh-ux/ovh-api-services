angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterDisasterRecoveryZerto", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterDisasterRecoveryZertoV6");
        }
    };

});
