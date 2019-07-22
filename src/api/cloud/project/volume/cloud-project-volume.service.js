angular.module("ovh-api-services").service("OvhApiCloudProjectVolume", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectVolumeV6");
        }
    };

});
