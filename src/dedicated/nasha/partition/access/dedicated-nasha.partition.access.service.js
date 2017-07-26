angular.module("ovh-api-services").service("DedicatedNashaPartitionAccess", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionAccessLexi");
        },
        Aapi: function () {
            return $injector.get("DedicatedNashaPartitionAccessAapi");
        }
    };
});
