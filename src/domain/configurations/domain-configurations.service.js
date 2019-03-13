angular.module("ovh-api-services").service("OvhApiDomainConfigurations", function ($injector) {
    "use strict";
    return {
        ObfuscatedEmails: function () {
            return $injector.get("OvhApiDomainConfigurationsObfuscatedEmails");
        },
        Optin: function () {
            return $injector.get("OvhApiDomainConfigurationsOptin");
        }
    };
});
