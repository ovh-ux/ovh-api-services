angular.module("ovh-api-services").service("OvhApiTelephonyServiceOfferTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceOfferTaskV6");
        }
    };
});
