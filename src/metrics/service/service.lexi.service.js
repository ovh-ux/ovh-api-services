angular
    .module("ovh-api-services")
    .service("MetricsServiceLexi", function ($resource, $cacheFactory) {

        var otherCache = $cacheFactory("MetricsServiceLexi");
        var interceptor = {
            response: function (response) {
                otherCache.removeAll();
                return response.data;
            }
        };

        var r = $resource("/metrics/:serviceName", {
            serviceName: "@serviceName"
        }, {
            get: {
                method: "GET",
                cache: otherCache
            },
            edit: {
                method: "PUT",
                interceptor: interceptor
            }
        });

        return r;
    });
