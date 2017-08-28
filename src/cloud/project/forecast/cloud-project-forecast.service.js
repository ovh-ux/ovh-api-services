angular.module("ovh-api-services").service("OvhApiCloudProjectForecast", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectForecastLexi");
        }
    };

});
