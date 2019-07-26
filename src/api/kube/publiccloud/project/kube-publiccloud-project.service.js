angular.module("ovh-api-services").service("OvhApiKubePublicCloudProject", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiKubePublicCloudProjectV6");
        }
    };
});
