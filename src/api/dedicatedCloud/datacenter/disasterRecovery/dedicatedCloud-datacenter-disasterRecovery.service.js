angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterDisasterRecovery", function ($injector) {

    "use strict";

    return {
        Zerto: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterDisasterRecoveryZerto");
        }
    };

});
