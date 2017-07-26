angular.module("ovh-api-services").service("UserTaskContactChangeLexi", function ($resource) {
    "use strict";

    return $resource("/me/task/contactChange/:id", {
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        accept: {
            method: "POST",
            url: "/me/task/contactChange/:id/accept"
        },
        refuse: {
            method: "POST",
            url: "/me/task/contactChange/:id/refuse"
        },
        resendEmail: {
            method: "POST",
            url: "/me/task/contactChange/:id/resendEmail"
        }
    });
});

