angular.module("ovh-api-services").service("DedicatedCephAclLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephAclLexi");
    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/acl/:aclId", {
        serviceName: "@serviceName",
        aclId: "@aclId"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/ceph/:serviceName/acl",
            params: {
                aclList: "@aclList"
            }
        },
        "delete": {
            method: "DELETE"
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
