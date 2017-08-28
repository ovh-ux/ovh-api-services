angular.module("ovh-api-services").service("OvhApiCloudProjectUsage", function ($injector) {
    "use strict";

    return {
        History: function () {
            return $injector.get("OvhApiCloudProjectUsageHistory");
        },
        Current: function () {
            return $injector.get("OvhApiCloudProjectUsageCurrent");
        },
        Forecast: function () {
            return $injector.get("OvhApiCloudProjectUsageForecast");
        }
    };
});
