angular.module("ovh-api-services").service("OvhApiDedicatedCephTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephTaskV6");
        }
    };
});
