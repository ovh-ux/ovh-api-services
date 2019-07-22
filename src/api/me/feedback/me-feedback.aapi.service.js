angular.module("ovh-api-services").service("OvhApiMeFeedbackAapi", function ($resource) {
    "use strict";

    return $resource("/me", {}, {
        feedback: {
            method: "POST",
            url: "/me/feedback",
            serviceType: "aapi"
        }
    });
});
