angular.module("ovh-api-services").service("OvhApiEmailExchangeServiceV7", function (apiv7) {
    "use strict";

    var exchangeEndpoint = apiv7("/email/exchange/:organizationName/service", {
        organizationName: "@organizationName"
    });

    return exchangeEndpoint;
});
