angular.module("ovh-api-services").service("OvhApiCloudProjectNetwork", function ($injector) {
    "use strict";

    return {
        Private: function () {
            return $injector.get("OvhApiCloudProjectNetworkPrivate");
        },
        Public: function () {
            return $injector.get("OvhApiCloudProjectNetworkPublic");
        }
    };
});
