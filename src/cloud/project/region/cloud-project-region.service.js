angular.module("ovh-api-services").service("OvhApiCloudProjectRegion", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectRegionV6");
        }
    };

});
