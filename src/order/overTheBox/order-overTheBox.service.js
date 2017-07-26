angular.module("ovh-api-services").service("OrderOverTheBox", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OrderOverTheBoxNew");
        }
    };

});
