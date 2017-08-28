angular.module("ovh-api-services").service("OvhApiDedicatedCephPool", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDedicatedCephPoolLexi");
        }
    };
});
