angular.module("ovh-api-services").service("StorePartner", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StorePartnerLexi");
        }
    };
});
