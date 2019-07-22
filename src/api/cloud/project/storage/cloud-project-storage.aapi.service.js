angular.module("ovh-api-services").service("OvhApiCloudProjectStorageAapi", function ($resource) {
    "use strict";

    var storages = $resource("/cloud/project/:serviceName/storages", {
        serviceName: "@serviceName"
    }, {
        query: {
            method: "GET",
            serviceType: "aapi",
            archive: "@archive",
            isArray: true
        }
    });

    return storages;
});
