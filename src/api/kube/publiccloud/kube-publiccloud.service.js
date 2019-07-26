angular.module("ovh-api-services").service("OvhApiKubePublicCloud", function ($injector) {
    "use strict";
    return {
        Node: function () {
            return $injector.get("OvhApiKubePublicCloudNode");
        },
        Project: function () {
            return $injector.get("OvhApiKubePublicCloudProject");
        }
    };
});
