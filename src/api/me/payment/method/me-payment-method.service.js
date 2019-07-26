angular.module("ovh-api-services").service("OvhApiMePayMethod", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePayMethodV6");
        }
    };
});
