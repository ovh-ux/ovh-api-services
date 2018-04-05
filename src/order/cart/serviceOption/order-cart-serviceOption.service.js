angular.module("ovh-api-services").service("OvhApiOrderCartServiceOption", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionV6");
        }
    };
});
