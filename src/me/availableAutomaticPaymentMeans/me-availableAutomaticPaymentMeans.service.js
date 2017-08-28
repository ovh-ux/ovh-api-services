angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeans", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiMeAvailableAutomaticPaymentMeansLexi");
        }
    };

});
