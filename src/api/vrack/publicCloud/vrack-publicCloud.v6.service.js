"use strict";

angular.module("ovh-api-services").service("OvhApiVrackV6", function ($resource, OvhApiVrackPublicCloud, OvhApiCloudProject, OvhApiVrack) {

    var interceptor = {
        response: function (response) {
            OvhApiVrackPublicCloud.resetCache();
            OvhApiCloudProject.resetCache();
            OvhApiVrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vracks = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        project: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject/:projectId ",
            cache: OvhApiVrackPublicCloud.cache
        },
        projects: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject",
            isArray: true,
            cache: OvhApiVrackPublicCloud.cache
        },
        addProject: {
            method: "POST",
            url: "/vrack/:serviceName/cloudProject",
            interceptor: interceptor
        },
        removeProject: {
            method: "DELETE",
            url: "/vrack/:serviceName/cloudProject/:projectId ",
            interceptor: interceptor
        }
    });

    return vracks;
});
