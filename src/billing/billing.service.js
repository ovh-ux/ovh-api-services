angular.module("ovh-api-services").service("OvhApiBilling", function ($injector) {
    "use strict";

    return {
        Autorenew: function () {
            return $injector.get("OvhApiBillingAutorenew");
        }
    };

});
