angular.module("ovh-api-services").service("OvhApiDBaasTsRegion", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDBaasTsRegionV6");
        }
    };
});
