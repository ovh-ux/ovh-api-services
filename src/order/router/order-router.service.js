angular.module("ovh-api-services").service("OvhApiOrderRouter", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderRouterNew");
        }
    };

});
