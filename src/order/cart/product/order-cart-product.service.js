angular.module("ovh-api-services").service("OvhApiOrderCartProduct", function ($injector) {

    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderCartProductLexi");
        }
    };
});
