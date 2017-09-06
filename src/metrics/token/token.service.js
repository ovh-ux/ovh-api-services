angular
    .module("ovh-api-services")
    .service("OvhApiMetricsToken", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("OvhApiMetricsTokenLexi");
            }
        };
    });
