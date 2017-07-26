angular.module("ovh-api-services").service("OrderRouter", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderRouterNew");
        }
    };

});
