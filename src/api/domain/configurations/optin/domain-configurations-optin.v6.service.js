angular.module("ovh-api-services").service("OvhApiDomainConfigurationsOptinV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDomainConfigurationsOptinQueryV6");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response.data;
        }
    };

    var domain = $resource("/domain/:serviceName/configurations/optin", {
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
        }
    });

    domain.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return domain;
});
