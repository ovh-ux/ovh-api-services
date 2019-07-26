angular.module("ovh-api-services").service("OvhApiVps", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVpsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiVpsAapi");
        },
        Images: function () {
            return $injector.get("OvhApiVpsImages");
        },
        Ips: function () {
            return $injector.get("OvhApiVpsIps");
        }
    };

});
