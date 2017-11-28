angular.module("ovh-api-services").service("OvhApiCloudProjectOpenstackClientLexi", function ($resource) {
    "use strict";

    var resource = $resource("/cloud/project/:serviceName/openstackClient", {
        serviceName: "@serviceName"
    }, {
        post: { method: "POST" }
    });

    return resource;
});
