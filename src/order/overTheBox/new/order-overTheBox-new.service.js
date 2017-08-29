angular.module("ovh-api-services").service("OvhApiOrderOverTheBoxNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderOverTheBoxNewLexi");
        }
    };

});
