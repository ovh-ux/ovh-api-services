angular.module("ovh-api-services").service("OvhApiPackXdslVoipBillingAccountLexi", function ($resource, OvhApiPackXdslVoipBillingAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packId/voipBillingAccount/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslVoipBillingAccount.cache
        }
    });
});
