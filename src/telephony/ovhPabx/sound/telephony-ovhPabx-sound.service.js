angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxSound", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxSoundV6");
        }
    };
});
