angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPrivateSubnet", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivateSubnetLexi");
        }
    };
});
