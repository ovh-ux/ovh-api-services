angular.module("ovh-api-services").service("OvhApiXdslResiliationLexi", function ($resource) {
    "use strict";

    return $resource("/xdsl/:serviceName/canCancelResiliation", {
        serviceName: "@serviceName"
    }, {
        canCancelResiliation: {
            url: "/xdsl/:serviceName/canCancelResiliation",
            method: "GET",
            transformResponse: function (data) {
                return {
                    value: data === "true"
                };
            }
        },
        followUp: {
            url: "/xdsl/:serviceName/resiliationFollowup",
            method: "GET",
            isArray: false
        },
        cancelResiliation: {
            url: "/xdsl/:serviceName/cancelResiliation",
            method: "POST"
        },
        resiliate: {
            url: "/xdsl/:serviceName/resiliate",
            method: "POST"
        },
        resiliationTerms: {
            url: "/xdsl/:serviceName/resiliationTerms",
            method: "GET"
        }
    });
});
