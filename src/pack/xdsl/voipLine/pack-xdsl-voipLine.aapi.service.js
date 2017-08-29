angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineAapi", function ($resource, OvhApiPackXdslVoipLine) {
    "use strict";

    var interceptor = {
        response: function (response) {
            OvhApiPackXdslVoipLine.resetCache();
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
            cache: OvhApiPackXdslVoipLine.cache
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
