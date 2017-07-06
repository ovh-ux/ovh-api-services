angular.module("ovh-api-services").service("OrderOverTheBoxNew", function ($injector) {

    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OrderOverTheBoxNewLexi");
        }
    };

});
