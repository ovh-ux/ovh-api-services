angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPortLexi", function ($resource, OvhApiXdslLinesDslamPort) {
    "use strict";

    var resourceUrl = "/:basePath/xdsl/:xdslId/lines/:number/dslamPort";
    var interceptor = {
        response: function (response) {
            OvhApiXdslLinesDslamPort.resetCache();
            return response.resource;
        }
    };

    var xdslLinesDslamPortLexi = $resource(
        resourceUrl, {
            xdslId: "@xdslId",
            number: "@number"
        }, {
            changeProfile: {
                method: "POST",
                url: resourceUrl + "/changeProfile",
                interceptor: interceptor
            },
            reset: {
                method: "POST",
                url: resourceUrl + "/reset",
                interceptor: interceptor
            }
        }
    );

    return xdslLinesDslamPortLexi;
});
