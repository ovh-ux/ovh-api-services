angular.module("ovh-api-services").service("OvhApiVrackDedicatedCloud", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiVrackDedicatedCloudLexi");
        }
    };
});
