angular.module("ovh-api-services").service("Services", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("ServicesAapi");
        }
    };
});
