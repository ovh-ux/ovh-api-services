angular
    .module("ovh-api-services")
    .service("Metrics", function ($injector) {

        return {
            Token: function () {
                return $injector.get("MetricsToken");
            },
            Lexi: function () {
                return $injector.get("MetricsLexi");
            }
        };
    });
