angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionOptions", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionOptionsLexi");
        }
    };
});
