angular.module("ovh-api-services").service("OvhApiCloudPrice", function ($injector) {

    "use strict";

    // This file is deprecated

    return {
        v6: function () {
            return $injector.get("OvhApiCloudPriceV6");
        }
    };

});
