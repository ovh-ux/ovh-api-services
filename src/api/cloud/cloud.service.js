angular.module("ovh-api-services").service("OvhApiCloud", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiCloudV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudAapi");
        },
        Price: function () {
            return $injector.get("OvhApiCloudPrice");
        },
        Project: function () {
            return $injector.get("OvhApiCloudProject");
        },
        PCA: function () {
            return $injector.get("OvhApiCloudPCA");
        }
    };
});
