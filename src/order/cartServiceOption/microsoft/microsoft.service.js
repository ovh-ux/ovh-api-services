angular.module("ovh-api-services").service("OvhApiOrderCartServiceOptionMicrosoft", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionMicrosoftV6");
        }
    };
});
