angular
    .module("ovh-api-services")
    .service("OvhApiMetrics", function ($injector) {

        return {
            Token: function () {
                return $injector.get("OvhApiMetricsToken");
            },
            v6: function () {
                return $injector.get("OvhApiMetricsV6");
            }
        };
    });
