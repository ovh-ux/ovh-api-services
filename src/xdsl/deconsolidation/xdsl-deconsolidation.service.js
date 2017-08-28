angular.module("ovh-api-services").service("OvhApiXdslDeconsolidation", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslDeconsolidationLexi");
        },
        Aapi: function () {
            return angular.noop;
        }
    };
});
