angular.module("ovh-api-services").service("OvhApiDomainRulesEmailsObfuscationV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDomainRulesEmailsObfuscationQueryV6");

    var domain = $resource("/domain/:serviceName/rules/emailsObfuscation", {
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
