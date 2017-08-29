"use strict";

angular.module("ovh-api-services").service("OvhApiCloudLexi", function ($resource, OvhApiCloudProjectLexi, OvhApiVrack) {

    var interceptor = {
        response: function (response) {
            OvhApiCloudProjectLexi.resetAllCache();
            OvhApiVrack.Lexi().resetCache();
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
        }
    });
});
