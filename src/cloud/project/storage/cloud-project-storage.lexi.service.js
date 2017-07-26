angular.module("ovh-api-services").service("CloudProjectStorageLexi", function ($resource) {
    "use strict";

    var baseUrl = "/:basePath/cloud/project/:projectId/storage/:containerId";

    return $resource(baseUrl, {
        projectId: "@projectId",
        containerId: "@containerId"
    }, {
        // Get containers access token and all URLs
        access: {
            method: "POST",
            url: "/:basePath/cloud/project/:projectId/storage/access"
        },

        // Configure CORS rules on a container
        cors: {
            method: "POST",
            url: baseUrl + "/cors"
        },

        // List containers
        //   query (implicit)

        // Get container content
        //   get (implicit)

        // Get file URL
        getURL: {
            method: "POST",
            url: baseUrl + "/publicUrl"
        },

        // Delete container
        //   delete (implicit)

        // Make container a static hosting
        "static": {
            method: "POST",
            url: baseUrl + "/static"
        }

        // Create container
        //   save (implicit)
        //   Post data: {
        //      containerName (string)
        //      region (string)
        //      archive (boolean)
        //   }
    });
});
