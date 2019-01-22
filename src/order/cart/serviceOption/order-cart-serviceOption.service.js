/**
 *  @deprecated
 *  Use order/cartServiceOptions/cartServiceOptions.service.js instead
 *  as this service is overrided by the same name in this file.
 */
angular.module("ovh-api-services").service("OvhApiOrderCartServiceOption", function ($injector) {

    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiOrderCartServiceOptionV6");
        }
    };
});
