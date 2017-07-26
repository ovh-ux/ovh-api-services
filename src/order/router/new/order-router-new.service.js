angular.module("ovh-api-services").service("OrderRouterNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderRouterNewLexi");
        }
    };

});
