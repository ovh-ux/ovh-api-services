angular.module("ovh-api-services").service("OvhApiDedicatedNashaTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedNashaTaskLexi");
        }
    };
});
