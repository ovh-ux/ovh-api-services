"use strict";

angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloudLexi", function ($resource, $cacheFactory) {

    var cache = $cacheFactory("OvhApiVrackDedicatedCloudLexi");
    var queryCache = $cacheFactory("OvhApiVrackDedicatedCloudLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var vrackDedicatedCloud = $resource("/vrack/:serviceName/dedicatedCloud/:dedicatedCloud", {
        serviceName: "@serviceName",
        dedicatedCloud: "@dedicatedCloud"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        edit: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        create: {
            method: "POST",
            url: "/vrack/:serviceName/dedicatedCloud",
            interceptor: interceptor
        }
    });

    vrackDedicatedCloud.resetCache = function () {
        cache.removeAll();
    };

    vrackDedicatedCloud.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vrackDedicatedCloud;
});
