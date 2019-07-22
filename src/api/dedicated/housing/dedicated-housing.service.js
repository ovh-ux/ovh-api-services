angular.module("ovh-api-services").service("OvhApiDedicatedHousing", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedHousingV6");
        }
    };
});
