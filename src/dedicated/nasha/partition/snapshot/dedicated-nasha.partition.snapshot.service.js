angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionSnapshot", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionSnapshotLexi");
        }
    };
});
