angular.module("ovh-api-services").service("OvhApiDedicatedCloudTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudTaskV6");
        }
    };

});
