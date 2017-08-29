angular.module("ovh-api-services").service("OvhApiOrderSmsLexi", function ($resource, OvhApiOrderSms) {
    "use strict";

    return $resource("/order/sms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: {
            method: "GET",
            isArray: true,
            cache: OvhApiOrderSms.cache
        },
        getCredits: {
            method: "GET",
            url: "/order/sms/:serviceName/credits",
            cache: OvhApiOrderSms.cache
        },
        orderCredits: {
            method: "POST",
            url: "/order/sms/:serviceName/credits"
        },
        getNewSmsAccount: {
            method: "GET",
            url: "/order/sms/new",
            cache: OvhApiOrderSms.cache
        },
        orderNewSmsAccount: {
            method: "POST",
            url: "/order/sms/new"
        }
    });

});
