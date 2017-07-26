angular.module("ovh-api-services").service("UserAgreements", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserAgreementsLexi");
        }
    };

});
