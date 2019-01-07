angular.module("ovh-api-services").service("OvhApiEmailProV7", function (apiv7) {
    "use strict";

    var emailproEndpoint = apiv7("/email/pro/:serviceName/", {
        serviceName: "@serviceName"
    });

    return emailproEndpoint;
});
