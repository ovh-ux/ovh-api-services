angular.module("ovh-api-services").service("OvhApiDbaasLogsAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory('OvhApiDbaasLogsAapi');

    var home = $resource("/dbaas/logs/:serviceName/home", {}, {
        home : {
            method: "GET",
            url: "/dbaas/logs/:serviceName/home",
            serviceType : "aapi",
            cache: cache,
            isArray: false
        }
    });

    home.resetCache = function(){
        cache.removeAll();
    };

    return home;
});
