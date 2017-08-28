angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublic", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectNetworkPublicLexi");
        }
    };
});
