angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionOptions", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaPartitionOptionsV6");
        }
    };
});
