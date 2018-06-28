angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterBackup", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterBackup");
        }
    };

});
