angular.module("ovh-api-services").service("OvhApiDedicatedCloudIp", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudIpV6");
        }
    };

});
