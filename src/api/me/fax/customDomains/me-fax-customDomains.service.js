angular.module("ovh-api-services").service("OvhApiMeFaxCustomDomains", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeFaxCustomDomainsV6");
        }
    };
});
