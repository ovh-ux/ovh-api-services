angular.module("ovh-api-services").service("OvhApiMeOrderErika", function (apiv7) {
    "use strict";

    var userOrderEndpoint = apiv7("/me/order/:orderId", {
        orderId: "@orderId"
    });

    return userOrderEndpoint;
});
