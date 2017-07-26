angular.module("ovh-api-services").service("TelephonyOvhPabxTts", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxTtsLexi");
        }
    };
});
