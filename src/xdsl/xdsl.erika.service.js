angular.module("ovh-api-services").service("OvhApiXdslErika", function (apiv7) {
    "use strict";

    var xdslEndpoint = apiv7("/xdsl/:serviceName", {
        serviceName: "@serviceName"
    });

    return xdslEndpoint;

});
