angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionSnapshot", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionSnapshotV6");
        }
    };
});
