angular.module("ovh-api-services").service("DedicatedNasha", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("DedicatedNashaAapi");
        },
        Lexi: function () {
            return $injector.get("DedicatedNashaLexi");
        },
        Partition: function () {
            return $injector.get("DedicatedNashaPartition");
        },
        Task: function () {
            return $injector.get("DedicatedNashaTask");
        }
    };
});
