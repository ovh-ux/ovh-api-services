angular.module("ovh-api-services").service("OvhApiUserOrderErika", function (apiv7) {
    "use strict";

    var userOrderEndpoint = apiv7("/me/order/:orderId", {
        orderId: "@orderId"
    });

    return userOrderEndpoint;
});
