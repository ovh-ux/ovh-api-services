angular.module("ovh-api-services").service("OvhApiMeCustomerBalance", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeCustomerBalanceV6");
        }
    };

});
