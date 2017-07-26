angular.module("ovh-api-services").service("XdslOrderFollowupAapi", function ($resource, XdslOrderFollowup) {
    "use strict";

    return $resource("/xdsl/orderFollowup", {
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslOrderFollowup.cache
        }
    });
});
