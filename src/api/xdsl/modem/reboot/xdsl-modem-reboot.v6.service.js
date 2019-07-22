angular.module("ovh-api-services").service("OvhApiXdslModemRebootV6", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/reboot", {
        xdslId: "@xdslId"
    });

}
);
