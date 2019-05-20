angular.module("ovh-api-services").service("OvhApiCloudProjContainerRegistryUsers", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjContainerRegistryUsersV6");
        },
    };
});
