angular.module("ovh-api-services").service("OvhApiDbaasQueueKey", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasQueueKeyLexi");
        }
    };
});
