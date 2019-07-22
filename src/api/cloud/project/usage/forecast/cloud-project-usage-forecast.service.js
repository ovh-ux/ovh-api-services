angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecast", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectUsageForecastV6");
        }
    };

});
