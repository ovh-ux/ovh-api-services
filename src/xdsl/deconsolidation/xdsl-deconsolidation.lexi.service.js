angular.module("ovh-api-services").service("OvhApiXdslDeconsolidationLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApixdslDeconsolidationLexi");

    return $resource(
        "/xdsl/:xdslId", {
            serviceName: "@serviceName"
        }, {
            terms: {
                method: "GET",
                cache: cache,
                url: "/xdsl/:serviceName/totalDeconsolidationTerms"
            },
            requestTotalDeconsolidation: {
                method: "POST",
                url: "/xdsl/:serviceName/requestTotalDeconsolidation"
            }
        }
    );
});
