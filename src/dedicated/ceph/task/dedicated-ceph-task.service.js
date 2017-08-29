angular.module("ovh-api-services").service("OvhApiDedicatedCephTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephTaskLexi");
        }
    };
});
