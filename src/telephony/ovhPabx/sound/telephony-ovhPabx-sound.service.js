angular.module("ovh-api-services").service("TelephonyOvhPabxSound", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxSoundLexi");
        }
    };
});
