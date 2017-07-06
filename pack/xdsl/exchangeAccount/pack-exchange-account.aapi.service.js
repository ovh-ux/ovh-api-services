angular.module("ovh-api-services").service("PackXdslExchangeAccountAapi", function ($resource, PackXdslExchangeAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packName/exchangeAccount/email", {
        packName: "@packName"
    }, {
        query: {
            isArray: true,
            serviceType: "aapi",
            cache: PackXdslExchangeAccount.cache
        }
    }
    );
});
