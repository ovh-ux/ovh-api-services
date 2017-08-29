angular.module("ovh-api-services").service("OvhApiSmsSenders", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsSendersLexi");
        }
    };
});
