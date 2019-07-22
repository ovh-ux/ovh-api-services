angular.module("ovh-api-services").service("OvhApiTelephonyOfferTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOfferTaskV6");
        }
    };
});
