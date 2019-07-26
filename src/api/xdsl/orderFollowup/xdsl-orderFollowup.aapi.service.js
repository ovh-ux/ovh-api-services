angular.module("ovh-api-services").service("OvhApiXdslOrderFollowupAapi", function ($resource, OvhApiXdslOrderFollowup) {
    "use strict";

    return $resource("/xdsl/orderFollowup", {
    }, {
        query: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslOrderFollowup.cache
        }
    });
});
