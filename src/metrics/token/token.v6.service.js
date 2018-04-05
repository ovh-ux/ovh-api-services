angular
    .module("ovh-api-services")
    .service("OvhApiMetricsTokenV6", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMetricsTokenV6");
        var queryCache = $cacheFactory("OvhApiMetricsTokenV6Query");

        var interceptor = {
            response: function (response) {
                cache.removeAll();
                return response.data;
            }
        };

        var resource = $resource("/metrics/:serviceName/token/:tokenID", {
            serviceName: "@serviceName",
            tokenID: "@tokenID"
        }, {
            get: { method: "GET", cache: cache },
            query: { method: "GET", cache: queryCache, isArray: true },
            "delete": { method: "DELETE", interceptor: interceptor },
            edit: { method: "PUT", interceptor: interceptor }
        });

        resource.resetAllCache = function () {
            resource.resetCache();
            resource.resetQueryCache();
        };

        resource.resetCache = function () {
            cache.removeAll();
        };

        resource.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return resource;
    });
