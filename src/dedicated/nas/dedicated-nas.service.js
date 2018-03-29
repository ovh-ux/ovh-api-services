angular.module("ovh-api-services").service("OvhApiDedicatedNas", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNasV6");
        }
    };
});
