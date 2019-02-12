angular
    .module("ovh-api-services")
    .service("OvhApiOrderVps", function ($injector) {

        "use strict";
        return {
            v6: function () {
                return $injector.get("OvhApiOrderVpsV6");
            }
        };
    });
