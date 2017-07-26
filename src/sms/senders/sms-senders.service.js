angular.module("ovh-api-services").service("SmsSenders", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsSendersLexi");
        }
    };
});
