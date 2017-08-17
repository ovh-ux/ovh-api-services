angular
    .module("ovh-api-services")
    .service("MetricsToken", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("MetricsTokenLexi");
            }
        };
    });
