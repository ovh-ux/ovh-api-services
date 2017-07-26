angular.module("ovh-api-services").service("PackXdslVoipBillingAccountLexi", function ($resource, PackXdslVoipBillingAccount) {
    "use strict";

    return $resource("/pack/xdsl/:packId/voipBillingAccount/services",
                     {
                         packId: "@packId"
                     },
                     {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslVoipBillingAccount.cache
                         }
                     }
    );
});
