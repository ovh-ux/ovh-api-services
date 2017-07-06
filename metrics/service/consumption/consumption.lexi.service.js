angular
    .module("ovh-api-services")
    .service("MetricsServiceConsumptionLexi", function ($resource) {

        return $resource("/metrics/:serviceName/consumption", {
            serviceName: "@serviceName"
        }, {
            get: {
                method: "GET",
                cache: false
            }
        });
    });
