angular
    .module("ovh-api-services")
    .service("MetricsLexi", function ($resource, $cacheFactory) {

        var queryCache = $cacheFactory("MetricsLexiQuery");
        var r = $resource("/metrics", {}, {
            query: {
                method: "GET",
                cache: queryCache,
                isArray: true
            }
        });

        r.resetAllCache = function () {
            r.resetQueryCache();
        };

        r.resetQueryCache = function () {
            queryCache.removeAll();
        };

        return r;
    });
