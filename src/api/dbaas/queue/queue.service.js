angular.module("ovh-api-services").service("OvhApiDbaasQueue", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasQueueV6");
        },
        Key: function () {
            return $injector.get("OvhApiDbaasQueueKey");
        },
        Region: function () {
            return $injector.get("OvhApiDbaasQueueRegion");
        }
    };
});
