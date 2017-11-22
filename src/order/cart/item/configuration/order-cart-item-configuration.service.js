angular.module("ovh-api-services").service("OvhApiOrderCartItemConfiguration", function ($injector) {

    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderCartItemConfigurationLexi");
        }
    };
});
