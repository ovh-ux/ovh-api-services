angular.module("ovh-api-services").service("XdslModemRebootLexi", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reboot", {
        xdslId: "@xdslId"
    });

}
);
