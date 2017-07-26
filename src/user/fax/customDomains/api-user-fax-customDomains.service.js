angular.module("ovh-api-services").service("UserFaxCustomDomains", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("UserFaxCustomDomainsLexi");
        }
    };
});
