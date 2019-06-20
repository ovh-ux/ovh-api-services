angular.module("ovh-api-services").service("OvhApiDedicatedCloudUser", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudUserV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDedicatedCloudUserIceberg");
        },
        ObjectRight: function () {
            return $injector.get("OvhApiDedicatedCloudUserObjectRight");
        },
        Right: function () {
            return $injector.get("OvhApiDedicatedCloudUserRight");
        },
        Task: function () {
            return $injector.get("OvhApiDedicatedCloudUserTask");
        }
    };

});
