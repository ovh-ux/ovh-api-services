angular.module("ovh-api-services").service("OvhApiCloudProjectV6", function ($cacheFactory, $resource, $q, OvhApiCloudProject) {

    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectV6Query");

    var interceptor = {
        response: function (response) {
            OvhApiCloudProject.resetCache();
            return response.data;
        }
    };

    var cloudProject = $resource("/cloud/project/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: OvhApiCloudProject.cache
        },
        unleash: {
            url: "/cloud/project/:serviceName/unleash",
            method: "POST",
            interceptor: interceptor
        },
        put: {
            url: "/cloud/project/:serviceName",
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            url: "/cloud/project/:serviceName/terminate",
            method: "POST",
            interceptor: interceptor
        },
        cancelCreation: {
            url: "/cloud/project/:serviceName/cancel",
            method: "POST",
            interceptor: interceptor
        },
        vrack: {
            url: "/cloud/project/:serviceName/vrack",
            method: "GET"
        },
        createVrack: {
            url: "/cloud/project/:serviceName/vrack",
            method: "POST",
            hasBody: false
        },
        operations: {
            method: "GET",
            isArray: true,
            url: "/cloud/project/:serviceName/operation"
        },
        getOperation: {
            method: "GET",
            url: "/cloud/project/:serviceName/operation/:operationId"
        }
    });

    // Like .query() but with all informations
    cloudProject.queryDetails = function () {
        return cloudProject.query().$promise.then(function (projectIds) {
            var queue = [];
            angular.forEach(projectIds, function (projectId) {
                queue.push(cloudProject.get({
                    serviceName: projectId
                }).$promise);
            });
            return $q.all(queue);
        });
    };

    // These methods were been kept to maintain compatibility with the previous method to reset cache.

    cloudProject.resetAllCache = function () {
        OvhApiCloudProject.resetCache();
    };

    cloudProject.resetCache = function () {
        OvhApiCloudProject.resetCache();
    };

    cloudProject.resetQueryCache = function () {
        OvhApiCloudProject.resetCache();
    };

    cloudProject.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return cloudProject;
});
