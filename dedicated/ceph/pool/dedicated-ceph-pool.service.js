angular.module("ovh-api-services").service("DedicatedCephPool", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedCephPoolLexi");
        }
    };
});
