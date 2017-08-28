angular.module("ovh-api-services").service("OvhApiStoreContact", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiStoreContactLexi");
        }
    };
});
