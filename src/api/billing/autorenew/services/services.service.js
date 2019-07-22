angular.module("ovh-api-services").service("OvhApiBillingAutorenewServices", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiBillingAutorenewServicesAapi");
        }
    };

});
