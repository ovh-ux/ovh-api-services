angular.module("ovh-api-services").service("OvhApiDedicatedNas", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNasLexi");
        }
    };
});
