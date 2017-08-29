angular.module("ovh-api-services").service("OvhApiCloudProjectUsageForecast", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectUsageForecastLexi");
        }
    };

});
