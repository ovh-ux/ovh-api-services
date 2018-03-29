angular.module("ovh-api-services").service("OvhApiMeBillDetailsV6", function ($resource) {
    "use strict";

    return $resource("/me/bill/:billId/details/:billDetailId", {
        billId: "@billId",
        billDetailId: "@billDetailId"
    });
});
