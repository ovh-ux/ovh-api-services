angular.module("ovh-api-services").service("MyIp", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("MyIpAapi");
        }
    };
});
