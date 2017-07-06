angular.module("ovh-api-services").service("PackXdslErika", function (apiv7) {
    "use strict";

    var packXdslEndpoint = apiv7("/pack/xdsl/:packName", {
        packName: "@packName"
    }, {
        access: {
            method: "GET",
            isArray: true,
            url: "/pack/xdsl/:packName/xdslAccess/services"
        }
    });

    return packXdslEndpoint;

});
