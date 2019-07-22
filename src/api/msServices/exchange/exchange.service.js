angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesExchange", function ($injector) {

        return {
            v6: function () {
                return $injector.get("OvhApiMsServicesExchangeV6");
            }
        };
    });
