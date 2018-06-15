angular.module("ovh-api-services").service("OvhApiCdnDedicatedDomains", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCdnDedicatedDomainsV6");
        },
        Backends: function () {
            return $injector.get("OvhApiCdnDedicatedDomainsBackends");
        },
        CacheRules: function () {
            return $injector.get("OvhApiCdnDedicatedDomainsCacheRules");
        }
    };
});
