"use strict";

angular.module("ovh-api-services").service("IpLoadBalancingSslLexi",
    function ($resource, $cacheFactory) {
        var cache = $cacheFactory("IpLoadBalancingSslLexi");
        var queryCache = $cacheFactory("IpLoadBalancingSslLexiQuery");

        var interceptor = {
            response: function (response) {
                cache.remove(response.config.url);
                queryCache.removeAll();
                return response.resource;
            }
        };

        var ipLoadBalancingSsl = $resource("/ipLoadbalancing/:serviceName/ssl/:sslId", {
            serviceName: "@serviceName",
            sslId: "@sslId"
        }, {
            query: { method: "GET", isArray: true, cache: queryCache },
            get: { method: "GET", cache: cache },
            post: { method: "POST", interceptor: interceptor },
            put: { method: "PUT", interceptor: interceptor },
            "delete": { method: "DELETE", interceptor: interceptor }
        });

        ipLoadBalancingSsl.resetCache = function () {
            cache.removeAll();
        };

        ipLoadBalancingSsl.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return ipLoadBalancingSsl;
    });
