angular.module("ovh-api-services").service("OvhApiOrderCartServiceOption", function ($injector) {

    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderCartServiceOptionLexi");
        }
    };
});
