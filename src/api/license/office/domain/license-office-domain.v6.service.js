angular.module("ovh-api-services").service("OvhApiLicenseOfficeDomainV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiLicenseOfficeDomainV6");
    var queryCache = $cacheFactory("OvhApiLicenseOfficeDomainV6Query");

    var domains = $resource("/license/office/:serviceName/domain/:domainName", {
        serviceName: "@serviceName",
        domainName: "@domainName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache }
    });

    domains.resetCache = function () {
        cache.removeAll();
    };

    domains.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domains;
});
