angular.module("ovh-api-services").service("OvhApiMeAgreements", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeAgreementsLexi");
        }
    };

});
