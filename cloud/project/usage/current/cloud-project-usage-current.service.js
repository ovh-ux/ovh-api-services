angular.module("ovh-api-services").service("CloudProjectUsageCurrent", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUsageCurrentLexi");
        }
    };

});
