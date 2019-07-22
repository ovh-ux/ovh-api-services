angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfos", function ($injector) {

    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiCloudProjectServiceInfosV6");
        }
    };

});
