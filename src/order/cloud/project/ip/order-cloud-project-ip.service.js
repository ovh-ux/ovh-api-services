angular.module("ovh-api-services").service("OvhApiOrderCloudProjectIp", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderCloudProjectIpV6");
        }
    };

});
