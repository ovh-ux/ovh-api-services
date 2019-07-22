angular.module("ovh-api-services").service("OvhApiStorePartner", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStorePartnerV6");
        }
    };
});
