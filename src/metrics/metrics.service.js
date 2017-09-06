angular
    .module("ovh-api-services")
    .service("OvhApiMetrics", function ($injector) {

        return {
            Token: function () {
                return $injector.get("OvhApiMetricsToken");
            },
            Lexi: function () {
                return $injector.get("OvhApiMetricsLexi");
            }
        };
    });
