angular.module("ovh-api-services").service("OvhApiMeVoucherAccountV6", function ($resource) {
    "use strict";

    return $resource("/me/voucherAccount/:voucherAccountId", {
        voucherAccountId: "@voucherAccountId"
    });

});
