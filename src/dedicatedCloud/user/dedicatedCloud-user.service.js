angular.module("ovh-api-services").service("DedicatedCloudUser", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudUserLexi");
        }
    };

});
