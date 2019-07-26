angular.module("ovh-api-services").service("OvhApiOrderCartProduct", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartProductV6");
        }
    };
});
