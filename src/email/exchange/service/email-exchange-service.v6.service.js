angular.module("ovh-api-services").service("OvhApiEmailExchangeServiceV6", function ($resource) {
    "use strict";

    var exchangeEndpoint = $resource("/email/exchange/:organizationName/service/:exchangeService", {
        organizationName: "@organizationName",
        exchangeService: "@exchangeService"
    });

    return exchangeEndpoint;
});
