angular.module("ovh-api-services").service("OvhApiCloudProjectConsumption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectConsumptionV6");
        }
    };

});
