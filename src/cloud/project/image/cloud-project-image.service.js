angular.module("ovh-api-services").service("OvhApiCloudProjectImage", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectImageLexi");
        }
    };

});
