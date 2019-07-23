angular.module("ovh-api-services").service("OvhApiVpsImagesAvailable", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiVpsImagesAvailableV6");
        }
    };
});
