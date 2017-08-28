angular
    .module("ovh-api-services")
    .service("OvhApiMetricsServiceConsumption", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("OvhApiMetricsServiceConsumptionLexi");
            }
        };
    });
