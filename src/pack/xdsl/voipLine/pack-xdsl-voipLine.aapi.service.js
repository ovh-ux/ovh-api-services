angular.module("ovh-api-services").service("PackXdslVoipLineAapi", function ($resource, PackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslVoipLine.resetCache();
            return response.resource;
        }
    };

    var packXdslVoipLineAapi = $resource("/pack/xdsl/:packId/voipLines", {
        packId: "@packId"
    }, {
        query: {
            url: "/pack/xdsl/:packId/voipLine/services",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslVoipLine.cache
        },
        activate: {
            url: "/pack/xdsl/:packId/voipLines/activate",
            serviceType: "aapi",
            isArray: false,
            method: "POST",
            interceptor: interceptor
        }
    }
    );

    return packXdslVoipLineAapi;
});
