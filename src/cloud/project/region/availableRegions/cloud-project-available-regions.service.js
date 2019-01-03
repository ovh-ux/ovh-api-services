angular.module("ovh-api-services").service("OvhApiCloudProjectAvailableRegions", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectAvailableRegionsV6");
        }
    };
});
