angular.module("ovh-api-services").service("OvhApiAdp", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiAdpV6");
        },
        capabilities: function () {
            return $injector.get("OvhApiAdpCapabilities");
        }
    };
});
