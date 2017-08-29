angular.module("ovh-api-services").service("OvhApiOrderOverTheBox", function ($injector) {
    "use strict";

    return {
        Lexi: angular.noop,
        New: function () {
            return $injector.get("OvhApiOrderOverTheBoxNew");
        }
    };

});
