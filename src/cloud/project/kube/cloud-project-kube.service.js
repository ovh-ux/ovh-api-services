angular.module("ovh-api-services").service("OvhApiCloudProjectKube", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectKubeAapi");
        },
        v6: function () {
            $injector.get("OvhApiCloudProjectKubeV6");
        },
        Node: function () {
            $injector.get("OvhApiCloudProjectKubeNode");
        }
    };

});
