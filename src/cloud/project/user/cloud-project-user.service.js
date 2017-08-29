angular.module("ovh-api-services").service("OvhApiCloudProjectUser", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUserLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectUserAapi");
        }
    };

});
