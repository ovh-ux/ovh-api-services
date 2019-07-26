angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesSharepoint", function ($injector) {

        return {
            v6: function () {
                return $injector.get("OvhApiMsServicesSharepointV6");
            }
        };
    });
