angular.module("ovh-api-services").service("PackXdslExchangeLiteLexi", function ($resource, $http, PackXdslExchangeLite) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslExchangeLite.resetCache();
            return response.resource;
        }
    };

    var packXdslExchangeLite = $resource("/pack/xdsl/:packId/exchangeLite/services", {
        packId: "@packId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: PackXdslExchangeLite.cache
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
