angular.module("ovh-api-services").service("OvhApiDbaasQueue", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasQueueLexi");
        },
        Key: function () {
            return $injector.get("OvhApiDbaasQueueKey");
        },
        Region: function () {
            return $injector.get("OvhApiDbaasQueueRegion");
        }
    };
});
