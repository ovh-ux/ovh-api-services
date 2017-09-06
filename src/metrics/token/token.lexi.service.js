angular
    .module("ovh-api-services")
    .service("OvhApiMetricsTokenLexi", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("OvhApiMetricsTokenLexi");
        var queryCache = $cacheFactory("OvhApiMetricsTokenLexiQuery");

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
