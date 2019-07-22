angular.module("ovh-api-services").service("OvhApiFreeFaxV7", function (apiv7) {
    "use strict";

    var freeFaxEndpoint = apiv7("/freefax/:serviceName", {
        serviceName: "@serviceName"
    });

    return freeFaxEndpoint;

});
