angular.module("ovh-api-services").service("DbaasQueueRegion", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DbaasQueueRegionLexi");
        }
    };
});
