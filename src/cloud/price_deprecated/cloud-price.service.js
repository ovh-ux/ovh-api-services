angular.module("ovh-api-services").service("OvhApiCloudPrice", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudPriceLexi");
        }
    };

});
