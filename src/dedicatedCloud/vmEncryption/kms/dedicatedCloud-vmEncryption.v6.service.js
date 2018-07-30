angular.module("ovh-api-services").service("OvhApiDedicatedCloudVMEncryptionKmsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudVMEncryptionKmsV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudVMEncryptionKmsV6");

    var kmsResource = $resource("/dedicatedCloud/:serviceName/vmEncryption/kms/:kmsId", {
        serviceName: "@serviceName",
        kmsId: "@kmsId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache }
    });

    kmsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    kmsResource.resetCache = function () {
        cache.removeAll();
    };

    return kmsResource;
});
