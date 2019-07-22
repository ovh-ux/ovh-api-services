angular.module("ovh-api-services").service("OvhApiCloudProjectCreditAapi", function ($resource, OvhApiCloudProjectCredit) {
    "use strict";

    var credit = $resource("/cloud/project/:serviceName/credit", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            serviceType: "aapi",
            cache: OvhApiCloudProjectCredit.cache.aapi.query,
            isArray: true
        }
    });

    return credit;
});
