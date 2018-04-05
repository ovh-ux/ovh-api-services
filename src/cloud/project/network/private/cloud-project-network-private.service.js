angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivate", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateV6");
        },
        Subnet: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnet");
        }
    };
});
