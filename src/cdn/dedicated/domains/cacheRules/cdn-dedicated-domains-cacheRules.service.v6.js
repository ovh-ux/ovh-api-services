angular.module("ovh-api-services").service("OvhApiCdnDedicatedDomainsV6", function ($resource) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName/domains/:domain/cacheRules/:cacheRuleId", {
        serviceName: "@serviceName",
        domain: "@domain",
        cacheRuleId: "@cacheRuleId"
    }, {
        flush: {
            method: "POST",
            url: "/cdn/dedicated/:serviceName/domains/:domain/cacheRules/:cacheRuleId/flush"
        }
    });
});
