angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterBackupV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterBackupV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.data;
        }
    };

    var baseUrl = "/dedicatedCloud/:serviceName/datacenter/:datacenterId/backup";

    var backupResource = $resource(baseUrl, {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId"
    }, {
        get: { cache: cache },
        disable: {
            url: baseUrl + "/disable",
            method: "POST",
            interceptor: interceptor
        },
        enable: {
            url: baseUrl + "/enable",
            method: "POST",
            interceptor: interceptor
        },
        changeProperties: {
            url: baseUrl + "/changeProperties",
            method: "POST",
            interceptor: interceptor
        }
    });

    backupResource.resetAllCache = function () {
        backupResource.resetCache();
    };

    backupResource.resetCache = function () {
        cache.removeAll();
    };

    return backupResource;
});
