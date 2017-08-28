angular.module("ovh-api-services").service("OvhApiUserFeedbackAapi", function ($resource) {
    "use strict";

    return $resource("/me", {}, {
        feedback: {
            method: "POST",
            url: "/me/feedback",
            serviceType: "aapi"
        }
    });
});

