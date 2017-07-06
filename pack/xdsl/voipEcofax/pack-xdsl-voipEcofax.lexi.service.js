angular.module("ovh-api-services").service("PackXdslVoipEcofaxLexi", function ($resource, PackXdslVoipEcofax) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslVoipEcofax.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/voipEcofax/services",
                     {
                         packId: "@packId"
                     },
                     {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslVoipEcofax.cache
                         },
                         save: {
                             method: "POST",
                             interceptor: interceptor
                         }
                     }
    );
});
