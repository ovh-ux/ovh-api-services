angular.module("ovh-api-services").service("OvhApiCloudProjectServiceInfos", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiCloudProjectServiceInfosLexi");
        }
    };

});
