angular.module("ovh-api-services").service("DBaasTsRegion", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("DBaasTsRegionLexi");
        }
    };
});
