angular.module("ovh-api-services").service("OvhApiDBaasTsRegion", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiDBaasTsRegionLexi");
        }
    };
});
