angular
    .module("ovh-api-services")
    .service("OvhApiDedicatedCloudServicePacksV6", function ($resource, $cacheFactory) {
        "use strict";

        var queryCache = $cacheFactory("OvhApiDedicatedCloudServicePacksV6Query");
        var cache = $cacheFactory("OvhApiDedicatedCloudServicePacksV6");

        var servicePacksResource = $resource("/dedicatedCloud/:serviceName/servicePacks/:name", {
            name: "@name",
            serviceName: "@serviceName"
        }, {
            get: {
                cache: cache,
                method: "GET"
            },
            query: {
                cache: queryCache,
                isArray: true,
                method: "GET"
            }
        });

        servicePacksResource.resetCache = function () {
            cache.removeAll();
        };

        servicePacksResource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return servicePacksResource;
    });
