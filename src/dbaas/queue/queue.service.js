angular.module("ovh-api-services").service("DbaasQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DbaasQueueLexi");
        },
        Key: function () {
            return $injector.get("DbaasQueueKey");
        },
        Region: function () {
            return $injector.get("DbaasQueueRegion");
        }
    };
});
