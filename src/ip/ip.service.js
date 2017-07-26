angular.module("ovh-api-services").service("Ip", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("IpLexi");
        },
        Reverse: function () {
            return $injector.get("IpReverse");
        }
    };
});
