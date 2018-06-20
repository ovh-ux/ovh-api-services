angular.module("ovh-api-services").service("OvhApiOrderCdnDedicated", function ($injector) {
    "use strict";
    return {
        Backend: function () {
            return $injector.get("OvhApiOrderCdnDedicatedBackend");
        },
        v6: function () {
            return $injector.get("OvhApiOrderCdnDedicatedV6");
        }
    };
});
