angular.module("ovh-api-services").service("OvhApiCloudProjectVolume", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectVolumeLexi");
        }
    };

});
