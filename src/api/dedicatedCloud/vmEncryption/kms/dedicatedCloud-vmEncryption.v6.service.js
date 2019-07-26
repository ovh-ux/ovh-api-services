angular.module("ovh-api-services").service("OvhApiDedicatedCloudVMEncryptionKmsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudVMEncryptionKmsV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudVMEncryptionKmsV6");
    var interceptor = function (response) {
        cache.remove(response.config.url);
        queryCache.removeAll();
        return response;
    };

    var kmsResource = $resource("/dedicatedCloud/:serviceName/vmEncryption/kms/:kmsId", {
        serviceName: "@serviceName",
        kmsId: "@kmsId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        create: {
            method: "POST",
            url: "/dedicatedCloud/:serviceName/vmEncryption/kms",
            params: {
                ip: "@ip",
                description: "@description",
                sslThumbprint: "@sslThumbprint"
            },
            interceptor: interceptor
        },
        changeProperties: {
            method: "POST",
            url: "/dedicatedCloud/:serviceName/vmEncryption/kms/:kmsId/changeProperties",
            params: {
                description: "@description",
                sslThumbprint: "@sslThumbprint"
            },
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    kmsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    kmsResource.resetCache = function () {
        cache.removeAll();
    };

    return kmsResource;
});
