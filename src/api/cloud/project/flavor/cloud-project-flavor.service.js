angular.module("ovh-api-services").service("OvhApiCloudProjectFlavor", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectFlavorV6");
        }
    };

});
