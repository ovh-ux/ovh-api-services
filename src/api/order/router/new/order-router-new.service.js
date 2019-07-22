angular.module("ovh-api-services").service("OvhApiOrderRouterNew", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderRouterNewV6");
        }
    };

});
