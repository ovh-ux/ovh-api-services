angular.module("ovh-api-services").service("OvhApiXdslLinesErika", function (apiv7) {
    "use strict";

    var xdslLinesEndpoint = apiv7("/xdsl/:serviceName/lines/:number", {
        serviceName: "@serviceName",
        number: "@number"
    });

    return xdslLinesEndpoint;

});
