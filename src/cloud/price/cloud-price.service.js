angular.module("ovh-api-services").service("OvhApiCloudPrice", function ($injector) {

    "use strict";

    // This file is deprecated

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudPriceLexi");
        }
    };

});
