angular.module("ovh-api-services").service("OvhApiMeDebtAccountV6", function ($resource) {
    "use strict";

    return $resource("/me/debtAccount", {}, {
        pay: {
            url: "/me/debtAccount/pay",
            method: "POST"
        }
    });

});
