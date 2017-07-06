"use strict";

angular.module("ovh-api-services").service("VrackCloudProjectLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("VrackCloudProjectLexi");
    var queryCache = $cacheFactory("VrackCloudProjectLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vrackCloudProject = $resource("/vrack/:serviceName/cloudProject/:project", {}, {
        query: { method: "GET", params: { serviceName: "@serviceName", project: "@project" }, isArray: true, cache: queryCache },
        get: { method: "GET", params: { serviceName: "@serviceName", project: "@project" }, cache: cache },
        edit: { method: "PUT", params: { serviceName: "@serviceName", project: "@project" }, interceptor: interceptor },
        "delete": { method: "DELETE", params: { serviceName: "@serviceName", project: "@project" }, interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/cloudProject",
            params: { serviceName: "@serviceName" },
            interceptor: interceptor
        }
    });

    vrackCloudProject.resetCache = function () {
        cache.removeAll();
    };

    vrackCloudProject.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackCloudProject;
});
