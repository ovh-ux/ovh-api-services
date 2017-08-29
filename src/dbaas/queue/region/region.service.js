angular.module("ovh-api-services").service("OvhApiDbaasQueueRegion", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasQueueRegionLexi");
        }
    };
});
