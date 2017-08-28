angular.module("ovh-api-services").service("OvhApiUserOvhAccount", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiUserOvhAccountAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiUserOvhAccountLexi");
        }
    };
});
