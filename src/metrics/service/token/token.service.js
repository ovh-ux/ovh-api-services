angular
    .module("ovh-api-services")
    .service("OvhApiMetricsServiceToken", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("OvhApiMetricsServiceTokenLexi");
            }
        };
    });
