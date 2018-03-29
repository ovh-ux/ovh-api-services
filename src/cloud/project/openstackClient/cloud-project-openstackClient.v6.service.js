angular.module("ovh-api-services").service("OvhApiCloudProjectOpenstackClientV6", function ($resource) {
    "use strict";

    var resource = $resource("/cloud/project/:serviceName/openstackClient", {
        serviceName: "@serviceName"
    }, {
        post: { method: "POST" }
    });

    return resource;
});
