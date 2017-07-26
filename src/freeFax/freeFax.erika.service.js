angular.module("ovh-api-services").service("FreeFaxErika", function (apiv7) {
    "use strict";

    var freeFaxEndpoint = apiv7("/freefax/:serviceName", {
        serviceName: "@serviceName"
    });

    return freeFaxEndpoint;

});
