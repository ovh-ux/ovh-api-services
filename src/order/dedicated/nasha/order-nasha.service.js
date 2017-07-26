angular.module("ovh-api-services").service("OrderDedicatedNasha", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderDedicatedNashaNew");
        }
    };

});
