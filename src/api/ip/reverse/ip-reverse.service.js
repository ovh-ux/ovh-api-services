angular.module("ovh-api-services").service("OvhApiIpReverse", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiIpReverseV6");
        }
    };
});

