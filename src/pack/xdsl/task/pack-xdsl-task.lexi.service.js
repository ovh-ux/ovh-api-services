angular.module("ovh-api-services").service("OvhApiPackXdslTaskLexi", function ($resource) {
    "use strict";

    // caching tasks is a bad idea since we always want fresh data

    return $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    }, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET"
        },
        save: {
            method: "POST"
        }
    });
});
