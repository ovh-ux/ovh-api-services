angular.module("ovh-api-services").service("DomainErika", function (apiv7) {
    "use strict";

    var domainEndpoint = apiv7("/domain/:serviceName", {
        serviceName: "@serviceName"
    });

    return domainEndpoint;
});
