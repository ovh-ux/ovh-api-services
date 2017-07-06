angular.module("ovh-api-services").service("SmsBlacklists", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsBlacklistsLexi");
        }
    };
});
