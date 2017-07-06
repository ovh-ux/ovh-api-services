angular.module("ovh-api-services").service("CloudProjectCreditAapi", function ($resource, CloudProjectCredit) {
    "use strict";

    var credit = $resource("/cloud/project/:serviceName/credit", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            serviceType: "aapi",
            cache: CloudProjectCredit.cache.aapi.query,
            isArray: true
        }
    });

    return credit;
});
