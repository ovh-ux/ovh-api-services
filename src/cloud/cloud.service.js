angular.module("ovh-api-services").service("OvhApiCloud", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudLexi");
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
