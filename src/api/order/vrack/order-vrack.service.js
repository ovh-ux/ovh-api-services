angular.module("ovh-api-services").service("OvhApiOrderVrack", function ($injector) {
    "use strict";

    return {
        v6: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderVrackNew");
        }
    };

});
