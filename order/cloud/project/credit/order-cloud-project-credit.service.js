angular.module("ovh-api-services").service("OrderCloudProjectCredit", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderCloudProjectCreditLexi");
        }
    };

});
