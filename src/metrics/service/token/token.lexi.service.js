angular
    .module("ovh-api-services")
    .service("OvhApiMetricsServiceTokenLexi", function ($resource, $cacheFactory) {

        var otherCache = $cacheFactory("OvhApiMetricsServiceTokenLexi");
        var queryCache = $cacheFactory("OvhApiMetricsServiceTokenLexiQuery");

        var interceptor = {
            response: function (response) {
                otherCache.removeAll();
                return response.data;
            }
        };

        var r = $resource("/metrics/:serviceName/token/:tokenID", {
            serviceName: "@serviceName",
            tokenID: "@tokenID"
        }, {
            get: {
                method: "GET",
                cache: otherCache
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

        r.resetAllCache = function () {
            r.resetOtherCache();
            r.resetQueryCache();
        };

        r.resetOtherCache = function () {
            otherCache.removeAll();
        };

        r.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return r;
    });
