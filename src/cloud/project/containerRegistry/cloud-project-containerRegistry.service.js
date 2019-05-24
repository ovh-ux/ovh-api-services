angular.module("ovh-api-services").service("OvhApiCloudProjectContainerRegistry", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectContainerRegistryV6");
        },
        Users: function () {
            return $injector.get("OvhApiCloudProjectContainerRegistryUsers");
        },
    };
});
