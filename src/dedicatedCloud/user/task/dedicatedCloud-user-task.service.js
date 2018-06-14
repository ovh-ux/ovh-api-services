angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudUserTaskV6");
        }
    };

});
