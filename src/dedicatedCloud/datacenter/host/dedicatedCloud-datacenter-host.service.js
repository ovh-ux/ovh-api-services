angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterHost", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterHostLexi");
        }
    };

});
