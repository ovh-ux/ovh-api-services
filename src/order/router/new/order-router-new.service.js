angular.module("ovh-api-services").service("OvhApiOrderRouterNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderRouterNewLexi");
        }
    };

});
