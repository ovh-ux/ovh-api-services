angular.module("ovh-api-services").service("OvhApiDedicatedCephUserPool", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephUserPoolLexi");
        }
    };
});
