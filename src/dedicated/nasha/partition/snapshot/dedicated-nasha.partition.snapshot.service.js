angular.module("ovh-api-services").service("DedicatedNashaPartitionSnapshot", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionSnapshotLexi");
        }
    };
});
