angular.module("ovh-api-services").service("OvhApiCdnDedicatedDomainsV6", function ($resource) {
    "use strict";

    return $resource("/cdn/dedicated/:serviceName/domains/:domain", {
        serviceName: "@serviceName",
        domain: "@domain"
    }, {
        flush: {
            method: "POST",
            url: "/cdn/dedicated/:serviceName/domains/:domain/flush"
        },
        statistics: {
            method: "GET",
            url: "/cdn/dedicated/:serviceName/domains/:domain/statistics"
        },
        update: {
            method: "PUT"
        }
    });
});
