angular.module("ovh-api-services").service("DedicatedNashaPartition", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionLexi");
        },
        CustomSnapshot: function () {
            return $injector.get("DedicatedNashaPartitionCustomSnapshot");
        },
        Snapshot: function () {
            return $injector.get("DedicatedNashaPartitionSnapshot");
        },
        Access: function () {
            return $injector.get("DedicatedNashaPartitionAccess");
        },
        Options: function () {
            return $injector.get("DedicatedNashaPartitionOptions");
        }
    };
});
