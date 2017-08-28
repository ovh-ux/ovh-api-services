angular.module("ovh-api-services").service("OvhApiCloudPCALexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudPCALexiQuery");
    var cache = $cacheFactory("OvhApiCloudPCALexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var cloudPCA = $resource("/cloud/:serviceName/pca/:pcaServiceName", {
        serviceName: "@serviceName",
        pcaServiceName: "@pcaServiceName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        transferState: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/transferState",
            method: "GET",
            cache: cache
        },
        transfer: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/transfer",
            method: "POST",
            interceptor: interceptor
        },
        download: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/download",
            method: "POST",
            interceptor: interceptor
        },
        deleteData: {
            url: "/cloud/:serviceName/pca/:pcaServiceName/deleteData",
            method: "POST",
            interceptor: interceptor
        }
    });

    cloudPCA.resetAllCache = function () {
        cloudPCA.resetCache();
        cloudPCA.resetQueryCache();
    };

    cloudPCA.resetCache = function () {
        cache.removeAll();
    };

    cloudPCA.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return cloudPCA;
});
