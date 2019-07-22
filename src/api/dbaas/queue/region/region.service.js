angular.module("ovh-api-services").service("OvhApiDbaasQueueRegion", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasQueueRegionV6");
        }
    };
});
