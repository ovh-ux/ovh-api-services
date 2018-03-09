angular.module("ovh-api-services").service("OvhApiDbaasLogsUserLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsUserLexi");
    var userResource = $resource("/dbaas/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        me: { method: "GET", cache: cache },
        updateUser: { method: "PUT" },
        changePassword: { method: "POST", url: "/dbaas/logs/:serviceName/user/changePassword" }
    });

    userResource.resetCache = function () {
        cache.removeAll();
    };

    userResource.resetAllCache = function () {
        userResource.resetCache();
    };

    return userResource;
});
