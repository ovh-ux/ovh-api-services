angular.module("ovh-api-services").service("OvhApiDomainRulesOptinV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDomainRulesOptinQueryV6");

    var domain = $resource("/domain/:serviceName/rules/optin", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    domain.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domain;
});
