angular.module("ovh-api-services").service("OvhApiMeVoucherAccountMovementsV6", function ($resource) {
    "use strict";

    return $resource("/me/voucherAccount/:voucherAccountId/movements/:movementId", {
        voucherAccountId: "@voucherAccountId",
        movementId: "@movementId"
    });

});
