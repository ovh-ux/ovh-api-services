angular.module("ovh-api-services").service("Status", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("StatusLexi");
        },
        Task: function () {
            return $injector.get("StatusTask");
        }
    };

});
