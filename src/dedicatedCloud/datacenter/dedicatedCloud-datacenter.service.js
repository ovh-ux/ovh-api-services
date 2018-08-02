angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenter", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterV6");
        },
        Filer: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFiler");
        },
        Host: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHost");
        },
        DisasterRecovery: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterDisasterRecovery");
        },
        Backup: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterBackup");
        }
    };

});
