angular.module("ovh-api-services").service("CloudProjectForecast", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectForecastLexi");
        }
    };

});
