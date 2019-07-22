angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividualV6", function ($resource, $http, OvhApiPackXdslExchangeIndividual) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslExchangeIndividual.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeIndividual = $resource("/pack/xdsl/:packId/exchangeIndividual/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslExchangeIndividual.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        getDomains: {
            method: "GET",
            url: "/pack/xdsl/:packId/exchangeIndividual/options/domains",
            isArray: true,
            cache: OvhApiPackXdslExchangeIndividual.cache
        }
    }
    );

    // To be refactored
    packXdslExchangeIndividual.isEmailAvailable = function (params) {
        return $http({
            url: "/pack/xdsl/" + params.packId + "/exchangeIndividual/options/isEmailAvailable",
            method: "GET",
            params: { email: params.email }
        });
    };

    return packXdslExchangeIndividual;
});
