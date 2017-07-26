angular.module("ovh-api-services").service("CloudProjectNetwork", function ($injector) {
    "use strict";

    return {
        Private: function () {
            return $injector.get("CloudProjectNetworkPrivate");
        },
        Public: function () {
            return $injector.get("CloudProjectNetworkPublic");
        }
    };
});
