angular.module("ovh-api-services").service("OvhApiMyIp", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMyIpAapi");
        }
    };
});
