angular.module("ovh-api-services").service("PackXdslVoipLineLexi", function ($resource, PackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslVoipLine.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/voipLine/services", {
        packId: "@packId"
    },
                     {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslVoipLine.cache
                         },
                         save: {
                             method: "POST",
                             interceptor: interceptor
                         },
                         getHardwares: {
                             method: "GET",
                             url: "/pack/xdsl/:packId/voipLine/options/hardwares",
                             isArray: true,
                             cache: PackXdslVoipLine.cache
                         },
                         getShippingAddresses: {
                             method: "GET",
                             url: "/pack/xdsl/:packId/voipLine/options/shippingAddresses",
                             isArray: true,
                             cache: PackXdslVoipLine.cache
                         }
                     }
    );
});
