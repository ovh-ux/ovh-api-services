angular.module("ovh-api-services").service("OvhApiCloudProjectRegion", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectRegionLexi");
        }
    };

});
