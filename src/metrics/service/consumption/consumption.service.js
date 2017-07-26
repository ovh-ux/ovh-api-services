angular
    .module("ovh-api-services")
    .service("MetricsServiceConsumption", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("MetricsServiceConsumptionLexi");
            }
        };
    });
