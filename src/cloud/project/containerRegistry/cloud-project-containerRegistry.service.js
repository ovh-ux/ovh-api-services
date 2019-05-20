angular.module("ovh-api-services").service("OvhApiCloudProjectContainerRegistry", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjContainerRegistryV6");
        },
        users: function () {
            return $injector.get("OvhApiCloudProjContainerRegistryUsers");
        },
    };
});
