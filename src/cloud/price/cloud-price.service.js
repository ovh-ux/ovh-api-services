angular.module("ovh-api-services").service("CloudPrice", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudPriceLexi");
        }
    };

});
