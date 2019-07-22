angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionIp", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeAccessRestrictionIpV6");
        }
    };

});
