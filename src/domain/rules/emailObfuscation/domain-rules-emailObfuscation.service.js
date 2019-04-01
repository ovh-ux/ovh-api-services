angular.module("ovh-api-services").service("OvhApiDomainRulesEmailsObfuscation", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainRulesEmailsObfuscationV6");
        }
    };
});
