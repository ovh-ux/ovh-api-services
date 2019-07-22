angular.module("ovh-api-services").service("OvhApiCdnDedicatedDomainsCacheRules", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedDomainsCacheRulesV6");
        }
    };
});
