angular.module("ovh-api-services").service("OvhApiOrderCartMicrosoft", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartMicrosoftV6");
        }
    };
});
