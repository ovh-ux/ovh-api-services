angular.module("ovh-api-services").service("CloudProjectInstanceAapi", function ($resource, CloudProjectInstance) {

    "use strict";

    var instancesResource = $resource("/cloud/project/:projectId/instance/monitoring", {
        projectId: "@projectId"
    }, {
        monitoring: {
            url: "/cloud/project/:projectId/instance/monitoring",
            cache: CloudProjectInstance.cache,
            method: "GET",
            serviceType: "aapi"
        },
        summary: {
            url: "/cloud/project/:projectId/instance/:instanceId/summary",
            cache: CloudProjectInstance.cache,
            method: "GET",
            serviceType: "aapi",
            params: {
                instanceId: "@instanceId"
            }
        }
    });

    return instancesResource;

});
