angular.module("ovh-api-services").service("CloudProjectConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectConsumptionLexi");
        }
    };

});
