angular.module("ovh-api-services").service("CloudProjectNetworkPublic", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectNetworkPublicLexi");
        }
    };
});
