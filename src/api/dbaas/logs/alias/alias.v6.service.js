angular.module("ovh-api-services").service("OvhApiDbaasLogsAliasV6", function ($resource) {
    "use strict";

    // No cache here, because items can be shared at any moment by other users

    var aliasResource = $resource("/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId", {
        serviceName: "@serviceName"
    }, {
        create: { method: "POST" },
        update: { method: "PUT" },
        remove: { method: "DELETE" },
        linkStream: { method: "POST", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/stream" },
        unlinkStream: { method: "DELETE", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/stream/:streamId" },
        linkIndex: { method: "POST", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/index" },
        unlinkIndex: { method: "DELETE", url: "/dbaas/logs/:serviceName/output/elasticsearch/alias/:aliasId/index/:indexId" },
        query: { method: "GET", isArray: true }
    });

    return aliasResource;
});
