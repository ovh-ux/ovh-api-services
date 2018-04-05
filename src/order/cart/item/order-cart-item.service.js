angular.module("ovh-api-services").service("OvhApiOrderCartItem", function ($injector) {

    "use strict";
    return {
        Configuration: function () {
            return $injector.get("OvhApiOrderCartItemConfiguration");
        },
        v6: function () {
            return $injector.get("OvhApiOrderCartItemV6");
        }
    };
});
