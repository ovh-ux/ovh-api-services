angular.module("ovh-api-services").service("OvhApiCloudProjectRegionWorkflowBackupV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectRegionWorkflowBackupV6Query");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response.data;
        }
    };

    var backup = $resource("/cloud/project/:serviceName/region/:regionName/workflow/backup/:backupName", {
        serviceName: "@serviceName",
        regionName: "@regionName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    backup.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return backup;

});
