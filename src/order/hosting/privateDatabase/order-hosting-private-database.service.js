angular.module("ovh-api-services").service("OvhApiOrderPrivateDatabase", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderPrivateDatabaseV6");
        }
    };
});
