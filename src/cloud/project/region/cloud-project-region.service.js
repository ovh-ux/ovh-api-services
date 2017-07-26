angular.module("ovh-api-services").service("CloudProjectRegion", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectRegionLexi");
        }
    };

});
