angular.module("ovh-api-services").service("OvhApiDedicatedCephUserPool", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCephUserPoolV6");
        }
    };
});
