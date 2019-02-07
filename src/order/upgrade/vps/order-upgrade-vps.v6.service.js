angular
    .module("ovh-api-services")
    .service("OvhApiOrderVpsV6", function ($resource) {
        "use strict";

        return $resource("/order/upgrade/vps/:serviceName/:planCode", {
            serviceName: "@serviceName",
            planCode: "@planCode"
        }, {
          getAvailableOffers: {
              method: "GET",
              isArray: true
          }
        });
    });
