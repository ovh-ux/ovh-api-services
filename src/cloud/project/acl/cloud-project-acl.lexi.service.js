angular.module("ovh-api-services").service("OvhApiCloudProjectAclLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectAclLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectAclLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var acl = $resource("/cloud/project/:serviceName/acl/:accountId", {
        serviceName: "@serviceName",
        accountId: "@accountId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        remove: { method: "DELETE", interceptor: interceptor },
        add: {
            url: "/cloud/project/:serviceName/acl",
            method: "POST",
            interceptor: interceptor
        }
    });

    acl.resetCache = function () {
        cache.removeAll();
    };

    acl.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return acl;

});
