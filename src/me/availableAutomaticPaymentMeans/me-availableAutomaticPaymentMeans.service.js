angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeans", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAvailableAutomaticPaymentMeansV6");
        }
    };

});
