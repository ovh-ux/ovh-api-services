angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLiteLexi", function ($resource, $http, OvhApiPackXdslExchangeLite) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslExchangeLite.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeLite = $resource("/pack/xdsl/:packId/exchangeLite/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: OvhApiPackXdslExchangeLite.cache
        },
        save: {
            method: "POST",
            interceptor: interceptor
        }
    }
    );

    // To be refactored
    packXdslExchangeLite.isEmailAvailable = function (params) {
        return $http({
            url: "/pack/xdsl/" + params.packId + "/exchangeLite/options/isEmailAvailable",
            method: "GET",
            params: { email: params.email }
        });
    };

    return packXdslExchangeLite;
});
