angular.module("ovh-api-services").service("OvhApiPackXdslResiliationLexi", function ($resource, OvhApiPackXdslResiliation) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslResiliation.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packName/canCancelResiliation", {
        packName: "@packName"
    }, {
        canCancelResiliation: {
            url: "/pack/xdsl/:packName/canCancelResiliation",
            method: "GET",
            isArray: false,
            cache: OvhApiPackXdslResiliation.cache,
            transformResponse: function (data) {
                return {
                    value: data === "true"
                };
            }
        },
        cancelResiliation: {
            url: "/pack/xdsl/:packName/cancelResiliation",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        resiliate: {
            url: "/pack/xdsl/:packName/resiliate",
            method: "POST",
            isArray: false,
            interceptor: interceptor
        },
        resiliationTerms: {
            url: "/pack/xdsl/:packName/resiliationTerms",
            method: "GET",
            isArray: false,
            cache: OvhApiPackXdslResiliation.cache
        }
    });
});
