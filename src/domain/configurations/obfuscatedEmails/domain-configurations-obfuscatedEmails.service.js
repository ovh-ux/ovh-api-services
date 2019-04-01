angular.module("ovh-api-services").service("OvhApiDomainConfigurationsObfuscatedEmails", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainConfigurationsObfuscatedEmailsV6");
        }
    };
});
