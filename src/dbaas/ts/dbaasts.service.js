angular.module("ovh-api-services").service("OvhApiDBaasTs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsLexi");
        },
        Region: function () {
            return $injector.get("OvhApiDBaasTsRegion");
        },
        Project: function () {
            return $injector.get("OvhApiDBaasTsProject");
        }
    };
});
