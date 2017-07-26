angular.module("ovh-api-services").service("CloudProjectVolume", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectVolumeLexi");
        }
    };

});
