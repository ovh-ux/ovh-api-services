angular.module("ovh-api-services").service("OvhApiDbaasLogsAccountingAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory('OvhApiDbaasLogsAccountingAapi');

    var accounting = $resource("/dbaas/logs/:serviceName/accounting", {
        serviceName: "@serviceName"
    }, {
        me : {
            method: "GET",
            url: "/dbaas/logs/:serviceName/accounting",
            serviceType : "aapi",
            cache: cache,
            isArray: false
        }
    });

    accounting.resetCache = function(){
        cache.removeAll();
    };

    return accounting;
});
