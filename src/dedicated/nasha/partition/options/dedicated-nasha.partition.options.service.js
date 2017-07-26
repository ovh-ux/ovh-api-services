angular.module("ovh-api-services").service("DedicatedNashaPartitionOptions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedNashaPartitionOptionsLexi");
        }
    };
});
