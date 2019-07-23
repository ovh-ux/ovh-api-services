angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleMemberV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleMemberV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRoleMemberV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var memberResource = $resource("/dbaas/logs/:serviceName/role/:roleId/member/:username", {
        serviceName: "@serviceName",
        roleId: "@roleId",
        username: "@username"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        create: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/role/:roleId/member" },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor }
    });

    memberResource.resetAllCache = function () {
        memberResource.resetCache();
        memberResource.resetQueryCache();
    };

    memberResource.resetCache = function () {
        cache.removeAll();
    };

    memberResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return memberResource;
});
