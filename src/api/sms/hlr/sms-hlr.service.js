angular.module("ovh-api-services").service("OvhApiSmsHlr", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsHlrV6");
        }
    };
});
