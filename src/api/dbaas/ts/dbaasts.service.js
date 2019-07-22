angular.module("ovh-api-services").service("OvhApiDBaasTs", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsV6");
        },
        Region: function () {
            return $injector.get("OvhApiDBaasTsRegion");
        },
        Project: function () {
            return $injector.get("OvhApiDBaasTsProject");
        }
    };
});
