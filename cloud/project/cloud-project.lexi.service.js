angular.module("ovh-api-services").service("CloudProjectLexi", function ($resource, $q, CloudProject) {

    "use strict";

    var interceptor = {
        response: function (response) {
            CloudProject.resetCache();
            return response.data;
        }
    };

    var cloudProject = $resource("/cloud/project/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: CloudProject.cache
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
        CloudProject.resetCache();
    };

    cloudProject.resetCache = function () {
        CloudProject.resetCache();
    };

    cloudProject.resetQueryCache = function () {
        CloudProject.resetCache();
    };

    return cloudProject;
});
