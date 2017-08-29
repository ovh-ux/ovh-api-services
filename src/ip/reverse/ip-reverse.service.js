angular.module("ovh-api-services").service("OvhApiIpReverse", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiIpReverseLexi");
        }
    };
});

