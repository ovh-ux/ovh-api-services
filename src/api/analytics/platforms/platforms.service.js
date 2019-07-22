angular.module("ovh-api-services").service("OvhApiAnalyticsPlatforms", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiAnalyticsPlatformsV6");
        },
        Node: function () {
            return $injector.get("OvhApiAnalyticsPlatformsNode");
        }
    };
});
