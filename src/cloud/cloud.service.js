angular.module("ovh-api-services").service("Cloud", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("CloudLexi");
        },
        Aapi: function () {
            return $injector.get("CloudAapi");
        },
        Price: function () {
            return $injector.get("CloudPrice");
        },
        Project: function () {
            return $injector.get("CloudProject");
        },
        PCA: function () {
            return $injector.get("CloudPCA");
        }
    };
});
