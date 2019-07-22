angular
    .module("ovh-api-services")
    .service("OvhApiDedicatedCloudServicePacks", function ($injector) {
        "use strict";

        return {
            v6: function () {
                return $injector.get("OvhApiDedicatedCloudServicePacksV6");
            }
        };

    });
