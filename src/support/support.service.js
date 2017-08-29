angular.module("ovh-api-services").service("OvhApiSupport", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSupportLexi");
        }
    };
});
