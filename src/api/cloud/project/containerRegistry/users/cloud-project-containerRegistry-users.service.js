angular.module("ovh-api-services").service("OvhApiCloudProjectContainerRegistryUsers", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectContainerRegistryUsersV6");
        }
    };
});
