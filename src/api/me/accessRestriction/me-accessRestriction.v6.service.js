angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionV6", function ($resource) {
    "use strict";

    return $resource("/me/accessRestriction", {}, {
        developerMode: {
            url: "/me/accessRestriction/developerMode",
            method: "GET"
        },
        updateDeveloperMode: {
            url: "/me/accessRestriction/developerMode",
            method: "PUT"
        },
        ipDefaultRule: {
            url: "/me/accessRestriction/ipDefaultRule",
            method: "GET"
        },
        updateipDefaultRule: {
            url: "/me/accessRestriction/ipDefaultRule",
            method: "PUT"
        }
    });
});
