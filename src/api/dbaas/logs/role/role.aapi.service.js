angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsRoleAapi");

    var role = $resource("/dbaas/logs/:serviceName/role/:roleId", {
        serviceName: "@serviceName",
        roleId: "@roleId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache
        }
    });

    role.resetAllCache = function () {
        role.resetCache();
    };

    role.resetCache = function () {
        cache.removeAll();
    };

    return role;
});
