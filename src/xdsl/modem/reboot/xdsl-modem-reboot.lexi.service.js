angular.module("ovh-api-services").service("OvhApiXdslModemRebootLexi", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reboot", {
        xdslId: "@xdslId"
    });

}
);
