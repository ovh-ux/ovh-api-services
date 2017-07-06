angular.module("ovh-api-services").service("SmsErika", function (apiv7) {
    "use strict";

    var smsEndpoint = apiv7("/sms/:serviceName", {
        serviceName: "@serviceName"
    });

    return smsEndpoint;

});
