angular.module("ovh-api-services").service("OvhApiDomainRulesOptin", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainRulesOptinV6");
        }
    };
});
