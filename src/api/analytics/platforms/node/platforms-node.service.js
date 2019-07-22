angular.module("ovh-api-services").service("OvhApiAnalyticsPlatformsNode", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiAnalyticsPlatformsNodeV6");
        }
    };
});
