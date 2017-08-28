angular.module("ovh-api-services").service("OvhApiXdslModemResetLexi", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reset", {
        xdslId: "@xdslId"
    });
});
