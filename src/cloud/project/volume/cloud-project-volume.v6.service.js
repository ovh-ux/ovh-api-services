angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeV6", function ($resource, $cacheFactory) {

    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectVolumeV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectVolumeV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var volumesResource = $resource("/cloud/project/:serviceName/volume/:volumeId", {
        serviceName: "@serviceName",
        volumeId: "@volumeId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        put: {
            method: "PUT",
            interceptor: interceptor
        },
        attach: {
            url: "/cloud/project/:serviceName/volume/:volumeId/attach",
            method: "POST",
            interceptor: interceptor
        },
        detach: {
            url: "/cloud/project/:serviceName/volume/:volumeId/detach",
            method: "POST",
            interceptor: interceptor
        },
        upsize: {
            url: "/cloud/project/:serviceName/volume/:volumeId/upsize",
            method: "POST",
            interceptor: interceptor
        }
    });

    volumesResource.resetAllCache = function () {
        volumesResource.resetCache();
        volumesResource.resetQueryCache();
    };

    volumesResource.resetCache = function () {
        cache.removeAll();
    };

    volumesResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return volumesResource;

});
