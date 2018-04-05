angular.module("ovh-api-services").service("OvhApiCloudProjectUsageCurrent", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUsageCurrentV6");
        }
    };

});
