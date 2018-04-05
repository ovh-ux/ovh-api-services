angular
    .module("ovh-api-services")
    .service("OvhApiMetricsToken", function ($injector) {

        return {
            v6: function () {
                return $injector.get("OvhApiMetricsTokenV6");
            }
        };
    });
