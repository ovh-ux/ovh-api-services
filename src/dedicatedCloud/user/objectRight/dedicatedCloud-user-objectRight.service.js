angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserObjectRight", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudUserObjectRightV6");
        }
    };

});
