angular.module("ovh-api-services").service("OvhApiDomainRules", function ($injector) {
    "use strict";
    return {
        EmailsObfuscation: function () {
            return $injector.get("OvhApiDomainRulesEmailsObfuscation");
        },
        Optin: function () {
            return $injector.get("OvhApiDomainRulesOptin");
        }
    };
});
