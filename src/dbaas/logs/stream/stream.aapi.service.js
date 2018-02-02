
angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory('OvhApiDbaasLogsStreamAapi');

    var stream = $resource("/dbaas/logs/:serviceName/stream/:streamId", {
        serviceName: "@serviceName",
        streamId: "@streamId"
    }, {
        get: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/stream/:streamId",
            serviceType : "aapi",
            cache: cache,
            isArray: false
        }
    });

    stream.resetAllCache = function () {
        stream.resetCache();
    };

    stream.resetCache = function(){
        cache.removeAll();
    };

    return stream;
});
