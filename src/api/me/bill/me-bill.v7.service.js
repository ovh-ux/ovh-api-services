angular.module("ovh-api-services").service("OvhApiMeBillV7", function (apiv7) {
    "use strict";

    return apiv7("/me/bill/:billId", {
        billId: "@billId"
    }, {
        debt: {
            url: "/me/bill/:billId/debt",
            method: "GET"
        }
    });

});
