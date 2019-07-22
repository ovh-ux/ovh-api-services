angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxTts", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxTtsV6");
        }
    };
});
