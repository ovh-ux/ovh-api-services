angular.module("ovh-api-services").service("CloudProjectServiceInfos", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("CloudProjectServiceInfosLexi");
        }
    };

});
