angular
    .module("ovh-api-services")
    .service("OvhApiOrderCartServiceOptionVpsV6", function ($resource) {
        "use strict";

        return $resource("/order/cartServiceOption/vps/:serviceName", {
            serviceName: "@serviceName"
        }, {
            get: {
                isArray: true
            }
        });
    });
