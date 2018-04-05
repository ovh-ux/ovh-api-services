angular.module("ovh-api-services").service("OvhApiMeOvhAccount", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeOvhAccountAapi");
        },
        v6: function () {
            return $injector.get("OvhApiMeOvhAccountV6");
        }
    };
});
