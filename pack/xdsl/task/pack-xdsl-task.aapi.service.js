angular.module("ovh-api-services").service("PackXdslTaskAapi", function ($resource, PackXdslTask) {
    "use strict";

    var packXdslTaskAapi = $resource("/pack/xdsl/:packName/tasks", {
        packName: "@packName"
    }, {
        details: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslTask.cache
        },
        detailsAll: {
            method: "GET",
            url: "/pack/xdsl/:packName/tasks/detail/all",
            serviceType: "aapi",
            isArray: true,
            cache: PackXdslTask.cache
        }
    });

    return packXdslTaskAapi;
});
