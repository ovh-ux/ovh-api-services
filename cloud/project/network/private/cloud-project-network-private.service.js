angular.module("ovh-api-services").service("CloudProjectNetworkPrivate", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectNetworkPrivateLexi");
        },
        Subnet: function () {
            return $injector.get("CloudProjectNetworkPrivateSubnet");
        }
    };
});
