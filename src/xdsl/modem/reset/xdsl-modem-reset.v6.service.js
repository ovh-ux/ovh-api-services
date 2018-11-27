angular.module("ovh-api-services").service("OvhApiXdslModemResetV6", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reset", {
        xdslId: "@xdslId"
    }, {
        reset: {
            method: "POST"
        }
    });
});
