angular.module("ovh-api-services").service("OvhApiCloudProjectIplb", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectIplbLexi");
        }
    };

});
