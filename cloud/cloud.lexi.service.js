"use strict";

angular.module("ovh-api-services").service("CloudLexi", function ($resource, CloudProjectLexi, Vrack) {

    var interceptor = {
        response: function (response) {
            CloudProjectLexi.resetAllCache();
            Vrack.Lexi().resetCache();
            Vrack.Aapi().resetCache();
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
