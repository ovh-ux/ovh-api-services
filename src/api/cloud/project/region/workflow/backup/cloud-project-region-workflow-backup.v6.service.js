angular.module("ovh-api-services").service("OvhApiCloudProjectRegionWorkflowBackupV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectRegionWorkflowBackupV6");
    var queryCache = $cacheFactory("OvhApiCloudProjectRegionWorkflowBackupV6Query");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response.data;
        }
    };

    var backup = $resource("/cloud/project/:serviceName/region/:regionName/workflow/backup/:backupWorkflowId", {
        serviceName: "@serviceName",
        regionName: "@regionName",
        backupWorkflowId: "@backupWorkflowId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    backup.resetCache = function () {
        cache.removeAll();
    };

    backup.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return backup;
});
