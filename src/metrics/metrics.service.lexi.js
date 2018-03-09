angular
    .module("ovh-api-services")
    .service("OvhApiMetricsLexi", function ($resource, $cacheFactory) {
        "use strict";

        var cache = $cacheFactory("OvhApiMetricsLexi");
        var queryCache = $cacheFactory("OvhApiMetricsLexiQuery");
        var interceptor = {
            response: function (response) {
                cache.removeAll();
                queryCache.removeAll();
                return response.data;
            }
        };
        var resource = $resource("/metrics/:serviceName", {
            serviceName: "@serviceName"
        }, {
            query: { method: "GET", cache: queryCache, isArray: true },
            get: { method: "GET", cache: cache },
            edit: { method: "PUT", interceptor: interceptor },
            getServiceInfos: {
                url: "/metrics/:serviceName/serviceInfos",
                method: "GET",
                cache: cache
            },
            getConsumption: {
                url: "/metrics/:serviceName/consumption",
                method: "GET"
            },
            setQuota: {
                url: "/metrics/:serviceName/quota",
                method: "PUT",
                interceptor: interceptor
            }
        });

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        resource.resetAllCache = function () {
            resource.resetCache();
            resource.resetQueryCache();
        };

        return resource;
    });
