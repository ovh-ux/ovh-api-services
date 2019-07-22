angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionCustomSnapshot", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionCustomSnapshotV6");
        }
    };
});
