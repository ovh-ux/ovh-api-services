angular.module("ovh-api-services").service("IpReverse", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("IpReverseLexi");
        }
    };
});

