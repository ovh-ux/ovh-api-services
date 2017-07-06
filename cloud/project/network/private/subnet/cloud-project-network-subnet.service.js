angular.module("ovh-api-services").service("CloudProjectNetworkPrivateSubnet", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectNetworkPrivateSubnetLexi");
        }
    };
});
