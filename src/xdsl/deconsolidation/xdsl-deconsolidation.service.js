angular.module("ovh-api-services").service("XdslDeconsolidation", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("XdslDeconsolidationLexi");
        },
        Aapi: function () {
            return angular.noop;
        }
    };
});
