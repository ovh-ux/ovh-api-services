angular
    .module("ovh-api-services")
    .service("OvhApiMetricsService", function ($injector) {

        return {
            Token: function () {
                return $injector.get("OvhApiMetricsServiceToken");
            },
            Consumption: function () {
                return $injector.get("OvhApiMetricsServiceConsumption");
            },
            Lexi: function () {
                return $injector.get("OvhApiMetricsServiceLexi");
            }
        };
    });
