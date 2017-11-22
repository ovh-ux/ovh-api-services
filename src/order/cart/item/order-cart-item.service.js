angular.module("ovh-api-services").service("OvhApiOrderCartItem", function ($injector) {

    "use strict";
    return {
        Configuration: function () {
            return $injector.get("OvhApiOrderCartItemConfiguration");
        },
        Lexi: function () {
            return $injector.get("OvhApiOrderCartItemLexi");
        }
    };
});
