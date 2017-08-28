angular.module("ovh-api-services").service("OvhApiStorePartner", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStorePartnerLexi");
        }
    };
});
