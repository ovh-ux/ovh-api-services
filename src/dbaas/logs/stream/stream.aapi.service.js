
angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory('OvhApiDbaasLogsStreamAapi');

    var stream = $resource("/dbaas/logs/:serviceName/stream/:streamId", {}, {
        get : {
            method: "GET",
            url: "/dbaas/logs/:serviceName/stream/:streamId",
            serviceType : "aapi",
            cache: cache,
            isArray: false
        }
    });

    stream.resetCache = function(){
        cache.removeAll();
    };

    return stream;
});
