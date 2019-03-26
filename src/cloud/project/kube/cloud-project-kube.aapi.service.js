angular.module("ovh-api-services").service("OvhApiCloudProjectKubeAapi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectKubeAapi");

    var cloudProjectKubeResource = $resource("/cloud/project/:serviceName/kube", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: cache
        }
    });

    cloudProjectKubeResource.resetAllCache = function () {
        cloudProjectKubeResource.resetCache();
    };

    cloudProjectKubeResource.resetCache = function () {
        cache.removeAll();
    };

    return cloudProjectKubeResource;
});
