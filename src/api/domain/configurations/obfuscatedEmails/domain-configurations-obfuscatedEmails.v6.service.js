angular.module("ovh-api-services").service("OvhApiDomainConfigurationsObfuscatedEmailsV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDomainConfigurationsObfuscatedEmailsQueryV6");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response.data;
        }
    };

    var domain = $resource("/domain/:serviceName/configurations/obfuscatedEmails", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        put: {
            method: "PUT",
            interceptor: interceptor,
            isArray: true
        },
        refresh: {
            method: "POST",
            url: "/domain/:serviceName/configurations/obfuscatedEmails/refresh",
            interceptor: interceptor
        }
    });

    domain.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domain;
});
