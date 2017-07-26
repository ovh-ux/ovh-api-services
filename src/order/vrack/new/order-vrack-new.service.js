angular.module("ovh-api-services").service("OrderVrackNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderVrackNewLexi");
        }
    };

});
