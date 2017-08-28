angular.module("ovh-api-services").service("OvhApiOrderVrackNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderVrackNewLexi");
        }
    };

});
