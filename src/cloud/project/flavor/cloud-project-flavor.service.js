angular.module("ovh-api-services").service("OvhApiCloudProjectFlavor", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectFlavorLexi");
        }
    };

});
