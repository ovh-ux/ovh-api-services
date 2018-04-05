angular.module("ovh-api-services").service("OvhApiDedicatedCloudFiler", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudFilerV6");
        }
    };

});
