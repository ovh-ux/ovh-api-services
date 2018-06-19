angular.module("ovh-api-services").service("OvhApiMeDepositV7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/me/deposit/:depositId", {
        depositId: "@depositId"
    });

    return endpoint;
});
