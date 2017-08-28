angular.module("ovh-api-services").service("OvhApiCloudProjectUsageHistory", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUsageHistoryLexi");
        }
    };

});
