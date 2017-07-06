angular.module("ovh-api-services").service("DedicatedCloudDatacenterFiler", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudDatacenterFilerLexi");
        }
    };

});
