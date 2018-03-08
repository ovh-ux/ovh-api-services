angular.module("ovh-api-services").service("OvhApiDbaasLogsContacts", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsContactsLexi");
        }
    };
});
