angular.module("ovh-api-services").service("OvhApiHostingWebSslLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiHostingWebSslLexiCache");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/hosting/web/:serviceName/ssl", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        queryDomains: {
            url: "/hosting/web/:serviceName/ssl/domains",
            method: "GET",
            cache: cache,
            isArray: true
        },
        regenerate: {
            url: "/hosting/web/:serviceName/ssl/regenerate",
            method: "POST",
            interceptor: interceptor
        },
        getReport: {
            url: "/hosting/web/:serviceName/ssl/report",
            method: "GET",
            cache: cache
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        cache.removeAll();
    };

    return resource;
});
