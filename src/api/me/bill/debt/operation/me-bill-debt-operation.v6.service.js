angular.module("ovh-api-services").service("OvhApiMeBillDebtOperationV6", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/debt/operation/:operationId", {
        billId: "@billId",
        operationId: "@operationId"
    }, {
        associatedObject: {
            url: "/me/bill/:billId/debt/operation/:operationId/associatedObject",
            method: "GET"
        }
    });
});
