angular.module("ovh-api-services").service("OvhApiCloudProjectNetworkPublic", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectNetworkPublicV6");
        }
    };
});
