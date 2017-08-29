angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterFiler", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudDatacenterFilerLexi");
        }
    };

});
