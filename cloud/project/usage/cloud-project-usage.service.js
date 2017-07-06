angular.module("ovh-api-services").service("CloudProjectUsage", function ($injector) {
    "use strict";

    return {
        History: function () {
            return $injector.get("CloudProjectUsageHistory");
        },
        Current: function () {
            return $injector.get("CloudProjectUsageCurrent");
        },
        Forecast: function () {
            return $injector.get("CloudProjectUsageForecast");
        }
    };
});
