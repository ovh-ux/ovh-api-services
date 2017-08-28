angular.module("ovh-api-services").service("OvhApiOrderDedicatedNasha", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNew");
        }
    };

});
