angular.module("ovh-api-services").service("OvhApiDbaasLogsDetailsAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDetailsAapi");

    var home = $resource("/dbaas/logs/:serviceName/home", {
        serviceName: "@serviceName"
    }, {
        me: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    home.resetAllCache = function () {
        home.resetCache();
    };

    home.resetCache = function () {
        cache.removeAll();
    };

    return home;
});
