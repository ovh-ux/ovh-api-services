angular.module("ovh-api-services").service("OvhApiCloudProjectMigrationLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectMigrationLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectMigrationLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var migration = $resource("/cloud/project/:serviceName/migration/:migrationId", {
        serviceName: "@serviceName",
        migrationId: "@migrationId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        put: { method: "PUT", interceptor: interceptor }
    });

    migration.resetCache = function () {
        cache.removeAll();
    };

    migration.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return migration;

});
