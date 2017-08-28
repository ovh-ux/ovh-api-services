angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceOfferTaskLexi");
        }
    };
});
