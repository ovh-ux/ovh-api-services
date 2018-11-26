angular
    .module("ovh-api-services")
    .service("OvhApiMsServices", function ($injector) {

        return {
            Account: function () {
                return $injector.get("OvhApiMsServicesAccount");
            },
            Exchange: function () {
                return $injector.get("OvhApiMsServicesExchange");
            },
            Sharepoint: function () {
                return $injector.get("OvhApiMsServicesSharepoint");
            }
        };
    });
