angular.module("ovh-api-services").service("OvhApiPackXdslExchangeAccountAapi", function ($resource, OvhApiPackXdslExchangeAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packName/exchangeAccount/email", {
        packName: "@packName"
    }, {
        query: {
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiPackXdslExchangeAccount.cache
        }
    }
    );
});
