angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRoleLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var roleResource = $resource("/dbaas/logs/:serviceName/role/:roleId/member", {
        serviceName: "@serviceName",
        roleId: "@roleId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getDetail: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor }
    });

    roleResource.resetAllCache = function () {
        roleResource.resetCache();
        roleResource.resetQueryCache();
    };

    roleResource.resetCache = function () {
        cache.removeAll();
    };

    roleResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return roleResource;
});
