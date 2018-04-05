angular.module("ovh-api-services").service("OvhApiStoreContact", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiStoreContactV6");
        }
    };
});
