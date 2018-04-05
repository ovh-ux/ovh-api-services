angular.module("ovh-api-services").service("OvhApiXdslDeconsolidationV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApixdslDeconsolidationV6");

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
