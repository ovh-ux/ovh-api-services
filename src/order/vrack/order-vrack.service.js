angular.module("ovh-api-services").service("OvhApiOrderVrack", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderVrackNew");
        }
    };

});
