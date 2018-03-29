angular.module("ovh-api-services").service("OvhApiMeAgreements", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAgreementsV6");
        }
    };

});
