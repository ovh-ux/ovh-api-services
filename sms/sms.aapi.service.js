angular.module("ovh-api-services").service("SmsAapi", function ($resource, Sms) {
    "use strict";

    var sms = $resource("/sms", {}, {
        detail: {
            method: "GET",
            url: "/sms/details",
            serviceType: "aapi",
            cache: Sms.cache,
            isArray: true
        }
    });

    sms.resetCache = Sms.resetCache;

    return sms;
});
