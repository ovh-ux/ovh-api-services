angular
    .module("ovh-api-services")
    .service("MetricsServiceTokenLexi", function ($resource, $cacheFactory) {

        var otherCache = $cacheFactory("MetricsServiceTokenLexi");
        var queryCache = $cacheFactory("MetricsServiceTokenLexiQuery");

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
