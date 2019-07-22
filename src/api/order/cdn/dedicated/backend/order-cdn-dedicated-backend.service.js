angular.module("ovh-api-services").service("OvhApiOrderCdnDedicatedBackend", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCdnDedicatedBackendV6");
        }
    };
});
