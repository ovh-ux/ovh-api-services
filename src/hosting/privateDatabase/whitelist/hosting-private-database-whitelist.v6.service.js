angular.module("ovh-api-services").service("OvhApiHostingPrivateDatabaseWhitelistV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiHostingPrivateDatabaseWhitelistV6Cache");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/hosting/privateDatabase/:serviceName/whitelist", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: cache,
            params: {
                ip: "@ip",
                service: "@service",
                sftp: "@sftp",
            }
        },
        post: {
            method: "POST",
            interceptor: interceptor
        },
        getIp: {
            method: "GET",
            url: "/hosting/privateDatabase/:serviceName/whitelist/:ip",
            params: {
                ip: "@ip",
            },
            cache: cache
        },
        putIp: {
            method: "PUT",
            url: "/hosting/privateDatabase/:serviceName/whitelist/:ip",
            params: {
                ip: "@ip",
                whitelist: "@whitelist"
            },
            interceptor: interceptor
        },
        deleteIp: {
            method: "DELETE",
            url: "/hosting/privateDatabase/:serviceName/whitelist/:ip",
            params: {
                ip: "@ip",
            },
            interceptor: interceptor
        },
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        cache.removeAll();
    };

    return resource;
});
