angular.module("ovh-api-services").service("OvhApiSmsHlr", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsHlrLexi");
        }
    };
});
