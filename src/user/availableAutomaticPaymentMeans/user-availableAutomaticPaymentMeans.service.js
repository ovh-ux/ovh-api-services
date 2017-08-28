angular.module("ovh-api-services").service("OvhApiUserAvailableAutomaticPaymentMeans", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiUserAvailableAutomaticPaymentMeansLexi");
        }
    };

});
