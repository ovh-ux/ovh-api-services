angular.module("ovh-api-services").service("OvhApiCloudPCA", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudPCALexi");
        }
    };

});
