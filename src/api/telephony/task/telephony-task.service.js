angular.module("ovh-api-services").service("OvhApiTelephonyTask", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTaskV6");
        }
    };
});
