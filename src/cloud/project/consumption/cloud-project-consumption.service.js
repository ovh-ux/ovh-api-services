angular.module("ovh-api-services").service("OvhApiCloudProjectConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectConsumptionLexi");
        }
    };

});
