angular.module("ovh-api-services").service("OvhApiXdslEmail", function ($injector) {
    "use strict";
    return {
        Pro: function () {
            return $injector.get("OvhApiXdslEmailPro");
        }
    };
});
