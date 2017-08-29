angular.module("ovh-api-services").service("OvhApiMeFaxCustomDomains", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiMeFaxCustomDomainsLexi");
        }
    };
});
