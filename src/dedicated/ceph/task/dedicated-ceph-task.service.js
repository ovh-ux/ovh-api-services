angular.module("ovh-api-services").service("DedicatedCephTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephTaskLexi");
        }
    };
});
