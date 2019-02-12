angular.module("ovh-api-services").service("OvhApiOrderCartServiceOptionVps", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionVpsV6");
        }
    };
});
