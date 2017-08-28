angular.module("ovh-api-services").service("OvhApiAuth", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiAuthLexi");
        }
    };
});
