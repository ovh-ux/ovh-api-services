angular.module("ovh-api-services").service("OvhApiCloudProjectForecastV6", function ($resource) {
    "use strict";

    return $resource("/cloud/project/:serviceName/forecast", {
        serviceName: "@serviceName"
    });
});
