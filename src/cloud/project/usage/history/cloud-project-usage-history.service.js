angular.module("ovh-api-services").service("CloudProjectUsageHistory", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUsageHistoryLexi");
        }
    };

});
