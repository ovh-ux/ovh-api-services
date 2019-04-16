angular.module("ovh-api-services").service("OvhApiCloudProjectStorage", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectStorageV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectStorageAapi");
        }
    };

});
