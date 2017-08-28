angular.module("ovh-api-services").service("OvhApiPackXdslVoipLineErika", function (apiv7) {
    "use strict";

    var res = apiv7("/pack/xdsl/:packName/voipLine", {
        packName: "@packName"
    }, {
        services: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packName/voipLine/services"
        }
    });

    return res;

});

