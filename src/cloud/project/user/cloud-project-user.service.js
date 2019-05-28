angular.module("ovh-api-services").service("OvhApiCloudProjectUser", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUserV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiCloudProjectUserAapi");
        },
        Role: function () {
            return $injector.get("OvhApiCloudProjectUserRole");
        }
    };

});
