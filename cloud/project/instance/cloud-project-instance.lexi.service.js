angular.module("ovh-api-services").service("CloudProjectInstanceLexi", function ($resource, CloudProjectInstance) {

    "use strict";

    var interceptor = {
        response: function (response) {
            CloudProjectInstance.resetCache();
            return response.data;
        }
    };

    var instancesResource = $resource("/cloud/project/:serviceName/instance/:instanceId", {
        serviceName: "@serviceName",
        instanceId: "@instanceId"
    }, {
        get: { method: "GET", cache: CloudProjectInstance.cache },
        query: { method: "GET", cache: CloudProjectInstance.cache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        backup: {
            url: "/cloud/project/:serviceName/instance/:instanceId/snapshot",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        reboot: {
            url: "/cloud/project/:serviceName/instance/:instanceId/reboot",
            method: "POST",
            interceptor: interceptor
        },
        resume: {
            url: "/cloud/project/:serviceName/instance/:instanceId/resume",
            method: "POST",
            interceptor: interceptor
        },
        activeMonthlyBilling: {
            url: "/cloud/project/:serviceName/instance/:instanceId/activeMonthlyBilling",
            method: "POST",
            interceptor: interceptor
        },
        applicationAccess: {
            url: "/cloud/project/:serviceName/instance/:instanceId/applicationAccess",
            method: "POST",
            isArray: true
        },
        resize: {
            url: "/cloud/project/:serviceName/instance/:instanceId/resize",
            method: "POST",
            interceptor: interceptor
        },
        reinstall: {
            url: "/cloud/project/:serviceName/instance/:instanceId/reinstall",
            method: "POST",
            interceptor: interceptor
        },
        rescueMode: {
            url: "/cloud/project/:serviceName/instance/:instanceId/rescueMode",
            method: "POST",
            interceptor: interceptor
        },
        vnc: {
            url: "/cloud/project/:serviceName/instance/:instanceId/vnc",
            method: "POST"
        },
        bulk: {
            url: "/cloud/project/:serviceName/instance/bulk",
            method: "POST",
            interceptor: interceptor,
            isArray: true
        },
        monitoring: {
            url: "/cloud/project/:serviceName/instance/:instanceId/monitoring",
            cache: CloudProjectInstance.cache,
            method: "GET"
        }
    });


    // These methods were been kept to maintain compatibility with the previous method to reset cache.

    instancesResource.resetAllCache = function () {
        CloudProjectInstance.resetCache();
    };

    instancesResource.resetCache = function () {
        CloudProjectInstance.resetCache();
    };

    instancesResource.resetQueryCache = function () {
        CloudProjectInstance.resetCache();
    };

    return instancesResource;

});
