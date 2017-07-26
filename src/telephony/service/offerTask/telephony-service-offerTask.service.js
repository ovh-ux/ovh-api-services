angular.module("ovh-api-services").service("TelephonyServiceOfferTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceOfferTaskLexi");
        }
    };
});
