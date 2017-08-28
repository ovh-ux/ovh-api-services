angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivate", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateLexi");
        },
        Subnet: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnet");
        }
    };
});
