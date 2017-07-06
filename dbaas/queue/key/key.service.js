angular.module("ovh-api-services").service("DbaasQueueKey", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DbaasQueueKeyLexi");
        }
    };
});
