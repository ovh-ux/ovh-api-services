angular
    .module("ovh-api-services")
    .service("MetricsService", function ($injector) {

        return {
            Token: function () {
                return $injector.get("MetricsServiceToken");
            },
            Consumption: function () {
                return $injector.get("MetricsServiceConsumption");
            },
            Lexi: function () {
                return $injector.get("MetricsServiceLexi");
            }
        };
    });
