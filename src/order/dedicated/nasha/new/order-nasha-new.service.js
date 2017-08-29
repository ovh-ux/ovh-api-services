angular.module("ovh-api-services").service("OvhApiOrderDedicatedNashaNew", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNewLexi");
        }
    };

});
