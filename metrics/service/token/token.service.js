angular
    .module("ovh-api-services")
    .service("MetricsServiceToken", function ($injector) {

        return {
            Lexi: function () {
                return $injector.get("MetricsServiceTokenLexi");
            }
        };
    });
