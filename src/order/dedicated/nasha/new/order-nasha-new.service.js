angular.module("ovh-api-services").service("OvhApiOrderDedicatedNashaNew", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderDedicatedNashaNewV6");
        }
    };

});
