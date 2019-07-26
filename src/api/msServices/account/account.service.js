angular
    .module("ovh-api-services")
    .service("OvhApiMsServicesAccount", function ($injector) {

        return {
            v6: function () {
                return $injector.get("OvhApiMsServicesAccountV6");
            }
        };
    });
