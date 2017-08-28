angular.module("ovh-api-services").service("OvhApiUserAgreements", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserAgreementsLexi");
        }
    };

});
