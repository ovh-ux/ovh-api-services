angular.module("ovh-api-services").service("OvhApiIpDelegationV6", function ($resource) {
    "use strict";

    return $resource("/ip/:ip/delegation/:target", {
        ip: "@ip",
        target: "@target"
    });
});

