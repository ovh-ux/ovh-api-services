angular.module("ovh-api-services").service("OvhApiSmsV7", function (apiv7) {
    "use strict";

    var smsEndpoint = apiv7("/sms/:serviceName", {
        serviceName: "@serviceName"
    });

    return smsEndpoint;

});
