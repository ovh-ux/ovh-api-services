angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartition", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionLexi");
        },
        CustomSnapshot: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionCustomSnapshot");
        },
        Snapshot: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionSnapshot");
        },
        Access: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccess");
        },
        Options: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionOptions");
        }
    };
});
