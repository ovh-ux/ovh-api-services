angular.module("ovh-api-services").service("OvhApiCloudProjectKubeNode", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectKubeNodeV6");
        }
    };
});
