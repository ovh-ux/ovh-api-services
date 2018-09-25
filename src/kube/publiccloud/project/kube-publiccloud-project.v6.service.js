angular.module("ovh-api-services").service("OvhApiKubePublicCloudProjectV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiKubePublicCloudProjectV6Query");

    var projectResource = $resource("/kube/:serviceName/publiccloud/project", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache }
    });

    projectResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return projectResource;
});
