angular.module("ovh-api-services").service("DedicatedNashaPartitionCustomSnapshot", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionCustomSnapshotLexi");
        }
    };
});
