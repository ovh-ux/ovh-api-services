angular
    .module("ovh-api-services")
    .service("OvhApiEmailDomainV6", function ($resource, $cacheFactory) {
        "use strict";
        var cache = $cacheFactory("OvhApiEmailDomainV6");
        var domainResource = $resource("/email/domain/:serviceName", {
            serviceName: "@serviceName"
        }, {
            get: { method: "GET", cache: cache },
            serviceInfos: { method: "GET", url: "/email/domain/:serviceName/serviceInfos" }
        });

        domainResource.resetAllCache = function () {
            domainResource.resetCache();
        };

        domainResource.resetCache = function () {
            cache.removeAll();
        };

        return domainResource;
    });
