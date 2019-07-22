angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionU2f", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAccessRestrictionU2fV6");
        }
    };

});
