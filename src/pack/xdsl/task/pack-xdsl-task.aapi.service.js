angular.module("ovh-api-services").service("OvhApiPackXdslTaskAapi", function ($resource, OvhApiPackXdslTask) {
    "use strict";

    var packXdslTaskAapi = $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    }, {
        details: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslTask.cache
        },
        detailsAll: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail/all",
            serviceType: "aapi",
            isArray: true,
            cache: OvhApiPackXdslTask.cache
        }
    });

    return packXdslTaskAapi;
});
