angular.module("ovh-api-services").service("OvhApiDbaasQueueKey", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasQueueKeyV6");
        }
    };
});
