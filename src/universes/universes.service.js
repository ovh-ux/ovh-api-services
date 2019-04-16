angular.module("ovh-api-services").service("OvhApiUniverses", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiUniversesAapi");
        }
    };
});
