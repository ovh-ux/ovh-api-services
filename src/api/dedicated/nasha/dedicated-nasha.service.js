angular.module("ovh-api-services").service("OvhApiDedicatedNasha", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDedicatedNashaAapi");
        },
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaV6");
        },
        Partition: function () {
            return $injector.get("OvhApiDedicatedNashaPartition");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedNashaTask");
        }
    };
});
