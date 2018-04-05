angular.module("ovh-api-services").service("OvhApiDedicatedNashaTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedNashaTaskV6");
        }
    };
});
