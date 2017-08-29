angular
    .module("ovh-api-services")
    .service("OvhApiMetricsServiceConsumptionLexi", function ($resource) {

        return $resource("/metrics/:serviceName/consumption", {
            serviceName: "@serviceName"
        }, {
            get: {
                method: "GET",
                cache: false
            }
        });
    });
