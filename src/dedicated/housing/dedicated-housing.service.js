angular.module("ovh-api-services").service("DedicatedHousing", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("DedicatedHousingLexi");
        }
    };
});
