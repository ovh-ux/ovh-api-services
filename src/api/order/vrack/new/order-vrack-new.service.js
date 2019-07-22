angular.module("ovh-api-services").service("OvhApiOrderVrackNew", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderVrackNewV6");
        }
    };

});
