"use strict";

angular.module("ovh-api-services").service("VrackLexi", function ($resource, VrackPublicCloud, CloudProject, Vrack) {

    var interceptor = {
        response: function (response) {
            VrackPublicCloud.resetCache();
            CloudProject.resetCache();
            Vrack.Aapi().resetAllCache();
            return response;
        }
    };

    var vracks = $resource("/vrack/:serviceName", {
        serviceName: "@serviceName"
    }, {
        project: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject/:projectId ",
            cache: VrackPublicCloud.cache
        },
        projects: {
            method: "GET",
            url: "/vrack/:serviceName/cloudProject",
            isArray: true,
            cache: VrackPublicCloud.cache
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
