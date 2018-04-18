angular.module("ovh-api-services").service("OvhApiMeCustomerBalanceV6", function ($resource) {
    "use strict";

    return $resource("/me/customerBalance", {}, {
        pay: {
            method: "POST",
            url: "/me/customerBalance/pay"
        }
    });

});
