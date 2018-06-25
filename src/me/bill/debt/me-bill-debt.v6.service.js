angular.module("ovh-api-services").service("OvhApiMeBillDebtV6", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/debt", {
        billId: "@billId"
    }, {
        pay: {
            url: "/me/bill/:billId/debt/pay",
            method: "POST"
        }
    });
});
