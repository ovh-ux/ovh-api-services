angular.module("ovh-api-services").service("OvhApiXdslModemAvailableWLANChannelV6", function ($resource, OvhApiXdslModemAvailableWLANChannel) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/availableWLANChannel", {
        xdslId: "@xdslId"
    }, {
        get: {
            method: "GET",
            cache: OvhApiXdslModemAvailableWLANChannel.cache
        }
    });

}
);
