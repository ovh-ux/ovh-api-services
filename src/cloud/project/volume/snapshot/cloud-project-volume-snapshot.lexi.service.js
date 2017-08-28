angular.module("ovh-api-services").service("OvhApiCloudProjectVolumeSnapshotLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectVolumeSnapshotLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectVolumeSnapshotLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var volumesSnapshotResource = $resource("/cloud/project/:serviceName/volume/snapshot/:snapshotId", {
        serviceName: "@serviceName",
        volumeId: "@snapshotId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            url: "/cloud/project/:serviceName/volume/:volumeId/snapshot",
            method: "POST",
            param: {
                serviceName: "@serviceName",
                volumeId: "@volumeId"
            },
            interceptor: interceptor
        }
    });

    volumesSnapshotResource.resetAllCache = function () {
        volumesSnapshotResource.resetCache();
        volumesSnapshotResource.resetQueryCache();
    };

    volumesSnapshotResource.resetCache = function () {
        cache.removeAll();
    };

    volumesSnapshotResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return volumesSnapshotResource;
});
