angular.module("ovh-api-services").service("OvhApiAuth", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiAuthV6");
        }
    };
});
