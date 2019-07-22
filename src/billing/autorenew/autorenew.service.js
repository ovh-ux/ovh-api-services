angular.module("ovh-api-services").service("OvhApiBillingAutorenew", function ($injector) {
    "use strict";

    return {
        Services: function () {
            return $injector.get("OvhApiBillingAutorenewServices");
        }
    };

});
