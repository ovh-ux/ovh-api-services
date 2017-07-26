angular.module("ovh-api-services").service("CloudProjectUsageForecast", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUsageForecastLexi");
        }
    };

});
