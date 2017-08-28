angular.module("ovh-api-services").service("OvhApiDedicatedCloudFiler", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCloudFilerLexi");
        }
    };

});
