angular.module("ovh-api-services").service("OvhApiHostingPrivateDatabase", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiHostingPrivateDatabaseV6");
        },
        Whitelist: function () {
            return $injector.get("OvhApiHostingPrivateDatabaseWhitelist");
        }
    };
});
