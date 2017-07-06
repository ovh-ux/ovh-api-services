angular.module("ovh-api-services").service("CloudProjectSnapshotLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectSnapshotLexiQuery");
    var cache = $cacheFactory("CloudProjectSnapshotLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var snapshot = $resource("/cloud/project/:serviceName/snapshot/:snapshotId", {
        serviceName: "@serviceName",
        snapshotId: "@snapshotId"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            transformResponse: function (snapshotsResp, headers, status) {
                var snapshots = snapshotsResp;

                if (status === 200) {
                    snapshots = angular.fromJson(snapshots); // IE11
                    return _.sortBy(snapshots, "name");
                }
                return snapshots;

            }
        },
        save: { method: "POST", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    snapshot.resetCache = function () {
        cache.removeAll();
    };

    snapshot.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return snapshot;
});
