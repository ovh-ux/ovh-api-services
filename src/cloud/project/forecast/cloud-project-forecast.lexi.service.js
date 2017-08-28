angular.module("ovh-api-services").service("OvhApiCloudProjectForecastLexi", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/forecast", {
        serviceName: "@serviceName"
    });
});
