angular.module("ovh-api-services").service("OvhApiServices", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiServicesAapi");
        },
        v6: function () {
            return $injector.get("OvhApiServicesV6");
        }
    };
});
