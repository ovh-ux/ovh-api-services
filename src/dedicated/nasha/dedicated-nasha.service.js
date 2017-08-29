angular.module("ovh-api-services").service("OvhApiDedicatedNasha", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaLexi");
        },
        Partition: function () {
            return $injector.get("OvhApiDedicatedNashaPartition");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedNashaTask");
        }
    };
});
