angular.module("ovh-api-services").service("OvhApiSmsSenders", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsSendersV6");
        }
    };
});
