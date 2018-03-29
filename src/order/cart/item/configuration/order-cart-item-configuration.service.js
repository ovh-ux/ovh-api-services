angular.module("ovh-api-services").service("OvhApiOrderCartItemConfiguration", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartItemConfigurationV6");
        }
    };
});
