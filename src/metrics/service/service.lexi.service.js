angular
    .module("ovh-api-services")
    .service("OvhApiMetricsServiceLexi", function ($resource, $cacheFactory) {

        var otherCache = $cacheFactory("OvhApiMetricsServiceLexi");
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
