angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccess", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionAccessAapi");
        }
    };
});
