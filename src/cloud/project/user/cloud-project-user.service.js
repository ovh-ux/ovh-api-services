angular.module("ovh-api-services").service("CloudProjectUser", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectUserLexi");
        },
        Aapi: function () {
            return $injector.get("CloudProjectUserAapi");
        }
    };

});
