angular
    .module("ovh-api-services")
    .service("OvhApiMetrics", function ($injector) {

        return {
            Service: function () {
                return $injector.get("OvhApiMetricsService");
            },
            Lexi: function () {
                return $injector.get("OvhApiMetrics");
            }
        };
    });
