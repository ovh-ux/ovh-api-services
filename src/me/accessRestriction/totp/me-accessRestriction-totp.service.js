angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionTotp", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAccessRestrictionTotpV6");
        }
    };

});
