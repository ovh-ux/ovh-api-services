angular.module("ovh-api-services").service("DedicatedCloudFiler", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCloudFilerLexi");
        }
    };

});
