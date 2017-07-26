angular
    .module("ovh-api-services")
    .service("Metrics", function ($injector) {

        return {
            Service: function () {
                return $injector.get("MetricsService");
            },
            Lexi: function () {
                return $injector.get("Metrics");
            }
        };
    });
