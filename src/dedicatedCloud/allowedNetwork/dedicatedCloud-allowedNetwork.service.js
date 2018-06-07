angular.module("ovh-api-services").service("OvhApiDedicatedCloudAllowedNetwork", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudAllowedNetworkV6");
        }
    };

});
