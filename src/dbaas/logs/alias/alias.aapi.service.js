angular.module("ovh-api-services").service("OvhApiDbaasLogsAliasAapi", function ($resource) {
    "use strict";

    // No cache here, because items can be shared at any moment by other users

    var alias = $resource("/dbaas/logs/:serviceName/alias/:aliasId", {}, {
        get: {
            method: "GET",
            serviceType: "aapi"
        }
    });

    return alias;
});

