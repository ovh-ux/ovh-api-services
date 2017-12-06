angular.module("ovh-api-services").service("OvhApiOrderCatalogFormatted", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderCatalogFormattedLexi");
        }
    };

});
