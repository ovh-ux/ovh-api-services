angular.module("ovh-api-services").service("OvhApiSupport", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSupportV6");
        }
    };
});
