angular.module("ovh-api-services").service("DedicatedCephUserPool", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephUserPoolLexi");
        }
    };
});
