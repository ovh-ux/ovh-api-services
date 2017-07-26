angular.module("ovh-api-services").service("StatusTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StatusTaskLexi");
        }
    };

});
