angular.module("ovh-api-services").service("OvhApiVpsImages", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVpsImagesV6");
        },
        Available: function () {
            return $injector.get("OvhApiVpsImagesAvailable");
        }
    };
});
