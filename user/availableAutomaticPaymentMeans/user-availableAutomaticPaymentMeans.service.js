angular.module("ovh-api-services").service("UserAvailableAutomaticPaymentMeans", function ($injector) {
    "use strict";

    return {
        Tera: angular.noop,
        Lexi: function () {
            return $injector.get("UserAvailableAutomaticPaymentMeansLexi");
        }
    };

});
