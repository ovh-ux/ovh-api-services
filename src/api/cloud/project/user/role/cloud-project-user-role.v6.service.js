angular.module("ovh-api-services").service("OvhApiCloudProjectUserRoleV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectUserRoleV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectUserRoleV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var roles = $resource("/cloud/project/:serviceName/user/:userId/role/:roleId", {
        serviceName: "@serviceName",
        userId: "@userId",
        roleId: "@roleId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        get: { method: "GET", cache: cache },
        "delete": { method: "DELETE", interceptor: interceptor },
        put: {
            method: "PUT",
            interceptor: interceptor,
            url: "/cloud/project/:serviceName/user/:userId/role"
        }
    });

    roles.resetCache = function () {
        cache.removeAll();
    };

    roles.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return roles;

});
