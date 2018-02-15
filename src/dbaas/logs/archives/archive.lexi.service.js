angular.module("ovh-api-services").service("OvhApiDbaasLogsArchiveLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDbaasLogsArchiveLexiQuery");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var archiveResource = $resource("/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId", {
        serviceName: "@serviceName",
        streamId: "@streamId",
        archiveId: "@archiveId",
        expirationInSeconds: "@expirationInSeconds"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET" },
        url: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId/url" }
    });

    archiveResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return archiveResource;
});
