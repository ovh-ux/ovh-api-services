angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleAapi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsRoleAapiQuery");

    var role = $resource("/dbaas/logs/:serviceName/role/:roleId", {
        serviceName: "@serviceName",
        roleId: "@roleId"
    }, {
        query: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    role.resetAllCache = function () {
        role.resetCache();
        role.resetQueryCache();
    };

    role.resetCache = function () {
        cache.removeAll();
    };

    role.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return role;
});
