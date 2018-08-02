angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationStock", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudLocationStockV6");
        }
    };
});
