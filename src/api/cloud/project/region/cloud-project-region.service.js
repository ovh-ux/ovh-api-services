angular.module("ovh-api-services").service("OvhApiCloudProjectRegion", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectRegionV6");
        },
        Workflow: function () {
            return $injector.get("OvhApiCloudProjectRegionWorkflow");
        },
        AvailableRegions: function () {
            return $injector.get("OvhApiCloudProjectAvailableRegions");
        }
    };
});
