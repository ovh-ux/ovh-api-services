angular.module("ovh-api-services").service("OvhApiPackXdslHubicV7", function (apiv7) {
    "use strict";

    var endpoint = apiv7("/pack/xdsl/:packName/hubic/services", {
        packName: "@packName"
    });

    return endpoint;
});
