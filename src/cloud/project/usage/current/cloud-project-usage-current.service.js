angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUsageCurrentLexi");
        }
    };

});
