angular.module("ovh-api-services").service("UserOvhAccount", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("UserOvhAccountAapi");
        },
        Lexi: function () {
            return $injector.get("UserOvhAccountLexi");
        }
    };
});
