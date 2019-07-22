angular.module("ovh-api-services").service("OvhApiSmsBlacklists", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsBlacklistsV6");
        }
    };
});
