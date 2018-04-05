"use strict";

angular.module("ovh-api-services").service("OvhApiCloudV6", function ($resource, OvhApiCloudProjectV6, OvhApiVrack) {

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectV6.resetAllCache();
            OvhApiVrack.v6().resetCache();
            OvhApiVrack.Aapi().resetCache();
            return response.data;
        }
    };

    return $resource("/cloud", {}, {
        query: {
            method: "GET",
            isArray: true
        },
        schema: {
            method: "GET",
            url: "/cloud.json"
        },
        createProject: {
            url: "/cloud/createProject",
            method: "POST",
            interceptor: interceptor
        },
        createProjectInfo: {
            url: "/cloud/createProjectInfo",
            method: "GET"
        },
        order: {
            url: "/cloud/order",
            method: "GET",
            isArray: true
        }
    });
});
