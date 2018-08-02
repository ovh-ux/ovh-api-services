angular.module("ovh-api-services").service("OvhApiDedicatedCloudVMEncryptionV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudVMEncryptionV6Query");

    var vmEncryptionResource = $resource("/dedicatedCloud/:serviceName/vmEncryption", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache }
    });

    vmEncryptionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vmEncryptionResource;
});
