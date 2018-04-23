angular.module("ovh-api-services").service("OvhApiMeApi", function ($injector) {
    "use strict";

    return {
        Application: function () {
            return $injector.get("OvhApiMeApiApplication");
        },
        Credential: function () {
            return $injector.get("OvhApiMeApiCredential");
        }
    };

});
