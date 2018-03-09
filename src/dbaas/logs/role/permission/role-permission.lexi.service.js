angular.module("ovh-api-services").service("OvhApiDbaasLogsRolePermissionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRolePermissionLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRolePermissionLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var permissionResource = $resource("/dbaas/logs/:serviceName/role/:roleId/permission/:permissionId", {
        serviceName: "@serviceName",
        roleId: "@roleId",
        permissionId: "@permissionId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        getPermissionDetail: { method: "GET", cache: cache },
        addAlias: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/alias" },
        addIndex: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/index" },
        addDashboard: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/dashboard" },
        addStream: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/permission/stream" },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor }
    });

    permissionResource.resetAllCache = function () {
        permissionResource.resetCache();
        permissionResource.resetQueryCache();
    };

    permissionResource.resetCache = function () {
        cache.removeAll();
    };

    permissionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return permissionResource;
});
