angular.module("ovh-api-services").service("OvhApiTelephonyOfferTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOfferTaskLexi");
        }
    };
});
