angular.module("ovh-api-services").service("OvhApiDbaasLogsOffer", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsOfferLexi");
        }
    };
});
