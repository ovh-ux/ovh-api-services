angular.module("ovh-api-services").service("VrackDedicatedCloud", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("VrackDedicatedCloudLexi");
        }
    };
});
