angular.module("ovh-api-services").service("OvhApiKube", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiKubeV6");
        },
        PublicCloud: function () {
            return $injector.get("OvhApiKubePublicCloud");
        }
    };
});
