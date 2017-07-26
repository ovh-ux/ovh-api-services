angular.module("ovh-api-services").service("OrderDedicatedNashaNew", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderDedicatedNashaNewLexi");
        }
    };

});
