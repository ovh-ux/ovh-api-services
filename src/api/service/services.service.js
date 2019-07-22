angular.module("ovh-api-services").service("OvhApiService", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiServiceAapi");
        }
    };
});
