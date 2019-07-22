angular.module("ovh-api-services").service("OvhApiCloudProjectUserAapi", function ($resource) {
    "use strict";

    var servicesDefinition = {
        openrc: {
            method: "GET",
            serviceType: "aapi",
            url: "/cloud/project/:serviceName/user/:userId/openrc"
        }
    };

    var users = $resource("/cloud/project/:serviceName/user/:userId", {
        serviceName: "@serviceName",
        userId: "@userId"
    }, servicesDefinition);

    users.services = servicesDefinition;

    return users;

});
