angular.module("ovh-api-services").service("OvhApiUserBillDetailsLexi", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/details/:billDetailId", {
        billId: "@billId",
        billDetailId: "@billDetailId"
    });
});
