angular
    .module("ovh-api-services")
    .service("MetricsTokenLexi", function ($resource, $cacheFactory) {

        var cache = $cacheFactory("MetricsTokenLexi");
        var queryCache = $cacheFactory("MetricsTokenLexiQuery");

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
            get: {
                method: "GET",
                cache: cache
            },
            query: {
                method: "GET",
                cache: queryCache,
                isArray: true
            },
            "delete": {
                method: "DELETE",
                interceptor: interceptor
            },
            edit: {
                method: "PUT",
                interceptor: interceptor
            }
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
