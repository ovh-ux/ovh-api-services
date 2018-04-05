angular.module("ovh-api-services").service("OvhApiCloudProjectForecast", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectForecastV6");
        }
    };

});
