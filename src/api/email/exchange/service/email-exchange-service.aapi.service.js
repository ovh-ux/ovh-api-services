angular.module("ovh-api-services").service("OvhApiEmailExchangeServiceAapi", function ($resource) {
    "use strict";

    return $resource("/sws/exchange/:organization/:exchange", {
        organization: "@organization",
        exchange: "@exchange"
    }, {
        get: {
            serviceType: "aapi"
        }
    });
});
