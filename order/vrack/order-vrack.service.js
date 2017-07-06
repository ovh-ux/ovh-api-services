angular.module("ovh-api-services").service("OrderVrack", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderVrackNew");
        }
    };

});
