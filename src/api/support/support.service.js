angular.module("ovh-api-services").service("OvhApiSupport", function ($injector) {
    "use strict";
    return {
        Iceberg: function () {
            return $injector.get("OvhApiSupportIceberg");
        },
        v6: function () {
            return $injector.get("OvhApiSupportV6");
        }
    };
});
