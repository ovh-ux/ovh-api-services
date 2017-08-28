angular.module("ovh-api-services").service("OvhApiOverTheBoxErika", function (apiv7) {
    "use strict";

    var otbEndpoint = apiv7("/overtTheBox/:serviceName", {
        serviceName: "@serviceName"
    });

    return otbEndpoint;

});
