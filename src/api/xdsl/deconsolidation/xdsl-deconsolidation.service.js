angular.module("ovh-api-services").service("OvhApiXdslDeconsolidation", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiXdslDeconsolidationV6");
        },
        Aapi: function () {
            return angular.noop;
        }
    };
});
