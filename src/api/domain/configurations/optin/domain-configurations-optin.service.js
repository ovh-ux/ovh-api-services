angular.module("ovh-api-services").service("OvhApiDomainConfigurationsOptin", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainConfigurationsOptinV6");
        }
    };
});
