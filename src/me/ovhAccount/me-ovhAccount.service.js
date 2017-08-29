angular.module("ovh-api-services").service("OvhApiMeOvhAccount", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeOvhAccountAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiMeOvhAccountLexi");
        }
    };
});
