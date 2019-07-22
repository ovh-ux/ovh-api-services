angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountServicesV6", function ($resource) {
    "use strict";

    return $resource("/pack/xdsl/:packName/exchangeAccount/services/:domain", {
        packName: "@packName",
        domain: "@domain"
    }, {
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        }
    });
});
