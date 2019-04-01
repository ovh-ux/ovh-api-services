angular.module("ovh-api-services").service("OvhApiAnalytics", function ($injector) {
    "use strict";
    return {
        Platforms: function () {
            return $injector.get("OvhApiAnalyticsPlatforms");
        },
        Capabilities: function () {
            return $injector.get("OvhApiAnalyticsCapabilities");
        }
    };
});
