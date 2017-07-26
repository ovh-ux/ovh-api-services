angular.module("ovh-api-services").service("PackXdslSiteBuilderStartLexi", function ($resource, PackXdslSiteBuilderStart) {
    "use strict";

    var interceptor = {
        response: function (response) {
            PackXdslSiteBuilderStart.resetCache();
            return response.resource;
        }
    };

    return $resource("/pack/xdsl/:packId/siteBuilderStart/services",
                     {
                         packId: "@packId"
                     }, {
                         query: {
                             method: "GET",
                             isArray: true,
                             cache: PackXdslSiteBuilderStart.cache
                         },
                         save: {
                             method: "POST",
                             interceptor: interceptor
                         }
                     }
    );
});
