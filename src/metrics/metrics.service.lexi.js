angular
    .module("ovh-api-services")
    .service("OvhApiMetricsLexi", function ($resource, $cacheFactory) {

        var queryCache = $cacheFactory("OvhApiMetricsLexiQuery");
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
