angular.module("ovh-api-services").service("OrderSmsLexi", function ($resource, OrderSms) {
    "use strict";

    return $resource("/order/sms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OrderSms.cache
        },
        getCredits: {
            method: "GET",
            url: "/order/sms/:serviceName/credits",
            cache: OrderSms.cache
        },
        orderCredits: {
            method: "POST",
            url: "/order/sms/:serviceName/credits"
        },
        getNewSmsAccount: {
            method: "GET",
            url: "/order/sms/new",
            cache: OrderSms.cache
        },
        orderNewSmsAccount: {
            method: "POST",
            url: "/order/sms/new"
        }
    });

});
