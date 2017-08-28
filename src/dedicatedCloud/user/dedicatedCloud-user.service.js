angular.module("ovh-api-services").service("OvhApiDedicatedCloudUser", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudUserLexi");
        }
    };

});
