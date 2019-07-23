angular.module("ovh-api-services").service("OvhApiDomain", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDomainV6");
        },
        v7: function () {
            return $injector.get("OvhApiDomainV7");
        },
        Configurations: function () {
            return $injector.get("OvhApiDomainConfigurations");
        },
        Rules: function () {
            return $injector.get("OvhApiDomainRules");
        },
        Options: function () {
            return $injector.get("OvhApiDomainOptions");
        }
    };
});
