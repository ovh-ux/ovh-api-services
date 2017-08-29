angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccess", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessAapi");
        }
    };
});
