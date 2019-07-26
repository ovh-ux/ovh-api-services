angular.module("ovh-api-services").service("OvhApiVpsImagesV6", function ($resource) {
    "use strict";

    return $resource("/vps/:serviceName/images", {
        serviceName: "@serviceName"
    }, {
        getCurrent: {
            url: "/vps/:serviceName/images/current",
            method: "GET"
        }
    });
});
