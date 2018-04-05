angular.module("ovh-api-services").service("OvhApiOrderRouter", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderRouterNew");
        }
    };

});
