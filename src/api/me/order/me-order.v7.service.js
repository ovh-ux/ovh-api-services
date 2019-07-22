angular.module("ovh-api-services").service("OvhApiMeOrderV7", function (apiv7) {
    "use strict";

    var userOrderEndpoint = apiv7("/me/order/:orderId", {
        orderId: "@orderId"
    });

    return userOrderEndpoint;
});
