angular.module("ovh-api-services").service("OvhApiDedicatedCloudVRack", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudVRackV6");
        }
    };

});
