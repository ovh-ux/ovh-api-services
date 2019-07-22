angular.module("ovh-api-services").service("OvhApiOrderCatalogFormatted", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiOrderCatalogFormattedV6");
        }
    };

});
