angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterHost", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHostV6");
        }
    };

});
