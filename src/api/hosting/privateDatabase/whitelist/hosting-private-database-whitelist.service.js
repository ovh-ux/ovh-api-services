angular.module("ovh-api-services").service("OvhApiHostingPrivateDatabaseWhitelist", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiHostingPrivateDatabaseWhitelistV6");
        }
    };
});
