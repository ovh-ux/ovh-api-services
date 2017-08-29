angular.module("ovh-api-services").service("OvhApiSmsBlacklists", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsBlacklistsLexi");
        }
    };
});
