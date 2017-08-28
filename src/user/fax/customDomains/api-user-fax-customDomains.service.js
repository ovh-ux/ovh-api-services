angular.module("ovh-api-services").service("OvhApiUserFaxCustomDomains", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiUserFaxCustomDomainsLexi");
        }
    };
});
