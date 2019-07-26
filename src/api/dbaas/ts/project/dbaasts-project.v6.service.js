angular.module("ovh-api-services").service("OvhApiDBaasTsProjectV6", function ($resource, $q, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectV6Query");
    var cache = $cacheFactory("OvhApiDBaasTsProjectV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var projectResource = $resource("/dbaas/timeseries/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor },
        setup: { method: "POST", url: "/dbaas/timeseries/:serviceName/setup", interceptor: interceptor }
    });

    projectResource.queryDetails = function () {
        var queue = [];
        return projectResource.query().$promise.then(function (serviceNames) {
            angular.forEach(serviceNames, function (serviceName) {
                queue.push(
                    projectResource.get({
                        serviceName: serviceName
                    }).$promise
                );
            });
            return $q.allSettled(queue).then(function (projects) {
                return projects;
            }, function (maybeProjects) {
                var projects = [];
                for (var i = maybeProjects.length - 1; i >= 0; i--) {
                    var maybeProject = maybeProjects[i];
                    if (maybeProject.serviceName) {
                        projects.push(maybeProject);
                    }
                }
                return projects;
            });
        });
    };

    projectResource.resetAllCache = function () {
        projectResource.resetCache();
        projectResource.resetQueryCache();
    };

    projectResource.resetCache = function () {
        cache.removeAll();
    };

    projectResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return projectResource;
});
